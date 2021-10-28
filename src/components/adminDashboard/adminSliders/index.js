import React from "react";
import DashboardSlidersListar from "../content/slidersListar";
import DashboardSidebar from "../sidebar";

const DashboardSliders = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardSlidersListar />
    </div>
  );
};

export default DashboardSliders;
