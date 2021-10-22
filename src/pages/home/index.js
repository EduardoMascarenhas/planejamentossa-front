import React, { useState, useEffect } from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import Layout from "../../components/Layout";
import Sessao1 from "../../components/home/Sessao1";
import Sessao2 from "../../components/home/Sessao2";

const Home = () => {
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <HomeStyle />
      <Layout>
        <Sessao1 />
        <Sessao2 />
      </Layout>
    </>
  );
};

export default Home;
