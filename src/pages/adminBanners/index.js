import React from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardBanners from "../../components/adminDashboard/adminBanners";

const AdminBanners = () => {
  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardBanners />
      </Layout>
    </>
  );
};

export default AdminBanners;
