import TrainingEnquiryForm from "./TrainingEnquiryForm";

export default function ContactFormSection() {
  return (
    <section id="apply" className="bg-[var(--paper)] py-28 border-b border-[var(--rule)]">
      <div className="container">
        <div className="text-[11px] tracking-[0.24em] uppercase text-[var(--muted)] mb-[18px] [font-family:var(--mono)]">
          <span className="[font-family:var(--serif)] text-[14px] text-[var(--ink)]">
            XV
          </span>{" "}
          Apply · One business day reply
        </div>

        <h2 className="mb-[26px] text-[var(--ink)] leading-[1.08] text-[clamp(30px,4vw,50px)] font-bold tracking-[-0.03em] [font-family:var(--display)] max-w-[20ch]">
          Request{" "}
          <em className="[font-family:var(--serif)] italic font-semibold">
            ML Model Monitoring
          </em>{" "}
          training for your team.
        </h2>

        <p className="mb-10 max-w-[64ch] text-[clamp(15px,1.2vw,17px)] leading-[1.7] text-[var(--muted)]">
          Tell us what your team needs. Anything you selected in the course
          outline comes through with your request.
        </p>

        <TrainingEnquiryForm heading={null} submitLabel="Request my quote →" />
      </div>
    </section>
  );
}
