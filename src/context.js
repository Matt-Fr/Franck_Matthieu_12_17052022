import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [id, setId] = useState("12");
  const [global, setGlobal] = useState({});
  const [data, setData] = useState({});
  const [activity, setActivity] = useState({});
  const fetchData = async () => {
    try {
      const response = await axios(`http://localhost:3001/user/${id}`);
      const mainData = response.data;

      const response2 = await axios(
        `http://localhost:3001/user/${id}/activity`
      );
      const dataActivity = response2.data;

      setData(mainData);
      setActivity(dataActivity);

      setGlobal({ mainData: mainData, dataActivity: dataActivity });
    } catch (error) {
      console.log(error);
    }
  };
  // peut être utiliser un useState pour l'id

  useEffect(() => {
    fetchData("18");
  }, []);

  console.log(data);
  console.log(activity);
  console.log(global);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
