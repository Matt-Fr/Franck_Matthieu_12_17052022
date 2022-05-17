import React from "react";
import iconYoga from "../assets/iconYoga.svg";
import iconSwimming from "../assets/iconSwimming.svg";
import iconMusculation from "../assets/iconMusculation.svg";
import iconBiking from "../assets/iconBiking.svg";

const SideNav = () => {
  return (
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
  );
};

export default SideNav;
