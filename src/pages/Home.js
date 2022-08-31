import React from "react";
import { Link } from "react-router-dom";
import { USER_MAIN_DATA } from "../data";
import { useGlobalContext } from "../context";

const Home = () => {
  /**
   * retrieve IdUser
   */
  const { setIdUser } = useGlobalContext();

  return (
    <div>
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
            }}
            to={`/user/${id}`}
          >{`${firstName} ${lastName}`}</Link>
        );
      })}
    </div>
  );
};

export default Home;
