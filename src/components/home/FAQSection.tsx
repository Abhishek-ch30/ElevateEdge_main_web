
import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer: "We work with businesses of all sizes, from startups to enterprises, across various industries."
    },
    {
      question: "How does the consultation process work?",
      answer: "Our consultation process begins with a free, no-obligation discussion to understand your business needs and goals."
    },
    {
      question: "What is included in the free plan?",
      answer: "The free plan includes basic tools for startups, such as limited analytics and access to our knowledge base."
    },
    {
      question: "Can I upgrade my plan later?",
      answer: "Yes, you can upgrade your plan at any time to access more advanced features and support."
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Absolutely! We specialize in creating custom solutions tailored to your unique business requirements."
    },
    {
      question: "How do you ensure the security of my data?",
      answer: "We prioritize data security and use industry-standard encryption and secure servers to protect your information."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Our support team is available 24/7 via email, chat, and phone to assist you with any questions or issues."
    },
    {
      question: "How long does it take to see results?",
      answer: "The timeline for seeing results varies depending on your specific goals and the services you choose, but many clients notice improvements within the first few months."
    },
    {
      question: "Can I integrate ElevateEdge with my existing tools?",
      answer: "Yes, ElevateEdge integrates seamlessly with a wide range of popular business tools and platforms."
    },
    {
      question: "What makes ElevateEdge different from other platforms?",
      answer: "What sets us apart is our comprehensive, all-in-one approach to business growth, combining cutting-edge technology with personalized strategies and support."
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Spline Background */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        <iframe 
          src='https://my.spline.design/chips-U3SefAAS0NmsWPfjH4bl5X9I/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="pointer-events-none"
        />
      </div>
      
      {/* Content overlay */}
      <div className="relative z-10 max-w-4xl mx-auto animate-on-scroll">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/70 font-light tracking-wide">
            Everything you need to know about ElevateEdge
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glassmorphic rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
              >
                <span className="text-white font-medium tracking-wide pr-4">
                  {faq.question}
                </span>
                <i className={`ph-light ${openFAQ === index ? 'ph-minus' : 'ph-plus'} text-white/60 text-xl flex-shrink-0`}></i>
              </button>
              
              {openFAQ === index && (
                <div className="px-8 pb-6">
                  <p className="text-white/80 font-light leading-relaxed tracking-wide">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
