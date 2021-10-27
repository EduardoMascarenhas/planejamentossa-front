import React, { useState, useEffect } from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardProjetoEditar from "../../components/adminDashboard/adminProjetoEditar";

const AdminProjetoEditar = (props) => {
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const slugProp = props.match.params.slug;
    setSlug(slugProp);
  }, []);

  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardProjetoEditar slug={slug} />
      </Layout>
    </>
  );
};

export default AdminProjetoEditar;
