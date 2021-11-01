import React from "react";
import DashboardSelosListar from "../content/selosListar";
import DashboardSidebar from "../sidebar";

const DashboardSelos = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardSelosListar />
    </div>
  );
};

export default DashboardSelos;
