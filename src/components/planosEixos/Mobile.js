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
          <div className="col-12 brd-pink" id="brd-pink">
            <div className="col-12 pt-1 position-relative">
              <div className="row-flex">
                <div>
                  <grid-container id="contact-list">
                    {eixos &&
                      eixos.map((e, i) => {
                        if (i !== 4) {
                          return (
                            <grid-item short>
                              <div>
                                <div class="space-thumb">
                                  <img
                                    src={`${API}/eixo/thumb/${e.slug}`}
                                    alt=""
                                    class="thumbnail rounded-circle"
                                  />
                                </div>
                              </div>
                              <div class="text-white list-title">
                                <div class="name text-uppercase">{e.title}</div>
                              </div>
                            </grid-item>
                          );
                        }
                        if (i === 4) {
                          return (
                            <grid-item tall id="brd-image">
                              <img
                                src={`${API}/eixo/thumb/capital-da-qualidade-de-vida`}
                                class="img-content"
                                alt=""
                              />
                            </grid-item>
                          );
                        }
                      })}
                  </grid-container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PEMobile;
