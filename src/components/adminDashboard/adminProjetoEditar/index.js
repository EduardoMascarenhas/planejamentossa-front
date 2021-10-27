import React, { useEffect } from "react";
import DashboardProjetoEditar from "../content/projetoEditar";
import DashboardSidebar from "../sidebar";

const Dashboard = ({ slug }) => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardProjetoEditar slug={slug} />
    </div>
  );
};

export default Dashboard;
