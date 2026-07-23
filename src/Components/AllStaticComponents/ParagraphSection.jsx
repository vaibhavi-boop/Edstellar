"use client";

export default function ParagraphSection({ data }) {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="mx-auto max-w-[980px]">
          {/* Heading */}
          <h2
            className="mb-4 text-[30px] font-semibold leading-[1.2] text-[#3A3A3A] lg:text-[36px]"
            dangerouslySetInnerHTML={{ __html: data.heading }}
          />

          {/* Highlight Paragraph */}
          <div className="mb-4 border-l-4 border-[#C8E130] pl-4">
            <p className="text-[16px] leading-7 text-[#3A3A3A]">
              {data.highlightParagraph}
            </p>
          </div>

          {/* Paragraph */}
          <p className="text-[16px] leading-7 text-[#3A3A3A]">
            {data.paragraph}
          </p>
        </div>
      </div>
    </section>
  );
}