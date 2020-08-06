import React, { useState, useEffect } from "react";
import Axios from "axios";
import Carousel from "react-elastic-carousel";

const BestSeller = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/bestseller/").then((res) => {
      console.log(res.data);
      setState(res.data);
    });
  }, []);
  return (
    <div
      className="container"
      style={{ marginTop: "40px", fontFamily: "Mulish" }}
    >
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Mulish",
          fontWeight: "Bold",
          marginBottom: "30px",
        }}
      >
        BestSellers
      </h1>
      <Carousel
        itemsToShow={4}
        itemPadding={[10, 50]}
        className="carousel"
        pagination={false}
      >
        {state.map((task, index) => (
          <div className="card" key={index} style={{ width: "18rem" }}>
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
  );
};

export default BestSeller;
