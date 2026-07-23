function HeroSection({ title, description, image, alt }) {
  return (
    <section className="relative bg-[#0a1628] py-24">
      <div className="container relative z-10">
        <h1 className="text-[42px] font-semibold text-white">{title}</h1>

        <p className="mt-4 max-w-[800px] text-white">{description}</p>
      </div>

      <img
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-40"
        src={image}
        alt={alt}
      />
    </section>
  );
}

export default HeroSection;
