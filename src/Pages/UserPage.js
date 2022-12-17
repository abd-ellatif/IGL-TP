import React, { Component } from "react";
import HeroSection from "./../Components/HeroSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserNavBar from "../Components/UserNavBar";

class UserPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <UserNavBar user={this.props.user}></UserNavBar>
          <Routes>
            <Route path="/" element={<HeroSection></HeroSection>}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default UserPage;
