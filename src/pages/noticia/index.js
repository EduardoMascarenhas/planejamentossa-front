import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Noticia from "../../components/noticia/Noticia";
import HomeStyle from "../../styledComponents/homeStyles";

const Noticias = () => {
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <HomeStyle />
      <Layout>
        <Noticia />
      </Layout>
    </>
  );
};

export default Noticias;
