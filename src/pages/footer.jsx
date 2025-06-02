import React from 'react';
import footerlogo from "../assets/images/footerlogo.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import linkdin from "../assets/images/linkdin.svg";
import instagram from "../assets/images/instagram.svg";
import maps from "../assets/images/maps.svg";
import phoneicon from "../assets/images/phoneicon.svg";
import mailicon from "../assets/images/mailicon.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
     <div className="footer-main">
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
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
                <li className="flex items-center gap-4">
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
    </div>
  );
};

export default Footer;
