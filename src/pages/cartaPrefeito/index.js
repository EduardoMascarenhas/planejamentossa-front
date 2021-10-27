import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Carta from "../../components/noticia/CartaPrefeito";
import HomeStyle from "../../styledComponents/homeStyles";

const CartaPrefeito = (props) => {
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const slugProp = props.match.params.slug;
    setSlug(slugProp);
  }, []);

  return (
    <>
      <HomeStyle />
      {console.log(slug)}
      <Layout>
        <Carta slug={slug} />
      </Layout>
    </>
  );
};

export default CartaPrefeito;
