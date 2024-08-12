import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Box, Card, CardContent, Typography } from "@mui/material";
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
import AllFields from "./AllFields";
import { chartComponentBtnData, initialData } from "./roughData";
import "../components/dashboard/dashboards.css";

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

const ChartComponent = () => {
  const [chartData, setChartData] = useState(initialData);
  const [dataKey, setDataKey] = useState("uv");

  const data = {
    labels: chartData.map((item) => item.name),
    datasets: [
      {
        label: dataKey === "uv" ? "Income" : "Expense",
        data: chartData.map((item) => item[dataKey]),
        fill: true,
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        borderColor: "rgba(0, 123, 255, 1)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="dashboardAreaChart">
      <Card sx={{}}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Typography variant="h5" style={{ color: "gray" }}>
              Statictics
            </Typography>
            {chartComponentBtnData?.map((e, i) => (
              <AllFields
                key={e?.id}
                btnStyles={i !== 1 && { color: "blue" }}
                componentType={e?.componentType}
                btnText={e?.btnText || ""}
                label={e?.label || ""}
                icon={e?.icon || ""}
              />
            ))}
          </Box>
          <Line data={data} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ChartComponent;
