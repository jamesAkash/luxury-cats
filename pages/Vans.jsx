import React, { useEffect, useState } from "react";
import data from "../data";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState(data);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/${van.id}`}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h4>{van.name}</h4>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container page-container">
      <h3>Explore our van options</h3>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
