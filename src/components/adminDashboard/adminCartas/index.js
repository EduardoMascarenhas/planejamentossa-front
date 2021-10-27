import React from "react";
import DashboardCartasListar from "../content/cartasListar";
import DashboardSidebar from "../sidebar";

const DashboardNoticias = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardCartasListar />
    </div>
  );
};

export default DashboardNoticias;
