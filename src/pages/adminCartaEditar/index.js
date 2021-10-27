import React, { useState, useEffect } from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardCartaEditar from "../../components/adminDashboard/adminCartaEditar";

const AdminCartaEditar = (props) => {
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
        <DashboardCartaEditar slug={slug} />
      </Layout>
    </>
  );
};

export default AdminCartaEditar;
