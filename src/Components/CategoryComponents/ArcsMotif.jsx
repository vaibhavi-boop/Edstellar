export default function ArcsMotif() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden rounded-[inherit] lg:block"
      style={{
        background: `
          radial-gradient(
            circle at 100% 50%,
            transparent 0 200px,
            rgba(146,180,234,.20) 200px calc(200px + 27px),
            transparent calc(200px + 27px)
          ),
          radial-gradient(
            circle at 100% 50%,
            transparent 0 258px,
            rgba(119,157,216,.24) 258px calc(258px + 27px),
            transparent calc(258px + 27px)
          ),
          radial-gradient(
            circle at 100% 50%,
            transparent 0 317px,
            rgba(37,95,255,.29) 317px calc(317px + 27px),
            transparent calc(317px + 27px)
          )
        `,
        maskImage:
          "conic-gradient(from 180deg at 100% 50%, #000 0 180deg, transparent 180deg)",
        WebkitMaskImage:
          "conic-gradient(from 180deg at 100% 50%, #000 0 180deg, transparent 180deg)",
      }}
    />
  );
}
