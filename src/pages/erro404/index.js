import React from "react";
import Layout from "../../components/Layout";
import HomeStyle from "../../styledComponents/homeStyles";

const Erro404 = () => {
  return (
    <>
      <HomeStyle />
      <Layout>
        <div className="pagina-erro">
          <h1>ERRO 404</h1>
          <h3>Página não encontrada</h3>
        </div>
      </Layout>
    </>
  );
};

export default Erro404;
