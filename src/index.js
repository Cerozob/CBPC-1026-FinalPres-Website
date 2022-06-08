import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Case from './pages/Case';
import Ayc from './pages/Ayc';
import Refs from './pages/Refs';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path={"/"} element={<Home />}>
        </Route>
        <Route path={"/default"} element={<Home />}>

        </Route>
        <Route path={"/home"} element={<Home />}>

        </Route>
        <Route path={"/ayc"} element={<Ayc />}>

        </Route>
        <Route path={"/case"} element={<Case />}>

        </Route>
        <Route path={"/about"} element={<About />}>

        </Route>
        <Route path={"/refs"} element={<Refs />}>

        </Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode >

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
