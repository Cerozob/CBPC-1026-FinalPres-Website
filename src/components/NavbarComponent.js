import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../pages/App.css';
import { useLocation } from 'react-router-dom';

function NavbarComponent() {
  const location = useLocation();
  const path = location.pathname;

  let navPages = [
    { className: "nav-link", to: "/home", display: "Introducción" },
    { className: "nav-link", to: "/ayc", display: "Arte & Ciencia" },
    { className: "nav-link", to: "/case", display: "Caso de estudio" },
    { className: "nav-link", to: "/about", display: "Desarrollo del producto" },
    { className: "nav-link", to: "/refs", display: "Referencias" }
  ];


  return (
    <Navbar bg="#21222c" expand="lg" sticky="top">
      <Container id="navContainer">
        <Navbar.Toggle id="navbarbutton" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            {navPages.map((page) => {
              if (page.to === path) {
                page.className += "-selected";
              }
              return (
                <Link to={page.to} className={page.className} key={page.to}>
                  {page.display}
                </Link>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavbarComponent;
