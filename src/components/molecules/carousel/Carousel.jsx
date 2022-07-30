import React, { useState, useEffect } from "react";

/* react prime */
import { Carousel as CarouselPrime } from "primereact/carousel";
import { Button } from "primereact/button";
/* import { ProductService } from "../service/ProductService"; */
import "./Carousel.css";

/* redux */
import { connect } from "react-redux";
import { heroAction } from "../../../redux/actions";

/* Components */
import SidebarDemo from "../sideBar/SideBar";

const Carousel = ({ heroes, heroAction }) => {
  const [products, setProducts] = useState([
    { image: "test", name: "test", price: "test" },
  ]);
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "600px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];
  const [heroesList, setHeroeslist] = useState([]);
  const [isShow, setShow] = useState(false);
  const [titleHero, setTitleHero] = useState({ show: false });
  /* const productService = new ProductService(); */

  useEffect(() => {
    if (heroes) {
      setHeroeslist(heroes);
    }
  }, [heroes]); // eslint-disable-line react-hooks/exhaustive-deps

  const showSideBar = (heroe = false) => {
    if (heroe) {
      heroAction(heroe.id);
    }
    setShow(!isShow);
  };

  const ShowTitle = (heroe = false) => {
    if (heroe) {
      setTitleHero({ show: true, name: heroe.name });
    } else if (titleHero.show) {
      return <h1 className="font-subMarvel">{titleHero.name}</h1>;
    } else {
      return <h1 className="font-subMarvel">Escoge tu heroe</h1>;
    }
  };

  const productTemplate = (heroe) => {
    return (
      <div
        className="product-item hover:p-2 hover:drop-shadow-md bg-white"
        onClick={() => showSideBar(heroe)}
        onMouseOver={() => ShowTitle(heroe)}
        onMouseLeave={() => setTitleHero({ show: false })}
      >
        <div className="product-item-content">
          <div className="mb-3 ">
            <img
              src={heroe?.images?.lg}
              onError={(e) =>
                (e.target.src =
                  "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
              }
              alt={heroe.name}
              className="product-image hover:bg-black"
              title={heroe.name}
            />
          </div>
          <div>
            {/* <h4 className="mb-1">{heroe.name}</h4> */}
            {/* <h6 className="mt-0 mb-3">${product.price}</h6> */}
            {/* <span
              className={`product-badge status-${product.inventoryStatus.toLowerCase()}`}
            >
              {product.inventoryStatus}
            </span> */}
            {/* <div className="car-buttons mt-5">
              <Button
                icon="pi pi-search"
                className="p-button p-button-rounded mr-2"
              />
              <Button
                icon="pi pi-star-fill"
                className="p-button-success p-button-rounded mr-2"
              />
              <Button
                icon="pi pi-cog"
                className="p-button-help p-button-rounded"
              />
            </div> */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="carousel-demo drop-shadow-4xl p-5 bg-white">
      <SidebarDemo show={isShow} setShow={showSideBar}></SidebarDemo>
      <div className="hero-titel text-center text-2xl py-5">{ShowTitle()}</div>
      <div className="card ">
        <CarouselPrime
          value={heroesList}
          numVisible={4}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={3000}
          itemTemplate={productTemplate}
          /* header={<h5>Circular, AutoPlay, 3 Items per Page and Scroll by 1</h5>} */
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes?.data?.items,
  };
};

export default connect(mapStateToProps, { heroAction: heroAction })(Carousel);
