import React, { useState } from "react";

/* react prime */
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";

/* redux */
import { connect } from "react-redux";

/* components */
import DoughnutChart from "../../atoms/DoughnutChart";

/* css */
import "./SideBar.css";

const SidebarDemo = ({ show, setShow, hero }) => {
  const [visibleRight, setVisibleRight] = useState(show);

  const heroeData = () => {
    if (hero) {
      const statistics = [
        hero.powerstats.combat,
        hero.powerstats.power,
        hero.powerstats.strength,
        hero.powerstats.speed,
        hero.powerstats.intelligence,
        hero.powerstats.durability,
      ];
      return (
        <div className="heroe-data">
          <div className="sidebar-title-hero text-center font-marvel text-5xl text-yellow">
            <h1>{hero.name}</h1>
          </div>
          <div className="hero-avatar text-center pt-10">
            <Avatar
              image={hero.images.sm}
              className="mr-2"
              size="xlarge"
              shape="circle"
            />
          </div>
          <div className="font-subMarvel text-lg text-center pt-10">
            <h3>
              <span className="text-yellow">Peso: </span>
              {hero.appearance.weight[1]}
            </h3>
            <h3>
              <span className="text-yellow">Altura: </span>
              {hero.appearance.height[1]}
            </h3>
            <h3>
              <span className="text-yellow">Editor: </span>
              {hero.biography.publisher}
            </h3>
            <h3>
              <span className="text-yellow">Estreno: </span>
              {hero.biography.firstAppearance}
            </h3>
          </div>
          <div className="powerstats text-center">
            <DoughnutChart statistics={statistics}></DoughnutChart>
            {/* <h2 className="text-center text-yellow text-4xl font-marvel">
              Estadisticas de poder
            </h2> */}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="SideBar">
      <Sidebar visible={show} position="right" onHide={() => setShow()}>
        {heroeData()}
      </Sidebar>
      {/* <Button
          icon="pi pi-arrow-left"
          onClick={() => setVisibleRight(true)}
          className="mr-2"
        /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    hero: state.hero?.data,
  };
};

export default connect(mapStateToProps)(SidebarDemo);
