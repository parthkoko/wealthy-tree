import React, { useEffect } from "react";
import contactbg from "../assets/images/contactbg.png";
import ContactForm from "./ContactForm";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="about-banner-section py-16 text-center bg-gray-100 relative"
        style={{
          backgroundImage: `url(${contactbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
          width: "100%",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-70"></div>

        <div className="relative z-10">
          <h1 className="text-[70px] font-bold text-[#fff]">Contact Us</h1>
          {/* <p className="text-[26px] mt-4 text-[#fff]">Home / Contact us</p> */}
        </div>
      </div>
      <div className="contact-data-block">
        <div className="wealthy-container">
          <div className="contactform-block">
            <div className="contact-form-main">
              <ContactForm />
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.795673571575!2d72.56830517616493!3d23.031273316001826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84592ebaaaab%3A0xb7394aa27743e449!2sSun%20Westbank!5e0!3m2!1sen!2sin!4v1750053678673!5m2!1sen!2sin"
                width="600"
                height="570px"
                style={{ border: 0, borderRadius: "20px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
