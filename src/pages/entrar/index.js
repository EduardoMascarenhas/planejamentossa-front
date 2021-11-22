import React from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import Layout from "../../components/Layout";
import SignIn from "../../components/signin";

const Entrar = () => {
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
