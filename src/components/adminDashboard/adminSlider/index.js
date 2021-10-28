import React from "react";
import DashboardSliderContent from "../content/slider";
import DashboardSidebar from "../sidebar";

const DashboardSlider = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardSliderContent />
    </div>
  );
};

export default DashboardSlider;
