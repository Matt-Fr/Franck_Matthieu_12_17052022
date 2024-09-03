import React from "react";
import { Link } from "react-router-dom";
import { USER_MAIN_DATA } from "../data";

const Home = () => {
  return (
    <div className="containerLinkName">
      {USER_MAIN_DATA.map((person) => {
        const {
          id,
          userInfos: { firstName, lastName },
        } = person;

        return (
          <Link className="userLink" key={id} to={`/user/${id}`}>
            {`${firstName} ${lastName}`}
          </Link>
        );
      })}
      {/* {USER_MAIN_DATA.map((person) => {
        const {
          id,
          userInfos: { firstName, lastName },
        } = person;

        return (
          <Link className="userLink" key={id} to={`/user/${id}`}>
            {`mock ${firstName} ${lastName}`}
          </Link>
        );
      })} */}
    </div>
  );
};

export default Home;
