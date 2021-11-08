import React, { useState, useEffect } from "react";
import { API } from "../../config";
import { getEixo } from "../../core/apiCore";
import img1 from "../../assets/imgs/dots.png";
import img2 from "../../assets/imgs/Terreiro-de-Jesus---PROPEG_PMS_TDEJESUS_V3.jpg";
import img3 from "../../assets/imgs/btn-eixo-interna-1.png";
import img4 from "../../assets/imgs/btn-eixo-interna-2.png";
import img5 from "../../assets/imgs/btn-eixo-interna-3.png";

const PEIMobile = ({ slug }) => {
  const [vis, setVis] = useState("");
  const [met, setMet] = useState("");
  const [pro, setPro] = useState("");
  const [values, setValues] = useState({
    projetos: [],
    projeto: {},
    title: "",
    subTitle: "",
    borderColor: "",
    visAtivo: false,
    metAtivo: false,
    proAtivo: false,
    error: false,
    errorMsg: "",
    redirectToReferrer: false,
    formData: "",
  });
  const {
    title,
    projetos,
    borderColor,
    visAtivo,
    metAtivo,
    proAtivo,
    subTitle,
  } = values;

  const initEixo = (s) => {
    getEixo(s).then((data) => {
      if (!data || data.error) {
        console.log("Erro ao carregar a notícia");
      } else {
        setVis(data.vis);
        setMet(data.met);
        setPro(data.pro);
        setValues({
          ...values,
          title: data.title,
          subTitle: data.subTitle,
          projetos: data.projetos,
          borderColor: data.borderColor,
        });
      }
    });
  };
  const abrirProjeto = (s) => {
    window.location.href = `/projeto-${s}`;
  };

  useEffect(() => {
    if (slug) {
      initEixo(slug);
    }
  }, [slug]);
  return (
    <main className="h-100 db-991">
      <div className="container-fluid position-relative pt-5 bg-blue-0-deg">
        <div className="bg-rosa-titulo">
          <h1>
            CONHEÇA <b>OS EIXOS DO PLANO</b>
          </h1>
        </div>
        <div className="div-voltar">
          <div className="dots dots-voltar dot-esquerdo">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <button
            className="button-voltar"
            style={
              borderColor
                ? { background: `${borderColor}` }
                : { background: `#df6825` }
            }
          >
            {" "}
            <a href="/">
              Voltar <i className="fas fa-arrow-left"></i>
            </a>{" "}
          </button>
          <div className="dots dots-voltar dot-direito">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
        </div>

        <section
          className="position-relative bar-yellow c-bgc-yellow-light"
          style={
            borderColor
              ? { backgroundColor: `${borderColor}` }
              : { backgroundColor: `#df6825` }
          }
        >
          <div className="container position-relative d-flex align-items-center justify-content-center">
            <div className="space-thumb img-topo-eixos-interna">
              <img
                src={`${API}/eixo/thumb/${slug}`}
                alt=""
                className="thumbnail rounded-circle"
                style={
                  borderColor
                    ? { border: `8px solid ${borderColor}`, padding: 0 }
                    : { backgroundColor: `#df6825` }
                }
              />
            </div>
          </div>
        </section>
        <section
          className="d-flex c-bgc-yellow-light"
          style={
            borderColor
              ? { backgroundColor: `${borderColor}` }
              : { backgroundColor: `#df6825` }
          }
        >
          <div className="container text-center">
            <h1 className="titulo-eixos text-uppercase">{title}</h1>
            <hr className="hr-eixos" />
          </div>
        </section>
      </div>
      <div className="container-fluid position-relative content-center p0-991">
        <div className="container container-eixos-interna">
          <div className="row">
            <div className="col-4 position-relative py-5 topo">
              <div
                className="bg-yellow"
                style={
                  borderColor
                    ? { background: `${borderColor}` }
                    : { background: `#df6825` }
                }
              ></div>
              <ul className="list-group" id="contact-list">
                <li
                  data-id="conteudo1"
                  className="list-group-item list-group-item-custom pb-5 px-0 bg-transparent border-0 text-center"
                >
                  <div>
                    <div
                      onClick={() =>
                        setValues({
                          ...values,
                          proAtivo: false,
                          visAtivo: true,
                          metAtivo: false,
                        })
                      }
                    >
                      <img
                        src={img3}
                        alt=""
                        className="thumbnail rounded-circle border-blue-button"
                      />
                    </div>
                  </div>
                  <div className="text-white position-relative">
                    <h3
                      onClick={() =>
                        setValues({
                          ...values,
                          visAtivo: true,
                          metAtivo: false,
                          proAtivo: false,
                        })
                      }
                      className="span-texto"
                      style={
                        visAtivo === true
                          ? { color: "#48a2da" }
                          : { color: "#fff" }
                      }
                    >
                      VISÃO
                    </h3>
                  </div>
                </li>
                <li
                  data-id="conteudo2"
                  className="list-group-item list-group-item-custom pb-5 px-0 bg-transparent border-0 text-center"
                >
                  <div>
                    <div
                      onClick={() =>
                        setValues({
                          ...values,
                          proAtivo: false,
                          visAtivo: false,
                          metAtivo: true,
                        })
                      }
                    >
                      <img
                        src={img4}
                        alt=""
                        className="thumbnail rounded-circle border-blue-button"
                      />
                    </div>
                  </div>
                  <div className="text-white position-relative">
                    <h3
                      onClick={() =>
                        setValues({
                          ...values,
                          visAtivo: false,
                          metAtivo: true,
                          proAtivo: false,
                        })
                      }
                      className="span-texto"
                      style={
                        metAtivo === true
                          ? { color: "#48a2da" }
                          : { color: "#fff" }
                      }
                    >
                      METAS
                    </h3>
                  </div>
                </li>
                <li
                  data-id="conteudo3"
                  className="list-group-item list-group-item-custom pb-5 px-0 bg-transparent border-0 text-center"
                >
                  <div>
                    <div
                      onClick={() =>
                        setValues({
                          ...values,
                          proAtivo: true,
                          visAtivo: false,
                          metAtivo: false,
                        })
                      }
                    >
                      <img
                        src={img5}
                        alt=""
                        className="thumbnail rounded-circle border-blue-button"
                      />
                    </div>
                  </div>
                  <div className="text-white position-relative">
                    <h3
                      onClick={() =>
                        setValues({
                          ...values,
                          visAtivo: false,
                          metAtivo: false,
                          proAtivo: true,
                        })
                      }
                      className="span-texto"
                      style={
                        proAtivo === true
                          ? { color: "#48a2da" }
                          : { color: "#fff" }
                      }
                    >
                      PROJETOS
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-8 position-relative pb-5 corpo">
              {!visAtivo && !metAtivo && !proAtivo ? (
                <img
                  src={`${API}/eixo/thumb/${slug}`}
                  className="eixo-interna-img"
                  alt={slug}
                />
              ) : (
                ""
              )}
              <div
                className="scrolling-area mt-3"
                style={
                  !visAtivo && !metAtivo && !proAtivo
                    ? { display: "none" }
                    : { display: "block" }
                }
                id="os"
              >
                <div className="scrolling-element-inside">
                  <div className="container ps-5 me-0 pe-2 position-relative">
                    {visAtivo ? (
                      <p
                        className="c-color-grey text-break"
                        id="conteudo-corpo"
                        dangerouslySetInnerHTML={{ __html: vis }}
                      />
                    ) : metAtivo ? (
                      <p
                        className="c-color-grey text-break"
                        id="conteudo-corpo"
                        dangerouslySetInnerHTML={{ __html: met }}
                      />
                    ) : proAtivo ? (
                      <p
                        className="c-color-grey text-break text-uppercase"
                        id="conteudo-corpo"
                      >
                        {projetos.map(({ name, slug }, i) => {
                          return (
                            <h5
                              key={i}
                              onClick={() => abrirProjeto(slug)}
                              className="cursor-pointer-custom"
                            >
                              {name}
                            </h5>
                          );
                        })}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PEIMobile;
