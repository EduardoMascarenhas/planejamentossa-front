import React, { useState, useEffect } from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardCategoriaNova from "../../components/adminDashboard/adminCategoria";

const AdminCategoriaNova = () => {
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardCategoriaNova />
      </Layout>
    </>
  );
};

export default AdminCategoriaNova;
