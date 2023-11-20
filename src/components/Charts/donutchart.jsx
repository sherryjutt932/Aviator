import React, { useRef, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "./PieChart.css";

const color = [
    "#DB9A2480", "#B69A4980", "#929B6D80","#6D9C9280","#499DB680","#249DDB80",
]
const Scolor = [
    "#DB9A24", "#B69A49", "#929B6D","#6D9C92","#499DB6","#249DDB",
]

ChartJS.register(ArcElement, Tooltip, Legend);

export default function App() {

    const  chartRef = useRef();
 const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: color,
    //   backgroundColor: [
    //     'rgba(255, 99, 132, 0.2)',
    //     'rgba(54, 162, 235, 0.2)',
    //     'rgba(255, 206, 86, 0.2)',
    //     'rgba(75, 192, 192, 0.2)',
    //     'rgba(153, 102, 255, 0.2)',
    //     'rgba(255, 159, 64, 0.2)',
    //   ],
      borderColor:Scolor,
      borderWidth: 2,
    },
  ],
};

const options = {
    plugins: {
      legend: {
          display: true,
          position: 'right', // You can adjust the position as needed
        labels: {
            color: 'white',
            // generateLabels: function (chart) {
            //     const data = chart.data;
                
            //     if (data.labels.length && data.datasets.length) {
            //       const dataset = data.datasets[0];
                  
            //       if (dataset.data) {
            //         return data.labels.map((label, i) => {
            //           const value = dataset.data[i];
            //           return {
            //             text: `${label}: ${value}`,
            //             fillStyle: dataset.backgroundColor ? dataset.backgroundColor[i] : 'black',
            //             hidden: isNaN(value),
            //             lineCap: dataset.borderCapStyle,
            //             lineDash: dataset.borderDash,
            //             lineDashOffset: dataset.borderDashOffset,
            //             lineJoin: dataset.borderJoinStyle,
            //             lineWidth: dataset.borderWidth,
            //             strokeStyle: dataset.borderColor ? dataset.borderColor[i] : 'black',
            //             pointStyle: dataset.pointStyle ? dataset.pointStyle[i] : 'circle',
            //             rotation: dataset.rotation,
            //           };
            //         });
            //       }
            //     }
      
            //     return [];
            //   },
          },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const value = context.parsed;
            return `${label}: ${value}`;
          },
        },
      },

    },

  };

    return (
        <Doughnut ref={chartRef} data={data} options={options} redraw={false}/>
    )
}