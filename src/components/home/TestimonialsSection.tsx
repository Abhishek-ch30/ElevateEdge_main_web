import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Updated stories and format
  const testimonials = [
    {
  name: "Amit Sharma",
  details: "Doubled lead generation through our new website",
  quote: "The ElevateEdge team understood exactly what my business needed. Our new site is fast, modern, and brings in quality leads every day!"
},
{
  name: "Sneha R.",
  details: "15K+ app downloads in the first month",
  quote: "Super impressed with how quickly they developed and launched our app. Smooth performance and beautiful UI!"
},
{
  name: "Karan Patel",
  details: "40% increase in client engagement",
  quote: "Their digital marketing and analytics helped us reach more clients and make better decisions. Highly recommended!"
},
{
  name: "Priya Menon",
  details: "Website bounce rate reduced by 60%",
  quote: "They revamped our outdated website into something clean and professional. Our users are staying longer and converting more."
},
{
  name: "Rahul S.",
  details: "Ranked in top 3 Google results within 2 months",
  quote: "Thanks to their SEO and content strategy, our local visibility skyrocketed. Very effective team!"
}

  ];

  // Auto-rotation functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto animate-on-scroll">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg text-white/70 font-light tracking-wide">
            A few stories from our partners
          </p>
        </div>

        <div className="relative">
          <div 
            className={`
              glassmorphic p-8 md:p-12 rounded-2xl text-center
              border-2 bg-gradient-to-tr from-purple-800/30 to-blue-700/25
              transition-all duration-300 ease-in-out
              ${testimonials[currentTestimonial].name === "Raj K." ? "border-cyan-400/60 shadow-cyan-300/20": "border-purple-400/60 shadow-purple-300/20"}
              ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}
              animate-on-scroll
            `}
            style={{
              boxShadow: "0 0 44px 7px rgba(132,90,255,0.17)",
              borderImage: "linear-gradient(90deg, #db82ff22, #7ee4ff33 65%, #b7ffab22) 1"
            }}
          >
            <div className="mb-8 flex flex-col items-center">
              <i className="ph-light ph-quotes text-4xl text-purple-400/90 mb-3 block"></i>
              <blockquote className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-7 tracking-wide font-inter">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <span className="inline-block glassmorphic px-5 py-2 rounded-full text-sm text-green-300 font-medium tracking-wide border border-green-300/15 shadow-md">
                {testimonials[currentTestimonial].details}
              </span>
            </div>

            <div>
              <p className="text-white font-medium text-lg tracking-wide font-inter">
                {testimonials[currentTestimonial].name}
              </p>
            </div>
          </div>

          {/* Carousel Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`View testimonial ${index + 1}`}
                className={`
                  w-3 h-3 rounded-full transition-all duration-300 border border-purple-400/20
                  ${index === currentTestimonial
                    ? "bg-gradient-to-tr from-purple-400 to-blue-400 shadow-lg shadow-purple-400/30"
                    : "bg-white/30 hover:bg-white/50"
                  }`}
                style={{ outline: "none" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
