import React from "react";
import footerlogo from "../assets/icons/footerlogo.svg";
import facebook from "../assets/icons/facebook.svg";
import twitter from "../assets/icons/twitter.svg";
import linkdin from "../assets/icons/linkdin.svg";
import instagram from "../assets/icons/instagram.svg";
import maps from "../assets/icons/maps.svg";
import phoneicon from "../assets/icons/phoneicon.svg";
import mailicon from "../assets/icons/mailicon.svg";
import { Link } from "react-router-dom";

import mainheaderlogo from "../assets/icons/mainheaderlogo.svg";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="wealthy-container">
        <div className="footer-inner-detail">
          <div className="footer-detail-common">
            <div className="logo-footer">
              <a href="/">
                <img src={footerlogo} alt="footerlogo" />
              </a>
            </div>
            <p>
              Wealthy Tree is your trusted financial partner, offering expert
              solutions in investment planning, insurance advisory, and tax
              consultation.
            </p>
            <div className="social-media">
              {/* <ul>
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
            </ul> */}
            </div>
          </div>
          <div className="footer-detail-common">
            <div className="footer-title-inner">
              <h3>Quick Links</h3>
            </div>
            <div className="footer-manu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                {/* <li><Link to="/news">News</Link></li>
                <li><Link to="/blogs">Blogs</Link></li> */}
                <li>
                  <Link to="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-detail-common">
            <div className="footer-title-inner">
              <h3>Useful Links</h3>
            </div>
            <div className="footer-manu">
              <ul>
                <li>
                  <Link to="/investmentservices">Investment Services</Link>
                </li>
                <li>
                  <Link to="/insuranceservices">Insurance Services</Link>
                </li>
                <li>
                  <Link to="/taxservices">Tax Services</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-detail-common">
            <div className="footer-title-inner">
              <h3>Contact us</h3>
            </div>
            <div className="footer-manu">
              <ul>
                <li>
                  <a href="#">
                    <span>
                      <img src={maps} alt="maps" />
                    </span>
                    B-702 Sun Westbank, Ashram Rd, <br /> Near Vallabh Sadan,{" "}
                    <br /> Opp. City Gold Cinema, Navrangpura, <br /> Ahmedabad,
                    Gujarat 380009, India
                  </a>
                </li>
                {/* <li className="flex items-center gap-4">
                <span>
                <img src={phoneicon} alt="phoneicon" />z
                </span>
                 
                 <a href=""></a>
                 <a href="tel:+0987654321">+0 987 654 321</a>
                 
                 </li> */}
                <li>
                  <a href="tel:+1234567890">
                    <span>
                      <img src={phoneicon} alt="phoneicon" />
                    </span>
                    +91 70412 22399
                  </a>
                </li>
                <li>
                  <a href="mailto:info@wealthytree.in">
                    <span>
                      <img src={mailicon} alt="mailicon" />
                    </span>
                    info@wealthytree.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright"></div>
      <div className="wealthy-container">
        <div className="footer-copyright-detail">
          <p> © 2023 Company. All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
