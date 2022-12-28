import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserNavBar from "../Components/UserNavBar";
import TempFilterSection from "../Components/Filter";
import AnnoncesContainer from "../Components/AnnoncesContainer";
import AddSection from "../Components/AddSection";
import MesAnnoncesContainer from "../Components/MesAnnoncesContainer";

const ad = {
  nom: "Apartement Zeralda D3",
  location: "Zeralda",
  prix: "60.000.000 DA",
};
let list = [ad, ad, ad, ad, ad, ad, ad, ad, ad, ad, ad, ad];

class UserPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <UserNavBar user={this.props.user}></UserNavBar>
          <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 ">
            <TempFilterSection></TempFilterSection>
            <div className="lg:col-start-2 lg:col-span-4 md:col-start-2 md:col-span-2 ">
              <Routes>
                <Route
                  path="/"
                  element={
                    <AnnoncesContainer annonces={list}></AnnoncesContainer>
                  }
                ></Route>

                <Route
                  path="/AddSection"
                  element={<AddSection></AddSection>}
                ></Route>
                <Route
                  path="/MyAds"
                  element={
                    <MesAnnoncesContainer
                      annonces={list}
                      admin={false}
                    ></MesAnnoncesContainer>
                  }
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
