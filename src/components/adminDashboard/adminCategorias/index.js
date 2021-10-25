import React from "react";
import DashboardCategoriaListar from "../content/categoriasListar";
import DashboardSidebar from "../sidebar";

const DashboardCategorias = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardCategoriaListar />
    </div>
  );
};

export default DashboardCategorias;
