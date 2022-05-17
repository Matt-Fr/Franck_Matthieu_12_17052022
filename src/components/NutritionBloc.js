import React from "react";

const NutritionBloc = ({ icon, number, nutrient }) => {
  return (
    <div className="nutritionBloc">
      <img src={icon} alt={`logo ${nutrient}`} className="nutritionBloc-img" />
      <div className="nutritionBloc-text">
        <span className="nutritionBloc-text-number">
          {nutrient === "Calories" ? `${number}kCal` : `${number}g`}
        </span>
        <h4 className="nutritionBloc-text-nutri">{nutrient}</h4>
      </div>
    </div>
  );
};

export default NutritionBloc;
