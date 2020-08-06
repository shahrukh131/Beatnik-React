import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { GrFacebook } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";
import { GrPinterest } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import "./Footer2.css";
const Footer2 = () => {
  return (
    <div
      className="container"
      style={{ marginTop: "15px", fontFamily: "Noto Sans", padding: "30px" }}
    >
      <div className="row">
        <div className="col-sm-3">
          <h4>
            <AiFillFire size={50} className="fire1" /> 1500+ Brands
          </h4>
          <p style={{ textAlign: "center" }}>Well cultured +Products</p>
        </div>
        <div className="col-sm-3">
          {" "}
          <h4>
            <AiFillFire size={50} className="fire2" />
            Free Shippings
          </h4>
          <p style={{ textAlign: "center" }}>For orders above INR 1000</p>
        </div>
        <div className="col-sm-3">
          {" "}
          <h4>
            {" "}
            <AiFillFire size={50} className="fire3" />
            Genuine Products
          </h4>
          <p style={{ textAlign: "center" }}>Source directly from BRANDS</p>
        </div>
        <div className="col-sm-3">
          {" "}
          <h6>Show Some love on Social Media</h6>
          <p>
            <AiFillInstagram size={20} style={{ marginRight: "10px" }} />
            <GrFacebook size={16} style={{ marginRight: "10px" }} />
            <GrYoutube size={20} style={{ marginRight: "10px" }} />
            <FaTwitter size={20} style={{ marginRight: "10px" }} />
            <GrPinterest size={20} style={{ marginRight: "10px" }} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
