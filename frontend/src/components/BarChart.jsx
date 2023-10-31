import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return (
    <div className="h-fit w-fit p-2 flex justify-center bg-white rounded-2xl bigShadow">
      <Bar data={chartData} width={630} height={130} />
    </div>
  );
}

export default BarChart;
