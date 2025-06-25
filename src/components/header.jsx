import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import mainheaderlogo from "../assets/icons/mainheaderlogo.svg";
import { NavLink, useNavigate } from "react-router-dom"; // use NavLink here!

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contactus");
  };

  const getNavLinkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <div className="main-header">
      <Navbar expand="lg">
        <div className="wealthy-container ">
          <div className="main-header-details flex items-center justify-between">
            <div className="logo-header">
              <Navbar.Brand href="/">
                <img src={mainheaderlogo} alt="mainheaderlogo" />
              </Navbar.Brand>
            </div>
            <div className="">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto flex items-center main-navbar-data">
                <Nav.Link as={NavLink} to="/" className={getNavLinkClass}>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/about" className={getNavLinkClass}>
                  About Us
                </Nav.Link>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item
                    as={NavLink}
                    to="/investmentservices"
                    className={getNavLinkClass}
                  >
                    Investment Services
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/insuranceservices"
                    className={getNavLinkClass}
                  >
                    Insurance Services
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/taxservices"
                    className={getNavLinkClass}
                  >
                    Tax Services
                  </NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link as={NavLink} to="/news" className={getNavLinkClass}>
                  News
                </Nav.Link>
                <Nav.Link as={NavLink} to="/blogs" className={getNavLinkClass}>
                  Blogs 
                </Nav.Link>*/}
                <button className="green-button" onClick={handleClick}>
                  Contact Us
                </button>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
