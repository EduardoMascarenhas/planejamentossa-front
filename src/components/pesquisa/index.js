import React, { useState, useEffect } from "react";
import slugify from "slugify";
import { getProjetos, getSelos, getEixos } from "../../core/apiCore";
import parser from "html-react-parser";
import { API } from "../../config";

const PesquisaContent = ({ pChave }) => {
  const [projetos, setProjetos] = useState([]);
  const [selos, setSelos] = useState([]);
  const [eixos, setEixos] = useState([]);
  const [values, setValues] = useState({
    error: false,
    errorMsg: "",
    redirectToReferrer: false,
  });
  const { error, errorMsg, redirectToReferrer } = values;
  const paginaAnterior = () => {
    console.log(window.history.back());
  };
  const initEixos = () => {
    getEixos().then((data) => {
      if (data.error || !data) {
        console.log("erro ao carregar os eixos");
      } else {
        setEixos(data);
      }
    });
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
  const openSelo = (id) => {
    window.location.href = `/selo-${id}`;
  };
  const openProjeto = (slug) => {
    window.location.href = `/projeto-${slug}`;
  };
  const openEixo = (slug) => {
    window.location.href = `/planos-eixos-${slug}`;
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
    initEixos();
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

            <div className="pl-2">
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
                      <h2
                        className="c-color-gray fw-bolder pesquisa-item"
                        key={i}
                        onClick={() => openProjeto(p.slug)}
                      >
                        {p.name}{" "}
                        <span className="span-pesquisa-item">| Projeto</span>
                      </h2>
                    );
                  }
                })}
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
                      <h2
                        className="c-color-gray fw-bolder pesquisa-item"
                        key={i}
                        onClick={() => openSelo(s._id)}
                      >
                        {s.title}{" "}
                        <span className="span-pesquisa-item">| Selo</span>
                      </h2>
                    );
                  }
                })}
              {eixos &&
                eixos.map((e, i) => {
                  if (
                    removeAcento(pChave.toLowerCase()).includes(
                      removeAcento(e.title.toLowerCase())
                    ) ||
                    removeAcento(e.title.toLowerCase()).includes(
                      removeAcento(pChave.toLowerCase())
                    )
                  ) {
                    return (
                      <h2
                        className="c-color-gray fw-bolder pesquisa-item"
                        key={i}
                        onClick={() => openEixo(e.slug)}
                      >
                        {e.title}{" "}
                        <span className="span-pesquisa-item">| Eixo</span>
                      </h2>
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
