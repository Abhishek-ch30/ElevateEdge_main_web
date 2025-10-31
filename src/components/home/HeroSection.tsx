import React from "react";
import GLTFModel from "./GLTFModel"; // Adjust path if needed
import integrateImage from "../images/integrate.jpg";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
    >
      {/* Spline Background */}
      <div className="absolute inset-0 z-0 -top-20 pointer-events-none select-none">
        <iframe
          src="https://my.spline.design/worldplanet-t39yLA48IvqpEzATZrZo0BLe/"
          frameBorder="0"
          width="100%"
          height="120%"
          className="w-full h-full object-cover"
          style={{ pointerEvents: "none", filter: "brightness(0.8) blur(0.5px)" }}
          aria-hidden="true"
          tabIndex={-1}
        />
      </div>

      {/* Content Overlay */}
      <div className="max-w-6xl mx-auto text-center animate-fade-in-up relative z-10">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight font-inter text-left md:text-center">
            <span className="inline-block pl-6 md:pl-20">
              Where Every <span className="text-glow font-semibold">Pixel </span>
              <b className="text-5xl md:text-7xl font-light text-white tracking-tight font-inter">Meets</b>
              <b className="text-glow font-semibold"> Purpose</b>
            </span>
          </h1>

          {/* GLTF Model */}
          <div className="w-full flex justify-center mb-4">
            <div className="w-full max-w-xl" style={{ height: "300px" }}>
              <GLTFModel />
            </div>
          </div>

          <p className="text-2xl md:text-2xl font-light text-white/90 mb-4 tracking-wide font-inter leading-relaxed">
            ElevateEdge gives you an all-in-one platform to build stunning websites, apps, and software.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          {/* Optional secondary copy */}
        </div>

        <div className="mb-16">
          {/* Optional CTA or spacer */}
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="glassmorphic p-8 rounded-2xl animate-on-scroll"
            style={{ boxShadow: "0 0 40px 8px rgba(129,46,209,0.11)" }}
          >
            <img
              src={integrateImage}
              alt="Futuristic Digital Dashboard UI Mockup"
              className="w-full h-auto rounded-xl shadow-2xl border border-purple-400/15 animate-fade-in-up"
              draggable={false}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
