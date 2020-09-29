import React, { useEffect } from 'react';
import { HashRouter as Router, Route, } from 'react-router-dom';
import HomePage from "./HomePage";
import Products from "./Products";
import Courses from "./Courses";
import Gallery from "./Gallery";
import Contact from "./Contact";
import ScrollToTop from "./ScrollToTop";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    window.addEventListener("orientationchange", function () {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  })
  return (
    <Router basename="/">
      <ScrollToTop />
      <Route path="/" exact render={() => <HomePage />} />
      <Route path="/products" exact render={() => <Products />} />
      <Route path="/courses" exact render={() => <Courses />} />
      <Route path="/gallery" exact render={() => <Gallery />} />
      <Route path="/contact" exact render={() => <Contact />} />
    </ Router>
  );
}

export default App;
