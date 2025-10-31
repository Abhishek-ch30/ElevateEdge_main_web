import React from "react";
import Footer from "../components/Footer";

const WebDevelopment = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-8 tracking-tight text-glow">
            Web Development Services
          </h1>
          <p className="text-xl text-white/80 font-light leading-relaxed tracking-wide">
            At ElevateEdge, we turn ideas into impactful digital experiences. Even the simplest concept can evolve into a powerful, user-centric website when paired with our creativity and technical expertise.
          </p>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-white mb-8 text-center tracking-tight">
            Why Choose ElevateEdge for Web Development?
          </h2>
          <p className="text-lg text-white/80 font-light leading-relaxed tracking-wide">
            ElevateEdge is a leading web development company, offering comprehensive digital solutions tailored to your unique business needs. Our team of experienced developers, designers, and strategists work collaboratively to deliver websites that are modern, fast, secure, and scalable.
          </p>
          <h3 className="text-2xl font-light text-white mt-8 mb-4">We specialize in:</h3>
          <ul className="list-disc pl-5 text-white/80 font-light leading-relaxed tracking-wide">
            <li>Web Development</li>
            <li>Product Development</li>
            <li>Software Design & Engineering</li>
            <li>E-strategy Consulting</li>
            <li>System Migration & Upgrades</li>
            <li>Ongoing Maintenance & Support</li>
            <li>Multimedia Integration</li>
            <li>Third-party Integrations</li>
          </ul>
          <h3 className="text-2xl font-light text-white mt-8 mb-4">How Our Services Help You Grow</h3>
          <p className="text-lg text-white/80 font-light leading-relaxed tracking-wide">
            Partnering with ElevateEdge means:
          </p>
          <ul className="list-disc pl-5 text-white/80 font-light leading-relaxed tracking-wide">
            <li>Streamlined management of your online platforms</li>
            <li>Increased visibility and higher lead conversion rates</li>
            <li>Enhanced communication with your customers and stakeholders</li>
            <li>Reduced operational costs through automation and smart tools</li>
          </ul>
          <h3 className="text-2xl font-light text-white mt-8 mb-4">Our Core Web Development Services</h3>
          <ul className="list-disc pl-5 text-white/80 font-light leading-relaxed tracking-wide">
            <li>Static & Dynamic Website Development</li>
            <li>E-commerce Websites</li>
            <li>Payment Gateway Integration</li>
            <li>Custom Travel Portals</li>
            <li>Flash & Multimedia Websites</li>
            <li>Content Management Systems (CMS)</li>
            <li>Application Development</li>
            <li>Database-Driven Websites</li>
            <li>Website Redesign & Maintenance</li>
          </ul>
          <h3 className="text-2xl font-light text-white mt-8 mb-4">Technology Expertise</h3>
          <p className="text-lg text-white/80 font-light leading-relaxed tracking-wide">
            We work with a wide range of modern technologies to build robust and scalable digital products:
          </p>
          <ul className="list-disc pl-5 text-white/80 font-light leading-relaxed tracking-wide">
            <li>Java Platform: Java, J2EE, JSP, EJB, JavaScript, Web Services</li>
            <li>.NET Platform: ASP.NET, ADO.NET, AJAX, XML</li>
            <li>PHP Stack: PHP, JavaScript, jQuery, CSS</li>
            <li>Development Tools: Eclipse, MyEclipse, NetBeans</li>
            <li>Application Servers: WebLogic, JBoss, Mail Servers</li>
            <li>Frameworks: Spring, Struts, Hibernate, Microsoft .NET</li>
            <li>Databases: Oracle, MySQL, Microsoft SQL Server</li>
          </ul>
          <h3 className="text-2xl font-light text-white mt-8 mb-4">Website Maintenance & Support</h3>
          <p className="text-lg text-white/80 font-light leading-relaxed tracking-wide">
            Websites aren't meant to be static. We offer dedicated website maintenance services to keep your site fresh, secure, and up-to-date.
          </p>
          <h4 className="text-xl font-light text-white mt-6 mb-4">Our Maintenance Services Include:</h4>
          <ul className="list-disc pl-5 text-white/80 font-light leading-relaxed tracking-wide">
            <li>Content and image updates</li>
            <li>Bug fixes and security patches</li>
            <li>SEO optimization and analytics</li>
            <li>Performance monitoring</li>
            <li>Regular backups and version control</li>
          </ul>
          <h3 className="text-2xl font-light text-white mt-8 mb-4">Why ElevateEdge?</h3>
          <ul className="list-disc pl-5 text-white/80 font-light leading-relaxed tracking-wide">
            <li>Unlimited text revisions to existing pages</li>
            <li>Fast turnaround — most updates completed same-day</li>
            <li>Professional edits and optimizations</li>
            <li>Affordable, scalable maintenance plans</li>
            <li>Hands-on customer support via email or phone</li>
          </ul>
          <p className="text-lg text-white/80 font-light leading-relaxed tracking-wide mt-8">
            📞 Need help maintaining or upgrading your website? Get in touch at <a href="mailto:info@elevateedge.com" className="text-purple-400">info@elevateedge.com</a>. Whether it's a quick fix or a full-scale upgrade, our team is ready to help!
          </p>
          <div className="text-center mt-8">
            <a href="/get-in-touch" className="bg-white border border-gray-500 text-gray-700 text-lg px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default WebDevelopment; 