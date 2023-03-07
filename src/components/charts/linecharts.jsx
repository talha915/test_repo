import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

const LineChart = ({ data }) => {
  const chartRef = useRef();

  useEffect(() => {
    if (data && chartRef.current) {
      const myChartRef = chartRef.current.getContext('2d');
      new Chart(myChartRef, {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: [
            {
              label: data.title,
              data: data.values,
              fill: false,
              borderColor: 'rgba(75,192,192,1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: data.xlabel,
              },
            }],
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: data.ylabel,
              },
            }],
          },
        },
      });
    }
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default LineChart;
