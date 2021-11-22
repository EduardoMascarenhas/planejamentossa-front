import React from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import Layout from "../../components/Layout";
import SignUp from "../../components/signup";

const Cadastrar = () => {
  return (
    <>
      <HomeStyle />
      <Layout>
        <SignUp />
      </Layout>
    </>
  );
};

export default Cadastrar;
