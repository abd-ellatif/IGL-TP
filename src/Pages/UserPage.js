import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserNavBar from "../Components/UserNavBar";
import AnnoncesContainer from "../Components/AnnoncesContainer";
import AddSection from "../Components/AddSection";
import MesAnnoncesContainer from "../Components/MesAnnoncesContainer";
import Messagerie from "../Components/Messagerie";


const ad = {
  nom: "Villa Zeralda centre",
  location: "Zeralda",
  prix: "60.000.000 DA",
};
let list = [ad, ad, ad, ad, ad, ad, ad, ad, ad, ad, ad, ad];

const personne = {
  nomUtil: "Nesrine Moukebel",
  num: "+213123456789",
  adresse: "Rue N°5, Wilaya, Algérie",
  mail:"kn_moukebel@esi.dz",
};
let list2 = [personne,personne,personne,personne,personne];

class UserPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <UserNavBar user={this.props.user}></UserNavBar>
              <Routes>
                <Route
                  path="/"
                  element={
                    <AnnoncesContainer annonces={list} admin={false} ></AnnoncesContainer>
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
                      admin={true}
                    ></MesAnnoncesContainer>
                  }
                ></Route>
                <Route
                  path="/Messagerie"
                  element={
                    <Messagerie persons={list2} ></Messagerie>
                  }
                ></Route>
              </Routes>
        </Router>
      </div>
    );
  }
}

export default UserPage;
