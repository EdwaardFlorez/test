import React from "react";

/* components */
import PaginatorPrime from "../molecules/paginator/PaginatorPrime";
import Carousel from "../molecules/carousel/Carousel";

const Home = () => {

  return (
    <div className="Home h-full flex flex-col">
      <div className="carousel-container grow flex flex-col justify-center">
        <Carousel></Carousel>
      </div>
      <div className="paginator-container pb-10">
        <PaginatorPrime></PaginatorPrime>
      </div>
    </div>
  );
};

export default Home;
