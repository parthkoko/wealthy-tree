import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "../header";
import Footer from "./footer";
import bgabout from "../assets/images/bgabout.png";
import welcometrerone from "../assets/images/welcometrerone.png";
import weltreetwo from "../assets/images/weltreetwo.png";
import aboutbg from "../assets/images/aboutbg.png";
import ourmission from "../assets/images/ourmission.svg";
import ourvision from "../assets/images/ourvision.svg";

const Aboutus = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <Header /> */}
      <div
        className="about-banner-section py-16 text-center bg-gray-100 relative"
        style={{
          backgroundImage: `url(${aboutbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
          width: "100%",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>

        <div className="relative z-10">
          <h1 className="text-[70px] font-bold text-[#fff]">
            About WEALTHY TREE
          </h1>
          <p className="text-[26px] mt-4 text-[#fff]">
            Nurturing Wealth. Fulfilling Dreams.
          </p>
        </div>
      </div>
      <div className="welcometree-section">
        <div className="wealthy-container">
          <div className="welcometree-block">
            <div className="treeblock-images">
              <img
                className="relative"
                src={welcometrerone}
                alt="welcometrerone"
              />
              <img
                className="welcomeimges-inner"
                src={weltreetwo}
                alt="weltreetwo"
              />
              <div className="round-blue-badge">
                <p>
                  5+<span>Experiences</span>
                </p>
              </div>
            </div>
            <div className="treeblock-details-about">
              <div className="treeblock-title-common-about">
                <h2>
                  About <span>WEALTHY TREE</span>
                </h2>
                <p>
                  WEALTHY TREE was founded with a mission to simplify financial
                  management for individuals, families, and businesses. Our team
                  brings decades of combined expertise in wealth management,
                  insurance solutions, and taxation compliance.{" "}
                </p>
                <p>
                  We don’t just manage wealth - we nurture it. Every solution we
                  offer is designed around your life goals, values and to grow
                  your business with smoother tax compliances. With a
                  transparent, client-first approach, our goal is to deliver
                  peace of mind, clarity, and long-term results. At WEALTHY
                  TREE, your ambitions are the seeds - and we help them nurture
                  & grow.{" "}
                </p>
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
                <img src={ourmission} alt="ourmission" />
                <h2>Our Mission</h2>
                <p>
                  To empower individuals with tailored financial solutions that
                  help them grow, protect, and preserve their wealth through all
                  phases of life. To empower Individual’s Businesses with growth
                  & smoother compliances.
                </p>
              </div>
            </div>
            <div className="treeblock-details">
              <div className="treeblock-title-common">
                <img src={ourvision} alt="ourvision" />
                <h2>Our Vision</h2>
                <p>
                  To be the most trusted financial partner for every Indian/NRI
                  - rooted in integrity, driven by results, and committed to
                  legacy-building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="ourvision-section">
  <div className="wealthy-container">
      <div className="ourvision-block">
          <div className="treeblock-images">
            <img className='relative' src={welcometrerone} alt="welcometrerone" />
          </div>
          <div className="treeblock-details">
           
            <p></p>
          </div>
        </div>
    </div>
</div> */}
      <Footer />
    </>
  );
};

export default Aboutus;
