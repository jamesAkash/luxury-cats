import React from "react";
import data from "../../../data";
import { Link, useParams } from "react-router-dom";
const HostListedVans = () => {
  const { id } = useParams();
  const van = data.find((van) => van.id === id);
  const { imageUrl, name, description, price, type } = van;
  return (
    <div className="van-container">
      <Link to="/host/vans">Back to all listed vans</Link>
      <div className="van-box">
        <img className="van-image" src={imageUrl} alt={name} />
        <div className="van-details">
          <h3>{name}</h3>
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

export default HostListedVans;
