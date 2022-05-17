import logo from "./assets/logoSportsee.svg";

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
      <div className="asideNav"></div>
      <main></main>
      <main></main>
    </div>
  );
}

export default App;
