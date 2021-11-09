import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import PesquisaContent from "../../components/pesquisa";
import HomeStyle from "../../styledComponents/homeStyles";

const Pesquisa = (props) => {
  const [pChaveProp, setID] = useState("");

  useEffect(() => {
    const pChaveProp = props.match.params.pchave;
    setID(pChaveProp);
  }, []);
  return (
    <>
      <HomeStyle />
      <Layout>
        <PesquisaContent pChave={pChaveProp} />
      </Layout>
    </>
  );
};

export default Pesquisa;
