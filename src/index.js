import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './pages/App';
import Home from './pages/Home';
import About from './pages/About';
import Case from './pages/Case';
import Ayc from './pages/Ayc';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar bg="#21222c" expand="lg" sticky="top">
      <Container id="navContainer">
        <Navbar.Toggle id="navbarbutton" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/CBPC-1026-FinalPres-Website/home">{"Introducción"}</Nav.Link>
            <Nav.Link href="/CBPC-1026-FinalPres-Website/ayc">{"Arte & Ciencia"}</Nav.Link>
            <Nav.Link href="/CBPC-1026-FinalPres-Website/case">{"Un caso específico"}</Nav.Link>
            <Nav.Link href="/CBPC-1026-FinalPres-Website/about">{"Desarrollo del producto"}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <BrowserRouter>
      <Routes>
        <Route exact path={"CBPC-1026-FinalPres-Website/"} element={<Home />}>
        </Route>
        <Route exact path={"CBPC-1026-FinalPres-Website/default"} element={<App />}>

        </Route>
        <Route exact path={"CBPC-1026-FinalPres-Website/home"} element={<Home />}>

        </Route>
        <Route exact path={"CBPC-1026-FinalPres-Website/ayc"} element={<Ayc />}>

        </Route>
        <Route exact path={"CBPC-1026-FinalPres-Website/case"} element={<Case />}>

        </Route>
        <Route exact path={"CBPC-1026-FinalPres-Website/about"} element={<About />}>

        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
