import React, { useEffect } from "react";
import DashboardCartaEditar from "../content/cartaEditar";
import DashboardSidebar from "../sidebar";

const Dashboard = ({ slug }) => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardCartaEditar slug={slug} />
    </div>
  );
};

export default Dashboard;
