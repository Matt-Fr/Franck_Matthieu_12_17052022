import React from "react";
import NutritionBloc from "../components/NutritionBloc";

import caloriesIcon from "../assets/calories-icon.svg";
import proteinIcon from "../assets/protein-icon.svg";
import carbsIcon from "../assets/carbs-icon.svg";
import fatIcon from "../assets/fat-icon.svg";
import Barcharts from "../components/Barcharts";
import Linechart from "../components/Linechart";
import Radarchart from "../components/Radarchart";
import Radialbarchart from "../components/Radialbarchart";
import { useGlobalContext } from "../context";

const Profil = () => {
  const { globalDataUser } = useGlobalContext() || {};

  const { firstName } = globalDataUser.userInfos || "";
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
    globalDataUser.keyData || {};

  // const {
  //   userInfos: { firstName },
  //   keyData: { calorieCount, proteinCount, carbohydrateCount, lipidCount },
  // } = globalDataUser || {};
  return (
    <>
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
    </>
  );
};

export default Profil;
