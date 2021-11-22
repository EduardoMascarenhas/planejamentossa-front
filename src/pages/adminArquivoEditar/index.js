import React, { useState, useEffect } from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardArquivoEditar from "../../components/adminDashboard/adminArquivoEditar";

const AdminArquivoEditar = (props) => {
  const [id, setId] = useState("");

  useEffect(() => {
    const idProp = props.match.params.arquivoId;
    setId(idProp);
  }, []);
  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardArquivoEditar id={id} />
      </Layout>
    </>
  );
};

export default AdminArquivoEditar;
