const MissionSection = () => {
  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto text-center animate-on-scroll">
        <div
          className="
            glassmorphic 
            p-12 md:p-16 
            rounded-2xl 
            relative 
            bg-white/10 
            backdrop-blur-md 
            shadow-[0_10px_30px_rgba(0,0,0,0.6)] 
            border border-white/20
            hover:shadow-[0_20px_40px_rgba(255,255,255,0.3)]
            transition-shadow duration-500 ease-in-out
            before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-tr before:from-purple-500 before:to-teal-400 before:opacity-20 before:blur-xl before:-z-10
          "
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
  Our Mission
</h2>


          <blockquote className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-8 tracking-wide italic drop-shadow-md">
            "To empower businesses with cutting-edge digital solutions, helping them thrive in an ever-evolving online landscape."
          </blockquote>

          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-8"></div>
          <p className="text-lg font-light leading-relaxed tracking-wide text-purple-200 drop-shadow-md">
  We built ElevateEdge to simplify and accelerate business growth with purpose-driven technology. 
  Every pixel, every feature, every strategy is designed with your success in mind.
</p>


        </div>
      </div>
    </section>
  );
};

export default MissionSection;
