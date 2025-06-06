import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mainheaderlogo from "../assets/images/mainheaderlogo.svg";
import homebanner from "../assets/images/homebanner.png";
import treeone from "../assets/images/treeone.png";
import ourservices from "../assets/images/ourservices.png";
import investsevice from "../assets/images/investsevice.png";
import blogbg from "../assets/images/blogbg.png";
import rectangledemo from "../assets/images/rectangledemo.png";
import investmeanticon from "../assets/images/investmeanticon.svg";
import righttoparrow from "../assets/images/righttoparrow.svg";
import Star from "../assets/images/Star.svg";
import comaicon from "../assets/images/comaicon.svg";
import profileclient from "../assets/images/profileclient.svg";
import maleicon from "../assets/images/male-icon.svg";
import speechicon from "../assets/images/speechicon.svg";
import calendericon from "../assets/images/calendericon.svg";
import footerlogo from "../assets/images/footerlogo.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import linkdin from "../assets/images/linkdin.svg";
import instagram from "../assets/images/instagram.svg";
import maps from "../assets/images/maps.svg";
import phoneicon from "../assets/images/phoneicon.svg";
import mailicon from "../assets/images/mailicon.svg";
import tex from "../assets/images/tex.svg";
import insurance from "../assets/images/insurance.svg";
import welcomeone from "../assets/images/welcomeone.png";
import welcometwo from "../assets/images/welcometwo.png";
import welcomethree from "../assets/images/welcomethree.png";
import servicesone from "../assets/images/servicesone.png";
import servicestwo from "../assets/images/servicestwo.png";
import servicesthree from "../assets/images/servicesthree.png";
import blogfour from "../assets/images/blogfour.png";
import blogthree from "../assets/images/blogthree.png";
import blogtwo from "../assets/images/blogtwo.png";
import blogone from "../assets/images/blogone.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import { Autoplay } from 'swiper/modules';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import Header from '../header';
import Footer from './footer';
import { useNavigate } from 'react-router-dom';


