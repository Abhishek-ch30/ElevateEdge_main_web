import React from 'react';
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen pt-16 bg-dark-blue-purple">
      <div className="container mx-auto px-4 py-8 text-white">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy for ElevateEdge</h1>
        <p className="text-white/80 mb-8">
          Effective Date: March 15, 2024<br />
          Last Updated: March 15, 2024
        </p>

        <section className="mb-8">
          <p className="text-white/80">
            At <strong>ElevateEdge</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your data when you visit our website, engage with our services, or interact with us in any way. By using our website or services, you agree to the practices described in this policy.
          </p>
          <p className="text-white/80 mt-4">
            This policy is designed to be comprehensive and transparent, covering all aspects of our data practices to ensure you are fully informed about how your information is handled.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-white/80 mb-4">
            To provide our wide range of services — including website and app development, business growth strategy, data-driven analytics, and marketing and automation tips — we collect various types of information. This helps us deliver personalized, high-quality solutions and improve your overall experience.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">a. Personal Information</h3>
          <p className="text-white/80 mb-3">Personal information is data that can identify you as an individual. We collect the following types of personal information:</p>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li><strong>Contact Details:</strong> Your name, email address, phone number, and mailing address, which you provide when you contact us, sign up for services, or request information.</li>
            <li><strong>Account Information:</strong> If you create an account on our platform, we collect your username, password, and any other details you provide during registration.</li>
            <li><strong>Payment Information:</strong> When you make a purchase or subscribe to a service, we collect billing details such as credit card information, billing address, and transaction history. This data is processed securely through trusted third-party payment providers.</li>
            <li><strong>Communication Records:</strong> Any information you share when communicating with us via email, phone, or other channels, including inquiries, feedback, or support requests.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">b. Usage Data</h3>
          <p className="text-white/80 mb-3">Usage data helps us understand how you interact with our website and services, allowing us to improve functionality and user experience. This includes:</p>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li><strong>Website and Service Interaction:</strong> Information about the pages you visit, features you use, time spent on our platform, and actions taken (e.g., clicks, downloads).</li>
            <li><strong>Device Information:</strong> Details about the device you use to access our services, such as IP address, browser type, operating system, device identifiers, and screen resolution.</li>
            <li><strong>Cookies and Tracking Technologies:</strong> We use cookies, web beacons, and similar technologies to track your activity, remember your preferences, and gather analytics. For more details, see Section 5.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">c. Service-Specific Data</h3>
          <p className="text-white/80 mb-3">Depending on the services you engage with, we may collect additional information to fulfill your specific needs:</p>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li><strong>Project Details:</strong> For website and app development, we collect information about your project requirements, design preferences, content, and technical specifications.</li>
            <li><strong>Business Strategy Data:</strong> When providing business growth strategies, we may gather data about your current business model, goals, challenges, and market conditions.</li>
            <li><strong>Analytics Data:</strong> For data-driven analytics services, we collect and analyze data related to your business operations, customer behavior, and performance metrics.</li>
            <li><strong>Marketing Preferences:</strong> If you use our marketing and automation tips, we may collect data on your marketing goals, target audience, and engagement with our content or tools.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">d. Third-Party Data</h3>
          <p className="text-white/80 mb-3">In some cases, we may receive information about you from third-party sources, such as:</p>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li><strong>Social Media Platforms:</strong> If you interact with us on social media or link your social media accounts to our services, we may collect data from those platforms (e.g., profile information, posts).</li>
            <li><strong>Business Partners:</strong> We may receive data from partners or collaborators when working on joint projects or referrals.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="text-white/80 mb-4">
            We use the information we collect to provide, improve, and personalize our services, as well as to communicate with you and ensure compliance with legal obligations. Below are the specific ways we use your data:
          </p>

          <h3 className="text-xl font-semibold mb-3">a. Service Delivery</h3>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li><strong>Website and App Development:</strong> Use project details and technical specifications to build custom digital platforms tailored to your needs.</li>
            <li><strong>Business Growth Strategy:</strong> Analyze your business data and goals to develop effective growth strategies and recommendations.</li>
            <li><strong>Data-Driven Analytics:</strong> Process and interpret your business data to provide actionable insights and performance reports.</li>
            <li><strong>Marketing and Automation Tips:</strong> Use your marketing preferences and engagement data to offer personalized tips, tools, and automation solutions.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">b. Personalization</h3>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li>Tailor content, recommendations, and user interfaces based on your preferences, behavior, and service usage.</li>
            <li>Customize communications and offers to align with your business needs and interests.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">c. Communication</h3>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li>Respond to your inquiries, provide customer support, and resolve issues.</li>
            <li>Send service-related updates, project milestones, and notifications about your account or transactions.</li>
            <li>Share important information about changes to our services, policies, or terms.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">d. Analytics and Improvement</h3>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li>Analyze usage patterns, trends, and feedback to improve our website, services, and user experience.</li>
            <li>Conduct research and development to enhance our offerings and introduce new features.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">e. Marketing and Promotions</h3>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li>Send newsletters, tips, and promotional offers related to our services, industry trends, or business growth opportunities.</li>
            <li>Conduct surveys or contests to engage with you and gather feedback.</li>
          </ul>
          <p className="text-white/80 mb-4">You can opt-out of marketing communications at any time by clicking the "unsubscribe" link in emails or contacting us directly.</p>

          <h3 className="text-xl font-semibold mb-3">f. Compliance and Legal Obligations</h3>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li>Comply with applicable laws, regulations, and industry standards.</li>
            <li>Enforce our terms of service and protect against fraud, abuse, or security threats.</li>
            <li>Respond to legal requests, such as subpoenas or court orders.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Share Your Information</h2>
          <p className="text-white/80 mb-4">
            We do not sell, rent, or trade your personal information. However, we may share your data in the following circumstances:
          </p>

          <h3 className="text-xl font-semibold mb-3">a. Service Providers</h3>
          <p className="text-white/80 mb-3">We work with trusted third-party vendors who assist us in delivering our services, such as:</p>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li>Hosting and cloud storage providers.</li>
            <li>Payment processors for secure transactions.</li>
            <li>Analytics tools to track usage and performance.</li>
            <li>Marketing platforms for email campaigns and automation.</li>
          </ul>
          <p className="text-white/80 mb-4">These providers are bound by strict confidentiality agreements and are only permitted to use your data to perform services on our behalf.</p>

          <h3 className="text-xl font-semibold mb-3">b. Business Partners</h3>
          <p className="text-white/80 mb-4">
            When collaborating on joint projects or referrals, we may share relevant data with business partners, but only with your explicit consent. For example, if we partner with a third-party tool provider to enhance your marketing automation, we may share necessary data to integrate their services.
          </p>

          <h3 className="text-xl font-semibold mb-3">c. Legal Obligations</h3>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li>We may disclose your information when required by law, such as in response to a subpoena, court order, or government investigation.</li>
            <li>We may also share data to protect the rights, property, or safety of ElevateEdge, our users, or the public.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">d. Business Transfers</h3>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li>In the event of a merger, acquisition, reorganization, or sale of assets, your data may be transferred to the new entity.</li>
            <li>We will notify you of any such transfer and provide options regarding your data, where applicable.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">e. Aggregated or Anonymized Data</h3>
          <p className="text-white/80 mb-4">
            We may share aggregated or anonymized data (which cannot identify you) for research, marketing, or statistical purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="text-white/80 mb-4">
            We take the security of your data seriously and implement a range of measures to protect it from unauthorized access, loss, or misuse. These measures include:
          </p>

          <h3 className="text-xl font-semibold mb-3">a. Encryption</h3>
          <p className="text-white/80 mb-4">
            Sensitive information, such as payment details and login credentials, is encrypted during transmission and storage using industry-standard protocols (e.g., SSL/TLS).
          </p>

          <h3 className="text-xl font-semibold mb-3">b. Access Controls</h3>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li>Only authorized personnel have access to your personal data, and access is restricted based on job roles and responsibilities.</li>
            <li>We use multi-factor authentication and secure login systems to prevent unauthorized access.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">c. Regular Security Assessments</h3>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li>We conduct periodic security audits, vulnerability scans, and penetration tests to identify and address potential risks.</li>
            <li>Our systems are monitored for suspicious activity, and we respond promptly to any security incidents.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">d. Secure Storage and Transmission</h3>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li>Your data is stored on secure servers with robust physical and digital protections.</li>
            <li>We use secure transmission methods when sharing data with third parties.</li>
          </ul>

          <p className="text-white/80 mb-4">
            While we strive to protect your information, no online system is completely immune to threats. We work diligently to minimize risks and ensure your data is handled with the utmost care.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
          <p className="text-white/80 mb-4">
            We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze usage, and deliver personalized content. Here's how:
          </p>

          <h3 className="text-xl font-semibold mb-3">a. Types of Cookies</h3>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly, such as maintaining your login session.</li>
            <li><strong>Performance Cookies:</strong> Track how you use our website, helping us improve performance and fix issues.</li>
            <li><strong>Functionality Cookies:</strong> Remember your preferences, such as language settings or display options.</li>
            <li><strong>Marketing Cookies:</strong> Deliver personalized ads and track the effectiveness of marketing campaigns.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">b. Third-Party Tracking</h3>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li>We may use third-party services, such as Google Analytics, to collect and analyze usage data.</li>
            <li>These services may place their own cookies on your device and collect information about your activity.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">c. Managing Cookies</h3>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li>You can control cookie settings through your browser, including blocking or deleting cookies.</li>
            <li>Note that disabling cookies may limit certain features or functionality on our website.</li>
          </ul>

          <p className="text-white/80 mb-4">For more information, please see our Cookie Policy.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Your Rights and Choices</h2>
          <p className="text-white/80 mb-4">
            We respect your right to control your personal data. Depending on your location and applicable laws, you may have the following rights:
          </p>

          <h3 className="text-xl font-semibold mb-3">a. Access</h3>
          <p className="text-white/80 mb-4">Request a copy of the personal information we hold about you.</p>

          <h3 className="text-xl font-semibold mb-3">b. Correction</h3>
          <p className="text-white/80 mb-4">Update or correct inaccurate or incomplete data.</p>

          <h3 className="text-xl font-semibold mb-3">c. Deletion</h3>
          <p className="text-white/80 mb-4">Request the deletion of your personal data, subject to legal exceptions (e.g., data needed for compliance or ongoing services).</p>

          <h3 className="text-xl font-semibold mb-3">d. Opt-Out</h3>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li>Unsubscribe from marketing communications by clicking the "unsubscribe" link in emails or contacting us directly.</li>
            <li>Opt-out of certain tracking technologies by adjusting your browser settings.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">e. Portability</h3>
          <p className="text-white/80 mb-4">Request your data in a structured, machine-readable format for transfer to another service provider.</p>

          <h3 className="text-xl font-semibold mb-3">f. Object</h3>
          <p className="text-white/80 mb-4">Object to specific uses of your data, such as direct marketing or processing based on legitimate interests.</p>

          <p className="text-white/80 mb-4">
            To exercise any of these rights, please contact us at <a href="mailto:info.elevateedge@gmail.com" className="text-purple-400 hover:text-purple-300">info.elevateedge@gmail.com</a>. We will respond to your request within the timeframes required by law.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Third-Party Links</h2>
          <p className="text-white/80 mb-4">
            Our website may contain links to external sites, such as social media platforms, partner websites, or industry resources. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies before providing any personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
          <p className="text-white/80 mb-4">
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child without parental consent, we will take steps to delete it promptly.
          </p>
          <p className="text-white/80 mb-4">
            If you believe we have inadvertently collected data from a child, please contact us at <a href="mailto:info.elevateedge@gmail.com" className="text-purple-400 hover:text-purple-300">info.elevateedge@gmail.com</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
          <p className="text-white/80 mb-4">
            As a global service provider, your data may be processed and stored in countries outside your own, including the United States and other regions where our servers or service providers are located.
          </p>
          <p className="text-white/80 mb-4">
            We ensure that any international data transfers comply with applicable data protection laws, such as the General Data Protection Regulation (GDPR) for European users. Where necessary, we use safeguards like Standard Contractual Clauses (SCCs) to protect your data.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Data Retention</h2>
          <p className="text-white/80 mb-4">We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, including:</p>
          <ul className="list-disc list-inside text-white/80 mb-4 space-y-2">
            <li>Providing ongoing services.</li>
            <li>Complying with legal obligations (e.g., tax or accounting requirements).</li>
            <li>Resolving disputes or enforcing agreements.</li>
          </ul>
          <p className="text-white/80 mb-4">
            When your data is no longer needed, we securely delete or anonymize it in accordance with our data retention policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
          <p className="text-white/80 mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. When we make significant changes, we will notify you via email or through a prominent notice on our website.
          </p>
          <p className="text-white/80 mb-4">
            The "Last Updated" date at the top of this policy indicates when it was last revised. Your continued use of our services after any updates signifies your acceptance of the new terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
          <p className="text-white/80 mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out to us at:
          </p>
          <div className="mt-4 text-white/80">
            <p><strong>ElevateEdge</strong></p>
            <p>Email: <a href="mailto:info.elevateedge@gmail.com" className="text-purple-400 hover:text-purple-300">info.elevateedge@gmail.com</a></p>
            <p>Phone: +91 9972207385</p>
            <p>Location: Bengaluru, India</p>
          </div>
        </section>

        <section className="mb-8">
          <p className="text-white/80">
            Thank you for choosing ElevateEdge as your trusted partner in digital and business growth. We value your privacy and are dedicated to protecting your information while helping you achieve your goals.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 