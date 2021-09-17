import React from "react";
import { Link } from "react-router-dom";

const Item = ({id, name}) => {
  return (
    <>
      <Link to={`/hero/${id}`} className="hero__item">
        <span href="#" className="name">
          {name}
        </span>
      </Link>
    </>
  );
};

export default Item;
