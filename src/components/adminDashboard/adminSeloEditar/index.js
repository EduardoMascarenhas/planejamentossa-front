import React from "react";
import DashboardSeloContent from "../content/seloEditar";
import DashboardSidebar from "../sidebar";

const DashboardSeloEditar = ({ id }) => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardSeloContent id={id} />
    </div>
  );
};

export default DashboardSeloEditar;
