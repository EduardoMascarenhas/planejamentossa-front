import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Noticia from "../../components/noticia/Noticia";
import HomeStyle from "../../styledComponents/homeStyles";

const Noticias = (props) => {
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const slugProp = props.match.params.slug;
    setSlug(slugProp);
  }, []);

  return (
    <>
      <HomeStyle />
      <Layout>
        <Noticia slug={slug} />
      </Layout>
    </>
  );
};

export default Noticias;
