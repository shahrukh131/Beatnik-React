import React from "react";
import "./Footer1.css";
import { FaEnvelope } from "react-icons/fa";
import { TextField } from "@material-ui/core";
import { GoDeviceMobile } from "react-icons/go";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "@material-ui/core/Button";

const Footer1 = () => {
  return (
    <div className="container-fluid p-4 footer1">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 a">
            <FaEnvelope /> get special discount in your inbox
            <form className="" style={{ marginTop: "10px" }}>
              <TextField
                id="standard-basic"
                className="as"
                placeholder="Enter Your Email Id"
                color="secondary"
                InputProps={{
                  style: {
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    width: "100%",
                    color: "white",
                  },
                }}
              />
              <button
                type="button"
                class="btn btn-outline-secondary"
                id="button1"
              >
                Send
              </button>
            </form>
          </div>
          <div className="col-lg-4">
            <p>
              <GoDeviceMobile size={20} />
              Experience the nykaaa mobile app
            </p>
            <h1 style={{ wordSpacing: "30px" }}>
              <FaGooglePlay /> <AiFillApple size={55} />
            </h1>
          </div>
          <div className="col-lg-4">
            <p>
              <FaPhoneAlt /> For any help you may call us at
            </p>
            <p>+91 922-220-1010</p>
            <p>Monday to saturday (9Am to 9 pm)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
