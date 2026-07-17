"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

export default function BlogApiContent({ content }) {
  const contentRef = useRef(null);
  const [tailwindLoaded, setTailwindLoaded] = useState(false);

  useEffect(() => {
    if (!tailwindLoaded || !contentRef.current) return;

    /*
      Tailwind Browser normally observes DOM changes.

      Updating this attribute triggers a small DOM mutation after
      the Tailwind browser compiler has loaded, helping it rescan
      API-generated Tailwind classes.
    */
    contentRef.current.setAttribute(
      "data-tailwind-content-loaded",
      Date.now().toString(),
    );
  }, [tailwindLoaded, content]);

  return (
    <>
      <Script
        id="blog-tailwind-browser"
        src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
        strategy="afterInteractive"
        onLoad={() => setTailwindLoaded(true)}
      />

      <div
        ref={contentRef}
        className="blog-content min-w-0"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </>
  );
}
