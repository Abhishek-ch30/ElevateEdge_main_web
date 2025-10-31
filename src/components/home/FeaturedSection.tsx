
  const FeaturedSection = () => {
    // Updated: Use 4 key publications, animated in, glassmorphic card
    const featuredLogos = [
      { name: "Innovation First", img: null, opacity: "opacity-80" },
      { name: "Client-Centric", img: null, opacity: "opacity-85" },
      { name: "Transparent Delivery", img: null, opacity: "opacity-70" }
    ];


  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center animate-on-scroll">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white/60 mb-8 sm:mb-10 md:mb-12 tracking-wide">
          Our Core Values
        </h2>
        <div className="glassmorphic rounded-xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 lg:gap-10 backdrop-blur-md bg-white/10 border border-white/15 shadow-lg animate-on-scroll items-center">
          {featuredLogos.map((logo, index) => (
            <div
              key={index}
              className={`flex-1 ${logo.opacity} transition-all duration-700 transform animate-on-scroll`}
            >
              <span
                className="block text-white/90 font-light tracking-wider text-base sm:text-lg md:text-xl whitespace-nowrap"
                style={{
                  letterSpacing: "0.08em",
                  opacity: 0.92,
                  filter: "drop-shadow(0 2px 16px #a855f7b4)"
                }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;