import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", action: () => scrollToSection("hero"), to: "/" },
    { name: "Services", to: "/services" },
    { name: "About Us", to: "/about" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "backdrop-blur-md bg-black/20" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="inline-block">
            <img
              src="https://i.ibb.co/XkGcRXzn/logo-transparent-png.png"
              alt="ElevateEdge Logo"
              className="w-[17rem] h-[6rem]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.action ? (
                  <button
                    onClick={item.action}
                    className={`relative text-white/80 hover:text-white transition-colors font-light tracking-wide pb-1 ${
                      location.pathname === item.to ? "text-white font-semibold border-b-2 border-white" : ""
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    className={`relative text-white/80 hover:text-white transition-colors font-light tracking-wide pb-1 ${
                      location.pathname === item.to ? "text-white font-semibold border-b-2 border-white" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/get-in-touch" className="neumorphic-btn text-white text-sm">
              Get In Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              <i className={`ph-light ${isMenuOpen ? 'ph-x' : 'ph-list'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden fixed inset-y-0 right-0 w-full max-w-sm transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        <div className="glassmorphic h-full px-6 py-8">
          <div className="flex flex-col space-y-6 mt-8">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.action ? (
                  <button
                    onClick={item.action}
                    className={`relative text-white/90 hover:text-white transition-colors text-lg font-light tracking-wide block text-left pb-1 ${
                      location.pathname === item.to ? "text-white font-semibold border-b-2 border-white" : ""
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative text-white/90 hover:text-white transition-colors text-lg font-light tracking-wide block pb-1 ${
                      location.pathname === item.to ? "text-white font-semibold border-b-2 border-white" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/get-in-touch" className="neumorphic-btn text-white text-sm mt-4" onClick={() => setIsMenuOpen(false)}>
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
