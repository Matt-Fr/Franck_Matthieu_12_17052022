import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      const response = await axios("http://localhost:3001/user/18");
      const mainData = response.data;

      setData(mainData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
