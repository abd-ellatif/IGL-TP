import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom" ;
import UserNavBar from "../Components/UserNavBar";
import TempFilterSection from "../Components/Filter";
import AnnoncesContainer from "../Components/AnnoncesContainer";
import DetailedAnnonce from "../Components/DetailedAnnonce"
import AddSection from "../Components/AddSection";
class UserPage extends Component {
  state = {};
  render() {
    return (
      <div >
        <Router>
          <UserNavBar user={this.props.user}></UserNavBar>
          <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 ">
            <TempFilterSection></TempFilterSection>
            <div className="lg:col-start-2 lg:col-span-4 md:col-start-2 md:col-span-2 ">
              <Routes>
                <Route
                  path="/"
                  element={<AnnoncesContainer></AnnoncesContainer>}
                ></Route>
                <Route
                  path="/AnnonceDet"
                  element={<DetailedAnnonce></DetailedAnnonce>}
                ></Route>
                <Route
                  path="/AddSection"
                  element={<AddSection></AddSection>}
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
