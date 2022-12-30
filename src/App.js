import "./App.css";
import UserCard from "./Components/UserCard";
import UserNavBar from "./Components/UserNavBar";
import UserPage from "./Pages/UserPage";
import HeroPage from './Pages/HeroPage'
import AdminPage from "./Pages/AdminPage";
function App() {
  let user = { name: "Abd ellatif", icon: null };
  return (
    <div className="App">
      <header className="App-header"></header>
        <UserPage user={user}></UserPage>
    </div>
  );
}

export default App;
