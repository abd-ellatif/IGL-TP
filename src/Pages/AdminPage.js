import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserNavBar from "../Components/UserNavBar";
import TempFilterSection from "../Components/Filter";
import AnnoncesContainer from "../Components/AnnoncesContainer";
import AddSection from "../Components/AddSection";
import MesAnnoncesContainer from "../Components/MesAnnoncesContainer";
import AdminNavBar from "../Components/AdminNavBar";
import WebScrapingSection from "../Components/WebScrapingSection";

const ad = {
  nom: "Villa Zéralda Centre",
  location: "Zeralda",
  prix: "60.000.000 DA",
};
let list = [ad, ad, ad, ad, ad, ad, ad, ad, ad, ad, ad, ad];

class AdminPage extends Component {
  state = {};
  render() {
    return (
      <div>
        <AdminNavBar></AdminNavBar>
        <Routes>
          <Route
            path=""
            element={
              <div>
                <AnnoncesContainer
                  annonces={list}
                  admin={true}
                ></AnnoncesContainer>
              </div>
            }
          ></Route>

          <Route
            path="WebScraping"
            element={<WebScrapingSection></WebScrapingSection>}
          ></Route>

          <Route
            path="ReportedAds"
            element={
              <div>
                <h1 className="text-center font-semibold text-4xl text-blue-500 bg-gray-100 p-4">
                  Annonces Signalées
                </h1>
                <AnnoncesContainer
                  annonces={list}
                  admin={true}
                ></AnnoncesContainer>
              </div>
            }
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default AdminPage;
