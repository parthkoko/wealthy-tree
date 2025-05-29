import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../header';
import Footer from './footer';
import bgabout from "../assets/images/bgabout.png";
import welcometrerone from "../assets/images/welcometrerone.png";
import weltreetwo from "../assets/images/weltreetwo.png";

const Aboutus = () => {
  return (
    <>
    
      {/* <Header /> */}
      <div className="about-banner-section py-16 text-center  bg-gray-100"
         style={{
          backgroundImage: `url(${bgabout})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          width: '100%',
        }}
        >
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-4 text-gray-600">
          Home / About Us
        </p>
      </div>
      <div className="welcometree-section">
        <div className="wealthy-container">
        <div className="welcometree-block">
          <div className="treeblock-images">
            <img className='relative' src={welcometrerone} alt="welcometrerone" />
            <img className='welcomeimges-inner' src={weltreetwo} alt="weltreetwo" />
            <div className="round-blue-badge">
              <p>5+<span>Experiences</span></p>
            </div>
          </div>
          <div className="treeblock-details">
            <div className="treeblock-title-common">
              <h2>Welcome To Wealthy Tree</h2>
              <p>Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod laoree. Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod laoree.Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod laoree.Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod.</p>
              <p>Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consecte
Lorem ipsum dolor sit amet,  </p>
            </div>
            <p></p>
          </div>
        </div>
        </div>
      </div>

   <div className="ourmission-section">
    <div className="wealthy-container">
      <div className="ourmission-block">
        <div className="treeblock-details">
            <div className="treeblock-title-common">
              <h2>Our Mission</h2>
              <p>Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod laoree. Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod laoree.Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod laoree.Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod.</p>
             
            </div>
            <p></p>
          </div>
          <div className="treeblock-images">
            <img className='relative' src={welcometrerone} alt="welcometrerone" />
          </div>
          
        </div>
    </div>
   </div>
<div className="ourvision-section">
  <div className="wealthy-container">
      <div className="ourvision-block">
          <div className="treeblock-images">
            <img className='relative' src={welcometrerone} alt="welcometrerone" />
          </div>
          <div className="treeblock-details">
            <div className="treeblock-title-common">
              <h2>Our Vision</h2>
              <p>Lorem ipsum dolor sit amet, consecteLorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod laoree. Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod laoree.Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod laoree.Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod.</p>
             
            </div>
            <p></p>
          </div>
        </div>
    </div>
</div>
      <Footer />
    </>
  );
};

export default Aboutus;
