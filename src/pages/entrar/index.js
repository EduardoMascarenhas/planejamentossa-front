import React, { useState, useEffect } from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import Layout from "../../components/Layout";
import SignIn from "../../components/signin";

const Entrar = () => {
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

  return (
    <>
      <HomeStyle />
      <Layout>
        <SignIn />
      </Layout>
    </>
  );
};

export default Entrar;
