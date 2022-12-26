import React, { Component } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom" ;
import UserNavBar from "../Components/UserNavBar";
import TempFilterSection from "../Components/Filter";
import AnnoncesContainer from "../Components/AnnoncesContainer";

class UserPage extends Component {
  state = {};
  render() {
    return (
      <div >
        <Router>
          <UserNavBar user={this.props.user}></UserNavBar>
          <div className="md:grid md:grid-cols-5 grid grid-cols-1">
            <TempFilterSection></TempFilterSection>
            <div className="md:col-start-2 md:col-span-4 col-span-1 md:mt-auto mt-[-773px] ">
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
