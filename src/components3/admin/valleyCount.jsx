import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const ValleyFrequencyChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/valley-frequency")
      .then((response) => response.json())
      .then((data) => {
        const labels = data.map((item) => item.valley);
        const frequencies = data.map((item) => item.frequency);

        setChartData({
          labels,
          datasets: [
            {
              label: "Number of Colleges",
              data: frequencies,
              backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Custom colors
            },
          ],
        });
      })
      .catch((error) => console.error("Error fetching chart data:", error));
  }, []);

  if (!chartData) {
    return <p>Loading chart...</p>;
  }

  return (
    <div style={{ width: "80%" }}>
      <h3>Colleges in Each Valley</h3>
      <Bar
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Valley-wise College Distribution",
            },
          },
        }}
      />
    </div>
  );
};

export default ValleyFrequencyChart;
