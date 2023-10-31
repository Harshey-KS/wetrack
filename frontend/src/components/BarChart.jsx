import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return (
    <div className="h-48 w-[50rem] p-2 flex justify-center bg-white rounded-2xl bigShadow">
      <Bar data={chartData} width={750} height={200} />
    </div>
  );
}

export default BarChart;
