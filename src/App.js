import "./App.css";
import Button from "./Components/Button";
import HeroSection from "./Components/HeroSection";
import LogInNavBar from "./Components/logInNavBar";
import NavBar from "./Components/NavBar";
function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <LogInNavBar></LogInNavBar>
      <HeroSection> </HeroSection>
    </div>
  );
}

export default App;
