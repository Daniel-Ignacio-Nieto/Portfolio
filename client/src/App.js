import React from "react";
import { Route } from "react-router-dom";
import './App.css';
import Main from './Components/main.js';
import Footer from "./Components/footer.js";
import Skills from "./Components/skills";
import Contact from "./Components/ContactFather/contact";
import NavBar from "./Components/navbar";
import AboutMe from "./Components/aboutMe.js";


function App() {

  return (
    <>
      <Route path="/" component={NavBar} />
      <Route exact path="/" component={Main} />
      <Route exact path="/AboutMe" component={AboutMe} />
      <Route exact path="/Skills" component={Skills} />
      <Route path="/" component={Contact} />
      <Route path="/" component={Footer} />

    </>
  );
};

export default App;
