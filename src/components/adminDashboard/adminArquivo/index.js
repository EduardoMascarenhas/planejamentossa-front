import React from "react";
import DashboardArquivoContent from "../content/arquivoNovo";
import DashboardSidebar from "../sidebar";

const DashboardArquivo = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardArquivoContent />
    </div>
  );
};

export default DashboardArquivo;
