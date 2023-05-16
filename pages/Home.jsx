import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h1>
          “There are two means of refuge from the miseries of life: music and
          cats.”
          <br /> <h3>– Albert Schweitzer</h3>
        </h1>

        <Link to={"/vans"}>Find your cat</Link>
      </div>
    </div>
  );
};

export default Home;
