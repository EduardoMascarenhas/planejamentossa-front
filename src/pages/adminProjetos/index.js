import React from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardProjetos from "../../components/adminDashboard/adminProjetos";

const AdminDashboardProjetos = () => {
  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardProjetos />
      </Layout>
    </>
  );
};

export default AdminDashboardProjetos;
