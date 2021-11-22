import React from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardNoticiaNova from "../../components/adminDashboard/adminNoticia";

const AdminNoticiaNova = () => {
  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardNoticiaNova />
      </Layout>
    </>
  );
};

export default AdminNoticiaNova;
