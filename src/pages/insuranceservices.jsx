import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../header';
import Footer from './footer';
import bgabout from "../assets/images/bgabout.png";
import investsevice from "../assets/images/investsevice.png";
import insurancebg from "../assets/images/insurancebg.png";
import investmeanticon from "../assets/images/investmeanticon.svg";
import righttoparrow from "../assets/images/righttoparrow.svg";

const InsuranceServices = () => {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    
      {/* <Header /> */}
      <div className="about-banner-section py-16 text-center  bg-gray-100"
               style={{
                backgroundImage: `url(${insurancebg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '600px',
                width: '100%',
              }}
              >
              <h1 className="text-[70px] font-bold text-[#fff]">Insurance Services</h1>
              <p className="text-[26px] mt-4 text-[#fff]">
                Home / Services
              </p>
            </div>
             <div className="investmeant-services">
                <div className="wealthy-container">
                  <div className="investmeant-services-innerdetail">
                    <div className="ourservice-inner-card-data">
                        <img src={investsevice} alt="investsevice" />
                        <div className="serviceinner-card-details">
                          <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
                          <h3>Life Insurance</h3>
                          <p>Ensure your family’s financial safety even in your absence. We help you choose the right term and endowment plans.</p>
                          <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button>
                        </div>
                      </div>
                    <div className="ourservice-inner-card-data">
                        <img src={investsevice} alt="investsevice" />
                        <div className="serviceinner-card-details">
                          <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
                          <h3>Health Insurance</h3>
                          <p>Stay protected from rising medical costs with customized health coverage that fits your lifestyle.</p>
                          <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button>
                        </div>
                      </div>
                    <div className="ourservice-inner-card-data">
                        <img src={investsevice} alt="investsevice" />
                        <div className="serviceinner-card-details">
                          <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
                          <h3>General Insurance</h3>
                          <p>Safeguard your assets - home, travel, vehicles, and more - with the right general insurance plans.</p>
                          <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button>
                        </div>
                      </div>
                   
                  </div>
                </div>
               </div>

   

      <Footer />
    </>
  );
};

export default InsuranceServices;
