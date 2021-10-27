import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import PDesktop from "../../components/projeto/Desktop";
import ProjetosStyle from "../../styledComponents/projetosStyles";

const Projeto = (props) => {
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const slugProp = props.match.params.slug;
    setSlug(slugProp);
  }, []);

  return (
    <>
      <ProjetosStyle />
      <Layout>
        <PDesktop slug={slug} />
      </Layout>
    </>
  );
};

export default Projeto;
