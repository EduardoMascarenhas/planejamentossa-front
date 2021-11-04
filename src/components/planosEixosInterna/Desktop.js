import React, { useState, useEffect } from "react";
import { API } from "../../config";
import { getEixo } from "../../core/apiCore";
import img1 from "../../assets/imgs/Terreiro-de-Jesus---PROPEG_PMS_TDEJESUS_V3.jpg";
import img2 from "../../assets/imgs/barra-center-interna.svg";
import img3 from "../../assets/imgs/Ativo 2.png";
import img4 from "../../assets/imgs/barra-center-interna.svg";
import img5 from "../../assets/imgs/btn-eixo-interna-1.png";
import img6 from "../../assets/imgs/btn-eixo-interna-2.png";
import img7 from "../../assets/imgs/btn-eixo-interna-3.png";

const PEIDesktop = ({ slug }) => {
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

  const abrirProjeto = (s) => {
    window.location.href = `/projeto-${s}`;
  };

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

  useEffect(() => {
    if (slug) {
      initEixo(slug);
    }
  }, [slug]);
  return (
    <main className="h-100 dn-991">
      <div className="container-fluid position-relative pb-5 pt-5 bg-blue-0-deg">
        <div className="position-absolute bg-blue"></div>
        <section
          className="position-relative bar-yellow c-bgc-yellow-light"
          style={
            borderColor
              ? { backgroundColor: `${borderColor}` }
              : { backgroundColor: `#df6825` }
          }
        >
          <div className="container position-relative d-flex align-items-center justify-content-center">
            <div className="space-thumb">
              <img
                src={`${API}/eixo/thumb/${slug}`}
                alt=""
                className="thumbnail rounded-circle"
              />
            </div>
            <object
              type="image/svg+xml"
              data={img2}
              className="barra-center"
              aria-label=" "
            ></object>

            <div className="dots dots-l">
              <img src={img3} className="d-block w-100" alt="..." />
            </div>
          </div>
        </section>
        <section className="d-flex pt-5 my-4">
          <div className="container">
            <div
              className="col-xs-12 col-sm-6 c-color-yellow-light title text-uppercase"
              style={
                borderColor ? { color: `${borderColor}` } : { color: `#df6825` }
              }
            >
              {" "}
              {title}
            </div>
            <div className="col-xs-12 col-sm-6"></div>
          </div>
        </section>
      </div>
      <div className="container-fluid position-relative content-center p0-991">
        <object
          type="image/svg+xml"
          data={img4}
          className="barra-left"
          aria-label=" "
        ></object>

        <div className="container container-eixos-interna">
          <div className="row">
            <div className="col-4 position-relative py-5 pe-0 topo">
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
                  className="list-group-item list-group-item-custom pb-5 px-0 bg-transparent border-0"
                >
                  <div className="me-2">
                    <div
                      className="space-thumb"
                      onClick={() =>
                        setValues({
                          ...values,
                          visAtivo: true,
                          metAtivo: false,
                          proAtivo: false,
                        })
                      }
                    >
                      <img
                        src={img5}
                        alt=""
                        className="thumbnail rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="text-white position-relative">
                    <span
                      onClick={() =>
                        setValues({
                          ...values,
                          visAtivo: true,
                          metAtivo: false,
                          proAtivo: false,
                        })
                      }
                      className="name fw-bold botao-eixo-interna"
                      style={
                        borderColor && visAtivo === false
                          ? { color: `${borderColor}` }
                          : visAtivo === true
                          ? { color: "#48a2da" }
                          : { color: "#df6825" }
                      }
                    >
                      VISÃO
                    </span>
                  </div>
                </li>
                <li
                  data-id="conteudo2"
                  className="list-group-item list-group-item-custom pb-5 px-0 bg-transparent border-0"
                >
                  <div className="me-2">
                    <div
                      className="space-thumb"
                      onClick={() =>
                        setValues({
                          ...values,
                          visAtivo: false,
                          metAtivo: true,
                          proAtivo: false,
                        })
                      }
                    >
                      <img
                        src={img6}
                        alt=""
                        className="thumbnail rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="text-white position-relative">
                    <span
                      onClick={() =>
                        setValues({
                          ...values,
                          metAtivo: true,
                          visAtivo: false,
                          proAtivo: false,
                        })
                      }
                      className="name fw-bold botao-eixo-interna"
                      style={
                        borderColor && metAtivo === false
                          ? { color: `${borderColor}` }
                          : metAtivo === true
                          ? { color: "#48a2da" }
                          : { color: "#df6825" }
                      }
                    >
                      METAS
                    </span>
                  </div>
                </li>
                <li
                  data-id="conteudo3"
                  className="list-group-item list-group-item-custom pb-5 px-0 bg-transparent border-0"
                >
                  <div className="me-2">
                    <div
                      className="space-thumb"
                      onClick={() =>
                        setValues({
                          ...values,
                          visAtivo: false,
                          metAtivo: false,
                          proAtivo: true,
                        })
                      }
                    >
                      <img
                        src={img7}
                        alt=""
                        className="thumbnail rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="text-white position-relative">
                    <span
                      onClick={() =>
                        setValues({
                          ...values,
                          proAtivo: true,
                          visAtivo: false,
                          metAtivo: false,
                        })
                      }
                      className="name fw-bold botao-eixo-interna"
                      style={
                        borderColor && proAtivo === false
                          ? { color: `${borderColor}` }
                          : proAtivo === true
                          ? { color: "#48a2da" }
                          : { color: "#df6825" }
                      }
                    >
                      PROJETOS
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-8 position-relative p-0 corpo">
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
                  <div className="container position-relative">
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

export default PEIDesktop;
