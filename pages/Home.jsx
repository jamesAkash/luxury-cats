import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem similique
          assumenda fuga quos quia molestiae placeat vitae temporibus ullam
          praesentium.
        </p>
        <Link to={"/vans"}>Find your van</Link>
      </div>
    </div>
  );
};

export default Home;
