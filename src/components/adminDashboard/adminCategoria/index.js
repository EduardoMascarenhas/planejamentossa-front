import React from "react";
import DashboardCategoriaNova from "../content/categoriaNova";
import DashboardSidebar from "../sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardCategoriaNova />
    </div>
  );
};

export default Dashboard;
