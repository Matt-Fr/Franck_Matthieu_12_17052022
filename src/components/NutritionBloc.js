import React from "react";
import { PropTypes } from "prop-types";

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

NutritionBloc.propTypes = {
  number: PropTypes.number.isRequired,
  nutrient: PropTypes.string.isRequired,
};
NutritionBloc.defaultProps = {
  number: 0,
  nutrient: "nutrient",
};

export default NutritionBloc;
