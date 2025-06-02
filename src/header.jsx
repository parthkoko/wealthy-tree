import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mainheaderlogo from "./assets/images/mainheaderlogo.svg";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contactus');
  };

  return (
    <div className='main-header'>
      <Navbar expand="lg">
        <div className="wealthy-container ">
          <div className="main-header-details flex items-center justify-between">
          <div className="logo-header">
            <Navbar.Brand href="#home">
            <img src={mainheaderlogo} alt="mainheaderlogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto flex main-navbar-data">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
<Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/investmentservices">Investment Services</NavDropdown.Item>
<NavDropdown.Item as={Link} to="/insuranceservices">Insurance Services</NavDropdown.Item>
<NavDropdown.Item as={Link} to="/taxservices">Tax Services</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link> */}
              <Nav.Link as={Link} to="/news">News</Nav.Link>
<Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
              <button className='green-button' onClick={handleClick}>
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