import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="page">
      <div className="about-page-container">
        <div className="about-page-content">
          <h4>Our logo says it all</h4>
          <h2>Rent A Cat</h2>
          <p>
            You want to own a cat but you cannot commit to it fulltime? Here is
            where we come in, Why not just rent it!!
          </p>
          <p>
            Our mission is to make sure every Meow buddy can have much needed
            time with their Meows. Cats are inquisitive, but hate to admit it.
          </p>
          <p>
            Our team is full of cat enthusiasts who know firsthand the magic
            cats bring into our lives.
          </p>
        </div>
        <div className="about-page-cta">
          <h3>
            Heaven can wait.
            <br />
            Your cat can't.
          </h3>
          <Link className="link-button" to="/vans">
            Pick your poison
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
