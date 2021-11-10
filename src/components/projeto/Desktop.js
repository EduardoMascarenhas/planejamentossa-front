import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { DivCustom, SpanCustom } from "../../styledComponents/globalStyle";
import { getProjeto } from "../../core/apiCore";
import img1 from "../../assets/imgs/dots.png";

const PDesktop = ({ slug, selo }) => {
  const [values, setValues] = useState({
    projeto: {},
  });
  const { projeto } = values;

  const init = (s) => {
    getProjeto(s).then((data) => {
      if (!data || data.error) {
        console.log("Não foi possível carregar o projeto");
      } else {
        setValues({ ...values, projeto: data });
      }
    });
  };
  const paginaAnterior = () => {
    if (selo === "selo") {
      window.history.back();
    } else {
      window.location.href = `/planos-eixos-${projeto.eixo.slug}/projetos`;
    }
  };
  const dotsFormatados = (txt) => {
    if (txt) {
      const regex = /•/gm;
      return txt.replaceAll(regex, `<span className="bullet">•</span>`);
    } else {
      return "";
    }
  };
  useEffect(() => {
    init(slug);
  }, [slug]);
  return (
    <main className="h-100">
      <div className="container-fluid position-relative pt-5 bg-blue-0-deg">
        <div className="div-voltar">
          <div className="dots dots-voltar dot-esquerdo">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <button
            className="button-voltar"
            style={
              projeto && projeto.eixo
                ? { background: `${projeto.eixo.borderColor}` }
                : {}
            }
          >
            {" "}
            <a href="#" onClick={() => paginaAnterior()}>
              Voltar <i className="fas fa-arrow-left"></i>
            </a>{" "}
          </button>
          <div className="dots dots-voltar dot-direito">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
        </div>
        <div className="div-titulo-projeto">
          <h1 className="text-uppercase">
            {projeto && projeto.eixo ? projeto.eixo.title : ""}
          </h1>
        </div>

        <section
          className="position-relative bar-yellow bar-yellow-projetos"
          style={{ backgroundColor: "#03163c" }}
        >
          <div className="container position-relative d-flex align-items-center justify-content-center">
            <div
              className="titulo-projetos"
              style={
                projeto && projeto.eixo
                  ? { backgroundColor: `${projeto.eixo.borderColor}` }
                  : { backgroundColor: "#00b3ef" }
              }
            >
              <h3 style={{ color: "#fff" }}>{projeto.name}</h3>
            </div>
          </div>
        </section>
      </div>
      <div className="container-fluid position-relative content-center p0-991">
        <div className="container-eixos-interna">
          <div className="row">
            <div className="col-12 position-relative pb-5 mb-5 corpo">
              <DivCustom
                className="custom-scroll scrolling-area mt-3 custom-scroll-projeto"
                color={projeto && projeto.eixo ? projeto.eixo.borderColor : ""}
                id="os"
              >
                <div className="scrolling-element-inside">
                  <div className="container position-relative">
                    <DivCustom
                      className="c-color-grey"
                      color={
                        projeto && projeto.eixo ? projeto.eixo.borderColor : ""
                      }
                      id="conteudo-corpo-2"
                    >
                      <DivCustom>
                        {parse(dotsFormatados(`${projeto.body}`))}
                      </DivCustom>
                    </DivCustom>
                  </div>
                </div>
              </DivCustom>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PDesktop;
