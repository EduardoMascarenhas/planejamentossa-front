import React, { useState, useEffect } from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardSeloEditar from "../../components/adminDashboard/adminSeloEditar";

const AdminSeloEditar = (props) => {
  const [id, setId] = useState("");

  useEffect(() => {
    const idProp = props.match.params.seloId;
    setId(idProp);
  }, []);
  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardSeloEditar id={id} />
      </Layout>
    </>
  );
};

export default AdminSeloEditar;
