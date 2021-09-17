import { Link } from "react-router-dom";

const HeroDetail = ({id,name}) => {
  return (
    <>
      <Link to={`/hero/${id}`} className="item" style={{width:150}}>
        <span>{id}</span>
        <p>{name}</p>
      </Link>
    </>
  );
};

export default HeroDetail;
