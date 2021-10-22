import React, { useState, useEffect } from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import Dashboard from "../../components/adminDashboard";

const AdminDashboardCategorias = () => {
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <Dashboard />
      </Layout>
    </>
  );
};

export default AdminDashboardCategorias;
