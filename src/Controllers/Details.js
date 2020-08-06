import React from "react";
import { Switch, Route } from "react-router-dom";
import { routes } from "./Route";

const Details = () => {
  return (
    <div>
      <div className="">
        <div className="">
          {" "}
          <div style={{ flex: 1, padding: "10px" }}>
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
