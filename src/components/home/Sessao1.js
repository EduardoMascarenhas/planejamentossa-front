import React, { useEffect, useState } from "react";
import { API } from "../../config";
import { getSliders } from "../../core/apiCore";
import img1 from "../../assets/imgs/06_11_2020_Entrega-da-Baixa-Fria_Fot-Bruno-Concha_Secom_Pms-12_PB-sem-desfoque.jpg";
import img2 from "../../assets/imgs/12_11_20_Pref-ACM-Neto_Jardim-Botanico_foto-VAlter-Pontes_SECOM51 - PB.jpg";
import img3 from "../../assets/imgs/Ativo 1.png";
import img4 from "../../assets/imgs/prev.png";
import img5 from "../../assets/imgs/next.png";
import img6 from "../../assets/imgs/Ativo 2.png";
import img7 from "../../assets/imgs/bg-barra-cente-btn-eixo.png";
import img8 from "../../assets/imgs/aba-hover.svg";
import img9 from "../../assets/imgs/btn-eixo1.png";
import img10 from "../../assets/imgs/btn-eixo1h.png";
import img11 from "../../assets/imgs/aba-hover.svg";
import img12 from "../../assets/imgs/btn-eixo2.png";
import img13 from "../../assets/imgs/btn-eixo2h.png";
import img14 from "../../assets/imgs/btn-eixo-center.png";
import img15 from "../../assets/imgs/btn-eixo3.png";
import img16 from "../../assets/imgs/btn-eixo3h.png";
import img17 from "../../assets/imgs/btn-eixo4.png";
import img18 from "../../assets/imgs/btn-eixo4h.png";
import livroPDF from "../../assets/files/Livro_PlanejamentoEstrategico_SSA.pdf";

