import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import mockedData from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [idUser, setIdUser] = useState("18");
  const [globalDataUser, setGlobalDataUser] = useState({});
  const [mockUser, setMockUser] = useState(0);
  const [mockUserActive, setMockUserActive] = useState(false);

  useEffect(() => {
    /**
     * fetch the data from the API and create a new object with useState
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

    //allow to switch person for mock users according to their ID

    if (idUser === 12) {
      setMockUser(0);
    } else if (idUser === 18) setMockUser(1);
  }, [idUser]);

  const mockAverageSessions = mockedData.USER_AVERAGE_SESSIONS[mockUser];
  const mockMainData = mockedData.USER_MAIN_DATA[mockUser];
  const mockUserActivity = mockedData.USER_ACTIVITY[mockUser];
  const mockUserPerformance = mockedData.USER_PERFORMANCE[mockUser];

  /**
   * Create a new object that will only be used for mockData
   */
  class UserData {
    constructor(
      mockAverageSessions,
      mockMainData,
      mockUserActivity,
      mockUserPerformance
    ) {
      this.mockId = mockMainData.id;
      this.mockFirstName = mockMainData.userInfos.firstName;
      this.mockLastName = mockMainData.userInfos.lastName;
      this.mockSessions = mockAverageSessions.sessions;
      this.mockKeyData = mockMainData.keyData;
      this.mockSessionsScore = mockUserActivity.sessions;
      this.mockTodayScore = mockMainData.todayScore || mockMainData.score;
      this.mockPerformance = mockUserPerformance.data;
    }
  }

  /**
   * instance the new object with the UserData class
   */

  let mockedPerson = new UserData(
    mockAverageSessions,
    mockMainData,
    mockUserActivity,
    mockUserPerformance
  );

  for (let x = 0; x < mockedPerson.mockPerformance.length; x++) {
    mockedPerson.mockPerformance[0].kind = "Cardio";
    mockedPerson.mockPerformance[1].kind = "Energie";
    mockedPerson.mockPerformance[2].kind = "Endurance";
    mockedPerson.mockPerformance[3].kind = "Force";
    mockedPerson.mockPerformance[4].kind = "Vitesse";
    mockedPerson.mockPerformance[5].kind = "Intensité";
  }

  return (
    <AppContext.Provider
      value={{
        globalDataUser,
        idUser,
        setIdUser,
        UserData,
        mockUser,
        setMockUser,
        mockedPerson,
        mockUserActive,
        setMockUserActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
