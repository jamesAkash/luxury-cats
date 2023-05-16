import React from "react";
import data from "../../../data";
import { Link, useParams } from "react-router-dom";
const HostListedVans = () => {
  const { id } = useParams();
  const van = data.find((van) => van.id === id);
  const { imageUrl, name, description, price, type } = van;
  return (
    <div className="heli-container">
      <Link to="/host/vans">Back to all listed vans</Link>
      <div className="heli-center">
        <div
          className="heli-image-container"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="heli-details">
          <h3>{name}</h3>
          <p>{description}</p>
          <div className="heli-end">
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

export default HostListedVans;
