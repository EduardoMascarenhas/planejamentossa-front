import React from "react";
import DashboardSliderContent from "../content/sliderEditar";
import DashboardSidebar from "../sidebar";

const DashboardSliderEditar = ({ id }) => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardSliderContent id={id} />
    </div>
  );
};

export default DashboardSliderEditar;
