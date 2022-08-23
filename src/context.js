import axios from "axios";
import React, { useState, useContext } from "react";
import { useEffect } from "react";

const AppContext = React.createContext();
const url = "http://localhost:3001/user/18";

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
