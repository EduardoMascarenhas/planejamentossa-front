import React from "react";
import DashboardBannersListar from "../content/bannersListar";
import DashboardSidebar from "../sidebar";

const DashboardBanners = () => {
  return (
    <div className="dashboard">
      <DashboardSidebar />
      <DashboardBannersListar />
    </div>
  );
};

export default DashboardBanners;
