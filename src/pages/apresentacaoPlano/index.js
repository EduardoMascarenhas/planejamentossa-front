import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import ApresentacoesPlano from "../../components/noticia/ApresentacaoPlano";
import HomeStyle from "../../styledComponents/homeStyles";

const ApresentacaoPlano = () => {
  return (
    <>
      <HomeStyle />
      <Layout>
        <ApresentacoesPlano />
      </Layout>
    </>
  );
};

export default ApresentacaoPlano;
