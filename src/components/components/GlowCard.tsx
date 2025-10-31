import React from "react";

const GlowCard = ({ children, className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Glowing circle container */}
      <div
        className="w-64 h-64 rounded-full border-2 border-purple-500 bg-transparent flex items-center justify-center text-center z-10"
        style={{
          boxShadow: "0 0 20px rgba(139, 92, 246, 0.8)",
        }}
      >
        {children}
      </div>

      {/* Outer blurred glow */}
      <div
        className="absolute w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "rgba(236, 232, 244, 0.15)",
          filter: "blur(25px)",
          zIndex: 0,
        }}
      />
    </div>
  );
};

export default GlowCard;
