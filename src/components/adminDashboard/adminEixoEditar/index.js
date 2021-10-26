import React, { useEffect } from "react";
import DashboardEixoEditar from "../content/eixoEditar";
import DashboardSidebar from "../sidebar";

const Dashboard = ({ slug }) => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardEixoEditar slug={slug} />
    </div>
  );
};

export default Dashboard;
