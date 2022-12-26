import React, { Component } from "react";
import HeroSection from "./../Components/Hero";
import LogInNavBar from "../Components/Navbarr"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpSection from "../Components/SignUpSection";
import LogInSection from "../Components/LogInSection";

class HeroPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <LogInNavBar></LogInNavBar>
          <Routes>
            <Route path="/" element={<HeroSection></HeroSection>} />
            <Route
              path="/SignUp"
              element={<SignUpSection></SignUpSection>}
            ></Route>
            <Route
              path="/LogIn"
              element={<LogInSection></LogInSection>}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default HeroPage;
