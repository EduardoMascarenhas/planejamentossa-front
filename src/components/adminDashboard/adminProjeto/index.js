import React from "react";
import DashboardProjetoNovo from "../content/projetoNovo";
import DashboardSidebar from "../sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardProjetoNovo />
    </div>
  );
};

export default Dashboard;
