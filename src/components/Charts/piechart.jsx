import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./PieChart.css";

// const color = [
//   "#DB9A2480", "#B69A4980", "#929B6D80","#6D9C9280","#499DB680","#249DDB80",
// ]
// const Scolor = [
//   "#DB9A24", "#B69A49", "#929B6D","#6D9C92","#499DB6","#249DDB",
// ]

const PieChart = ({data,darkMode}) => {
  const [options] = useState({
    series: data.values,
    labels: data.names,
    colors: data.color,
    stroke: {colors: data.strokeColor},
    chart: {
      type: 'donut',
      background: 'transparent',
      foreColor: !darkMode?"#fff":"#000",
    },
    dataLabels: {
      style: {
        // fontSize:16,
        colors: !darkMode?["#fff"]:["#000"], // Set the text color for each label
      },
    },
    legend: {
      fontSize:16,
      position: 'bottom',
      colors: !darkMode?'#fff':'#000', // Set the text color for each label
    },
    plotOptions: {
      pie: {
        donut: {
          size: '40%', // Adjust the size to control the donut radius
          labels: {
            show: false,
            total: {
              show: false,
              label: 'Total',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
   
  });

  return (
    <div id="pieChart" className="custom-pie-chart">
      <Chart
        options={options}
        series={options.series}
        type="donut"
        width="100%"
      />
    </div>
  );
};

export default PieChart;
