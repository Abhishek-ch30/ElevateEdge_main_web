import React from "react";
import Footer from "../components/Footer";

// Define the Service interface for TypeScript
interface Service {
  title: string;
  description: string;
}

const MoreServices: React.FC = () => {
  const services: Service[] = [
    {
      title: "Content Writing",
      description: "Engaging, SEO-optimized content to captivate your audience and boost brand visibility.",
    },
    {
      title: "E-Commerce Solutions",
      description: "Custom e-commerce platforms to streamline sales and enhance customer experiences.",
    },
    {
      title: "Cloud Solutions",
      description: "Scalable, secure cloud infrastructure to optimize operations and drive efficiency.",
    },
    {
      title: "Cybersecurity Services",
      description: "Robust protection to safeguard your digital assets and ensure data security.",
    },
    {
      title: "UI/UX Design",
      description: "Intuitive, user-centric designs to enhance engagement and improve user satisfaction.",
    },
    {
      title: "Data Engineering",
      description: "Efficient data pipelines and infrastructure to support advanced analytics and insights.",
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-900">
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-8 tracking-tight text-glow">
            Our Additional Services
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed tracking-wide">
            At ElevateEdge, we offer a diverse range of digital solutions to empower your business. From compelling content to secure cloud infrastructure and advanced data engineering, our expert team in Patna delivers tailored services to drive growth and innovation.
          </p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-white mb-12 text-center tracking-tight">
            Discover Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300"
              >
                <div>
                  <h3 className="text-xl font-light text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-base text-white/80 font-light leading-relaxed tracking-wide">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light text-white mb-8 tracking-tight">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-lg text-white/80 font-light leading-relaxed tracking-wide mb-8">
            From captivating content to secure cloud solutions and advanced data engineering, ElevateEdge delivers exceptional results to help your business thrive. Contact us today to discuss your digital transformation needs.
          </p>
          <a
            href="/get-in-touch"
            className="bg-white border border-gray-500 text-gray-700 text-lg px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MoreServices; 