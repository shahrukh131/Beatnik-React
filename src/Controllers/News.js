import React from "react";
import { NewsData } from "../Controllers/Datas/NewsData";
import image2 from "../images/iamge2.jpg";
const News = () => {
  return (
    <div
      className="container"
      style={{ marginTop: "100px", fontFamily: "Mulish" }}
    >
      <h1 style={{ textAlign: "center" }}>
        News & <strong>Events</strong>
      </h1>
      <div
        className="row"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <div className="col-sm-4">
          <div className="card" style={{ width: "20rem" }}>
            <img src={image2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {" "}
                New Premium Date Been Introduced
              </h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card" style={{ width: "20rem" }}>
            <img src={image2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {" "}
                New Premium Date Been Introduced
              </h5>
              <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <h5>Recent News</h5>
          {NewsData.map((news, index) => (
            <div className="card" key={index} style={{ width: "20rem" }}>
              <div class="row no-gutters">
                <div class="col-auto">
                  <img
                    src={news.imgsrc}
                    alt=""
                    key={index}
                    style={{ height: "100px", weight: "150px" }}
                    className="rounded"
                  />
                </div>
                <div className="col">
                  <div className="card-block px-2">
                    <h6 className="card-title" style={{ marginTop: "30px" }}>
                      {news.title}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* {NewsData.map((news, index) => (
            <div
              className="card"
              id="card"
              key={index}
              style={{ width: "15rem" }}
            >
              <img
                src={news.imgsrc}
                alt=""
                key={index}
                style={{ height: "150px", weight: "150px" }}
              />
              <div className="card-body" style={{ textAlign: "center" }}>
                <p className="card-text" style={{ fontWeight: "bold" }}>
                  {news.title}
                </p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default News;
