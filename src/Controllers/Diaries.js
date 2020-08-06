import React, { useEffect, useState } from "react";
import Axios from "axios";
import Carousel from "react-elastic-carousel";
import "./Diaries.css";
const Diaries = () => {
  const [diaries, setDiaries] = useState([]);
  useEffect(() => {
    Axios.get("http://127.0.0.1:8000/api/diaries/").then((res) => {
      console.log(res.data);
      setDiaries(res.data);
    });
  }, []);
  return (
    <div
      className="container"
      style={{ marginTop: "100px", marginBottom: "100px" }}
    >
      <h1 style={{ textAlign: "center", fontWeight: "bold" }}>#Diaries</h1>
      <Carousel
        itemsToShow={3}
        itemPadding={[10, 50]}
        className="carousel"
        pagination={false}
      >
        {diaries.map((data, index) => (
          <div className="card card1" key={index} style={{ width: "18rem" }}>
            <img
              src={`http://127.0.0.1:8000/storage/uploads/${data.image}`}
              alt=""
              key={index}
              style={{ height: "150px", weight: "150px" }}
            />
            <div className="card-body" style={{ textAlign: "left" }}>
              <h4
                className="card-text title"
                style={{
                  fontWeight: "bold",
                }}
              >
                {data.title}
              </h4>
              <p className="card-text description">{data.description}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Diaries;
