import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const VanDetail = () => {
  const { id } = useParams();
  //   const van = data.find((van) => van.id === id);
  const { name, price, description, imageUrl, type } = data.find(
    (van) => van.id === id
  );

  return (
    <div className="van-container">
      <div className="van-box">
        <img className="van-image" src={imageUrl} alt={name} />
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
  );
};

export default VanDetail;
