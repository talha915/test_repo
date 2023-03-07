import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const LineCharts = () => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const canvas = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');

    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: 'red',
          fill: false
        },
        {
          label: 'Dataset 2',
          data: [28, 48, 40, 19, 86, 27, 90],
          borderColor: 'green',
          fill: false
        },
        {
          label: 'Dataset 3',
          data: [45, 87, 34, 56, 71, 59, 25],
          borderColor: 'blue',
          fill: false
        }
      ]
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    setChart(new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    }));

  }, []);

  return (
    <canvas id="myChart" width="400" height="400"></canvas>
  );
}

export default LineCharts;
