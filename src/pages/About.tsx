
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-8 tracking-tight text-glow">
            About ElevateEdge
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed tracking-wide">
            We're passionate about transforming businesses through innovative digital solutions 
            and strategic growth methodologies.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="glassmorphic p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-light text-white mb-6 tracking-tight">Our Mission</h2>
            <p className="text-lg text-white/90 font-light leading-relaxed tracking-wide">
              To empower businesses with cutting-edge digital solutions, helping them thrive in an 
              ever-evolving online landscape. We believe that every pixel should serve a purpose, 
              and every strategy should drive meaningful growth.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-white text-center mb-16 tracking-tight">
            Our Team
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Abhishek",
                role: "Founder",
                bio: "Passionate about building scalable digital solutions and driving innovation across platforms."
              },
              {
                name: "Aditya",
                role: "CEO",
                bio: "Dedicated to turning ideas into impactful products with a strong focus on user-centric design and performance."
              },
              {
                name: "Ayush",
                role: "COO",
                bio: "Combines strategic thinking with technical expertise to streamline operations and deliver impact."
              }
            ].map((member, index) => (
              <div key={index} className="glassmorphic p-8 rounded-xl text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-teal-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white font-semibold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-medium text-white mb-2 tracking-wide">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-light mb-4 tracking-wide">
                  {member.role}
                </p>
                <p className="text-white/70 font-light leading-relaxed tracking-wide">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light text-white text-center mb-16 tracking-tight">
            Our Journey
          </h2>
          
          <div className="space-y-8">
            {[
              {
                year: "2020",
                title: "The Vision",
                description: "Founded with the mission to democratize business growth tools for companies of all sizes."
              },
              {
                year: "2021",
                title: "First Platform Launch",
                description: "Released our MVP with basic analytics and growth strategy tools, serving 100+ early adopters."
              },
              {
                year: "2022",
                title: "Scaling Up",
                description: "Expanded to serve 1,000+ businesses and introduced advanced automation features."
              },
              {
                year: "2023",
                title: "AI Integration",
                description: "Launched AI-powered insights and predictive analytics, revolutionizing how businesses plan growth."
              },
              {
                year: "2024",
                title: "Global Expansion",
                description: "Now serving 10,000+ businesses worldwide with our comprehensive digital growth platform."
              }
            ].map((milestone, index) => (
              <div key={index} className="glassmorphic p-8 rounded-xl">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="mb-4 md:mb-0 md:mr-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-teal-400 rounded-xl flex items-center justify-center">
                      <span className="text-white font-semibold tracking-tight">
                        {milestone.year}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-white mb-2 tracking-wide">
                      {milestone.title}
                    </h3>
                    <p className="text-white/70 font-light leading-relaxed tracking-wide">
                      {milestone.description}
                    </p>
                  </div>
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

export default About;
