"use client";

import { useState } from "react";

const COUNTRIES = [
  ["United States", "+1", "US"],
  ["United Kingdom", "+44", "GB"],
  ["India", "+91", "IN"],
  ["Canada", "+1", "CA"],
  ["Australia", "+61", "AU"],
  ["Germany", "+49", "DE"],
  ["France", "+33", "FR"],
  ["Netherlands", "+31", "NL"],
  ["Ireland", "+353", "IE"],
  ["Spain", "+34", "ES"],
  ["Italy", "+39", "IT"],
  ["Sweden", "+46", "SE"],
  ["Norway", "+47", "NO"],
  ["Denmark", "+45", "DK"],
  ["Finland", "+358", "FI"],
  ["Switzerland", "+41", "CH"],
  ["Belgium", "+32", "BE"],
  ["Austria", "+43", "AT"],
  ["Poland", "+48", "PL"],
  ["Portugal", "+351", "PT"],
  ["United Arab Emirates", "+971", "AE"],
  ["Saudi Arabia", "+966", "SA"],
  ["Qatar", "+974", "QA"],
  ["Israel", "+972", "IL"],
  ["South Africa", "+27", "ZA"],
  ["Nigeria", "+234", "NG"],
  ["Kenya", "+254", "KE"],
  ["Egypt", "+20", "EG"],
  ["Singapore", "+65", "SG"],
  ["Malaysia", "+60", "MY"],
  ["Japan", "+81", "JP"],
  ["South Korea", "+82", "KR"],
  ["China", "+86", "CN"],
  ["Hong Kong", "+852", "HK"],
  ["Indonesia", "+62", "ID"],
  ["Philippines", "+63", "PH"],
  ["Thailand", "+66", "TH"],
  ["Vietnam", "+84", "VN"],
  ["New Zealand", "+64", "NZ"],
  ["Brazil", "+55", "BR"],
  ["Mexico", "+52", "MX"],
  ["Argentina", "+54", "AR"],
  ["Chile", "+56", "CL"],
  ["Colombia", "+57", "CO"],
  ["Turkey", "+90", "TR"],
  ["Other", "", ""],
];

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

function flagEmoji(iso) {
  if (!iso) return "";
  return [...iso]
    .map((c) => String.fromCodePoint(127397 + c.charCodeAt(0)))
    .join("");
}

const INITIAL = {
  name: "",
  jobTitle: "",
  email: "",
  company: "",
  country: COUNTRIES[0][0],
  phone: "",
  requirements: "",
  consent: false,
};

