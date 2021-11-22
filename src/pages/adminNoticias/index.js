import React from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardNoticias from "../../components/adminDashboard/adminNoticias";

const AdminNoticias = () => {
  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardNoticias />
      </Layout>
    </>
  );
};

export default AdminNoticias;
