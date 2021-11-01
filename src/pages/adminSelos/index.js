import React from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardSelos from "../../components/adminDashboard/adminSelos";

const AdminSelos = () => {
  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardSelos />
      </Layout>
    </>
  );
};

export default AdminSelos;
