import Header from "./components/Header";
import NutritionBloc from "./components/NutritionBloc";
import SideNav from "./components/SideNav";
import { USER_MAIN_DATA } from "./data";
import caloriesIcon from "./assets/calories-icon.svg";
import proteinIcon from "./assets/protein-icon.svg";
import carbsIcon from "./assets/carbs-icon.svg";
import fatIcon from "./assets/fat-icon.svg";
import Barcharts from "./components/Barcharts";
import Linechart from "./components/Linechart";
import Radarchart from "./components/Radarchart";
import Radialbarchart from "./components/Radialbarchart";

function App() {
  const {
    id,
    userInfos: { firstName, lastName, age },
    todayScore,
    keyData: { calorieCount, proteinCount, carbohydrateCount, lipidCount },
  } = USER_MAIN_DATA[0];

  return (
    <div className="App">
      <Header></Header>
      <SideNav></SideNav>
      <main>
        <header className="mainHeader">
          <h1 className="mainHeader-title">
            Bonjour <span className="mainHeader-title-name">{firstName}</span>
          </h1>
          <span>Félicitations ! vous avez explosé vos objectifs hier</span>
        </header>
        <Barcharts className="barcharts"></Barcharts>

        <div className="smallGraphContainer">
          <Linechart></Linechart>
          <Radarchart></Radarchart>
          <Radialbarchart></Radialbarchart>
        </div>

        <aside className="sideContainer">
          <NutritionBloc
            icon={caloriesIcon}
            number={calorieCount}
            nutrient="Calories"
          ></NutritionBloc>
          <NutritionBloc
            icon={proteinIcon}
            number={proteinCount}
            nutrient="Proteines"
          ></NutritionBloc>
          <NutritionBloc
            icon={carbsIcon}
            number={carbohydrateCount}
            nutrient="Glucides"
          ></NutritionBloc>
          <NutritionBloc
            icon={fatIcon}
            number={lipidCount}
            nutrient="Lipides"
          ></NutritionBloc>
        </aside>
      </main>
    </div>
  );
}

export default App;
