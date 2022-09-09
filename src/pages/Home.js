import React from "react";
import { Link } from "react-router-dom";
import { USER_MAIN_DATA } from "../data";
import { useGlobalContext } from "../context";

const Home = () => {
  const { setIdUser, mockUser, setMockUserActive } = useGlobalContext();

  console.log(mockUser);

  return (
    <div className="containerLinkName">
      {USER_MAIN_DATA.map((person) => {
        const {
          id,
          userInfos: { firstName, lastName },
        } = person;

        return (
          <Link
            className="userLink"
            key={id}
            onClick={() => {
              setIdUser(id);
              setMockUserActive(false);
            }}
            to={`/user/${id}`}
          >{`${firstName} ${lastName}`}</Link>
        );
      })}
      {USER_MAIN_DATA.map((person) => {
        const {
          id,
          userInfos: { firstName, lastName },
        } = person;

        return (
          <Link
            className="userLink"
            key={id}
            onClick={() => {
              setIdUser(id);
              setMockUserActive(true);
            }}
            to={`/user/${id}`}
          >{`mock ${firstName} ${lastName}`}</Link>
        );
      })}
    </div>
  );
};

export default Home;
