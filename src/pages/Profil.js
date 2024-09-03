import React from "react";
import { useParams } from "react-router-dom";
import NutritionBloc from "../components/NutritionBloc";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinIcon from "../assets/protein-icon.svg";
import carbsIcon from "../assets/carbs-icon.svg";
import fatIcon from "../assets/fat-icon.svg";
import Barcharts from "../components/Barcharts";
import Linechart from "../components/Linechart";
import Radarchart from "../components/Radarchart";
import Radialbarchart from "../components/Radialbarchart";
import { USER_MAIN_DATA } from "../data";

const Profil = () => {
  const { id } = useParams(); // Extract the id parameter from the URL
  const user = USER_MAIN_DATA.find((user) => user.id === parseInt(id));

  if (!user) return <div>User not found</div>;

  const {
    userInfos: { firstName },
    keyData: { calorieCount, proteinCount, carbohydrateCount, lipidCount },
  } = user;

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
