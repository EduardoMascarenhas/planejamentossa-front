import React, { useState, useEffect } from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import AdminDashboardStyle from "../../styledComponents/adminDashboardStyle";
import Layout from "../../components/Layout";
import DashboardSliderEditar from "../../components/adminDashboard/adminSliderEditar";

const AdminSliderEditar = (props) => {
  const [id, setId] = useState("");

  useEffect(() => {
    const idProp = props.match.params.sliderId;
    setId(idProp);
  }, []);
  return (
    <>
      <HomeStyle />
      <AdminDashboardStyle />
      <Layout>
        <DashboardSliderEditar id={id} />
      </Layout>
    </>
  );
};

export default AdminSliderEditar;
