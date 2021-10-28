import React, { useState, useEffect } from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardBannerEditar from "../../components/adminDashboard/adminBannerEditar";

const AdminBannerEditar = (props) => {
  const [id, setId] = useState("");

  useEffect(() => {
    const idProp = props.match.params.bannerId;
    setId(idProp);
  }, []);
  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardBannerEditar id={id} />
      </Layout>
    </>
  );
};

export default AdminBannerEditar;
