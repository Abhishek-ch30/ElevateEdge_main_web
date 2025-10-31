import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      title: "Web Development",
      description:
        "From landing pages to full-scale platforms, we create responsive, high-performing websites.",
      icon: "ph-globe",
      path: "/explore/web-development"
    },
    {
      title: "App Development",
      description:
        "We build fast, scalable, and intuitive mobile apps tailored to your business goals.",
      icon: "ph-device-mobile",
      path: "/explore/app-development"
    },
    {
      title: "Web Design",
      description:
        "We design sleek, user-friendly interfaces that blend aesthetics with functionality.",
      icon: "ph-paint-brush",
      path: "/explore/web-design"
    },
    {
      title: "Graphic Designing",
      description:
        "We craft visually compelling designs for branding, marketing, and digital presence.",
      icon: "ph-image-square",
      path: "/explore/graphic-design"
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic campaigns to boost online visibility and drive targeted customer engagement.",
      icon: "ph-megaphone",
      path: "/explore/digital-marketing"
    },
    {
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and increase organic traffic with expert SEO.",
      icon: "ph-graph",
      path: "/explore/seo-optimization"
    },
    {
      title: "Business Analytics",
      description:
        "Leverage data to make smart decisions with dashboards, insights, and growth metrics.",
      icon: "ph-chart-bar",
      path: "/explore/business-analytics"
    },
    {
      title: "More Services",
      description:
        "Need something else? From consultation to IT solutions, we've got you covered.",
      icon: "ph-dots-three-circle",
      path: "/explore/more-services"
    },
  ];

  const handleExploreClick = (path: string) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <div className="min-h-screen pt-16 bg-black">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-white/80 text-sm uppercase tracking-wider mb-2">
            <span className="border border-purple-500 rounded-full px-4 py-1 text-purple-300">Services</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Why Choose Us?
          </h1>
          <p className="text-lg text-white/70 font-light leading-relaxed tracking-wide">
            Choose ElevateEdge for a seamless blend of innovation, strategy, and
            technology—everything your business needs to thrive online.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1e1a2e] to-[#181624] border border-purple-700 rounded-[2rem] p-8 shadow-lg transition-transform duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <i className={`ph-light ${service.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-white text-2xl font-semibold mb-3 tracking-wider">
                  {service.title.toUpperCase()}
                </h3>
                <p className="text-white/70 font-light mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div 
                  className="text-white font-medium flex items-center gap-2 group cursor-pointer"
                  onClick={() => handleExploreClick(service.path)}
                >
                  <span className="group-hover:underline">Explore More</span>
                  <i className="ph ph-caret-right text-white"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
