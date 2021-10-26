import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import PEIDesktop from "../../components/planosEixosInterna/Desktop";
import PEIMobile from "../../components/planosEixosInterna/Mobile";
import PlanosEixosInternaStyle from "../../styledComponents/planosEixosInternaStyles";

const PlanosEixosInterna = (props) => {
  const [slug, setSlug] = useState("");

  useEffect(() => {
    const slugProp = props.match.params.slug;
    setSlug(slugProp);
  }, []);

  return (
    <>
      <PlanosEixosInternaStyle />
      <Layout>
        <PEIDesktop slug={slug} />
        <PEIMobile slug={slug} />
      </Layout>
    </>
  );
};

export default PlanosEixosInterna;
