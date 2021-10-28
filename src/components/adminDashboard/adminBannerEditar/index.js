import React from "react";
import DashboardBannerContent from "../content/bannerEditar";
import DashboardSidebar from "../sidebar";

const DashboardBannerEditar = ({ id }) => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardBannerContent id={id} />
    </div>
  );
};

export default DashboardBannerEditar;
