import React from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Controllers/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Controllers/Header";
import Need from "./Controllers/Need";
import Information from "./Controllers/Information";
import { Products } from "./Controllers/Products";

import BestSeller from "./Controllers/BestSeller";
import News from "./Controllers/News";
import { ViewAll } from "./Controllers/ViewAll";
import { DailyEssentials } from "./Controllers/DailyEssentials";
import Diaries from "./Controllers/Diaries";
import Footer1 from "./Controllers/Footers/Footer1";
import Footer2 from "./Controllers/Footers/Footer2";
import { Footer3 } from "./Controllers/Footers/Footer3";

function App() {
  return (
    <>
      <div style={{ fontFamily: "Mulish" }}>
        <div className="container">
          <Router>
            <Navbar />
          </Router>
        </div>
        <div className="container myheader">
          <Header />
        </div>
        <Need />
        <div className="info">
          <Information />
        </div>
        <div className="products">
          <Router>
            <Products />
          </Router>
        </div>
        <BestSeller />
        <div className="news">
          <News />
        </div>
        <div>
          <ViewAll />
        </div>
        <div>
          <DailyEssentials />
        </div>
        <div>
          <Diaries />
        </div>
        <div>
          <Footer1 />
        </div>
        <div>
          <Footer2 />
        </div>
        <div>
          <Footer3 />
        </div>
      </div>
    </>
  );
}

export default App;
