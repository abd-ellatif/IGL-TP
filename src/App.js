import "./App.css";
import UserCard from "./Components/UserCard";
import UserNavBar from "./Components/UserNavBar";
import UserPage from "./Pages/UserPage";
import HeroPage from './Pages/HeroPage'
function App() {
  let user = { name: "Abd ellatif", icon: null };
  return (
    <div className="App">
      <header className="App-header"></header> 
      <HeroPage user={user}></HeroPage>
    </div>
  );
}

export default App;
