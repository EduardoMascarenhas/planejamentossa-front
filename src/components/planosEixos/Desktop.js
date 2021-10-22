import React from "react";
import img1 from "../../assets/imgs/eixos-planos.svg";
import img2 from "../../assets/imgs/Terreiro-de-Jesus---PROPEG_PMS_TDEJESUS_V3.jpg";
import img3 from "../../assets/imgs/02_09_19_Iluminacao_Itapua.jpg";

const PEDesktop = () => {
  const redirectTo = (link) => {
    window.location.href = link;
  };

  return (
    <main className="dn-991">
      <div className="row">
        <div className="col-12 d-flex">
          <div className="col-5 bg-blue-0-deg brd-pink" id="brd-pink">
            <div className="col-12 pt-4 position-relative">
              <div className="conheca-bg-top bg-pink-b d-flex">Conheça</div>
              <div className="div-button-voltar">
                <button className="button-voltar">
                  {" "}
                  <a href="/">
                    Voltar <i className="fas fa-arrow-left"></i>
                  </a>{" "}
                </button>
              </div>
              <div className="row-flex">
                <div className="col-um"></div>
                <div className="col-dois">
                  <div className="brd-obj-title-planos">
                    <object
                      type="image/svg+xml"
                      data={img1}
                      className="obj-title-planos"
                      aria-label=" "
                    ></object>
                  </div>
                  <ul className="list-group" id="contact-list">
                    <li
                      className="list-group-item pb-4 px-0 bg-transparent border-0"
                      onClick={() => redirectTo("/planos-eixos-um")}
                    >
                      <div className="me-2">
                        <div className="space-thumb">
                          <img
                            src={img2}
                            alt=""
                            className="thumbnail rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="text-white list-title">
                        <div className="name fw-bold">
                          CAPITAL DA INOVAÇÃO E DESENVOLVIMENTO INCLUSIVO
                        </div>
                      </div>
                    </li>
                    <li
                      className="list-group-item pb-4 px-0 bg-transparent border-0"
                      onClick={() => redirectTo("/planos-eixos-dois")}
                    >
                      <div className="me-2">
                        <div className="space-thumb">
                          <img
                            src={img2}
                            alt=""
                            className="thumbnail rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="text-white list-title">
                        <div className="name fw-bold">
                          CAPITAL DA MOBILIDADE
                        </div>
                        <br />
                      </div>
                    </li>
                    <li
                      className="list-group-item pb-4 px-0 bg-transparent border-0"
                      onClick={() => redirectTo("/planos-eixos-tres")}
                    >
                      <div className="me-2">
                        <div className="space-thumb">
                          <img
                            src={img3}
                            alt=""
                            className="thumbnail rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="text-white list-title">
                        <div className="name fw-bold">
                          CAPITAL DA MODERNIDADE E SUSTENTABILIDADE
                        </div>
                        <br />
                      </div>
                    </li>
                    <li
                      className="list-group-item pb-4 px-0 bg-transparent border-0"
                      onClick={() => redirectTo("/planos-eixos-quatro")}
                    >
                      <div className="me-2">
                        <div className="space-thumb">
                          <img
                            src={img2}
                            alt=""
                            className="thumbnail rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="text-white list-title">
                        <div className="name fw-bold">
                          CAPITAL DA IGUALDADE SOCIAL
                        </div>
                        <br />
                      </div>
                    </li>
                    <li
                      className="list-group-item pb-4 px-0 bg-transparent border-0"
                      onClick={() => redirectTo("/planos-eixos-cinco")}
                    >
                      <div className="me-2">
                        <div className="space-thumb">
                          <img
                            src={img2}
                            alt=""
                            className="thumbnail rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="text-white list-title">
                        <div className="name fw-bold">
                          CAPITAL DO CONHECIMENTO
                        </div>
                        <br />
                      </div>
                    </li>
                    <li
                      className="list-group-item pb-4 px-0 bg-transparent border-0"
                      onClick={() => redirectTo("/planos-eixos-seis")}
                    >
                      <div className="me-2">
                        <div className="space-thumb">
                          <img
                            src={img2}
                            alt=""
                            className="thumbnail rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="text-white list-title">
                        <div className="name fw-bold">
                          CAPITAL DA QUALIDADE DE VIDA
                        </div>
                        <br />
                      </div>
                    </li>
                    <li
                      className="list-group-item pb-4 px-0 bg-transparent border-0"
                      onClick={() => redirectTo("/planos-eixos-sete")}
                    >
                      <div className="me-2">
                        <div className="space-thumb">
                          <img
                            src={img2}
                            alt=""
                            className="thumbnail rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="text-white list-title">
                        <div className="name fw-bold">
                          CAPITAL DA EFICIÊNCIA
                        </div>
                        <br />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7">
            <img src={img2} className="img-content" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default PEDesktop;
