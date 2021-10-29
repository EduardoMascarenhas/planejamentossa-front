import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import HomeStyle from "../../styledComponents/homeStyles";

const EmDesenvolvimento = () => {
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <HomeStyle />
      <Layout>
        <div className="pagina-erro"></div>
      </Layout>
    </>
  );
};

export default EmDesenvolvimento;
