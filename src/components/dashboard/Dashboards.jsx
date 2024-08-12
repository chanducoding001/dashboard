import React from "react";
import Banner from "./Banner";
import "./dashboards.css";
import ChartComponent from "../../reusables/ChartComponent";
import DashboardCardWrapper from "./DashboardCardWrapper";
import ButtonGroup from "./ButtonGroup";
import TotalSpendings from "./TotalSpendings";
import OverViewChart from "../../reusables/OverViewChart";
import SemiPieChart from "../../reusables/SemiPieChart";

const Dashboards = () => {
  return (
    <div className="dashboardContainer">
      <div className="dashboardLeftContainer">
        <Banner />
        <DashboardCardWrapper />
        <ChartComponent />
      </div>
      <div className="dashboardRightContainer">
        <ButtonGroup />
        <TotalSpendings />
        <OverViewChart />
        <SemiPieChart />
      </div>
    </div>
  );
};

export default Dashboards;
