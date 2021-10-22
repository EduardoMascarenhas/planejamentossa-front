import React from "react";
import DashboardContent from "./content";
import DashboardSidebar from "./sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