const Home = () => {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const navigate = useNavigate();


  return (
    <div className=" main-homepage">
      {/* <div className='main-header'>

      
       <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home"><img src={mainheaderlogo} alt="mainheaderlogo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto flex main-navbar-data">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Aboutus">About us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#InvestmentServices">Investment Services</NavDropdown.Item>
              <NavDropdown.Item href="#InsuranceServices">
                Insurance Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#TaxServices">Tax Services</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="#News">News</Nav.Link>
            <Nav.Link href="#Blogs">Blogs</Nav.Link>
            <button className='green-button'>Contact Us</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div> */}
  
    {/* <Header /> */}
    
    <div className='main-home-banner relative w-full'>
<img className='w-full ' src={homebanner} alt="homebanner"  />
<Container>
<div className="homebanner-detail">
  <h2> Grow Wealth. <span>Fulfill Your Dreams.</span></h2>
  <p>From Smart Investments to Secure Insurance and Trusted Tax Solutions - WEALTHY TREE is your All-in-one Financial Growth Partner.</p>
  <button onClick={() => navigate('/contactus')} className='white-button'> Start Your Wealth Creation Journey</button>
</div>
</Container>
    </div>
    <div className="welcome-section">
      <div className="wealthy-container">
      <div className="welcome-section-inner">
      <div className="welcome-images">
        {/* <div className="welcomeimages-grid">
          <img src={treeone} alt="treeone" />
          
        </div> */}
        {/* <div className="welcomeimages-grid"></div>
        <div className="welcomeimages-grid"></div>
        <div className="welcomeimages-grid"></div> */}
            <div className="welcomeimages-grid">
      <div className="box box1 welcomeimages-grid-inner">
        <img src={welcomeone} alt="welcomeone" />
      </div>
      <div className="box box2 welcomeimages-grid-inner">
        <img src={welcometwo} alt="welcometwo" />
      </div>
      <div className="box box3 welcomeimages-grid-inner">
        <div className="welcomeimages-grid-inner-text">
          <strong>5+</strong>
          <span>years of<br />experiences</span>
        </div>
      </div>
      <div className="box box4 welcomeimages-grid-inner">
        <img src={welcomethree} alt="welcomethree" />
      </div>
    </div>
      </div>
      <div className="welcome-detail">
        <h2>Welcome to <span>WEALTHY TREE</span></h2>
        <p>At <b>WEALTHY TREE</b>, we believe that financial empowerment goes beyond products and transactions - it's about building long-term partnerships and providing a solid foundation for future generations. Founded with the vision to simplify the financial journey for every person, we offer a comprehensive suite of services including investment solutions, insurance coverage, and tax advisory under one roof.</p>
        <button className='green-button'>Learn more</button>
      </div>
      </div>
      </div>
    </div>
    <div className="ourservices-section">
      <div className="wealthy-container">
        <div className="ourservices-section">
          <div className="ourservices-section-images">
            <img className='w-full' src={ourservices} alt="ourservices" />
          </div>
        <div className="ourservice-inner-data">
<div className="ourservice-title">
  <h2>Our <span>Services</span></h2>
</div>
<div className="ourservice-inner-card">
  <div className="ourservice-inner-card-data">
    <img src={servicesone} alt="servicesone" />
    <div className="serviceinner-card-details">
      <img className='invest-grey-round' src={investmeanticon} alt="investmeanticon" />
      <h3>Investment Services</h3>
      <p> Grow your Wealth through mix & match of different financial products specially curated for you based on your Risk Profile & Unlock Financial Freedom at every stage of life.</p>
      <button   onClick={() => navigate('/InvestmentServices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button>
    </div>
  </div>
  <div className="ourservice-inner-card-data">
    <img src={servicestwo} alt="servicestwo" />
    <div className="serviceinner-card-details">
      <img className='invest-grey-round' src={insurance} alt="insurance" />
      <h3>Insurance Services</h3>
      <p>Protect what matters with Life, Health, and General Insurance plans - customized to secure uncertainities of life and future goals.</p>
      <button onClick={() => navigate('/insuranceservices')} className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button>
    </div>
  </div>
  <div className="ourservice-inner-card-data">
    <img src={servicesthree} alt="servicesthree" />
    <div className="serviceinner-card-details">
      <img className='invest-grey-round' src={tex} alt="tex" />
      <h3>Tax Services</h3>
      <p>Simplify your Tax Filings & all Compliances related to Income Tax, GST, Audit & ROC - all under one roof.</p>
      <button onClick={() => navigate('/taxservices')}  className='flex gap-2 items-center'><span>Read More</span> <span><img src={righttoparrow} alt="righttoparrow" /></span></button>
    </div>
  </div>
</div>
        </div>
      </div>
      </div>
    </div>
    <div className="client-section">
      <div className="">
        <div className="client-sucess-main">
          <div className="client-sucess-title">
            <h2>Our <span> Client Stories</span></h2>
          </div>
          <div className="client-sucess-swiper">
               <Swiper
               modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
         autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
        pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="success-story">
          <div className="rating-section flex justify-between items-center">
            <div className='flex items-center gap-1'>
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
            </div>
            <div>
               <img src={comaicon} alt="comaicon" />
            </div>
          </div>
          <div className="details-story">
            <p>“Shaunakbhai, helped me to recover a forgotten portfolio of my father which also doesn’t have a nomination.I had no idea about that unclaimed investments - now it’s working for me again!”</p>
          </div>
          <div className="profile-client flex items-center gap-3">
            <div className="profile-icon"><img src={profileclient} alt="profileclient" /></div>
            <div className="profile-detail">
              <h4>Harshad Pandya</h4>
              {/* <p>Lorem ipsum</p> */}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="success-story">
          <div className="rating-section flex justify-between items-center">
            <div className='flex items-center gap-1'>
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
            </div>
            <div>
               <img src={comaicon} alt="comaicon" />
            </div>
          </div>
          <div className="details-story">
            <p>“Their retirement planning is spot-on. I now have clarity and confidence in my future.”</p>
          </div>
          <div className="profile-client flex items-center gap-3">
            <div className="profile-icon"><img src={profileclient} alt="profileclient" /></div>
            <div className="profile-detail">
              <h4>Kshitij Patel</h4>
              {/* <p>Lorem ipsum</p> */}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="success-story">
          <div className="rating-section flex justify-between items-center">
            <div className='flex items-center gap-1'>
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
            </div>
            <div>
               <img src={comaicon} alt="comaicon" />
            </div>
          </div>
          <div className="details-story">
            <p>“The team provided me with a personalized mutual fund strategy & tax planning for my ITR filings that really worked. Great support and insights.”</p>
          </div>
          <div className="profile-client flex items-center gap-3">
            <div className="profile-icon"><img src={profileclient} alt="profileclient" /></div>
            <div className="profile-detail">
              <h4>Saumil Vyas</h4>
              {/* <p>Lorem ipsum</p> */}
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide><div className="success-story">
          <div className="rating-section flex justify-between items-center">
            <div className='flex items-center gap-1'>
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
            </div>
            <div>
               <img src={comaicon} alt="comaicon" />
            </div>
          </div>
          <div className="details-story">
            <p>“Thanks to WEALTHY TREE, I finally got my will and estate planning done. It feels good to be prepared.”</p>
          </div>
          <div className="profile-client flex items-center gap-3">
            <div className="profile-icon"><img src={profileclient} alt="profileclient" /></div>
            <div className="profile-detail">
              <h4>D P Thakkar</h4>
              {/* <p>Lorem ipsum</p> */}
            </div>
          </div>
        </div></SwiperSlide>
      <SwiperSlide><div className="success-story">
          <div className="rating-section flex justify-between items-center">
            <div className='flex items-center gap-1'>
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
              <img src={Star} alt="Star" />
            </div>
            <div>
               <img src={comaicon} alt="comaicon" />
            </div>
          </div>
          <div className="details-story">
            <p>“One-stop solution for all my financial needs & for my company tax filings. Highly professional and reliable.”</p>
          </div>
          <div className="profile-client flex items-center gap-3">
            <div className="profile-icon"><img src={profileclient} alt="profileclient" /></div>
            <div className="profile-detail">
              <h4> R K Agrawal</h4>
              {/* <p>Lorem ipsum</p> */}
            </div>
          </div>
        </div></SwiperSlide>
    
    </Swiper>
          </div>
        </div>
      </div>
    </div>
    <div className="blog-section relative"
      style={{
    backgroundImage: `url(${blogbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '680px',
    width: '100%',
  }}

    >
      {/* <img src={blogbg} alt="blogbg" /> */}
      <div className="wealthy-container">
      <div className="blog-section-inner ">
        <div className="ourservice-title blogs-title ">
  <h2 className=''>Blogs</h2>
</div> 
<div className="blog-card">
  <div className="blog-card-inner">
    <img src={blogone} alt="blogone" />
    <div className="blog-detail-card ">
<div className="profileanddata">
  <div className="profile-blog">
    <img src={maleicon} alt="male-icon" />
    <h3>By : Admin</h3>
  </div>
  <div className="profile-blog">
    <img src={speechicon} alt="speechicon" />
    <h3>comment</h3>
  </div>
</div>
<h4>Top 5 Mistakes New Investors Make</h4>
<p>Avoid common pitfalls and start your financial journey on the right track.</p>
       {/* <button className='green-button'>Contact Us</button> */}
    </div>
  </div>
  <div className="blog-card-inner">
    <img src={blogtwo} alt="blogtwo" />
    <div className="blog-detail-card ">
<div className="profileanddata">
  <div className="profile-blog">
    <img src={maleicon} alt="male-icon" />
    <h3>By : Admin</h3>
  </div>
  <div className="profile-blog">
    <img src={speechicon} alt="speechicon" />
    <h3>comment</h3>
  </div>
</div>
<h4>Why Goal-Based Planning Beats Traditional Saving</h4>
<p> Discover how purpose-driven investing can help you reach milestones faster.</p>
       {/* <button className='green-button'>Contact Us</button> */}
    </div>
  </div>
  <div className="blog-card-inner">
    <img src={blogthree} alt="blogthree" />
    <div className="blog-detail-card ">
<div className="profileanddata">
  <div className="profile-blog">
    <img src={maleicon} alt="male-icon" />
    <h3>By : Admin</h3>
  </div>
  <div className="profile-blog">
    <img src={speechicon} alt="speechicon" />
    <h3>comment</h3>
  </div>
</div>
<h4>Uncovering the Truth About “Unclaimed” Investments</h4>
<p>You might have hidden wealth you’re not even aware of - here’s how to find it.</p>
       {/* <button className='green-button'>Contact Us</button> */}
    </div>
  </div>
  <div className="blog-card-inner">
    <img src={blogfour} alt="blogfour" />
    <div className="blog-detail-card ">
<div className="profileanddata">
  <div className="profile-blog">
    <img src={maleicon} alt="male-icon" />
    <h3>By : Admin</h3>
  </div>
  <div className="profile-blog">
    <img src={speechicon} alt="speechicon" />
    <h3>comment</h3>
  </div>
</div>
<h4>Why Asset Allocation is necessary</h4>
<p>Diversifying across multiple asset classes can balance risk and returns better</p>
       {/* <button className='green-button'>Contact Us</button> */}
    </div>
  </div>
</div>
      </div>
      </div>
    </div>
    <div className="latest-news-section">
       <div className="client-sucess-title">
            <h2>Latest News</h2>
          </div>
          <div className="latestnews-swiper">
              <Swiper
              modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
         autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
        pagination={{ clickable: true }}
          breakpoints={{
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1600: {
      slidesPerView: 3.4,
    },
    1680: {
      slidesPerView: 3.5,
    },
    1792: {
      slidesPerView: 3.8,
    },
  }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="latestnews-card">
          <img src={rectangledemo} alt="rectangledemo" />
          <h3>A financial inclusion plan for the whole sector</h3>
          <div className="card-news-date">
            <img src={calendericon} alt="calendericon" />
            <h3>March 20, 2025</h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="latestnews-card">
          <img src={rectangledemo} alt="rectangledemo" />
          <h3>A financial inclusion plan for the whole sector</h3>
          <div className="card-news-date">
            <img src={calendericon} alt="calendericon" />
            <h3>March 20, 2025</h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="latestnews-card">
          <img src={rectangledemo} alt="rectangledemo" />
          <h3>A financial inclusion plan for the whole sector</h3>
          <div className="card-news-date">
            <img src={calendericon} alt="calendericon" />
            <h3>March 20, 2025</h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="latestnews-card">
          <img src={rectangledemo} alt="rectangledemo" />
          <h3>A financial inclusion plan for the whole sector</h3>
          <div className="card-news-date">
            <img src={calendericon} alt="calendericon" />
            <h3>March 20, 2025</h3>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="latestnews-card">
          <img src={rectangledemo} alt="rectangledemo" />
          <h3>A financial inclusion plan for the whole sector</h3>
          <div className="card-news-date">
            <img src={calendericon} alt="calendericon" />
            <h3>March 20, 2025</h3>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
          </div>
    </div>
    {/* <div className="footer-main">
      <div className="wealthy-container">
        <div className="footer-inner-detail">
          <div className="footer-detail-common">
            <div className="logo-footer">
              <a href="#"> <img src={footerlogo} alt="footerlogo" /></a>
             
            </div>
             <p>Lorem ipsum dolor sit amet, consecte Lorem consecte tuer adipiscing elitsed diam nonummy.</p>
          <div className="social-media">
            <ul>
              <li>
                <a href=""><img src={facebook} alt="facebook" /></a>
              </li>
              <li>
                <a href=""><img src={twitter} alt="twitter" /></a>
              </li>
              <li>
                <a href=""><img src={linkdin} alt="linkdin" /></a>
              </li>
              <li>
                <a href=""><img src={instagram} alt="instagram" /></a>
              </li>
            </ul>
          </div>
          </div>
          <div className="footer-detail-common">
            <div className="footer-title-inner">
              <h3>Quick Links</h3>
            </div>
            <div className="footer-manu">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Blogs</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-detail-common">
            <div className="footer-title-inner">
              <h3>Useful Links</h3>
            </div>
            <div className="footer-manu">
              <ul>
                <li><a href="#">Mutual fund research</a></li>
                <li><a href="#">Mutual fund research</a></li>
                <li><a href="#">Mutual fund research</a></li>
                
              </ul>
            </div>
          </div>
          <div className="footer-detail-common">
            <div className="footer-title-inner">
              <h3>Contact us</h3>
            </div>
            <div className="footer-manu">
              <ul>
                <li><a href="#"><span><img src={maps} alt="maps" /></span>2715 Ash Dr. San Jose, South <br /> Dakota 83475</a></li>
                <li className="flex items-center gap-2">
                <span>
                <img src={phoneicon} alt="phoneicon" />
                </span>
                 <span>
                 <a href="tel:+1234567890">+1 234 567 890</a>
                 <a href="tel:+0987654321">+0 987 654 321</a>
                 </span>
                 </li>
                 <li><a href="mailto:trungkienspktnd@gamail.com"><span><img src={mailicon} alt="mailicon" /></span>trungkienspktnd@gamail.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
      </div>
      <div className="wealthy-container">
        <div className="footer-copyright-detail">
          <p> © 2023  Company. All Right Reserved.</p>
        </div>
      </div>
    </div> */}
    <Footer/>
    </div>
  );
};

export default Home;
