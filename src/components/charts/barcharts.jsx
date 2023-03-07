import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    const chartConfig = {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Sales",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 1,
                min: 0
              },
            },
          ],
        },
      },
    };

    const myChart = new Chart(chartContainer.current, chartConfig);

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartContainer} />;
};

export default BarChart;
