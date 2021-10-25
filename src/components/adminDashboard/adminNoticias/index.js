import React from "react";
import DashboardNoticiasListar from "../content/noticiasListar";
import DashboardSidebar from "../sidebar";

const DashboardNoticias = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardNoticiasListar />
    </div>
  );
};

export default DashboardNoticias;
