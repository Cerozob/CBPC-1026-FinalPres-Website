import React from 'react';
import logo from './logo.svg';
import { Navbar, Nav, Container, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Navbar bg="#21222c" expand="lg" sticky="top">
      <Container id="navContainer">
        <Navbar.Toggle id="navbarbutton" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Link className="nav-link" to="/home">Introducción</Link>
            <Link className="nav-link" to="/ayc">{"Arte & Ciencia"}</Link>
            <Link className="nav-link" to="/case">Caso de estudio</Link>
            <Link className="nav-link" to="/about">Desarrollo del producto</Link>
            <Link className="nav-link" to="/refs">Referencias</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* <Row>
         <Card border="warning"
           bg={"danger"}
           key={"danger"}
           text={'dark'}
           style={{ width: '90rem' }}
           className="mb-2">
           <Card.Body>
             <Card.Title style={{ color: "black", textAlign: "center" }}>Aclaración - Sitio no terminado</Card.Title>
             <Card.Text style={{ color: "black", textAlign: "center" }}>
               Este sitio continuará cambiando hasta la fecha de entrega del producto (2022-Jun-07)
             </Card.Text>
           </Card.Body>
         </Card>
         <br />
   
       </Row> */}
    </Navbar>

  );
}

export default App;
