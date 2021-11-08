import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import SeloContent from "../../components/selo";
import HomeStyle from "../../styledComponents/homeStyles";

const Selo = (props) => {
  const [idProp, setID] = useState("");

  useEffect(() => {
    const idProp = props.match.params.seloId;
    setID(idProp);
  }, []);
  return (
    <>
      <HomeStyle />
      <Layout>
        <SeloContent selo={idProp} />
      </Layout>
    </>
  );
};

export default Selo;
