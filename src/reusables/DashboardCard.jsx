import { Card } from "@mui/material";
import React from "react";
import ReUseButton from "./ReUseButton";
import { ExploreOutlined } from "@mui/icons-material";

const DashboardCard = (props) => {
  const { title, imgs, views, discount, days } = props;

  const imgStyle = (index) => ({
    height: "35px",
    width: "35px",
    borderRadius: "50%",
    position: index > 0 ? "relative" : "static",
    right: index > 0 ? `${index * 20}px` : "0",
  });
  const titleWrapper = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const imgWrapper = {
    position: "relative",
    left: 37,
  };

  return (
    <Card sx={{ width: "32%", height: "100%", padding: "10px" }}>
      <div style={titleWrapper}>
        <h4 style={{ color: "gray", width: "30%" }}>{title}</h4>
        <div style={imgWrapper}>
          {imgs.map((e, i) => (
            <img id={i} src={e} style={imgStyle(i)} />
          ))}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
        }}
      >
        <h1>{views}</h1>
        <ReUseButton
          btnText={discount}
          icon={<ExploreOutlined />}
          btnStyles={{ color: "blue", borderRadius: "15px" }}
        />
      </div>
      <div>
        <h4 style={{ color: "gray" }}>Views ({days} Days)</h4>
      </div>
    </Card>
  );
};

export default DashboardCard;
