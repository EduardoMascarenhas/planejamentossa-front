import React from "react";
import DashboardBannerContent from "../content/bannerNovo";
import DashboardSidebar from "../sidebar";

const DashboardBanner = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardBannerContent />
    </div>
  );
};

export default DashboardBanner;
