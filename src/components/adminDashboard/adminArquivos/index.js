import React from "react";
import DashboardArquivosListar from "../content/arquivosListar";
import DashboardSidebar from "../sidebar";

const DashboardArquivos = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardArquivosListar />
    </div>
  );
};

export default DashboardArquivos;
