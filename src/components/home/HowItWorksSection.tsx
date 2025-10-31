import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "./constants.ts";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const ProgressBeacon = () => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Glowing Circle */}
      <div className="w-6 h-6 rounded-full bg-purple-600 shadow-[0_0_10px_3px_rgba(139,92,246,0.7)] z-20" />

      {/* Vertical Line */}
      <div className="w-1 bg-gradient-to-b from-purple-600 to-indigo-600 h-40 mt-2 z-10" />

      {/* Curved SVG Line */}
      <svg
        className="w-10 h-6 mt-4"
        viewBox="0 0 40 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 12 Q10 0 20 12 T40 12"
          stroke="url(#grad)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="40" y2="0">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#4f46e5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".exp-card-wrapper").forEach((card: HTMLElement) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    gsap.to(".timeline", {
      transformOrigin: "bottom bottom",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        onUpdate: (self) => {
          gsap.to(".timeline", {
            scaleY: 1 - self.progress,
          });
        },
      },
    });

    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        xPercent: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    }, "<");
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Why Choose Us?" sub="ElevateEdge" />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-14">
            {expCards.map((card) => (
              <div
                key={card.title}
                className="exp-card-wrapper flex flex-col xl:flex-row gap-10"
              >
                {/* Image Card */}
                <div className="xl:w-2/6 w-full">
                  <GlowCard card={card}>
                    <div>
                      <img src={card.imgPath} alt="exp-img" />
                    </div>
                  </GlowCard>
                </div>

                {/* Text and Timeline Section */}
                <div className="xl:w-4/6 w-full flex flex-col md:flex-row items-start gap-10">
                  {/* Progress + Timeline */}
                  <div className="timeline-wrapper flex flex-col items-center min-h-[80px] md:min-h-0">
                    <ProgressBeacon />
                    <div className="timeline bg-gradient-to-b from-purple-600 to-indigo-600 w-1 flex-grow origin-bottom hidden md:block" />
                  </div>

                  {/* Text Block */}
                  <div className="expText flex flex-col gap-5 relative z-20">
                    <h1 className="font-semibold text-2xl md:text-3xl text-white">
                      {card.title}
                    </h1>
                    
                    <p className="text-[#839CB5] italic text-sm md:text-base">
                      Our Offerings
                    </p>
                    <ul className="list-disc ms-5 mt-3 md:mt-5 flex flex-col gap-3 md:gap-5 text-purple-400">
                      {card.responsibilities.map((responsibility, index) => (
                        <li key={index} className="text-base md:text-lg">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
