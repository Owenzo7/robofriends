/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = (props) => {
  return (
    <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        src="https://robohash.org/test"
        alt="robots"
        width={200}
        height={200}
      />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;
