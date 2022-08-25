import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [idUser, setIdUser] = useState("12");
  const [globalDataUser, setGlobalDataUser] = useState({});
  // const [data, setData] = useState({});
  // const [activity, setActivity] = useState({});
  const fetchData = async () => {
    try {
      const responseInfoUser = await axios(
        `http://localhost:3001/user/${idUser}`
      );
      const infoUserData = responseInfoUser.data.data;

      const responseActivity = await axios(
        `http://localhost:3001/user/${idUser}/activity`
      );
      const dataActivity = responseActivity.data.data;

      const responseSessions = await axios(
        `http://localhost:3001/user/${idUser}/average-sessions`
      );
      const dataSessions = responseSessions.data.data;

      const responsePerformance = await axios(
        `http://localhost:3001/user/${idUser}/performance`
      );
      const dataPerformance = responsePerformance.data.data;

      setGlobalDataUser({
        infoUserData: infoUserData,
        dataActivity: dataActivity,
        dataSessions: dataSessions,
        dataPerformance: dataPerformance,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // peut être utiliser un useState pour l'id

  useEffect(() => {
    fetchData();
  }, []);

  console.log(globalDataUser);

  return (
    <AppContext.Provider value={{ globalDataUser, idUser, setIdUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
