import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import PEDesktop from "../../components/planosEixos/Desktop";
import PEMobile from "../../components/planosEixos/Mobile";
import PlanosEixosStyle from "../../styledComponents/planosEixosStyles";

const PlanosEixos = () => {
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <PlanosEixosStyle />
      <Layout>
        <PEDesktop />
        <PEMobile />
      </Layout>
    </>
  );
};

export default PlanosEixos;
