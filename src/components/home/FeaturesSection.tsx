const FeaturesSection = () => {
  const features = [
    {
      icon: "ph-code",
      title: "Website & App Development",
      description:
        "Custom solutions for your brand with cutting-edge technology and responsive design.",
    },
    {
      icon: "ph-chart-line-up",
      title: "Business Growth Strategy",
      description:
        "Data-driven strategies to accelerate your business growth and market expansion.",
    },
    {
      icon: "ph-chart-bar",
      title: "Data-Driven Analytics",
      description:
        "Comprehensive insights and analytics to make informed business decisions.",
    },
  ];

  return (
    <section id="features" className="py-20 px-8"> {/* more horizontal padding */}
      <div className="max-w-6xl mx-auto animate-on-scroll">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-lg text-white/70 font-light tracking-wide">
            Everything you need to succeed online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glassmorphic p-8 text-center hover:scale-105 transition-all duration-300 group custom-clip"
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-teal-400 rounded-xl flex items-center justify-center group-hover:animate-glow">
                  <i className={`${feature.icon} ph-light text-2xl text-white`}></i>
                </div>
              </div>

              <h3 className="text-lg font-medium text-white mb-4 tracking-wide">
                {feature.title}
              </h3>

              <p className="text-white/70 font-light leading-relaxed tracking-wide text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .custom-clip {
          border-radius: 1rem;
          clip-path: polygon(0 0, 88% 0, 100% 12%, 100% 100%, 0% 100%);
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;
