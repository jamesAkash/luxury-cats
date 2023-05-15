import React, { useEffect, useState } from "react";
import data from "../data";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState(data);

  //searchParams
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const filteredList = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElements = filteredList.map((van) => (
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
      <div className="filter-div">
        <h4>Filter</h4>
        <div>
          <button
            style={{ backgroundColor: "black" }}
            onClick={() => setSearchParams({})}
          >
            Clear
          </button>
          <Link to="?type=simple">simple</Link>
          <Link to="?type=rugged">rugged</Link>
          <button onClick={() => setSearchParams({ type: "luxury" })}>
            luxury
          </button>
        </div>
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
