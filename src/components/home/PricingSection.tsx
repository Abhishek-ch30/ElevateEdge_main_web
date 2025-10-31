const PricingSection = () => {
  const plans = [
    {
      name: "Web Development",
      price: "₹8,999",
      description: "Personalized Website with complete Webhosting",
      features: [
        "Custom Design",
        "SEO Optimization",
        "Free Hosting (1 Year)",
        "Weekly Bug Fixes",
      ],
      isRecommended: false,
    },
    {
      name: "App Development",
      price: "₹12,999",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      features: [
        "Cross-Platform App",
        "Priority Support",
        "Analytics Dashboard",
        "Free Updates (6 Months)",
      ],
      isRecommended: true,
    },
    {
      name: "Web Design",
      price: "₹6,499",
      description: "AI chatbot, personalized recommendations",
      features: [
        "Complete UI/UX Design",
        "Up to 5 Customizations",
        "Responsive Layouts",
        "Exportable to Code",
      ],
      isRecommended: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Most Purchased Package
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-800 p-8 rounded-xl relative hover:scale-105 transition-all duration-300 ${
                plan.isRecommended ? "border-2 border-purple-500" : ""
              }`}
            >
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500  py-2 rounded-full">
                    <span className="text-white text-sm font-medium tracking-wide">
                     
                    </span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-medium text-white mb-2 tracking-wide">
                  {plan.name}
                </h3>
                <p className="text-white/60 font-light mb-4 tracking-wide">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-light text-white tracking-tight">
                    {plan.price}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-white/80 font-light tracking-wide"
                  >
                    <span className="w-4 h-4 bg-purple-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-pink-600 transition-all">
                <a href="/get-in-touch">Get In Touch</a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;