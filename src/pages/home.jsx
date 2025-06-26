import React, { useEffect } from "react";
import mainhomebanner from "../assets/images/main-home-banner.png";
import ourservices from "../assets/images/ourservices.png";
import blogbg from "../assets/images/blogbg.png";
import rectangledemo from "../assets/images/rectangledemo.png";
import investmeanticon from "../assets/icons/investmeanticon.svg";
import righttoparrow from "../assets/icons/righttoparrow.svg";
import Star from "../assets/icons/Star.svg";
import comaicon from "../assets/icons/comaicon.svg";
import maleicon from "../assets/icons/male-icon.svg";
import speechicon from "../assets/icons/speechicon.svg";
import calendericon from "../assets/icons/calendericon.svg";
import texticon from "../assets/icons/texticon.svg";
import insurance from "../assets/icons/insurance.svg";
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
import welcomewealthyfour from "../assets/images/welcomewealthyfour.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import SuccessStorySlide from "../components/SuccessStorySlide";
import HomeBannerSlider from "../components/HomeBannerSlider";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const successStories = [
    {
      name: "Harshad Pandya",
      review:
        "“Shaunakbhai helped me recover a forgotten portfolio of my father which had no nomination. Now it’s working for me again!”",
    },
    {
      name: "Kshitij Patel",
      review:
        "“Their retirement planning is spot-on. I now have clarity and confidence in my future.”",
    },
    {
      name: "Saumil Vyas",
      review:
        "“The team provided me with a personalized mutual fund strategy & tax planning for my ITR filings that really worked. Great support and insights.”",
    },
    {
      name: "D P Thakkar",
      review:
        "“Thanks to WEALTHY TREE, I finally got my will and estate planning done. It feels good to be prepared.”",
    },
    {
      name: "R K Agrawal",
      review:
        "“One-stop solution for all my financial needs & company tax filings. Highly professional and reliable.”",
    },
  ];

  return (
    <div className=" main-homepage">
      <div className="main-home-banner relative w-full">
        <img
          className="w-full h-[600px] object-cover"
          src={mainhomebanner}
          alt="mainhomebanner"
        />
   
        <HomeBannerSlider />
      </div>
      <div className="welcome-section">
        <div className="wealthy-container">
          <div className="welcome-section-inner">
            <div className="welcome-images">
              <div className="welcomeimages-grid">
                <div className="box box1 welcomeimages-grid-inner">
                  <img src={welcomeone} alt="welcomeone" />
                </div>
                <div className="box box2 welcomeimages-grid-inner">
                  <img src={welcometwo} alt="welcometwo" />
                </div>
                <div className="box box3 welcomeimages-grid-inner">
                  <div className="welcomeimages-grid-inner-text">
                  <img src={welcomewealthyfour} alt="welcomewealthyfour" />
                  </div>
                </div>
                <div className="box box4 welcomeimages-grid-inner">
                  <img src={welcomethree} alt="welcomethree" />
                </div>
              </div>
            </div>
            <div className="welcome-detail">
              <h2>
                Welcome to <span>WEALTHY TREE</span>
              </h2>
              <p>
                At <b>WEALTHY TREE</b>, we believe that financial empowerment
                goes beyond products and transactions - it's about building
                long-term partnerships and providing a solid foundation for
                future generations. Founded with the vision to simplify the
                financial journey for every person, we offer a comprehensive
                suite of services including investment solutions, insurance
                coverage, and tax advisory under one roof.
              </p>
              <button
                onClick={() => navigate("/about")}
                className="green-button"
              >
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ourservices-section">
        <div className="wealthy-container">
          <div className="ourservices-section">
            <div className="ourservices-section-images">
              <img className="w-full" src={ourservices} alt="ourservices" />
            </div>
            <div className="ourservice-inner-data">
              <div className="ourservice-title">
                <h2>
                  Our <span>Services</span>
                </h2>
              </div>
              <div className="ourservice-inner-card">
                <div className="ourservice-inner-card-data">
                  <img src={servicesone} alt="servicesone" />
                  <div className="serviceinner-card-details">
                    <img
                      className="invest-grey-round"
                      src={investmeanticon}
                      alt="investmeanticon"
                    />
                    <h3>Investment Services</h3>
                    <p>
                      {" "}
                      Grow your Wealth through mix & match of different
                      financial products specially curated for you based on your
                      Risk Profile & Unlock Financial Freedom at every stage of
                      life.
                    </p>
                    <button
                      onClick={() => navigate("/InvestmentServices")}
                      className="flex gap-2 items-center"
                    >
                      <span>Read More</span>{" "}
                      <span>
                        <img src={righttoparrow} alt="righttoparrow" />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="ourservice-inner-card-data">
                  <img src={servicestwo} alt="servicestwo" />
                  <div className="serviceinner-card-details">
                    <img
                      className="invest-grey-round"
                      src={insurance}
                      alt="insurance"
                    />
                    <h3>Insurance Services</h3>
                    <p>
                      Protect what matters with Life, Health, and General
                      Insurance plans - customized to secure uncertainities of
                      life and future goals.
                    </p>
                    <button
                      onClick={() => navigate("/insuranceservices")}
                      className="flex gap-2 items-center"
                    >
                      <span>Read More</span>{" "}
                      <span>
                        <img src={righttoparrow} alt="righttoparrow" />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="ourservice-inner-card-data">
                  <img src={servicesthree} alt="servicesthree" />
                  <div className="serviceinner-card-details">
                    <img className="invest-grey-round" src={texticon} alt="texticon" />
                    <h3>Tax Services</h3>
                    <p>
                      Simplify your Tax Filings & all Compliances related to
                      Income Tax, GST, Audit & ROC - all under one roof.
                    </p>
                    <button
                      onClick={() => navigate("/taxservices")}
                      className="flex gap-2 items-center"
                    >
                      <span>Read More</span>{" "}
                      <span>
                        <img src={righttoparrow} alt="righttoparrow" />
                      </span>
                    </button>
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
              <h2>Testimonials</h2>
            </div>
            {/* <div className="p-4 md:p-8 lg:px-16 py-10"> */}
            <div className="p-4 md:p-8 lg:px-16 py-10 swiper-horizontal">
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={3}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2.1 },
                  1440: { slidesPerView: 3 },
                  1600: { slidesPerView: 3 },
                  1792: { slidesPerView: 3 },
                  1920: { slidesPerView: 3 },
                }}
              >
                {successStories.map((story, index) => (
                  <SwiperSlide key={index}>
                    <SuccessStorySlide
                      name={story.name}
                      review={story.review}
                      ratingIcon={Star}
                      quoteIcon={comaicon}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div
        className="blog-section relative"
        style={{
          backgroundImage: `url(${blogbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "680px",
          width: "100%",
        }}
      >
        {/* <img src={blogbg} alt="blogbg" /> */}
        <div className="wealthy-container">
          <div className="blog-section-inner ">
            <div className="ourservice-title blogs-title ">
              <h2 className="">Blogs</h2>
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
                  <p>
                    Avoid common pitfalls and start your financial journey on
                    the right track.
                  </p>
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
                  <p>
                    {" "}
                    Discover how purpose-driven investing can help you reach
                    milestones faster.
                  </p>
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
                  <p>
                    You might have hidden wealth you’re not even aware of -
                    here’s how to find it.
                  </p>
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
                  <p>
                    Diversifying across multiple asset classes can balance risk
                    and returns better
                  </p>
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
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
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
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
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
    </div>
  );
};

export default Home;
