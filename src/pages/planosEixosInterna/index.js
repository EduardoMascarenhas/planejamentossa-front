import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import PEIDesktop from "../../components/planosEixosInterna/Desktop";
import PEIMobile from "../../components/planosEixosInterna/Mobile";
import PlanosEixosInternaStyle from "../../styledComponents/planosEixosInternaStyles";

const PlanosEixosInterna = (props) => {
  const [slug, setSlug] = useState("");
  const [projetosOpen, setProjetosOpen] = useState("");

  useEffect(() => {
    const slugProp = props.match.params.slug;
    const projetosProp = props.match.params.projetos;
    setSlug(slugProp);
    setProjetosOpen(projetosProp);
  }, []);

  return (
    <>
      <PlanosEixosInternaStyle />
      <Layout>
        <PEIDesktop slug={slug} projetosOpen={projetosOpen} />
        <PEIMobile slug={slug} projetosOpen={projetosOpen} />
      </Layout>
    </>
  );
};

export default PlanosEixosInterna;
