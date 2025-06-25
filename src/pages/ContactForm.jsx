import React, { useState } from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Failed to send message. Please try again later.");
        setLoading(false);
      });
  };

  return submitted ? (
    <div className="p-6 text-center h-screen flex flex-col items-center justify-center thank-you-message">
      <h2 className="text-3xl font-bold text-green-600 mb-2">Thank You!</h2>
      <p className="text-lg">Your message has been submitted successfully.</p>
    </div>
  ) : (
    <div>
      <h2 className="text-3xl font-bold mb-2">Have any Questions?</h2>
      <p className="text-gray-400 mb-6 text-[14px]">
        Please fill out the form below and we will get back to you shortly.
      </p>
      <div className="contactus-form">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="inputcommon-group">
            <label className="input-lable">
              Your Name <span className="red-text">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input-field"
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          <div className="inputcommon-group">
            <label className="input-lable">
              Your Email <span className="red-text">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="inputcommon-group">
              <label className="input-lable">
                Subject <span className="red-text">*</span>
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Enter Subject"
                className="input-field"
                value={formData.subject}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.subject && (
                <p className="text-red-500">{errors.subject}</p>
              )}
            </div>

            <div className="inputcommon-group">
              <label className="input-lable">
                Phone Number <span className="red-text">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Your Number"
                maxLength={10}
                className="input-field"
                value={formData.phone}
                onChange={handleChange}
                disabled={loading}
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}
            </div>
          </div>

          <div className="inputcommon-group">
            <label className="input-lable">
              Message <span className="red-text">*</span>
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Enter Message..."
              className="input-textarea"
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>

          <button type="submit" className="green-button" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
