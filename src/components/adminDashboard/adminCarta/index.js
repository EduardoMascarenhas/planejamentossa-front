import React from "react";
import DashboardCartaNova from "../content/cartaNova";
import DashboardSidebar from "../sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardCartaNova />
    </div>
  );
};

export default Dashboard;
