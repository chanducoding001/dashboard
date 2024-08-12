import React from "react";
import { dashboardCardData } from "./dashboardRoughData";
import DashboardCard from "../../reusables/DashboardCard";
import "./dashboards.css";

const DashboardCardWrapper = () => {
  return (
    <div className="dashboardCards">
      {dashboardCardData.map((e) => (
        <DashboardCard
          key={e?.id}
          title={e?.title}
          imgs={e?.imgs}
          views={e?.views}
          discount={e?.discount}
          days={e?.day}
        />
      ))}
    </div>
  );
};

export default DashboardCardWrapper;
