import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Card, CardContent, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { initialData } from "./roughData";
import "../components/dashboard/dashboards.css";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const OverViewChart = () => {
  const [dataKey, setDataKey] = useState("uv");

  const data = {
    labels: initialData.map((item) => item.name),
    datasets: [
      {
        label: dataKey === "uv" ? "Expense" : "Expense",
        data: initialData.map((item) => item[dataKey]),
        fill: true,
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: "rgba(0, 123, 255, 1)",
        tension: 0.4,
      },
    ],
  };

  return (
    <Card sx={{ padding: 0, background: "whitesmoke", borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h6">Overview</Typography>
        <Line data={data} />
      </CardContent>
    </Card>
  );
};

export default OverViewChart;
