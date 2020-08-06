import React from "react";
import "./Footer3.css";
import world from "../../images/world5.png";

import Top from "./Top";
import BacktoTop from "./BacktoTop";

export const Footer3 = () => {
  return (
    <>
      <div className="container-fluid p-4 footer3">
        <h1 className="d-flex justify-content-center">
          <BacktoTop />
        </h1>
        <div className="container">
          <div className="row">
            <h2 className="d-flex justify-content-center">Store Locator</h2>
            <div className="col-sm-12 d-flex justify-content-center">
              <br />
              <img
                src={world}
                alt=""
                style={{
                  height: "296px",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              />
            </div>
            <hr />
            <footer className="w-100 text-center">
              <p style={{ color: "#a2a4a8", fontSize: "15px" }}>
                Copyright @All right reserved by Beatik Technology{" "}
              </p>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
