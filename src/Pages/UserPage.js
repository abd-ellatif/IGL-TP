import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserNavBar from "../Components/UserNavBar";
import AnnoncesContainer from "../Components/AnnoncesContainer";
import AddSection from "../Components/AddSection";
import MesAnnoncesContainer from "../Components/MesAnnoncesContainer";
import Messagerie from "../Components/Messagerie";
import SavedAnnounceContainer from "../Components/SavedAnnounceContainer";

const personne = {
  nomUtil: "Nesrine Moukebel",
  num: "+213123456789",
  adresse: "Rue N°5, Wilaya, Algérie",
  mail: "kn_moukebel@esi.dz",
};
let list2 = [personne, personne, personne, personne, personne];

class UserPage extends Component {
  state = {};

  componentDidMount() {
    console.log(this.props.user);
  }

  render() {
    return (
      <div>
        <UserNavBar user={this.props.user}></UserNavBar>
        <Routes>
          <Route
            path=""
            element={
              <AnnoncesContainer
                user={this.props.user}
                admin={false}
              ></AnnoncesContainer>
            }
          ></Route>

          <Route
            path="AddSection"
            element={<AddSection user={this.props.user}></AddSection>}
          ></Route>
          <Route
            path="MyAds"
            element={
              <MesAnnoncesContainer
                admin={true}
                user={this.props.user}
              ></MesAnnoncesContainer>
            }
          ></Route>
          <Route
            path="Messagerie"
            element={<Messagerie persons={list2} user={this.props.user}></Messagerie>}
          ></Route>
          <Route
            path="Saved"
            element={
              <SavedAnnounceContainer saved={true}></SavedAnnounceContainer>
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default UserPage;
