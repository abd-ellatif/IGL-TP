import "./App.css";
import UserCard from "./Components/UserCard";
import UserNavBar from "./Components/UserNavBar";
import UserPage from "./Pages/UserPage";
import HeroPage from "./Pages/HeroPage";
import AdminPage from "./Pages/AdminPage";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  const [user, setUser] = useState({
    /* id: 3,
    nom: "lotfi",
    prenom: "benjdo",
    adresse: "Alger Oued Samr",
    email: "lotben0@gmail.com", */
  });



  useEffect(() => {
    const data = localStorage.getItem("user-state");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("user-state", JSON.stringify(user));
  });

 

  const handletest = () => {
    console.log(user);
  };

  const handleLogin = async (response) => {
    let profile_obj = jwt_decode(response.credential);
    await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      body: JSON.stringify({ email: profile_obj.email }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <Routes>
          <Route
            path="/*"
            element={<HeroPage handleLogin={handleLogin} user={user} />}
          ></Route>
          <Route path="/UserPage/*" element={<UserPage user={user} />}></Route>
          <Route path="/AdminPage/*" element={<AdminPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
