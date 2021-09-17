import React from "react";
import {
    BrowserRouter as Router,
  
    Link
  } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <h1> Tour of Heroes</h1>
          <div className="btn">
            <Link to="/">dashboard</Link>
            <Link to="/hero">Hero</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
