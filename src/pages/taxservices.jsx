import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../header';
import Footer from './footer';
import bgabout from "../assets/images/bgabout.png";
import investsevice from "../assets/images/investsevice.png";
import taxbg from "../assets/images/taxbg.png";
import investmeanticon from "../assets/images/investmeanticon.svg";
import righttoparrow from "../assets/images/righttoparrow.svg";

const TaxServices = () => {
  return (
    <>
    
      {/* <Header /> */}
      <div className="about-banner-section py-16 text-center  bg-gray-100"
               style={{
                backgroundImage: `url(${taxbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '600px',
                width: '100%',
              }}
              >
              <h1 className="text-[70px] font-bold text-[#fff]">Tax Services</h1>
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
                          <h3>Income Tax</h3>
                          <p>Expert income tax planning, filing, and compliance to optimize your tax liabilities.</p>
                          <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button>
                        </div>
                      </div>
                    <div className="ourservice-inner-card-data">
                        <img src={investsevice} alt="investsevice" />
                        <div className="serviceinner-card-details">
                          <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
                          <h3>GST</h3>
                          <p>Complete GST registration, filing, and advisory services to keep your business compliant.</p>
                          <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button>
                        </div>
                      </div>
                    <div className="ourservice-inner-card-data">
                        <img src={investsevice} alt="investsevice" />
                        <div className="serviceinner-card-details">
                          <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
                          <h3>ROC <span>(Registrar of Companies)</span></h3>
                          <p>Company compliance, filings, annual returns, and director-related services under one roof.</p>
                          <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button>
                        </div>
                      </div>
                    <div className="ourservice-inner-card-data">
                        <img src={investsevice} alt="investsevice" />
                        <div className="serviceinner-card-details">
                          <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
                          <h3>Audit</h3>
                          <p>Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod laoree.</p>
                          <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button>
                        </div>
                      </div>
                    <div className="ourservice-inner-card-data">
                        <img src={investsevice} alt="investsevice" />
                        <div className="serviceinner-card-details">
                          <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
                          <h3>Other Financial Services</h3>
                          <p>Customized financial solutions including advisory, and compliance services for individuals and enterprises.</p>
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

export default TaxServices;
