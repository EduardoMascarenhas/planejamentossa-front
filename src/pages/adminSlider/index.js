import React from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardSlider from "../../components/adminDashboard/adminSlider";

const AdminSlider = () => {
  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardSlider />
      </Layout>
    </>
  );
};

export default AdminSlider;
