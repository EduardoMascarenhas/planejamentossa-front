import React, { useState, useEffect } from "react";
import HomeStyle from "../../styledComponents/homeStyles";
import Layout from "../../components/Layout";
import SignUp from "../../components/signup";

const Cadastrar = () => {
  const [error, setError] = useState(false);

  useEffect(() => {}, []);

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
