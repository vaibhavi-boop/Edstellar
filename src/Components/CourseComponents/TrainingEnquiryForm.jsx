"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import allCountries from "intl-tel-input/data";
import countryNames from "./countryNames";
import "intl-tel-input/dist/css/intlTelInput.css";
const preferredCodes = ["us", "gb", "in", "au", "ca"];

// Force native dropdown option text/background regardless of OS dark theme.
const optionStyle = {
  color: "#000000",
  backgroundColor: "#ffffff",
};

// intl-tel-input only fills in country `name`s after the plugin inits, so use a
// static map for the declarative <select>. It MUST be deterministic across server
// and client (no runtime Intl.DisplayNames) or React hydration fails and breaks
// the phone widget.
function countryName(iso2) {
  return countryNames[iso2] ?? iso2.toUpperCase();
}

// Requires text + "@" + domain + "." + TLD (rejects missing/misplaced "@").
const EMAIL_RE =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// The Contact Us card (heading + Zoho training-enquiry form). Kept standalone so
// it can be embedded both in the full-width banner (ContactFormSection) and in a
// popup (QuoteModalButton).
export default function TrainingEnquiryForm({
  className = "",
  heading = "Contact Us",
  subheading = "Submit your Training Requirements below and We'll get in touch with you shortly.",
  submitLabel = "Submit",
}) {
  const phoneRef = useRef(null);
  const dialCodeRef = useRef(null);
  const branchRef = useRef(null);
  const pageNameRef = useRef(null);
  const itiRef = useRef(null);

  // Country select is rendered declaratively so React owns the <option>s.
  const [selectedIso2, setSelectedIso2] = useState("us");
  const [carry, setCarry] = useState("");

  useEffect(() => {
    const readCarry = (detail) => {
      const text = [detail?.size, detail?.scope, detail?.freq]
        .filter(Boolean)
        .join(" · ");
      if (text) setCarry(text);
    };
    try {
      const stored = sessionStorage.getItem("gqCarry");
      if (stored) readCarry(JSON.parse(stored));
    } catch {}
    const onComplete = (e) => readCarry(e.detail);
    window.addEventListener("gq:complete", onComplete);
    return () => window.removeEventListener("gq:complete", onComplete);
  }, []);

  const { preferred, rest } = useMemo(() => {
    const named = allCountries.map((c) => ({
      iso2: c.iso2,
      name: countryName(c.iso2),
    }));
    const preferred = preferredCodes
      .map((code) => named.find((c) => c.iso2 === code))
      .filter(Boolean);
    const rest = named
      .filter((c) => !preferredCodes.includes(c.iso2))
      .sort((a, b) => a.name.localeCompare(b.name));
    return { preferred, rest };
  }, []);

  const selectedCountryName = useMemo(
    () => countryName(selectedIso2),
    [selectedIso2],
  );

  useEffect(() => {
    if (!phoneRef.current) return;
    let destroyed = false;

    async function init() {
      const { default: intlTelInput } =
        await import("intl-tel-input/intlTelInputWithUtils");
      if (destroyed || !phoneRef.current) return;

      const iti = intlTelInput(phoneRef.current, {
        initialCountry: "us",
        countryOrder: [...preferredCodes],
        separateDialCode: true,
        formatAsYouType: true,
        placeholderNumberPolicy: "AGGRESSIVE",
      });
      itiRef.current = iti;

      function syncCountryInfo() {
        const data = itiRef.current?.getSelectedCountry();
        if (!data) return;
        if (dialCodeRef.current)
          dialCodeRef.current.value = data.dialCode || "";
        if (data.iso2) setSelectedIso2(data.iso2);
      }

      // Live-validate the phone on every input change: keep the error visible
      // until a valid number is entered.
      function validatePhone() {
        const el = document.getElementById("Phone-error2");
        if (!el) return;
        const value = phoneRef.current?.value.trim() ?? "";
        if (!value) {
          el.textContent = "Phone number is required";
          el.style.display = "block";
        } else if (itiRef.current?.isValidNumber() === false) {
          el.textContent = "Invalid phone number";
          el.style.display = "block";
        } else {
          el.style.display = "none";
        }
      }

      syncCountryInfo();
      phoneRef.current.addEventListener("countrychange", () => {
        syncCountryInfo();
        validatePhone();
      });
      phoneRef.current.addEventListener("input", validatePhone);
    }

    init();

    // Auto-fill hidden fields from URL
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    if (branchRef.current)
      branchRef.current.value = pathSegments[0] || "course";
    if (pageNameRef.current)
      pageNameRef.current.value =
        pathSegments[pathSegments.length - 1] || "Home Page";

    return () => {
      destroyed = true;
      itiRef.current?.destroy();
      itiRef.current = null;
    };
  }, []);

  function handleSubmit(e) {
    const form = e.currentTarget;
    let valid = true;

    const requireField = (fieldName, errorId, msg) => {
      const el = form.elements.namedItem(fieldName);
      const value = el?.value.trim() ?? "";
      if (!value) {
        showError(errorId, msg);
        valid = false;
        return "";
      }
      hideError(errorId);
      return value;
    };

    requireField("SingleLine2", "Name-error2", "Name is required");

    const email = requireField(
      "Email",
      "Email-error2",
      "Email address is required",
    );
    if (email && !EMAIL_RE.test(email)) {
      showError("Email-error2", "Enter a valid email address");
      valid = false;
    }

    requireField("SingleLine", "Company-error2", "Company name is required");
    requireField("SingleLine1", "Job-error2", "Job title is required");

    // Phone is optional: only validate format if the visitor entered something.
    const iti = itiRef.current;
    const phone = phoneRef.current;
    if (phone && phone.value.trim() && iti?.isValidNumber() === false) {
      showError("Phone-error2", "Invalid phone number");
      valid = false;
    } else {
      hideError("Phone-error2");
    }

    const consent = form.elements.namedItem("consent");
    if (consent && !consent.checked) {
      showError("Consent-error2", "Please accept the privacy policy");
      valid = false;
    } else {
      hideError("Consent-error2");
    }

    if (!valid) {
      e.preventDefault();
      return;
    }

    // Ensure Zoho's required hidden fields (branch / PAGE NAME) are populated
    // at submit time, regardless of effect timing or re-renders.
    const segments = window.location.pathname.split("/").filter(Boolean);
    if (branchRef.current) {
      branchRef.current.value =
        branchRef.current.value || segments[0] || "course";
    }
    if (pageNameRef.current) {
      pageNameRef.current.value =
        pageNameRef.current.value ||
        segments[segments.length - 1] ||
        "Home Page";
    }

    // Extract national number for submission
    const country = iti?.getSelectedCountry();
    if (iti && phone && country) {
      const full = iti.getNumber("E164");
      const national = full.substring(1 + country.dialCode.length);
      phone.value = national;
      if (dialCodeRef.current) dialCodeRef.current.value = country.dialCode;
    }
  }

  // Live-validate a required field on every input change: keep the error
  // visible until the field has a value.
  function validateRequired(errorId, value, msg) {
    if (!value.trim()) showError(errorId, msg);
    else hideError(errorId);
  }

  // Live-validate the email format on every input change.
  function validateEmail(value) {
    const v = value.trim();
    if (v && !EMAIL_RE.test(v)) {
      showError("Email-error2", "Enter a valid email address");
    } else {
      hideError("Email-error2");
    }
  }

  function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = msg;
      el.style.display = "block";
    }
  }
  function hideError(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  }

  const fieldClass =
    "w-full rounded-xl border border-[var(--rule)] bg-[var(--paper)] px-[14px] py-[13px] text-[14.5px] text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--navy)] focus:bg-white focus:shadow-[0_0_0_3px_rgba(10,22,40,0.10)]";
  const errClass = "hidden text-[12px] leading-[1.5] text-[#b3261e]";

  return (
    <div
      className={`w-full overflow-hidden rounded-[22px] border border-[var(--rule)] bg-[var(--white)] shadow-[0_30px_70px_-50px_rgba(10,22,40,0.55)] ${className}`}
    >
      <div className="px-6 py-8 sm:px-[52px] sm:py-11">
        {heading && (
          <>
            <h2 className="[font-family:var(--display)] text-[22px] font-bold leading-tight text-[var(--ink)] sm:text-[26px]">
              {heading}
            </h2>
            <p className="mt-2 mb-6 text-[13.5px] leading-[1.6] text-[var(--muted)]">
              {subheading}
            </p>
          </>
        )}

        {carry && (
          <div className="mb-6 flex flex-wrap items-center gap-2 rounded-xl border border-[var(--rule)] bg-[var(--paper-warm)] px-[18px] py-3.5 text-[13.5px] leading-[1.6] text-[var(--ink)]">
            <b className="flex-none [font-family:var(--mono)] text-[9.5px] uppercase tracking-[0.15em] text-[var(--muted)]">
              From your group quote
            </b>
            <span>{carry}</span>
            <button
              type="button"
              onClick={() => {
                const section = document.getElementById("group-quote");
                if (!section) return;
                const offset =
                  [...document.querySelectorAll(".sticky")]
                    .filter((el) => el.getBoundingClientRect().bottom > 0)
                    .reduce((sum, el) => sum + el.offsetHeight, 0) || 65;
                const top =
                  section.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: "smooth" });
              }}
              className="ml-auto text-[12.5px] text-[var(--ink)] underline underline-offset-2"
            >
              Change answers
            </button>
          </div>
        )}

      <form
        action="https://forms.zohopublic.in/arvindedst1/form/TrainingEnquiry/formperma/uB1eKs_l1E4npKVJKC49HDEQm5jBlAC3Ow4h9zLcGmA/htmlRecords/submit"
        name="form2"
        id="form2"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        noValidate
        className="grid grid-cols-1 gap-x-[18px] gap-y-[17px] sm:grid-cols-2"
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input
          type="hidden"
          name="zf_redirect_url"
          value="https://www.edstellar.com/thank-you/course"
        />
        <input type="hidden" name="zc_gad" value="" />

        {/* Name */}
        <div className="flex flex-col gap-[7px]">
          <label
            htmlFor="lfName"
            className="[font-family:var(--mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]"
          >
            Name <span className="text-[#b3261e]">*</span>
          </label>
          <input
            id="lfName"
            type="text"
            name="SingleLine2"
            maxLength={255}
            placeholder="Enter your name"
            onInput={(e) =>
              validateRequired(
                "Name-error2",
                e.currentTarget.value,
                "Name is required",
              )
            }
            required
            className={fieldClass}
          />
          <p id="Name-error2" className={errClass} />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-[7px]">
          <label
            htmlFor="lfEmail"
            className="[font-family:var(--mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]"
          >
            Work email <span className="text-[#b3261e]">*</span>
          </label>
          <input
            id="lfEmail"
            type="email"
            name="Email"
            maxLength={255}
            placeholder="Enter your work email"
            onInput={(e) => validateEmail(e.currentTarget.value)}
            required
            className={fieldClass}
          />
          <p id="Email-error2" className={errClass} />
        </div>

        {/* Company */}
        <div className="flex flex-col gap-[7px]">
          <label
            htmlFor="lfCompany"
            className="[font-family:var(--mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]"
          >
            Company name <span className="text-[#b3261e]">*</span>
          </label>
          <input
            id="lfCompany"
            type="text"
            name="SingleLine"
            maxLength={255}
            placeholder="Enter your company name"
            onInput={(e) =>
              validateRequired(
                "Company-error2",
                e.currentTarget.value,
                "Company name is required",
              )
            }
            required
            className={fieldClass}
          />
          <p id="Company-error2" className={errClass} />
        </div>

        {/* Job Title */}
        <div className="flex flex-col gap-[7px]">
          <label
            htmlFor="lfTitle"
            className="[font-family:var(--mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]"
          >
            Job title <span className="text-[#b3261e]">*</span>
          </label>
          <input
            id="lfTitle"
            type="text"
            name="SingleLine1"
            maxLength={255}
            placeholder="Enter your job title"
            onInput={(e) =>
              validateRequired(
                "Job-error2",
                e.currentTarget.value,
                "Job title is required",
              )
            }
            required
            className={fieldClass}
          />
          <p id="Job-error2" className={errClass} />
        </div>

        {/* Country Select */}
        <div className="flex flex-col gap-[7px]">
          <label
            htmlFor="country-select1"
            className="[font-family:var(--mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]"
          >
            Country
          </label>
          <div className="relative">
            <select
              name="Dropdown"
              id="country-select1"
              value={selectedIso2}
              onChange={(e) => {
                const iso2 = e.target.value;
                setSelectedIso2(iso2);
                if (iso2) itiRef.current?.setSelectedCountry(iso2);
              }}
              style={{ colorScheme: "light" }}
              className={`${fieldClass} cursor-pointer appearance-none pr-9 text-[var(--ink)]`}
            >
              <option value="" disabled style={optionStyle}>
                Select Country*
              </option>
              {preferred.map((c) => (
                <option key={c.iso2} value={c.iso2} style={optionStyle}>
                  {c.name}
                </option>
              ))}
              <option value="" disabled style={optionStyle}>
                ────────────
              </option>
              {rest.map((c) => (
                <option key={c.iso2} value={c.iso2} style={optionStyle}>
                  {c.name}
                </option>
              ))}
            </select>
            <input
              type="hidden"
              name="SingleLine7"
              value={selectedCountryName}
              readOnly
            />
            <svg
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-[10px] h-[6px]"
              viewBox="0 0 10 6"
              fill="none"
            >
              <path
                d="M1 1l4 4 4-4"
                stroke="#666"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-[7px]">
          <label
            htmlFor="lfPhone"
            className="[font-family:var(--mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]"
          >
            Phone
          </label>
          <input type="hidden" name="SingleLine3" ref={dialCodeRef} />
          <input
            id="lfPhone"
            ref={phoneRef}
            type="tel"
            name="PhoneNumber_countrycode"
            maxLength={20}
            placeholder="201-555-0123 (optional)"
            autoComplete="off"
            className={fieldClass}
          />
          <p id="Phone-error2" className={errClass} />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-[7px] sm:col-span-2">
          <label
            htmlFor="lfMsg"
            className="[font-family:var(--mono)] text-[10px] uppercase tracking-[0.15em] text-[var(--muted)]"
          >
            Your training requirements
          </label>
          <textarea
            id="lfMsg"
            name="MultiLine"
            maxLength={65535}
            placeholder="Tell us about your training requirements: team size, delivery format, your production stack, and preferred timing."
            rows={4}
            className={`${fieldClass} min-h-[104px] resize-y leading-[1.6]`}
          />
        </div>

        <input
          type="hidden"
          name="SingleLine5"
          id="branch"
          ref={branchRef}
          defaultValue="course"
        />
        <input
          type="hidden"
          name="SingleLine4"
          id="page-name"
          ref={pageNameRef}
          defaultValue=""
        />

        {/* Consent */}
        <div className="sm:col-span-2">
          <label className="flex items-start gap-[11px]">
            <input
              type="checkbox"
              name="consent"
              required
              onChange={(e) =>
                e.currentTarget.checked
                  ? hideError("Consent-error2")
                  : showError(
                      "Consent-error2",
                      "Please accept the privacy policy",
                    )
              }
              className="mt-0.5 h-[17px] w-[17px] flex-none accent-[var(--navy)]"
            />
            <span className="text-[12.5px] leading-[1.6] text-[var(--muted)]">
              I agree that Edstellar may contact me about this training
              request and store my details as described in the{" "}
              <a
                href="https://www.edstellar.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--ink)] underline underline-offset-2"
              >
                privacy policy
              </a>
              . <span className="text-[#b3261e]">*</span>
            </span>
          </label>
          <p id="Consent-error2" className={`${errClass} ml-[28px]`} />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 border-t border-[var(--rule)] pt-6 sm:col-span-2">
          <p className="max-w-[38ch] flex-1 text-[12.5px] leading-[1.55] text-[var(--muted)]">
            We reply within one business day with a tailored proposal, no
            automated sales sequence.
          </p>
          <button
            type="submit"
            className="whitespace-nowrap rounded-full bg-[var(--navy)] px-8 py-3.5 text-[14px] font-semibold text-[var(--lime)] transition-colors hover:bg-[var(--navy-soft)]"
          >
            {submitLabel}
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}
