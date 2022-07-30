import React, { useState } from "react";
import { Chart } from "primereact/chart";

const DoughnutChart = ({ statistics }) => {
  const [chartData] = useState({
    labels: [
      `combate: ${statistics[0]}`,
      `poder: ${statistics[1]}`,
      `fuerza: ${statistics[2]}`,
      `velocidad: ${statistics[3]}`,
      `inteligencia: ${statistics[4]}`,
      `durabilidad: ${statistics[5]}`,
    ],
    datasets: [
      {
        data: statistics,
        backgroundColor: [
          "#860001",
          "#231955",
          "#E8AA42",
          "#7A4069",
          "#0F3D3E",
          "#E2DCC8",
        ],
        hoverBackgroundColor: ["#000000"],
      },
    ],
  });

  const [lightOptions] = useState({
    plugins: {
      legend: {
        labels: {
          color: "#fff",
          font: {
            size: 20,
          },
        },
        align: "center",
        position: "right",
      },
    },
  });

  return (
    <div className="doughnut-chart ">
      <Chart
        type="doughnut"
        data={chartData}
        options={lightOptions}
        style={{ position: "relative", width: "90%" }}
      />
    </div>
  );
};

export default DoughnutChart;
