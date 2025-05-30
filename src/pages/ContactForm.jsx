import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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
    setSubmitted(true); // Show thank you message
  };

  if (submitted) {
    return (
      <div className="p-6 text-center h-screen flex flex-col items-center justify-center thank-you-message">
        <h2 className="text-3xl font-bold text-green-600 mb-2">Thank You!</h2>
        <p className="text-lg">Your message has been submitted successfully.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Have any Questions?</h2>
      <p className="text-gray-400 mb-6 text-[14px]">
        Lorem ipsum dolor sit amet, consecte lorem ipsumLorem ipsum dolor sit amet, consecte Lorem ipsum.
      </p>
      <div className="contactus-form">
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
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
            />
            {errors.name && <p className="text-red-500 text-[16px]">{errors.name}</p>}
          </div>

          {/* Email */}
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
            />
            {errors.email && <p className="text-red-500 text-[16px]">{errors.email}</p>}
          </div>

          {/* Subject & Phone */}
          <div className="grid grid-cols-2 gap-3">
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
              />
              {errors.subject && <p className="text-red-500 text-[16px]">{errors.subject}</p>}
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
              />
              {errors.phone && <p className="text-red-500 text-[16px]">{errors.phone}</p>}
            </div>
          </div>

          {/* Message */}
          <div className="inputcommon-group">
            <label className="input-lable">
              Message <span className="red-text">*</span>
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Enter Message..."
              className="input-field"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="text-red-500 text-[16px]">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="green-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
