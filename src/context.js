import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [idUser, setIdUser] = useState("18");
  const [globalDataUser, setGlobalDataUser] = useState({});

  useEffect(() => {
    /**
     * fetch the data and create a new object
     */
    const fetchData = async () => {
      try {
        const responseInfoUser = await axios(
          `http://localhost:3001/user/${idUser}`
        );
        const { data: dataInfoUser } = responseInfoUser.data;
        const { id, keyData, todayScore, score, userInfos } = dataInfoUser;

        const responseActivity = await axios(
          `http://localhost:3001/user/${idUser}/activity`
        );
        const { data: dataActivity } = responseActivity.data;
        const { sessions: sessionsScore, userId } = dataActivity;

        const responseSessions = await axios(
          `http://localhost:3001/user/${idUser}/average-sessions`
        );
        const { data: dataSessions } = responseSessions.data;

        const { sessions: sessionsTime } = dataSessions;

        const responsePerformance = await axios(
          `http://localhost:3001/user/${idUser}/performance`
        );
        const { data: dataPerformance } = responsePerformance.data;

        const { data: performanceByKind, kind } = dataPerformance;

        setGlobalDataUser({
          id,
          userInfos,
          keyData,
          todayScore,
          score,
          sessionsScore,
          sessionsTime,
          userId,
          performanceByKind,
          kind,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [idUser]);

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
