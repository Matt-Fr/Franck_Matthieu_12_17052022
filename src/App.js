import Header from "./components/Header";
import NutritionBloc from "./components/NutritionBloc";
import SideNav from "./components/SideNav";
import { USER_MAIN_DATA, USER_AVERAGE_SESSIONS } from "./data";
import caloriesIcon from "./assets/calories-icon.svg";
import proteinIcon from "./assets/protein-icon.svg";
import carbsIcon from "./assets/carbs-icon.svg";
import fatIcon from "./assets/fat-icon.svg";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

function App() {
  const {
    id,
    userInfos: { firstName, lastName, age },
    todayScore,
    keyData: { calorieCount, proteinCount, carbohydrateCount, lipidCount },
  } = USER_MAIN_DATA[0];

  const {
    sessions: [{ day, kilogram, calories }],
  } = USER_AVERAGE_SESSIONS[0];

  console.log(day);

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
        <BarChart width={730} height={250} data={USER_AVERAGE_SESSIONS[0]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="kilogram" fill="#8884d8" />
          <Bar dataKey="calories" fill="#82ca9d" />
        </BarChart>
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
