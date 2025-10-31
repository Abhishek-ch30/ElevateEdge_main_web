import React from "react";

const VoicesSection = () => {
  const voices = [
    { quote: "Really easy to use!", author: "Alex, User" },
    { quote: "Helped me start fast!", author: "Sam, Tester" }
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center animate-on-scroll">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white/60 mb-8 sm:mb-10 tracking-wide">
          User Voices
        </h2>
        <div className="glassmorphic rounded-xl px-4 sm:px-6 md:px-8 py-4 sm:py-5 w-full max-w-xs sm:max-w-sm md:max-w-2xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6 backdrop-blur-md bg-white/10 border border-white/15 shadow-lg animate-on-scroll">
          {voices.map((voice, index) => (
            <div key={index} className="flex-1 opacity-80">
              <p className="text-white/90 font-light text-base sm:text-lg md:text-xl">
                "{voice.quote}"
              </p>
              <span className="block text-white/70 text-sm sm:text-base mt-1">{voice.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoicesSection; 