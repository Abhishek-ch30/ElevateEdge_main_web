import { useState } from "react";
import Footer from "../components/Footer";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    setTimeout(() => setResult("Message sent!"), 1000);
    try {
      // Webhook submission
      const webhookResponse = await fetch(
        "https://Aditya025-n8n.hf.space/webhook/763bf57f-79a6-469d-80e2-2750aab5cb25",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const webhookResult = await webhookResponse.json();
      console.log("Webhook response:", JSON.stringify(webhookResult, null, 2));
  
      if (webhookResponse.ok && webhookResult.success) {
        setResult("Form submitted and email sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          budget: "",
          timeline: "",
          message: "",
        });
      }
    } catch (e) {
      // Friendly fallback message
      setResult("Thanks for visiting!");
    }
  };
  
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section with Spline Background */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-30">
          <iframe
            src="https://my.spline.design/holoblobs-XMJ5kD5Yp8UCpy6xbl2b6boU/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="pointer-events-none"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-8 tracking-tight text-glow">
            Get In Touch
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed tracking-wide">
            Ready to start your project? Let's discuss your vision and create something amazing together.
          </p>
        </div>
      </section>

      {/* Main Form Section with Spline Background */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <iframe
            src="https://my.spline.design/holoblobs-XMJ5kD5Yp8UCpy6xbl2b6boU/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="pointer-events-none"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="glassmorphic p-8 md:p-12 rounded-2xl">
            <h2 className="text-3xl font-light text-white mb-8 text-center tracking-tight">
              Start Your Project
            </h2>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 font-light mb-2 tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 font-light mb-2 tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white/80 font-light mb-2 tracking-wide">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10,}"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-white/80 font-light mb-2 tracking-wide">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
                    placeholder="Your company"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-white/80 font-light mb-2 tracking-wide">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
                    style={{ color: formData.projectType ? "#fff" : "#bdbdbd" }}
                  >
                    <option value="" style={{ color: "#bdbdbd" }}>
                      Select project type
                    </option>
                    <option value="website" style={{ color: "#181a3c" }}>
                      Website Development
                    </option>
                    <option value="app" style={{ color: "#181a3c" }}>
                      Mobile App Development
                    </option>
                    <option value="ecommerce" style={{ color: "#181a3c" }}>
                      E-commerce Platform
                    </option>
                    <option value="consulting" style={{ color: "#181a3c" }}>
                      Digital Consulting
                    </option>
                    <option value="design" style={{ color: "#181a3c" }}>
                      UI/UX Design
                    </option>
                    <option value="other" style={{ color: "#181a3c" }}>
                      Other
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-white/80 font-light mb-2 tracking-wide">
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
                    style={{ color: formData.budget ? "#fff" : "#bdbdbd" }}
                  >
                    <option value="" style={{ color: "#bdbdbd" }}>
                      Select budget range
                    </option>
                    <option value="under-10k" style={{ color: "#181a3c" }}>
                      Under ₹10,000
                    </option>
                    <option value="10k-25k" style={{ color: "#181a3c" }}>
                     ₹10,000 - ₹25,000
                    </option>
                    <option value="25k-50k" style={{ color: "#181a3c" }}>
                     ₹25,000 - ₹50,000
                    </option>
                    <option value="50k-100k" style={{ color: "#181a3c" }}>
                     Above ₹50,000
                    </option>
                    
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="timeline" className="block text-white/80 font-light mb-2 tracking-wide">
                  Project Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm"
                  style={{ color: formData.timeline ? "#fff" : "#bdbdbd" }}
                >
                  <option value="" style={{ color: "#bdbdbd" }}>
                    Select timeline
                  </option>
                  <option value="asap" style={{ color: "#181a3c" }}>
                    ASAP
                  </option>
                  <option value="1-3-months" style={{ color: "#181a3c" }}>
                    1-3 months
                  </option>
                  <option value="3-6-months" style={{ color: "#181a3c" }}>
                    3-6 months
                  </option>
                  <option value="6-12-months" style={{ color: "#181a3c" }}>
                    6-12 months
                  </option>
                  <option value="flexible" style={{ color: "#181a3c" }}>
                    Flexible
                  </option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-white/80 font-light mb-2 tracking-wide">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm resize-none"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full neumorphic-btn text-white text-lg"
              >
                <i className="ph-light ph-rocket mr-2"></i>
                Elevate Now
              </button>
            </form>
            <div className="text-center mt-4">
              <span className="text-white/80 font-medium">{result}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light text-white text-center mb-12 tracking-tight">
            Or Reach Out Directly
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
          <div
  className="glassmorphic p-6 rounded-xl text-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
  onClick={() => window.location.href = "tel:+9191309309"}
>
  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-teal-400 rounded-xl flex items-center justify-center mx-auto mb-4">
    <i className="ph-light ph-phone text-white text-2xl"></i>
  </div>
  <h3 className="text-xl font-light text-white mb-2 tracking-wide">
    Call Us
  </h3>
  <p className="text-white/70 font-light tracking-wide">
    <a href="tel:+9191309309" className="hover:underline">
      91 9972207385
    </a>
  </p>
</div>

            <a
  href="mailto:info.elevateedge@gmail.com"
  className="block transition-transform transform hover:scale-105 hover:shadow-xl"
>
  <div className="glassmorphic p-6 rounded-xl text-center cursor-pointer">
    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-teal-400 rounded-xl flex items-center justify-center mx-auto mb-4">
      <i className="ph-light ph-envelope text-white text-2xl"></i>
    </div>
    <h3 className="text-xl font-light text-white mb-2 tracking-wide">
      Email Us
    </h3>
    <p className="text-white/70 font-light tracking-wide">
      info.elevateedge@gmail.com
    </p>
  </div>
</a>

            <div className="glassmorphic p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-teal-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <i className="ph-light ph-calendar text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-light text-white mb-2 tracking-wide">
                Schedule Call
              </h3>
              <p className="text-white/70 font-light tracking-wide">
                Book a free consultation
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GetInTouch;
