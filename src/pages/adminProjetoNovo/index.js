import React from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardProjetoNovo from "../../components/adminDashboard/adminProjeto";

const AdminProjetoNovo = () => {
  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardProjetoNovo />
      </Layout>
    </>
  );
};

export default AdminProjetoNovo;
