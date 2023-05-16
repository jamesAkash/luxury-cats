import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data";

const VanDetail = () => {
  const { id } = useParams();
  //   const van = data.find((van) => van.id === id);
  const { name, price, description, imageUrl, type } = data.find(
    (van) => van.id === id
  );

  return (
    <div
      className="page-container"
      style={{ margin: "2rem auto", maxWidth: "1100px" }}
    >
      <div className="heli-container">
        <Link to=".." relative="path" className="back-button">
          Back to Vans
        </Link>
        <div className="heli-center">
          <div
            className="heli-image-container"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <div className="van-details">
            <h1>{name}</h1>
            <p>{description}</p>
            <div className="van-end">
              <p>
                ${price}
                <span>/day</span>
              </p>
              <i className={`van-type ${type} selected`}>{type}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VanDetail;
