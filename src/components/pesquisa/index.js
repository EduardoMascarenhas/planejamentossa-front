import React, { useState, useEffect } from "react";
import slugify from "slugify";
import { getProjetos, getSelos } from "../../core/apiCore";
import parser from "html-react-parser";
import { API } from "../../config";

const PesquisaContent = ({ pChave }) => {
  const [projetos, setProjetos] = useState([]);
  const [selos, setSelos] = useState([]);
  const [values, setValues] = useState({
    error: false,
    errorMsg: "",
    redirectToReferrer: false,
  });
  const { error, errorMsg, redirectToReferrer } = values;
  const paginaAnterior = () => {
    console.log(window.history.back());
  };
  const initProjetos = () => {
    getProjetos().then((data) => {
      if (data.error || !data) {
        console.log("erro ao carregar os projetos");
      } else {
        setProjetos(data);
      }
    });
  };
  const initSelos = () => {
    getSelos().then((data) => {
      if (data.error || !data) {
        console.log("erro ao carregar os selos");
      } else {
        setSelos(data);
      }
    });
  };
  useEffect(() => {
    initProjetos();
    initSelos();
  }, [pChave]);

  return (
    <section className="pb-0 mt-0 position-relative d-flex bg-home-center bg-selos">
      <div className="container">
        <div className="col-12 py-5 mb-5 align-items-center mx-auto card-space-home">
          <div className="mt-3" id="os">
            <div className="topo-selos">
              <h3>Resultado da Pesquisa</h3>
              <button
                className="button-voltar"
                style={{ position: "relative", marginTop: "0" }}
              >
                {" "}
                <a href="#" onClick={() => paginaAnterior()}>
                  Voltar <i className="fas fa-arrow-left"></i>
                </a>{" "}
              </button>
            </div>

            <div className="">
              {projetos &&
                projetos.map((p, i) => {
                  if (slugify(pChave).toLocaleLowerCase() === p.slug) {
                    return <h1 key={i}>Existe nos Projetos</h1>;
                  } else {
                    return "";
                  }
                })}
              {selos &&
                selos.map((s, i) => {
                  if (slugify(pChave).toLocaleLowerCase() === s.slug) {
                    return <h1 key={i}>Existe nos Selos</h1>;
                  } else {
                    return "";
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PesquisaContent;
