import logo from "./assets/logoSportsee.svg";
import iconYoga from "./assets/iconYoga.svg";
import iconSwimming from "./assets/iconSwimming.svg";
import iconMusculation from "./assets/iconMusculation.svg";
import iconBiking from "./assets/iconBiking.svg";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="" className="header-logo" />
        <nav className="header-nav">
          <a href="#" className="header-nav-link">
            Accueil
          </a>
          <a href="#" className="header-nav-link">
            Profil
          </a>
          <a href="#" className="header-nav-link">
            Réglage
          </a>
          <a href="#" className="header-nav-link">
            Communauté
          </a>
        </nav>
      </header>
      <div className="asideNav">
        <div className="asideNav-iconContainer">
          <button className="asideNav-iconContainer-btn">
            <img src={iconYoga} alt="" />
          </button>
          <button className="asideNav-iconContainer-btn">
            <img src={iconSwimming} alt="" />
          </button>
          <button className="asideNav-iconContainer-btn">
            <img src={iconBiking} alt="" />
          </button>
          <button className="asideNav-iconContainer-btn">
            <img src={iconMusculation} alt="" />
          </button>
        </div>
      </div>
      <main></main>
    </div>
  );
}

export default App;
