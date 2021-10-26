import React, { useState, useEffect } from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardCategorias from "../../components/adminDashboard/adminCategorias";

const AdminDashboardProjetos = () => {
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardCategorias />
      </Layout>
    </>
  );
};

export default AdminDashboardProjetos;
