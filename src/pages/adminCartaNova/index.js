import React, { useState, useEffect } from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardCartaNova from "../../components/adminDashboard/adminCarta";

const AdminCartaNova = () => {
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardCartaNova />
      </Layout>
    </>
  );
};

export default AdminCartaNova;
