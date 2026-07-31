"use client";
import { useRef } from "react";

export default function CertificateSection() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "none";
  };

  return (
    <section className="border-b border-[var(--rule)] bg-[var(--paper)] py-28">
      <div className="container">

        {/* Label */}
        <div className="mb-8 flex items-baseline gap-3 text-[11px] uppercase tracking-[0.24em] text-[var(--muted)] [font-family:var(--mono)]">
          <span className="text-[16px] text-[var(--ink)] [font-family:var(--serif)]">
            XII
          </span>
          <span className="text-[16px] italic normal-case tracking-normal text-[var(--ink)] [font-family:var(--serif)]">
            Certificate
          </span>
          <span>· What learners receive</span>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 items-start gap-[50px] md:grid-cols-2">

          {/* Left */}
          <div>
            <h2 className="mb-5 max-w-[20ch] [font-family:var(--display)] text-[clamp(30px,4vw,50px)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--ink)]">
              Your ML Model Monitoring{" "}
              <em className="[font-family:var(--serif)]">training certificate.</em>
            </h2>

            <p className="max-w-[52ch] text-[16px] leading-[1.75] text-[var(--muted)]">
              On successful completion, employees receive an Edstellar course
              completion certificate, recognizing their commitment to ongoing
              learning and professional development. It validates the skills
              they have built and motivates them to keep growing and contribute
              to organizational success.
            </p>

            <p className="mt-5 max-w-[52ch] text-[13px] leading-[1.7] text-[var(--muted)]">
              <strong className="font-semibold text-[var(--ink)]">
                Earned, not attended.
              </strong>{" "}
              Awarded on completion of all 8 hands-on labs and the capstone
              project.
            </p>
          </div>

          {/* Certificate */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative flex aspect-[1.4/1] items-center justify-center overflow-hidden rounded-[18px] border border-white/10 bg-gradient-to-br from-[var(--navy-soft)] to-[var(--navy-deep)] p-8 text-center transition-transform duration-300"
          >
            <div className="pointer-events-none absolute inset-[14px] rounded-[12px] border border-[var(--lime)]/25" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="mb-[18px] flex h-[74px] w-[74px] items-center justify-center rounded-full bg-gradient-to-br from-[var(--lime)] to-[var(--lime-soft)] text-[30px] text-[var(--navy-deep)]">
                ★
              </div>

              <p className="mb-1.5 text-[24px] italic text-[var(--paper)] [font-family:var(--serif)]">
                Certificate of Completion
              </p>

              <p className="text-[10px] uppercase tracking-[0.18em] text-[rgba(250,250,247,0.6)] [font-family:var(--mono)]">
                ML Model Monitoring · Edstellar
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}