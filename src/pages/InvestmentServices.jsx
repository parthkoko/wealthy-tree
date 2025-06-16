import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../header';
import Footer from './footer';
import bgabout from "../assets/images/bgabout.png";
import investsevice from "../assets/images/investsevice.png";
import services from "../assets/images/services.png";
import investmeantbg from "../assets/images/investmeantbg.png";
import investmeanticon from "../assets/images/investmeanticon.svg";
import righttoparrow from "../assets/images/righttoparrow.svg";
const InvestmentServices = () => {


   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    
      {/* <Header /> */}
      <div className="about-banner-section py-16 text-center  bg-gray-100"
               style={{
                backgroundImage: `url(${investmeantbg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '600px',
                width: '100%',
              }}
              >
              <h1 className="text-[70px] font-bold text-[#fff]">Investment Services</h1>
              <p className="text-[26px] mt-4 text-gray-600 text-[#fff]">
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
              <h3>Mutual Fund</h3>
              <p>Diverse, research-backed mutual fund portfolios tailored to your risk profile and financial goals.</p>
              {/* <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
            </div>
          </div>
        <div className="ourservice-inner-card-data">
            <img src={investsevice} alt="investsevice" />
            <div className="serviceinner-card-details">
              <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
              <h3>Bonds</h3>
              <p>Fixed-income securities that provide steady returns with minimal risk - ideal for conservative investors.</p>
              {/* <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
            </div>
          </div>
        <div className="ourservice-inner-card-data">
            <img src={investsevice} alt="investsevice" />
            <div className="serviceinner-card-details">
              <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
              <h3>Fixed Deposits</h3>
              <p>Safe and stable investment option with guaranteed returns and flexible tenures.</p>
              {/* <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
            </div>
          </div>
        <div className="ourservice-inner-card-data">
            <img src={investsevice} alt="investsevice" />
            <div className="serviceinner-card-details">
              <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
              <h3>PMS <span>(Portfolio Management Services)</span></h3>
              <p>Professionally managed, customized portfolios for high-net-worth individuals seeking personalized strategies.</p>
              {/* <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
            </div>
          </div>
        <div className="ourservice-inner-card-data">
            <img src={investsevice} alt="investsevice" />
            <div className="serviceinner-card-details">
              <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
              <h3>AIF <span>(Alternative Investment Funds)</span></h3>
              <p>Exclusive investment vehicles for sophisticated investors - includes private equity, hedge funds, and more.</p>
              {/* <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
            </div>
          </div>
        <div className="ourservice-inner-card-data">
            <img src={investsevice} alt="investsevice" />
            <div className="serviceinner-card-details">
              <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
              <h3>SIF <span>(Specialised Investment Funds)</span></h3>
              <p title='A Specialised Investment Fund (SIF) is a new type of investment fund in India designed to bridge the gap between mutual funds and portfolio management services (PMS). SIFs are primarily targeted at sophisticated investors with a higher risk appetite. '>A Specialised Investment Fund (SIF) is a new type of investment fund in India designed to bridge the gap between mutual funds and portfolio management services (PMS). SIFs are primarily targeted at sophisticated investors with a higher risk appetite. </p>
              {/* <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
            </div>
          </div>
        <div className="ourservice-inner-card-data">
            <img src={investsevice} alt="investsevice" />
            <div className="serviceinner-card-details">
              <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
              <h3>Retirement Planning</h3>
              <p>Comprehensive planning to ensure your post-retirement life is financially secure and stress-free.</p>
              {/* <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
            </div>
          </div>
        <div className="ourservice-inner-card-data">
            <img src={investsevice} alt="investsevice" />
            <div className="serviceinner-card-details">
              <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
              <h3>Goal-Based Planning</h3>
              <p>Plan for specific life milestones like education, marriage, or a dream home with precision-driven strategies.</p>
              {/* <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
            </div>
          </div>
        <div className="ourservice-inner-card-data">
            <img src={investsevice} alt="investsevice" />
            <div className="serviceinner-card-details">
              <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
              <h3>Claim the Unclaimed</h3>
              <p>Recover lost or forgotten investments of yours & your Ancestors and make dormant assets work for you again.</p>
              {/* <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
            </div>
          </div>
        <div className="ourservice-inner-card-data">
            <img src={investsevice} alt="investsevice" />
            <div className="serviceinner-card-details">
              <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
              <h3>Loan Against Mutual Fund</h3>
              <p>Get liquidity without liquidating - borrow against your mutual fund holdings at attractive rates.</p>
              {/* <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
            </div>
          </div>
        <div className="ourservice-inner-card-data">
            <img src={investsevice} alt="investsevice" />
            <div className="serviceinner-card-details">
              <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
              <h3>Will & Estate Planning</h3>
              <p>Secure your legacy with structured, legally sound estate plans and wills tailored to your family’s needs.</p>
              {/* <button className='flex gap-1 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button> */}
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
