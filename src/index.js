// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );


import React from 'react';
import ReactDOM from 'react-dom';
import {
	BrowserRouter,
	Route,
	Switch
} from 'react-router-dom';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/home.jsx";
import Contact from "./components/contact.jsx";
import Project from "./components/project.jsx";
import Exp from "./components/experience.jsx";
// import Tools from "./components/animation";
ReactDOM.render(
    <div>
    <BrowserRouter>
        <Header />
        <div className="content">
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/exp' component={Exp} />
                <Route exact path='/project' component={Project} />
            </Switch>
        </div>
    </BrowserRouter>
        <Footer />
    </div>,
    document.getElementById("root")
);