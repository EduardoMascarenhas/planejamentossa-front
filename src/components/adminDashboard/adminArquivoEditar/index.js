import React from "react";
import DashboardArquivoContent from "../content/arquivoEditar";
import DashboardSidebar from "../sidebar";

const DashboardArquivoEditar = ({ id }) => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardArquivoContent id={id} />
    </div>
  );
};

export default DashboardArquivoEditar;
