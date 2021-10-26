import React, { useEffect, useState } from "react";
import { getEixos } from "../../core/apiCore";
import img1 from "../../assets/imgs/eixos-planos.svg";
import img2 from "../../assets/imgs/Terreiro-de-Jesus---PROPEG_PMS_TDEJESUS_V3.jpg";
import img3 from "../../assets/imgs/02_09_19_Iluminacao_Itapua.jpg";

const PEDesktop = () => {
  const redirectTo = (link) => {
    window.location.href = link;
  };

  const [values, setValues] = useState({
    eixos: [],
    borderDinamica: false,
    borderDinamicaColor: "",
  });
  const { eixos, borderDinamica, borderDinamicaColor } = values;

  const initEixos = () => {
    getEixos().then((data) => {
      if (!data || data.error) {
        console.log("Erro ao carregar os eixos");
      } else {
        setValues({ ...values, eixos: data });
      }
    });
  };
  const changeBorder = (bc) => {
    setValues({ ...values, borderDinamica: true, borderDinamicaColor: bc });
  };
  useEffect(() => {
    initEixos();
  }, []);
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
                    {eixos &&
                      eixos.map((e, i) => {
                        return (
                          <li
                            className="list-group-item pb-4 px-0 bg-transparent border-0"
                            key={i}
                            onClick={() =>
                              redirectTo(`/planos-eixos-${e.slug}`)
                            }
                          >
                            <div className="me-2">
                              <div
                                className="space-thumb"
                                onMouseOver={() =>
                                  changeBorder(`${e.borderColor}`)
                                }
                              >
                                <img
                                  src={`http://localhost:8000/api/eixo/thumb/${e.slug}`}
                                  alt=""
                                  className="thumbnail rounded-circle"
                                  style={
                                    borderDinamica
                                      ? {
                                          background: `${borderDinamicaColor}!important`,
                                        }
                                      : {}
                                  }
                                />
                              </div>
                            </div>
                            <div className="text-white list-title">
                              <div className="name fw-bold text-uppercase">
                                {e.title}
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7">
            {/**TORNAR DINAMICO COM O HOVER NOS LI's */}
            {eixos && eixos.length ? (
              <img
                src={`http://localhost:8000/api/eixo/thumb/${eixos[0].slug}`}
                className="img-content"
                alt=""
              />
            ) : (
              <img src={img2} className="img-content" alt="" />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default PEDesktop;
