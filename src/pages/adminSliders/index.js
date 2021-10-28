import React from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardSliders from "../../components/adminDashboard/adminSliders";

const AdminSliders = () => {
  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardSliders />
      </Layout>
    </>
  );
};

export default AdminSliders;
