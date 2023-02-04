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
        <LogInNavBar></LogInNavBar>
        <Routes>
          <Route path="/" element={<HeroSection></HeroSection>} />
          <Route
            path="/SignUp"
            element={<SignUpSection></SignUpSection>}
          ></Route>
          <Route
            path="/LogIn"
            element={
              <LogInSection handleLogin={this.props.handleLogin} user={this.props.user}></LogInSection>
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default HeroPage;
