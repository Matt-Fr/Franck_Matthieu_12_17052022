import Header from "./components/Header";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SideNav></SideNav>
      <main>
        <header className="mainHeader">
          <h1 className="mainHeader-title">Bonjour Thomas</h1>
          <span>Félicitations ! vous avez explosé vos objectifs hier</span>
        </header>
        <aside className="sideContainer"></aside>
      </main>
    </div>
  );
}

export default App;
