import React, { useState, useEffect } from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import Layout from "../../components/Layout";
import Sessao1 from "../../components/home/Sessao1";
import Sessao2 from "../../components/home/Sessao2";
import { getArquivos } from "../../core/apiCore";

const Home = () => {
  const [arquivo, setArquivo] = useState("");

  const init = () => {
    getArquivos().then((data) => {
      if (data.error || !data) {
        console.log("erro ao carregar os arquivos");
      } else {
        setArquivo(data[0]._id);
      }
    });
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <HomeStyle />
      <Layout>
        <Sessao1 pdf={arquivo} />
        <Sessao2 />
      </Layout>
    </>
  );
};

export default Home;
