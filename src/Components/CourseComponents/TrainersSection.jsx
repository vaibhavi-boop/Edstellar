import { trainers } from "@/data/mlMonitoringData";

export default function TrainersSection() {
  return (
    <section id="trainers" className="border-b border-[var(--rule)] bg-[var(--paper-warm)] py-28">
      <div className="container">

        <div className="mb-8 flex items-baseline gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--muted)] [font-family:var(--mono)]">
          <span className="text-[16px] italic text-[var(--ink)] [font-family:var(--serif)]">XI</span>
          <span className="text-[16px] normal-case tracking-normal text-[var(--ink)] [font-family:var(--serif)]">Trainers</span>
          <span>· Vetted, matched, confirmed</span>
        </div>

        <h2 className="max-w-[22ch] text-[clamp(30px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.03em]">
          Learn from <em className="[font-family:var(--serif)]">world-class</em> ML monitoring practitioners.
        </h2>

        <p className="mt-7 max-w-[64ch] text-[15px] leading-[1.7] text-[var(--muted)]">
          Every session is led by a top-rated practitioner who has run monitoring for models in production, not a generalist working from slides.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="flex min-h-[335px] flex-col rounded-[16px] border border-[var(--rule)] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-28px_rgba(10,22,40,0.45)]"
            >

              <img
                src={trainer.image}
                alt={trainer.name}
                className="mb-4 h-[50px] w-[50px] rounded-[16px] object-cover"
              />

              <h3 className="text-[14px] font-bold tracking-[-0.02em] text-[var(--ink)]">
                {trainer.name}
              </h3>

              <p className="mt-1 text-[11px] leading-[1.4] text-[var(--muted)]">
                {trainer.role}
              </p>

              <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.12em] text-[#7c9c10] [font-family:var(--mono)]">
                {trainer.experience}
              </p>

              <div className="mt-4 flex items-center rounded-[8px] bg-[var(--paper-warm)] px-3 py-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-[13px] text-[#b58b00]">★</span>
                  <span className="text-[12px] font-semibold text-[var(--ink)]">
                    {trainer.rating}
                  </span>
                </div>

                <div className="mx-3 h-5 w-px bg-[var(--rule-strong)]" />

                <div>
                  <p className="text-[8px] uppercase tracking-[0.08em] text-[var(--muted)] [font-family:var(--mono)]">
                    {trainer.sessions}
                  </p>
                  <p className="text-[7px] uppercase tracking-[0.08em] text-[var(--muted)] [font-family:var(--mono)]">
                    Sessions delivered
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {trainer.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-[6px] bg-[var(--paper-warm)] px-2 py-1.5 text-[9px] leading-none text-[var(--ink)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-5">
                <button
                  type="button"
                  className="flex w-full items-center justify-center rounded-full border border-[var(--rule-strong)] bg-transparent px-4 py-2.5 text-[10px] font-semibold text-[var(--ink)] transition-all duration-300 hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-[var(--lime)]"
                >
                  View trainer profile →
                </button>
              </div>

            </div>
          ))}
        </div>

        <p className="mt-7 max-w-[70ch] text-[11px] leading-[1.7] text-[var(--muted)]">
          Trainers are matched to your stack and delivery window at scheduling. We confirm your assigned trainer, with a full profile, before the program is booked.
        </p>

      </div>
    </section>
  );
}