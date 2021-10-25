import React from "react";
import DashboardNoticiaNova from "../content/noticiaNova";
import DashboardSidebar from "../sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardNoticiaNova />
    </div>
  );
};

export default Dashboard;
