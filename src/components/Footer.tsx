const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6 -ml-10">
              <img 
                src="https://i.ibb.co/XkGcRXzn/logo-transparent-png.png" 
                alt="ElevateEdge Logo" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-white/70 font-light leading-relaxed tracking-wide mb-6 text-base">
              Empowering businesses with cutting-edge digital solutions. Where every pixel meets purpose.
            </p>
            <div className="flex space-x-4">
  {/* Twitter */}
  <a
    href="https://twitter.com/ElevateEdgee" 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-white/60 hover:text-white transition-colors"
  >
    <i className="ph-light ph-twitter-logo text-xl"></i>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/elevateedgee"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/60 hover:text-white transition-colors"
  >
    <i className="ph-light ph-linkedin-logo text-xl"></i>
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/919972207385"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white/60 hover:text-white transition-colors"
  >
    <i className="ph-light ph-whatsapp-logo text-xl"></i>
  </a>

  {/* Email */}
  <a
    href="mailto:info.elevateedge@gmail.com"
    className="text-white/60 hover:text-white transition-colors"
  >
    <i className="ph-light ph-envelope text-xl"></i>
  </a>
</div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wide">Contact</h3>
            <div className="space-y-3">
              <p className="text-white/70 font-light tracking-wide">
                <i className="ph-light ph-envelope mr-2"></i>
                info.elevateedge@gmail.com
              </p>
              <p className="text-white/70 font-light tracking-wide">
                <i className="ph-light ph-phone mr-2"></i>
                +91 9972207385
              </p>
              <p className="text-white/70 font-light tracking-wide">
                <i className="ph-light ph-map-pin mr-2"></i>
                Bengaluru, India
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium mb-4 tracking-wide">Quick Links</h3>
            <div className="space-y-3">
              <a href="/about" className="block text-white/70 hover:text-white transition-colors font-light tracking-wide">
                About Us
              </a>
              <a href="/get-in-touch" className="block text-white/70 hover:text-white transition-colors font-light tracking-wide">
                Get in Touch
              </a>
              <a href="/privacy-policy" className="block text-white/70 hover:text-white transition-colors font-light tracking-wide">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 font-light tracking-wide">
            © 2025 ElevateEdge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
