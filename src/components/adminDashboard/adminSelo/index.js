import React from "react";
import DashboardSeloContent from "../content/seloNovo";
import DashboardSidebar from "../sidebar";

const DashboardSelo = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardSeloContent />
    </div>
  );
};

export default DashboardSelo;
