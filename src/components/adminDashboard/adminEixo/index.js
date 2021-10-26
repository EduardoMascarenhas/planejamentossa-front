import React from "react";
import DashboardEixoNovo from "../content/eixoNovo";
import DashboardSidebar from "../sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardEixoNovo />
    </div>
  );
};

export default Dashboard;
