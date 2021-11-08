import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import PDesktop from "../../components/projeto/Desktop";
import ProjetosStyle from "../../styledComponents/projetosStyles";

const Projeto = (props) => {
  const [slug, setSlug] = useState("");
  const [selo, setSelo] = useState("");

  useEffect(() => {
    const slugProp = props.match.params.slug;
    const seloProp = props.match.params.selo;
    setSlug(slugProp);
    setSelo(seloProp);
  }, []);

  return (
    <>
      <ProjetosStyle />
      <Layout>
        <PDesktop slug={slug} selo={selo} />
      </Layout>
    </>
  );
};

export default Projeto;
