import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../header';
import Footer from './footer';
import bgabout from "../assets/images/bgabout.png";
import contactbg from "../assets/images/contactbg.png";
import ContactForm from './ContactForm';

const ContactUs = () => {

     useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    
      {/* <Header /> */}
      <div className="about-banner-section py-16 text-center  bg-gray-100"
               style={{
                backgroundImage: `url(${contactbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '600px',
                width: '100%',
              }}
              >
              <h1 className="text-[70px] font-bold text-[#fff]">Contact Us</h1>
              <p className="text-[26px] mt-4 text-[#fff]">
                Home / Contact us
              </p>
            </div>
<div className="contact-data-block">
    <div className="wealthy-container">
      <div className="contactform-block">
     <div className="contact-form-main">
      <ContactForm />
    </div>
    <div className="contact-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.681098632812!2d72.53499007380907!3d23.10876701310901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83d6ac87abcd%3A0x687cb1f034cbfd85!2skoko%20Studio!5e0!3m2!1sen!2sin!4v1748519752878!5m2!1sen!2sin"
        width="600"
        height="570px"
        style={{ border: 0 ,borderRadius: '20px' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    </div>
    </div>
</div>
      <Footer />
    </>
  );
};

export default ContactUs;
