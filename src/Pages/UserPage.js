import React, { Component } from "react";
import HeroSection from "./../Components/HeroSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserNavBar from "../Components/UserNavBar";
import TempFilterSection from "../Components/TempFilterSection";
import AnnoncesContainer from "../Components/AnnoncesContainer";

class UserPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <UserNavBar user={this.props.user}></UserNavBar>
          <div className="grid grid-cols-4">
            <TempFilterSection></TempFilterSection>
            <div className="col-start-2 col-span-3">
              <Routes>
                <Route
                  path="/"
                  element={<AnnoncesContainer></AnnoncesContainer>}
                ></Route>
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default UserPage;
