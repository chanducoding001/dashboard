import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Button, Card, Divider, Typography } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import CircleIcon from "@mui/icons-material/Circle";
// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const SemiPieChart = () => {
  // Chart data
  const data = {
    labels: [], // Removed labels
    datasets: [
      {
        data: [200, 200, 200],
        backgroundColor: [
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 255, 0, 0.7)",
        ],
        borderColor: [
          "rgba(54, 162, 235, 1)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 255, 0, 0.7)",
        ],
        borderWidth: [3, 2, 2],
        borderRadius: [10, 0, 0],
      },
    ],
  };

  // Chart options for semi-pie chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend labels
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = "";
            if (context.parsed !== null) {
              label = ` ${context.raw}`;
            }
            return label;
          },
        },
      },
    },
    cutout: "70%", // Creates a doughnut chart
    rotation: -90, // Rotate the chart
    circumference: 180, // Limits the chart to half (semi-pie)
  };

  return (
    <Card
      sx={{
        position: "relative",
        width: "100%",
        height: "370px",
        backgroundColor: "whitesmoke",
        marginTop: "10px",
        padding: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "1.2rem" }}>
          Total View Performance
        </Typography>
        <MoreHorizOutlinedIcon />
      </Box>
      <Divider
        sx={{
          fontSize: "1rem",
          fontWeight: "bold",
          height: "10px",
          marginBottom: "10px",
        }}
      />
      <Box
        sx={{
          height: "250px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          bottom: 60,
          left: 10,
        }}
      >
        <Doughnut data={data} options={options} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          left: "52%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          background: "none",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <Typography variant="h7" sx={{ color: "gray", fontSize: "1rem" }}>
          Total Count
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          1.375
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          bottom: 110,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100px",
          textWrap: "wrap",
        }}
      >
        <Typography sx={{ fontSize: "0.9rem", padding: "0 20px" }}>
          Keep your info updated to increase the number of interactions
        </Typography>
        <Button
          sx={{ textTransform: "none", padding: "5px 20px" }}
          variant="contained"
        >
          See More
        </Button>
      </Box>
      <Box
        sx={{
          position: "relative",
          bottom: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CircleIcon sx={{ color: "blue", fontSize: "10px" }} />
          <Typography sx={{ fontWeight: "bold", fontSize: "0.8rem" }}>
            View Count 124
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CircleIcon sx={{ color: "yellowgreen", fontSize: "10px" }} />
          <Typography sx={{ fontWeight: "bold", fontSize: "0.8rem" }}>
            Percentage 56%
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default SemiPieChart;
