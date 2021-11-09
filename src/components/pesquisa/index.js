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
  function removeAcento(text) {
    text = text.toLowerCase();
    text = text.replace(new RegExp("[ÁÀÂÃ]", "gi"), "a");
    text = text.replace(new RegExp("[ÉÈÊ]", "gi"), "e");
    text = text.replace(new RegExp("[ÍÌÎ]", "gi"), "i");
    text = text.replace(new RegExp("[ÓÒÔÕ]", "gi"), "o");
    text = text.replace(new RegExp("[ÚÙÛ]", "gi"), "u");
    text = text.replace(new RegExp("[Ç]", "gi"), "c");
    return text;
  }
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
              <h1>PROJETOS</h1>
              {projetos &&
                projetos.map((p, i) => {
                  if (
                    removeAcento(pChave.toLowerCase()).includes(
                      removeAcento(p.name.toLowerCase())
                    ) ||
                    removeAcento(p.name.toLowerCase()).includes(
                      removeAcento(pChave.toLowerCase())
                    )
                  ) {
                    return (
                      <h4 key={i} style={{ color: "pink" }}>
                        {p.name}
                      </h4>
                    );
                  }
                })}

              <h1>SELOS</h1>
              {selos &&
                selos.map((s, i) => {
                  if (
                    removeAcento(pChave.toLowerCase()).includes(
                      removeAcento(s.title.toLowerCase())
                    ) ||
                    removeAcento(s.title.toLowerCase()).includes(
                      removeAcento(pChave.toLowerCase())
                    )
                  ) {
                    return (
                      <h4 key={i} style={{ color: "pink" }}>
                        {s.title}
                      </h4>
                    );
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
