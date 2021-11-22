import React from "react";
import Layout from "../../components/Layout";
import Carta from "../../components/noticia/CartaPrefeito";
import HomeStyle from "../../styledComponents/homeStyles";

const CartaPrefeito = () => {
  return (
    <>
      <HomeStyle />
      <Layout>
        <Carta />
      </Layout>
    </>
  );
};

export default CartaPrefeito;
