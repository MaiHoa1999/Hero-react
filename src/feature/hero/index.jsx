import React from "react";
import { useSelector } from "react-redux";
import HeroDetail from "./component/HeroDetail";
const Hero = () => {
  const { data } = useSelector((state) => state.PersonReducer);

  return (
    <>
      <div className="my-hero">
        <h3>hero</h3>
        <div className="hero-list">
          {data?.map((e, i) => (
            <HeroDetail key={i} {...e} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
