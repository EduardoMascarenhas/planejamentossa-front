import React from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardArquivos from "../../components/adminDashboard/adminArquivos";

const AdminArquivos = () => {
  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardArquivos />
      </Layout>
    </>
  );
};

export default AdminArquivos;
