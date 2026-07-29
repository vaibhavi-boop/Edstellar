"use client";

import { useEffect, useRef, useState } from "react";

const SFOOT_MSGS = [
  { hi: "Instructor-led corporate training", rest: "· One partner, every team" },
  { hi: "Virtual · On-site · Off-site", rest: ", Your choice of mode" },
  { hi: "10 modules · 24–40 hours", rest: ", Fully customized to your stack" },
  { hi: "100+ countries · 10+ languages", rest: ", Delivered where your teams are" },
  { hi: "Hands-on with real tooling", rest: ": drift, dashboards, alerting" },
  { hi: "Drift, alerting, retraining, fairness", rest: ", The full monitoring lifecycle" },
];

function MessageLine({ msg, phase }) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (phase !== "in") return;
    let raf2;
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => setEntered(true));
    });
    return () => {
      cancelAnimationFrame(raf1);
      if (raf2) cancelAnimationFrame(raf2);
    };
  }, [phase]);

  const state = phase === "out" ? "out" : entered ? "in" : "pre";

  return (
    <div
      className={`absolute left-0 top-0 flex items-center gap-[7px] whitespace-nowrap text-[11px] uppercase tracking-[0.12em] text-white/62 transition-[transform,opacity] duration-[550ms] ease-[cubic-bezier(.2,.7,.2,1)] [font-family:var(--mono)] max-[860px]:text-[10px] max-[860px]:tracking-[0.09em] max-[620px]:right-0 max-[620px]:justify-center max-[620px]:text-center max-[620px]:text-[9.5px] max-[620px]:tracking-[0.09em] ${
        state === "pre"
          ? "translate-y-[110%] opacity-0"
          : state === "in"
            ? "translate-y-0 opacity-100"
            : "-translate-y-[110%] opacity-0"
      }`}
    >
      <span className="text-[var(--lime)]">{msg.hi}</span>
      <span className="max-[620px]:hidden">{msg.rest}</span>
    </div>
  );
}

export default function StickyFooter() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [rotation, setRotation] = useState({
    current: { idx: 0, key: 0 },
    previous: null,
  });

  const visibleRef = useRef(false);
  const dismissedRef = useRef(false);
  const timerRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    visibleRef.current = visible;
  }, [visible]);

  useEffect(() => {
    dismissedRef.current = dismissed;
  }, [dismissed]);

  // ---- visibility: driven by a single rAF-throttled scroll/resize check,
  // instead of two independently-coordinated IntersectionObservers ----
  useEffect(() => {
    const hero = document.getElementById("top");
    const apply = document.getElementById("apply");
    if (!hero) return;

    let ticking = false;

    const measure = () => {
      ticking = false;
      if (dismissedRef.current) return;

      const heroRect = hero.getBoundingClientRect();
      const pastHero = heroRect.bottom <= 0;

      let atForm = false;
      if (apply) {
        const formRect = apply.getBoundingClientRect();
        // "at the form" once 15% of it has entered the viewport
        atForm = formRect.top < window.innerHeight * 0.85 && formRect.bottom > 0;
      }

      setVisible(pastHero && !atForm);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // ---- pause rotation while tab is hidden ----
  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      } else if (visibleRef.current && !pausedRef.current) {
        startRolling();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", onVisibilityChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function roll() {
    setRotation((s) => ({
      current: {
        idx: (s.current.idx + 1) % SFOOT_MSGS.length,
        key: s.current.key + 1,
      },
      previous: s.current,
    }));
  }

  function startRolling() {
    if (timerRef.current) return;
    timerRef.current = setInterval(roll, 5200);
  }

  function stopRolling() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  }

  useEffect(() => {
    if (visible && !pausedRef.current) startRolling();
    else stopRolling();
    return stopRolling;
  }, [visible]);

  // clear the "previous" (outgoing) line once its fade-out finishes
  useEffect(() => {
    if (!rotation.previous) return;
    const t = setTimeout(() => {
      setRotation((s) => ({ ...s, previous: null }));
    }, 700);
    return () => clearTimeout(t);
  }, [rotation.previous]);

  const handleMouseEnter = () => {
    pausedRef.current = true;
    stopRolling();
  };
  const handleMouseLeave = () => {
    pausedRef.current = false;
    if (visibleRef.current) startRolling();
  };

  const handleCta = () => {
    const apply = document.getElementById("apply");
    if (apply) apply.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
  };

  const show = visible && !dismissed;

  return (
    <div
      role="region"
      aria-label="Training enquiry bar"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`fixed inset-x-0 bottom-0 z-[920] border-t border-[var(--lime)]/22 bg-[var(--navy)] shadow-[0_-18px_40px_-30px_rgba(10,22,40,.9)] transition-transform duration-[450ms] ease-[cubic-bezier(.2,.7,.2,1)] ${
        show ? "translate-y-0" : "translate-y-[110%]"
      }`}
    >
      <div className="container flex h-[62px] items-center gap-[22px] max-[860px]:h-auto max-[860px]:flex-wrap max-[860px]:gap-[10px] max-[860px]:py-[11px]">
        <div className="relative h-[18px] min-w-0 flex-1 max-[860px]:order-2 max-[860px]:h-[16px] max-[860px]:basis-full max-[860px]:flex-none">
          {rotation.previous && (
            <MessageLine
              key={rotation.previous.key}
              msg={SFOOT_MSGS[rotation.previous.idx]}
              phase="out"
            />
          )}
          <MessageLine
            key={rotation.current.key}
            msg={SFOOT_MSGS[rotation.current.idx]}
            phase="in"
          />
        </div>

        <div className="flex flex-none items-center gap-3 max-[860px]:w-full max-[860px]:justify-between">
          <button
            type="button"
            onClick={handleCta}
            className="whitespace-nowrap rounded-full bg-[var(--lime)] px-[23px] py-[11px] text-[14px] font-semibold text-[var(--navy)] transition-all duration-200 hover:-translate-y-[2px] hover:bg-[#d3f752] hover:shadow-[0_14px_28px_-14px_rgba(200,241,53,.65)] active:translate-y-0 max-[860px]:px-[18px] max-[860px]:py-[10px] max-[860px]:text-[13px]"
          >
            Request a Training Quote
          </button>

          <button
            type="button"
            aria-label="Dismiss this bar"
            onClick={handleDismiss}
            className="px-[3px] py-[5px] text-[19px] leading-none text-white/45 transition-colors duration-200 hover:text-[var(--paper)]"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}
