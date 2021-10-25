import React, { useState, useEffect } from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardNoticiaEditar from "../../components/adminDashboard/adminNoticiaEditar";

const AdminNoticiaEditar = (props) => {

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
        <DashboardNoticiaEditar slug={slug} />
      </Layout>
    </>
  );
};

export default AdminNoticiaEditar;
