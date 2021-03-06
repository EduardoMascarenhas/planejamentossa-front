import React from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardSelo from "../../components/adminDashboard/adminSelo";

const AdminSelo = () => {
  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardSelo />
      </Layout>
    </>
  );
};

export default AdminSelo;
