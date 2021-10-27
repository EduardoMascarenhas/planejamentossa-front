import React, { useEffect, useState } from "react";
import { API } from "../../config";
import { getEixos } from "../../core/apiCore";
import img1 from "../../assets/imgs/eixos-planos.svg";
import img2 from "../../assets/imgs/Terreiro-de-Jesus---PROPEG_PMS_TDEJESUS_V3.jpg";
import img3 from "../../assets/imgs/02_09_19_Iluminacao_Itapua.jpg";

const PEMobile = () => {
  const redirectTo = (link) => {
    window.location.href = link;
  };
  const [values, setValues] = useState({
    eixos: [],
    slug: "",
  });
  const { eixos, slug } = values;

  const initEixos = () => {
    getEixos().then((data) => {
      if (!data || data.error) {
        console.log("Erro ao carregar os eixos");
      } else {
        setValues({ ...values, eixos: data });
      }
    });
  };
  useEffect(() => {
    initEixos();
  }, []);
  return (
    <main className="db-991 bg-blue-0-deg">
      <div className="row">
        <div className="col-12 d-flex pt-5 pb-4 ">
          <div className="col-8">
            <div className="conheca-bg-top bg-pink-b d-flex">CONHEÇA</div>
          </div>
          <div className="col-4 text-center">
            <button className="button-voltar">
              {" "}
              <a href="/">
                Voltar <i className="fas fa-arrow-left"></i>
              </a>{" "}
            </button>
          </div>
        </div>
        <div className="col-12 d-flex ">
          <div className="brd-obj-title-planos m-a">
            <object
              type="image/svg+xml"
              data={img1}
              className="obj-title-planos m-a"
              aria-label=" "
            ></object>
          </div>
        </div>
        <div className="col-12 d-flex">
          <div className="col-6 brd-pink" id="brd-pink">
            <div className="col-12 pt-1 position-relative">
              <div className="row-flex">
                <div className="col-um"></div>
                <div className="col-dois">
                  <ul className="list-group" id="contact-list">
                    {eixos &&
                      eixos.map((e, i) => {
                        return (
                          <li
                            key={i}
                            className="list-group-item pb-5 px-0 bg-transparent border-0"
                            onClick={() =>
                              redirectTo(`/planos-eixos-${e.slug}`)
                            }
                          >
                            <div className="me-2">
                              <div className="space-thumb">
                                <img
                                  src={`${API}/eixo/thumb/${e.slug}`}
                                  alt=""
                                  className="thumbnail rounded-circle"
                                  style={{ background: `${e.borderColor}` }}
                                />
                              </div>
                            </div>
                            <div className="text-white list-title text-uppercase">
                              <div className="name fw-bold">{e.title}</div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-com-img">
            <div className="position-relative" id="brd-image">
              {slug === "" ? (
                eixos && eixos.length ? (
                  <img
                    src={`${API}/eixo/thumb/${eixos[0].slug}`}
                    className="img-content"
                    alt=""
                  />
                ) : (
                  ""
                )
              ) : (
                <img
                  src={`${API}/eixo/thumb/${slug}`}
                  className="img-content"
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PEMobile;
