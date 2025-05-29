import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import mainheaderlogo from "./assets/images/mainheaderlogo.svg";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contactus');
  };

  return (
    <div className='main-header'>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={mainheaderlogo} alt="mainheaderlogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto flex main-navbar-data">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About us</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="/investmentservices">Investment Services</NavDropdown.Item>
                <NavDropdown.Item href="/insuranceservices">Insurance Services</NavDropdown.Item>
                <NavDropdown.Item href="/taxservices">Tax Services</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/news">News</Nav.Link>
              <Nav.Link href="/blogs">Blogs</Nav.Link>
              <button className='green-button' onClick={handleClick}>
      Contact Us
    </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;