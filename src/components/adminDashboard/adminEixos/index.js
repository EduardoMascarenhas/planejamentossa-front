import React from "react";
import DashboardEixosListar from "../content/eixosListar";
import DashboardSidebar from "../sidebar";

const DashboardEixos = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardEixosListar />
    </div>
  );
};

export default DashboardEixos;
