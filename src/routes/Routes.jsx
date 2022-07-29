import React from "react";

/* react router dom v6 */
import { Route, Routes as RoutesDom } from "react-router-dom";

/* components */
import Header from "../components/organisms/Header";
import Home from "../components/organisms/Home";

const Routes = () => {
  return (
    <div className="Routes w-screen h-screen flex flex-col">
      <div className="header-container h-20 ">
        <Header></Header>
      </div>
      <div className="main-container grow">
        <RoutesDom>
          <Route path="/" element={<Home />} />
        </RoutesDom>
      </div>
    </div>
  );
};

export default Routes;