const Sessao1 = () => {
  const [sliderActive, setSliderActive] = useState(1);
  const [values, setValues] = useState({
    sliders: [],
  });
  const { sliders } = values;

  const btnPrev = () => {
    if (sliderActive === 1) {
      setSliderActive(sliders.length);
    }
    if (sliderActive > 1) {
      setSliderActive(sliderActive - 1);
    }
  };
  const btnNext = () => {
    if (sliderActive === sliders.length) {
      setSliderActive(1);
    }
    if (sliderActive < sliders.length) {
      setSliderActive(sliderActive + 1);
    }
  };

  const init = () => {
    getSliders().then((data) => {
      if (!data || data.error) {
        console.log("Erro ao tentar carregar os sliders!");
      } else {
        setValues({ ...values, sliders: data });
      }
    });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <section
      className="text-white position-relative align-items-top d-flex flex-column section-top-home"
      id="appSection"
    >
      {/**
       <div className="position-absolute bg-l">
        <img src={img1} className="img-fluid" alt="" />
      </div>
      <div className="position-absolute bg-r">
        <img src={img2} className="img-fluid" alt="" />
      </div>
       */}

      <div className="position-absolute bg-blue"></div>

      <div className="container position-relative slide">
        <div className="align-items-center">
          <div className="mx-auto p-0">
            <div
              id="carouselExampleInterval"
              className="carousel carousel-fade"
              data-bs-ride="carousel"
              interval="4000"
            >
              <div className="carousel-inner">
                {sliders &&
                  sliders.map((s, i) => {
                    return (
                      <div
                        className={
                          sliderActive === i + 1
                            ? "carousel-item active"
                            : "carousel-item"
                        }
                        key={i + 1}
                      >
                        <img
                          src={`${API}/slider/image/${s._id}`}
                          className="d-block w-100"
                          alt="..."
                        />
                      </div>
                    );
                  })}
              </div>
              {sliders.length > 1 ? (
                <>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    onClick={() => btnPrev()}
                  >
                    <img alt="" src={img4} />
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    onClick={() => btnNext()}
                  >
                    <img alt="" src={img5} />
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-0 position-relative align-items-end text-white align-items-md-center d-flex flex-column eixos">
        <div className="bg-eixos"></div>
        <div className="container position-relative p-0 pt-8">
          <div className="dots dots-l">
            <img src={img6} className="d-block w-100" alt="..." />
          </div>
          <div className="col-md-12 col-lg-8 py-3 m-auto text-center text-uppercase text-white position-relative">
            <div className="btns-barra">
              <img
                src={img7}
                className="d-block img-fluid bg-btn-eixo"
                alt="..."
              />
              <div className="space-button space-a">
                <div className="d-none d-sm-flex aba-hover position-absolute h-100">
                  <div className="position-relative w-100 d-flex justify-content-center align-items-center">
                    <object
                      type="image/svg+xml"
                      data={img8}
                      className="w-100 bg-barra-center"
                      aria-label=" "
                    ></object>
                    <div className="aba-hover-txt position-absolute">
                      CARTA DO PREFEITO
                    </div>
                  </div>
                </div>
                <a href="/carta-do-prefeito">
                  <figure className="on-hover">
                    <img
                      src={img9}
                      className="d-block img-fluid img-btn front-image"
                      alt="..."
                    />
                    <img
                      src={img10}
                      className="d-block img-fluid img-btn back-image"
                      alt="..."
                    />
                  </figure>
                </a>
                <div className="d-lg-none text-break text-btn-mob-barra">
                  <a href="/carta-do-prefeito"> CARTA DO PREFEITO </a>
                </div>
              </div>
              <div className="space-button border-0 space-b">
                <div className="d-none d-md-flex aba-hover position-absolute h-100">
                  <div className="position-relative w-100 d-flex justify-content-center align-items-center">
                    <object
                      type="image/svg+xml"
                      data={img11}
                      className="w-100 bg-barra-center"
                      aria-label=" "
                    ></object>
                    <div className="aba-hover-txt position-absolute">
                      APRESENTAÇÃO DO PLANO
                    </div>
                  </div>
                </div>
                <a href="/apresentacao-plano">
                  <figure className="on-hover">
                    <img
                      src={img12}
                      className="d-block img-fluid img-btn front-image"
                      alt="..."
                    />
                    <img
                      src={img13}
                      className="d-block img-fluid img-btn back-image"
                      alt="..."
                    />
                  </figure>
                </a>
                <div className="d-lg-none text-break text-btn-mob-barra">
                  <a href="/apresentacao-plano"> APRESENTAÇÃO DO PLANO</a>
                </div>
              </div>
              <div className="space-button center my-1 px-2 mx-5 space-c">
                <a href="/planos-eixos">
                  <img
                    src={img14}
                    className="d-block img-fluid img-btn img-btn-eixo"
                    alt="..."
                  />
                  <div className="text-center txt-eixos">EIXOS TEMÁTICOS</div>
                </a>
              </div>
              <div className="space-button space-d d-none d-md-flex">
                <div className="d-none d-md-flex aba-hover position-absolute h-100 aba-l">
                  <div className="position-relative w-100 d-flex justify-content-center align-items-center">
                    <object
                      type="image/svg+xml"
                      data={img11}
                      className="w-100 bg-barra-center flip-h"
                      aria-label=" "
                    ></object>
                    <div className="aba-hover-txt position-absolute">SELOS</div>
                  </div>
                </div>
                <a href="/selos">
                  <figure className="on-hover">
                    <img
                      src={img15}
                      className="d-block img-fluid img-btn front-image"
                      alt="..."
                    />
                    <img
                      src={img16}
                      className="d-block img-fluid img-btn back-image"
                      alt="..."
                    />
                  </figure>
                </a>
                <div className="d-lg-none text-break text-btn-mob-barra">
                  <a href="/selos"> SELOS</a>
                </div>
              </div>
              <div className="space-button border-0 space-e d-none d-md-flex">
                <div className="d-none d-md-flex aba-hover position-absolute h-100 aba-l">
                  <div className="position-relative w-100 d-flex justify-content-center align-items-center">
                    <object
                      type="image/svg+xml"
                      data={img8}
                      className="w-100 bg-barra-center flip-h"
                      aria-label=" "
                    ></object>
                    <div className="aba-hover-txt position-absolute">
                      LIVRO EM PDF
                    </div>
                  </div>
                </div>
                <a href={livroPDF} target="_blank" rel="noreferrer noopener">
                  <figure className="on-hover">
                    <img
                      src={img17}
                      className="d-block img-fluid img-btn front-image"
                      alt="..."
                    />
                    <img
                      src={img18}
                      className="d-block img-fluid img-btn back-image"
                      alt="..."
                    />
                  </figure>
                </a>
                <div className="d-lg-none text-break text-btn-mob-barra">
                  <a href={livroPDF} target="_blank" rel="noreferrer noopener">
                    {" "}
                    LIVRO EM PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sessao1;
