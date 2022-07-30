import React from "react";

/* components */
import PaginatorPrime from "../molecules/paginator/PaginatorPrime";
import Carousel from "../molecules/carousel/Carousel";

const Home = () => {
  return (
    <div className="Home">
      <div className="carousel-container">
        <Carousel></Carousel>
      </div>
      <div className="paginator-container">
        <PaginatorPrime></PaginatorPrime>
      </div>
    </div>
  );
};

export default Home;
