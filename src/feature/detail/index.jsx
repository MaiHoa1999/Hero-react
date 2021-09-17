
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { UPDATE } from "../../reducer/action/Action";
const Detail = () => {
    const { data } = useSelector((state) => state.PersonReducer);
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const detailPerson = data.filter((val) => {
        return val.id === parseInt(id);
    });
    const [personData, setPersonData] = useState({
        id: parseInt(id),
        name: detailPerson[0].name,
    });
    const handleForm = (e) => {
        e.preventDefault();

        dispatch({
            type: UPDATE,
            payload: {
                data: personData,
            },
        });
        history.push("/");
    };
    const onChangeData = (e) => {
        const newData = { ...personData };
        newData[e.target.name] = e.target.value;
        setPersonData(newData);
    };
    
  return (
    <>
      <div className="detail">
     
      <div className="container detail-wrap">
        <h3>{personData.name} detail</h3>
        <form className="form-detail">
          <div className="form-wrap">
            <label htmlFor="id">
              id: <span>{detailPerson[0].id}</span>
            </label>
          </div>
          <div className="form-wrap">
            <label htmlFor="id">Name:</label>
            <input type="text" name="name" value={personData.name} onChange={onChangeData} />
          </div>
          <button onClick={handleForm} > Back</button>
        </form>
      </div>
      </div>
    </>
  );
};

export default Detail;
