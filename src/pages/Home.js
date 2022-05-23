import React from "react";
import { Link } from "react-router-dom";
import { USER_MAIN_DATA } from "../data";

const Home = () => {
  return (
    <div>
      {USER_MAIN_DATA.map((person) => {
        const {
          id,
          userInfos: { firstName, lastName },
        } = person;
        console.log(person);
        return (
          <Link
            className="userLink"
            key={id}
            to={`/user/${id}`}
          >{`${firstName} ${lastName}`}</Link>
        );
      })}
    </div>
  );
};

export default Home;
