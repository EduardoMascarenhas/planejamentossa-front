import React from "react";
import DashboardProjetosListar from "../content/projetosListar";
import DashboardSidebar from "../sidebar";

const DashboardProjetos = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardProjetosListar />
    </div>
  );
};

export default DashboardProjetos;
