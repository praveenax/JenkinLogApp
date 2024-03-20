import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import classes from "./Graph.module.css";

const randomData = [3, 6, 4, 7, 2, 5, 8, 4, 9, 5];

const LineGraph = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    Chart.register();
  }, []);

  const data = {
    labels: Array.from({ length: 10 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Jenkins Build Data",
        data: randomData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className={classes.graphcontainer}>
      <div key={key} className={classes.graph}>
        {key !== null && <Line data={data} options={options} key={key} />}
      </div>
    </div>
  );
};

export default LineGraph;
