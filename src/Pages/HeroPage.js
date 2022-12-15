import React, { Component } from "react";
import HeroSection from "./../Components/HeroSection";
import LogInNavBar from "../Components/logInNavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpSection from "../Components/SignUpSection";

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
          </Routes>
        </Router>
      </div>
    );
  }
}

export default HeroPage;
