import React from "react";
import Layout from "../../components/Layout";
import SelosContent from "../../components/selos";
import HomeStyle from "../../styledComponents/homeStyles";

const Selos = () => {
  return (
    <>
      <HomeStyle />
      <Layout>
        <SelosContent />
      </Layout>
    </>
  );
};

export default Selos;
