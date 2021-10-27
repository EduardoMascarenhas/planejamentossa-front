import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { getProjeto } from "../../core/apiCore";
import img1 from "../../assets/imgs/dots.png";

const PDesktop = ({ slug }) => {
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
          <button className="button-voltar">
            {" "}
            <a href="/planos-eixos">
              Voltar <i className="fas fa-arrow-left"></i>
            </a>{" "}
          </button>
          <div className="dots dots-voltar dot-direito">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
        </div>
        <div className="div-titulo-projeto">
          <h1 className="text-uppercase">{projeto.name}</h1>
        </div>

        <section className="position-relative bar-yellow bar-yellow-projetos c-bgc-yellow-light">
          <div className="container position-relative d-flex align-items-center justify-content-center">
            <div className="titulo-projetos">
              <h3 style={{ color: "#fff" }}>PROJETOS</h3>
            </div>
          </div>
        </section>
      </div>
      <div className="container-fluid position-relative content-center p0-991">
        <div className="container container-eixos-interna">
          <div className="row">
            <div className="col-12 position-relative pb-5 mb-5 corpo">
              <div className="scrolling-area mt-3" id="os">
                <div className="scrolling-element-inside">
                  <div className="container position-relative">
                    <p className="c-color-grey" id="conteudo-corpo-2">
                      {parse(`${projeto.body}`)}
                    </p>
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

export default PDesktop;
