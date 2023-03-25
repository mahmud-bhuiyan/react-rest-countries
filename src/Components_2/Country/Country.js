import React from "react";
import "./Country.css";

const Country = (props) => {
  //   console.log(props.country);
  const { name, flags, population, area, region } = props.country;
  return (
    <div className="country">
      <h3>{name?.common}</h3>
      <img src={flags.png} alt="" />
      <p>
        <small>Population: {population}</small>
      </p>
      <p>
        <small>Area: {area}</small>
      </p>
      <p>
        <small>Region: {region}</small>
      </p>
    </div>
  );
};

export default Country;
