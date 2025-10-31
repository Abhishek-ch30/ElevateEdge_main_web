import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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

  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [scheduleData, setScheduleData] = useState({
    name: "",
    phone: "",
    date: null,
    time: null,
    notes: "",
  });
  const [scheduleResult, setScheduleResult] = useState("");

  const handleFormChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleScheduleChange = (e) => {
    setScheduleData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setResult("Form submitted! We'll be in touch shortly.");
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

    fetch(
      "https://Aditya025-n8n.hf.space/webhook/763bf57f-79a6-469d-80e2-2750aab5cb25",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => {
        if (!res.ok) {
          console.error("Webhook returned non-2xx status:", res.status);
        }
        return res.json();
      })
      .then((webhookResult) => {
        console.log("Webhook response:", JSON.stringify(webhookResult, null, 2));
      })
      .catch((err) => {
        console.error("Error sending main webhook:", err);
      });
  };

  const isScheduleFormValid = () => {
    return (
      scheduleData.name.trim() !== "" &&
      scheduleData.phone.trim() !== "" &&
      scheduleData.phone.match(/^[0-9]{10,}$/) &&
      scheduleData.date !== null &&
      scheduleData.time !== null
    );
  };

  const onScheduleSubmit = () => {
    if (!isScheduleFormValid()) return;

    const combinedDateTime =
      scheduleData.date && scheduleData.time
        ? new Date(
            scheduleData.date.getFullYear(),
            scheduleData.date.getMonth(),
            scheduleData.date.getDate(),
            scheduleData.time.getHours(),
            scheduleData.time.getMinutes()
          )
        : null;

    const displayDate = combinedDateTime
      ? combinedDateTime.toLocaleDateString()
      : "";
    const displayTime = combinedDateTime
      ? combinedDateTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      : "";

    setScheduleResult(`Call scheduled for ${displayDate}, ${displayTime}! Thank you.`);

    setTimeout(() => {
      setShowScheduleModal(false);
      setScheduleData({
        name: "",
        phone: "",
        date: null,
        time: null,
        notes: "",
      });
      setScheduleResult("");
    }, 2000);

    const payload = {
      name: scheduleData.name,
      phone: scheduleData.phone,
      scheduledDate: combinedDateTime ? combinedDateTime.toDateString() : null,
      scheduledTime: combinedDateTime
        ? combinedDateTime.toTimeString().split(" ")[0]
        : null,
      notes: scheduleData.notes,
    };

    fetch(
      "https://Aditya025-n8n.hf.space/webhook/c660b24f-a460-4c3a-a86a-8ddb59d52662",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    )
      .then((res) => {
        if (!res.ok) {
          console.error("Schedule webhook returned non-2xx status:", res.status);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Schedule webhook response:", data);
      })
      .catch((err) => {
        console.error("Error sending schedule webhook:", err);
      });
  };

  const handleOutsideClick = () => {
    setShowScheduleModal(false);
    setScheduleData({
      name: "",
      phone: "",
      date: null,
      time: null,
      notes: "",
    });
    setScheduleResult("");
  };

  // Shared styles for form controls
  const sharedInputClasses =
    "w-full px-4 py-3 bg-white/10 text-white placeholder-white/20 border border-white/20 rounded-lg " +
    "focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm";

  const sharedSelectClasses =
    "w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg " +
    "focus:bg-white focus:text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm";

  const sharedTextareaClasses =
    "w-full px-4 py-3 bg-white/10 text-white placeholder-white/50 border border-white/20 rounded-lg " +
    "focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-400 backdrop-blur-sm resize-none";

  const sharedDatePickerClasses = sharedInputClasses;

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
            Ready to start your project? Let's discuss your vision and create
            something amazing together.
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
              {/* Full Name & Email Address */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white/80 font-light mb-2 tracking-wide"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className={sharedInputClasses}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white/80 font-light mb-2 tracking-wide"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className={sharedInputClasses}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone Number & Company Name */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white/80 font-light mb-2 tracking-wide"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    pattern="[0-9]{10,}"
                    className={sharedInputClasses}
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-white/80 font-light mb-2 tracking-wide"
                  >
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    required
                    className={sharedInputClasses}
                    placeholder="Your company"
                  />
                </div>
              </div>

              {/* Project Type & Budget */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-white/80 font-light mb-2 tracking-wide"
                  >
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleFormChange}
                    required
                    className={sharedSelectClasses}
                    style={{ color: formData.projectType ? "#181a3c" : "#bdbdbd" }}
                  >
                    <option value="" disabled style={{ color: "#bdbdbd" }}>
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
                  <label
                    htmlFor="budget"
                    className="block text-white/0 font-light mb-2 tracking-wide"
                  >
                    Budget Range *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleFormChange}
                    required
                    className={sharedSelectClasses}
                    style={{ color: formData.budget ? "#181a3c" : "#bdbdbd" }}
                  >
                    <option value="" disabled style={{ color: "#bdbdbd" }}>
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

              {/* Project Timeline */}
              <div>
                <label
                  htmlFor="timeline"
                  className="block text-white/80 font-light mb-2 tracking-wide"
                >
                  Project Timeline *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleFormChange}
                  required
                  className={sharedSelectClasses}
                  style={{ color: formData.timeline ? "#181a3c" : "#bdbdbd" }}
                >
                  <option value="" disabled style={{ color: "#bdbdbd" }}>
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

              {/* Project Details */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white/80 font-light mb-2 tracking-wide"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows={6}
                  className={sharedTextareaClasses}
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
              onClick={() => (window.location.href = "tel:+9191309309")}
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

            <div
              className="glassmorphic p-6 rounded-xl text-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              onClick={() => setShowScheduleModal(true)}
            >
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

      {/* Schedule Call Modal */}
      {showScheduleModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={handleOutsideClick}
        >
          <div
            className="bg-gray-900 rounded-lg p-6 w-full max-w-md mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-white text-2xl font-light mb-4">
              Schedule a Call
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  className="block text-white/80 mb-2"
                  htmlFor="scheduleName"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="scheduleName"
                  name="name"
                  value={scheduleData.name}
                  onChange={handleScheduleChange}
                  required
                  className={sharedInputClasses}
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  className="block text-white/80 mb-2"
                  htmlFor="schedulePhone"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="schedulePhone"
                  name="phone"
                  value={scheduleData.phone}
                  onChange={handleScheduleChange}
                  required
                  pattern="[0-9]{10,}"
                  className={sharedInputClasses}
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label
                  className="block text-white/80 mb-2"
                  htmlFor="scheduleDate"
                >
                  Date *
                </label>
                <DatePicker
                  selected={scheduleData.date}
                  onChange={(date) =>
                    setScheduleData((prev) => ({ ...prev, date }))
                  }
                  dateFormat="MMMM d, yyyy"
                  minDate={new Date()}
                  className={sharedDatePickerClasses}
                  placeholderText="Select a date"
                />
              </div>
              <div>
                <label
                  className="block text-white/80 mb-2"
                  htmlFor="scheduleTime"
                >
                  Time *
                </label>
                <DatePicker
                  selected={scheduleData.time}
                  onChange={(time) =>
                    setScheduleData((prev) => ({ ...prev, time }))
                  }
                  showTimeSelect
                  showTimeSelectOnly
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="h:mm aa"
                  className={sharedDatePickerClasses}
                  placeholderText="Select a time"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2" htmlFor="notes">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={scheduleData.notes}
                  onChange={handleScheduleChange}
                  rows={4}
                  placeholder="Additional notes or questions"
                  className={sharedTextareaClasses}
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={handleOutsideClick}
                className="px-4 py-2 bg-gray-700 rounded-md text-white hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={onScheduleSubmit}
                disabled={!isScheduleFormValid()}
                className={`px-4 py-2 rounded-md text-white ${
                  isScheduleFormValid()
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-gray-500 cursor-not-allowed"
                }`}
              >
                Confirm
              </button>
            </div>
            {scheduleResult && (
              <p className="mt-4 text-green-400 font-medium">
                {scheduleResult}
              </p>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default GetInTouch;