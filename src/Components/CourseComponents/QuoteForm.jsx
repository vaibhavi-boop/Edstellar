"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import allCountries from "intl-tel-input/data";
import countryNames from "./countryNames";
import "intl-tel-input/dist/css/intlTelInput.css";

const preferredCodes = ["us", "gb", "in", "au", "ca"];

function countryName(iso2) {
  return countryNames[iso2] ?? iso2.toUpperCase();
}

const FREE_MAIL = [
  "gmail.com",
  "yahoo.com",
  "yahoo.co.in",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "icloud.com",
  "me.com",
  "aol.com",
  "proton.me",
  "protonmail.com",
  "gmx.com",
  "mail.com",
  "yandex.com",
  "mail.ru",
  "qq.com",
  "163.com",
  "126.com",
  "rediffmail.com",
  "zoho.com",
];

const FORM_ENDPOINT = "";

const INITIAL = {
  name: "",
  jobTitle: "",
  email: "",
  company: "",
  requirements: "",
  consent: false,
};

export default function QuoteForm() {
  const [fields, setFields] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [formError, setFormError] = useState("");
  const [selectedIso2, setSelectedIso2] = useState("us");

  const phoneRef = useRef(null);
  const itiRef = useRef(null);

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
        // The phone field sits inside this panel's own overflow-y-auto scroll
        // area, which would otherwise clip the country dropdown list.
        dropdownParent: document.body,
      });
      itiRef.current = iti;

      phoneRef.current.addEventListener("countrychange", () => {
        const data = itiRef.current?.getSelectedCountry();
        if (data?.iso2) setSelectedIso2(data.iso2);
      });
    }

    init();
    return () => {
      destroyed = true;
      itiRef.current?.destroy();
      itiRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const update = (key) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFields((f) => ({ ...f, [key]: value }));
  };

  const validate = () => {
    const next = {};
    if (!fields.name.trim()) next.name = "Please enter your name.";
    if (!fields.company.trim())
      next.company = "Please enter your company name.";
    if (!fields.jobTitle.trim()) next.jobTitle = "Please enter your job title.";

    const email = fields.email.trim().toLowerCase();
    if (!email) {
      next.email = "Please enter your work email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      next.email = "That email address does not look right.";
    } else if (FREE_MAIL.includes(email.split("@")[1])) {
      next.email = "Please use your work email.";
    }

    const phoneValue = phoneRef.current?.value.trim() ?? "";
    if (!phoneValue) {
      next.phone = "Please enter your phone number.";
    } else if (itiRef.current?.isValidNumber() === false) {
      next.phone = "That phone number does not look right.";
    }

    if (!fields.consent) next.consent = "Please accept the privacy policy.";

    setErrors(next);
    return next;
  };

  const handleBlur = () => {
    validate();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      return;
    }
    setFormError("");
    setStatus("sending");

    const country = itiRef.current?.getSelectedCountry();
    const fullPhone = phoneRef.current?.value.trim()
      ? itiRef.current?.getNumber("E164")
      : "";

    const payload = {
      name: fields.name,
      job_title: fields.jobTitle,
      work_email: fields.email,
      company: fields.company,
      country: countryName(selectedIso2),
      phone: fullPhone || "",
      requirements: fields.requirements,
      intent: "quote",
      source: "sticky_panel",
      course_name: "ML Model Monitoring Corporate Training",
      course_url:
        "https://www.edstellar.com/course/ml-model-monitoring-training",
      page_url: typeof window !== "undefined" ? window.location.href : "",
      submitted_at: new Date().toISOString(),
      phone_dial_code: country?.dialCode || "",
    };

    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        console.info("[sticky panel lead, set FORM_ENDPOINT to send]", payload);
      }
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setFormError("We could not send that just now. Please try again.");
    }
  };

  const fieldClass = (key) =>
    `h-11 w-full rounded-xl border px-4 text-sm outline-none transition focus:border-[#2E2F72] ${
      errors[key] ? "border-red-400" : "border-[#D0D5DD]"
    }`;

  const errorClass =
    "absolute inset-x-0 top-full mt-1 text-right text-[11px] text-red-500";

  if (status === "sent") {
    return (
      <div className="sticky top-[70px] ml-auto w-[400px] overflow-hidden rounded-[20px] border border-[#D9D9D9] bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] pointer-events-auto">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lime-300 text-xl">
          ✓
        </div>
        <h4 className="text-lg font-bold text-[#101828]">Request received.</h4>
        <p className="mt-2 text-sm text-[#667085]">
          Thanks, a training specialist will reply within one business day with
          a tailored proposal.
        </p>
      </div>
    );
  }

  return (
    <div className="sticky top-[70px] ml-auto flex max-h-[calc(100vh-116px)] w-[400px] flex-col overflow-hidden rounded-[20px] border border-[#D9D9D9] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] pointer-events-auto">
      <div className="flex-none border-b border-[#D9D9D9] bg-[#F5F2EA] p-4 text-center">
        <h2 className="text-[16px] font-bold text-[#101828]">
          Request a training quote
        </h2>
      </div>

      <form
        className="flex min-h-0 flex-1 flex-col"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="min-h-0 flex-1 overflow-y-auto p-6">
          {formError && (
            <div
              role="alert"
              className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-[12px] font-medium text-red-600"
            >
              {formError}
            </div>
          )}

          <div className="relative mb-5">
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Jane Okafor"
              value={fields.name}
              onChange={update("name")}
              onBlur={handleBlur}
              className={fieldClass("name")}
            />
            {errors.name && <p className={errorClass}>{errors.name}</p>}
          </div>

          <div className="relative mb-5">
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Head of ML"
              value={fields.jobTitle}
              onChange={update("jobTitle")}
              onBlur={handleBlur}
              className={fieldClass("jobTitle")}
            />
            {errors.jobTitle && <p className={errorClass}>{errors.jobTitle}</p>}
          </div>

          <div className="relative mb-5">
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
              Work Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="jane@company.com"
              value={fields.email}
              onChange={update("email")}
              onBlur={handleBlur}
              className={fieldClass("email")}
            />
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>

          {/* Company */}
          <div className="relative mb-5">
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Your company"
              value={fields.company}
              onChange={update("company")}
              onBlur={handleBlur}
              className={fieldClass("company")}
            />
            {errors.company && <p className={errorClass}>{errors.company}</p>}
          </div>

          <div className="mb-4">
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
              Country
            </label>

            <select
              value={selectedIso2}
              onChange={(e) => {
                const iso2 = e.target.value;
                setSelectedIso2(iso2);
                if (iso2) itiRef.current?.setSelectedCountry(iso2);
              }}
              className="h-11 w-full cursor-pointer rounded-xl border border-[#D0D5DD] bg-white px-4 text-sm outline-none focus:border-[#2E2F72]"
            >
              {preferred.map((c) => (
                <option key={c.iso2} value={c.iso2}>
                  {c.name}
                </option>
              ))}
              <option disabled>────────────</option>
              {rest.map((c) => (
                <option key={c.iso2} value={c.iso2}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="relative mb-5">
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
              Phone <span className="text-red-500">*</span>
            </label>

            <input
              ref={phoneRef}
              type="tel"
              placeholder="201-555-0123"
              autoComplete="off"
              onBlur={handleBlur}
              className={fieldClass("phone")}
            />
            {errors.phone && <p className={errorClass}>{errors.phone}</p>}
          </div>

          {/* Requirements */}
          <div>
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
              Your Training Requirements
            </label>

            <textarea
              rows={4}
              placeholder="Team size, delivery format, your production stack, preferred timing."
              value={fields.requirements}
              onChange={update("requirements")}
              className="w-full h-[80px] resize-none rounded-xl border border-[#D0D5DD] px-4 py-3 text-sm outline-none transition focus:border-[#2E2F72]"
            />
          </div>
        </div>

        <div className="flex-none border-t border-[#D9D9D9] bg-white p-6 pt-4">
          {/* Checkbox */}
          <div className="relative mb-5">
            <label className="flex items-start gap-2 text-[12px] text-[#667085]">
              <input
                type="checkbox"
                checked={fields.consent}
                onChange={update("consent")}
                onBlur={handleBlur}
                className="mt-0.5 h-4 w-4 rounded border-gray-300"
              />

              <span>
                I agree to be contacted about this request, per the{" "}
                <a
                  href="https://www.edstellar.com/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#2E2F72] underline"
                >
                  privacy policy
                </a>
                .
              </span>
            </label>
            {errors.consent && <p className={errorClass}>{errors.consent}</p>}
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="mb-4 flex h-12 w-full items-center justify-center rounded-full bg-[#0F172A] text-[15px] font-semibold text-[#D9FF4F] transition hover:bg-[#1E293B] disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Request my quote →"}
          </button>

          {/* Footer */}
          <p className="text-center text-[12px] text-[#98A2B3]">
            A specialist replies within one business day.
          </p>
        </div>
      </form>
    </div>
  );
}
