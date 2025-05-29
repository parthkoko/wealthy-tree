import React from "react";

function ContactForm() {
  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-2">Have any Questions?</h2>
      <p className="text-gray-400 mb-6 text-[14px]">
        Lorem ipsum dolor sit amet, consecte lorem ipsumLorem ipsum dolor sit amet, consecte Lorem ipsum.
      </p>
    <div className="contactus-form">
        <form className="space-y-4">
        {/* Name */}
        <div className="inputcommon-group">
          <label className="input-lable" >Your Name </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input-field"
          />
        </div>

        {/* Email */}
        <div className="inputcommon-group">
          <label className="input-lable">Your Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="input-field"
          />
        </div>

        {/* Subject & Phone (2 columns) */}
       <div className="grid grid-cols-2 gap-3  ">
          <div className="inputcommon-group">
            <label className="input-lable">Subject</label>
            <input
              type="text"
              placeholder="Enter Subject"
              className="input-field "
            />
          </div>
          <div className="inputcommon-group">
            <label className="input-lable">Phone Number</label>
            <input
              type="tel"
              placeholder="Your Number"
              className="input-field "
            />
          </div>
        </div>

        {/* Message */}
        <div className="inputcommon-group">
          <label className="input-lable">Message</label>
          <textarea
            rows="5"
            placeholder="Enter Message..."
            className="input-field"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="green-button"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}

export default ContactForm;
