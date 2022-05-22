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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";

function App() {
  const {
    id,
    userInfos: { firstName, lastName, age },
    todayScore,
    keyData: { calorieCount, proteinCount, carbohydrateCount, lipidCount },
  } = USER_MAIN_DATA[0];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<Home />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route
            path="/rent/:accommodationId"
            element={<Accommodation />}
          ></Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
