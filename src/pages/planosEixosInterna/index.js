import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import PEIDesktop from "../../components/planosEixosInterna/Desktop";
import PEIMobile from "../../components/planosEixosInterna/Mobile";
import PlanosEixosInternaStyle from "../../styledComponents/planosEixosInternaStyles";

const PlanosEixosInterna = () => {
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <PlanosEixosInternaStyle />
      <Layout>
        <PEIDesktop />
        <PEIMobile />
      </Layout>
    </>
  );
};

export default PlanosEixosInterna;
