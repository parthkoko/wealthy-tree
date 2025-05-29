import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../header';
import Footer from './footer';
import bgabout from "../assets/images/bgabout.png";
import investsevice from "../assets/images/investsevice.png";
import services from "../assets/images/services.png";
import investmeanticon from "../assets/images/investmeanticon.svg";
import righttoparrow from "../assets/images/righttoparrow.svg";
const InvestmentServices = () => {
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
              <h1 className="text-4xl font-bold">Investment Services</h1>
              <p className="text-lg mt-4 text-gray-600">
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
              <h3>Investment Services</h3>
              <p>Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod laoree.</p>
              <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button>
            </div>
          </div>
        <div className="ourservice-inner-card-data">
            <img src={investsevice} alt="investsevice" />
            <div className="serviceinner-card-details">
              <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
              <h3>Investment Services</h3>
              <p>Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod laoree.</p>
              <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button>
            </div>
          </div>
        <div className="ourservice-inner-card-data">
            <img src={investsevice} alt="investsevice" />
            <div className="serviceinner-card-details">
              <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
              <h3>Investment Services</h3>
              <p>Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod laoree.</p>
              <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button>
            </div>
          </div>
        <div className="ourservice-inner-card-data">
            <img src={investsevice} alt="investsevice" />
            <div className="serviceinner-card-details">
              <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
              <h3>Investment Services</h3>
              <p>Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod laoree.</p>
              <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button>
            </div>
          </div>
        <div className="ourservice-inner-card-data">
            <img src={investsevice} alt="investsevice" />
            <div className="serviceinner-card-details">
              <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
              <h3>Investment Services</h3>
              <p>Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod laoree.</p>
              <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button>
            </div>
          </div>
        <div className="ourservice-inner-card-data">
            <img src={investsevice} alt="investsevice" />
            <div className="serviceinner-card-details">
              <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
              <h3>Investment Services</h3>
              <p>Lorem ipsum dolor sit amet, consecte Lorem ipsum dolor sit amet, consecte tuer adipiscing elitsed diam nonummy nibh euismod laoree.</p>
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

export default InvestmentServices;
