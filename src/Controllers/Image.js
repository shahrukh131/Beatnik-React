import React, { useState, useEffect } from "react";
import Axios from "axios";
import Carousel from "react-elastic-carousel";
export const Image = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/bestseller/").then((res) => {
      console.log(res.data);
      setState(res.data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <h1>image</h1>
        <Carousel itemsToShow={4} itemPadding={[10, 50]}>
          {state.map((task, index) => (
            <div className="card" style={{ width: "18rem" }}>
              <img
                src={`http://127.0.0.1:8000/storage/uploads/${task.image}`}
                alt=""
                key={index}
                style={{ height: "150px", weight: "150px" }}
              />
              <div className="card-body" style={{ textAlign: "center" }}>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  {task.brand}
                </p>
                <p className="card-text">{task.description}</p>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  Rs.{task.price}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};
