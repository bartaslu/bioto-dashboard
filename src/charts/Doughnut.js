import React from 'react'
import { Doughnut } from "react-chartjs-2"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    { 
      data:[12, 19, 3, 5, 2, 3],
    },
  ],
};


function DoughnutChart() {
  return (
    <div>
      <h1>DoughnutChart</h1>
      <div>
        <Doughnut data = {data}/>
      </div>
    </div>
    
  )
}

export default DoughnutChart