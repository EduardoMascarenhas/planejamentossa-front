import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import PDesktop from "../../components/projeto/Desktop";
import PMobile from "../../components/projeto/Mobile";
import ProjetosStyle from "../../styledComponents/projetosStyles";

const Projeto = () => {
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <ProjetosStyle />
      <Layout>
        <PDesktop />
        <PMobile />
      </Layout>
    </>
  );
};

export default Projeto;
