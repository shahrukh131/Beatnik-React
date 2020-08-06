import React, { useState, useEffect } from "react";
import Axios from "axios";
import Carousel from "react-elastic-carousel";
import "./DailyEssential.css";
export const DailyEssentials = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/essential/").then((res) => {
      console.log(res.data);
      setDatas(res.data);
    });
  }, []);
  return (
    <div
      className="container"
      style={{ marginTop: "20px", fontFamily: "Mulish" }}
    >
      <h1>DailyEssentials</h1>
      <Carousel
        itemsToShow={4}
        itemPadding={[10, 50]}
        className="carousel"
        pagination={false}
      >
        {datas.map((data, index) => (
          <div className="card card1" key={index} style={{ width: "18rem" }}>
            <img
              src={`http://127.0.0.1:8000/storage/uploads/${data.image}`}
              alt=""
              key={index}
              style={{ height: "150px", weight: "150px" }}
            />
            <div className="card-body" style={{ textAlign: "center" }}>
              <p className="card-text" style={{ fontWeight: "bold" }}>
                {data.title}
              </p>
              <p className="btn-get-started">Shop Now</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
