import React from "react";
import { useSelector } from "react-redux";
import Item from "./component/Item";
const Dashboard = () => {
  const { data } = useSelector((state) => state.PersonReducer);

  return (
    <>
      <div className="dashboard">
        <div className="container">
          <h2> Top Hero</h2>
          <div className="hero">
            {data?.slice(1, 5).map((e, i) => (
              <Item key={i} {...e} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