export default function QuoteForm() {
  const [fields, setFields] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [formError, setFormError] = useState("");

  const dialEntry = COUNTRIES.find(([n]) => n === fields.country) || COUNTRIES[0];
  const dialLabel = `${flagEmoji(dialEntry[2])} ${dialEntry[1]}`.trim();

  const update = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFields((f) => ({ ...f, [key]: value }));
  };

  const validate = () => {
    const next = {};
    if (!fields.name.trim()) next.name = "Please enter your name.";
    if (!fields.company.trim()) next.company = "Please enter your company name.";
    if (!fields.jobTitle.trim()) next.jobTitle = "Please enter your job title.";

    const email = fields.email.trim().toLowerCase();
    if (!email) {
      next.email = "Please enter your work email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      next.email = "That email address does not look right.";
    } else if (FREE_MAIL.includes(email.split("@")[1])) {
      next.email = "Please use your work email.";
    }

    if (!fields.consent) next.consent = "Please accept the privacy policy.";

    setErrors(next);
    return next;
  };

  const handleBlur = (key) => () => {
    if (errors[key]) validate();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validate();
    if (Object.keys(next).length) {
      setFormError("Please check the highlighted fields.");
      return;
    }
    setFormError("");
    setStatus("sending");

    const payload = {
      name: fields.name,
      job_title: fields.jobTitle,
      work_email: fields.email,
      company: fields.company,
      country: fields.country,
      phone: fields.phone,
      requirements: fields.requirements,
      intent: "quote",
      source: "sticky_panel",
      course_name: "ML Model Monitoring Corporate Training",
      course_url: "https://www.edstellar.com/course/ml-model-monitoring-training",
      page_url: typeof window !== "undefined" ? window.location.href : "",
      submitted_at: new Date().toISOString(),
      phone_dial_code: dialEntry[1],
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

  if (status === "sent") {
    return (
      <div className="sticky top-[92px] ml-auto w-[366px] overflow-hidden rounded-[20px] border border-[#D9D9D9] bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] pointer-events-auto">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-lime-300 text-xl">
          ✓
        </div>
        <h4 className="text-lg font-bold text-[#101828]">Request received.</h4>
        <p className="mt-2 text-sm text-[#667085]">
          Thanks, a training specialist will reply within one business day
          with a tailored proposal.
        </p>
      </div>
    );
  }

  return (
    <div className="sticky top-[92px] ml-auto flex max-h-[calc(100vh-116px)] w-[366px] flex-col overflow-hidden rounded-[20px] border border-[#D9D9D9] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] pointer-events-auto">
      <div className="flex-none border-b border-[#D9D9D9] bg-[#F5F2EA] px-6 py-4 text-center">
        <h2 className="text-[16px] font-bold text-[#101828]">
          Request a training quote
        </h2>
      </div>

      <form
        className="min-h-0 flex-1 space-y-4 overflow-y-auto p-6"
        noValidate
        onSubmit={handleSubmit}
      >
        {formError && (
          <div
            role="alert"
            className="rounded-lg bg-red-50 px-3 py-2 text-[12px] font-medium text-red-600"
          >
            {formError}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Jane Okafor"
              value={fields.name}
              onChange={update("name")}
              onBlur={handleBlur("name")}
              className={fieldClass("name")}
            />
            {errors.name && (
              <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
              Job Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Head of ML"
              value={fields.jobTitle}
              onChange={update("jobTitle")}
              onBlur={handleBlur("jobTitle")}
              className={fieldClass("jobTitle")}
            />
            {errors.jobTitle && (
              <p className="mt-1 text-[11px] text-red-500">{errors.jobTitle}</p>
            )}
          </div>
        </div>

        <div>
          <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="jane@company.com"
            value={fields.email}
            onChange={update("email")}
            onBlur={handleBlur("email")}
            className={fieldClass("email")}
          />
          {errors.email && (
            <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Your company"
            value={fields.company}
            onChange={update("company")}
            onBlur={handleBlur("company")}
            className={fieldClass("company")}
          />
          {errors.company && (
            <p className="mt-1 text-[11px] text-red-500">{errors.company}</p>
          )}
        </div>

        {/* Country & Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
              Country
            </label>

            <select
              value={fields.country}
              onChange={update("country")}
              className="h-11 w-full rounded-xl border border-[#D0D5DD] bg-white px-4 text-sm outline-none focus:border-[#2E2F72]"
            >
              {COUNTRIES.map(([name]) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-[10px] font-semibold uppercase tracking-[1px] text-[#667085]">
              Phone
            </label>

            <div className="flex h-11 items-center rounded-xl border border-[#D0D5DD] focus-within:border-[#2E2F72]">
              <span className="pl-3 pr-2 text-sm text-[#667085]">
                {dialLabel}
              </span>
              <input
                type="tel"
                placeholder="201-555-0123"
                value={fields.phone}
                onChange={update("phone")}
                className="h-full w-full rounded-r-xl px-2 text-sm outline-none"
              />
            </div>
          </div>
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
            className="w-full resize-none rounded-xl border border-[#D0D5DD] px-4 py-3 text-sm outline-none transition focus:border-[#2E2F72]"
          />
        </div>

        {/* Checkbox */}
        <div>
          <label className="flex items-start gap-2 text-[12px] text-[#667085]">
            <input
              type="checkbox"
              checked={fields.consent}
              onChange={update("consent")}
              onBlur={handleBlur("consent")}
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
          {errors.consent && (
            <p className="mt-1 text-[11px] text-red-500">{errors.consent}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="flex h-12 w-full items-center justify-center rounded-full bg-[#0F172A] text-[15px] font-semibold text-[#D9FF4F] transition hover:bg-[#1E293B] disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Request my quote →"}
        </button>

        {/* Footer */}
        <p className="text-center text-[12px] text-[#98A2B3]">
          A specialist replies within one business day.
        </p>
      </form>
    </div>
  );
}
