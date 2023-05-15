import React from "react";
import data from "../../../data";
import { Link } from "react-router-dom";

const HostVans = () => {
  const listedVans = data.filter((van) => van.id <= 3);
  return (
    <div>
      <h3>Your Listed Vans</h3>
      <div className="van-host-container">
        {listedVans.map((van) => {
          const { id, name, price, imageUrl } = van;
          return (
            <Link to={`listed-vans/${id}`}>
              <div className="van-card" key={id}>
                <img src={imageUrl} alt={name} />
                <div className="det">
                  <h4>{name}</h4>
                  <p>${price}/day</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HostVans;
