import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import img1 from "../../assets/imgs/barra-center-mobile-planejamento.svg";
import img2 from "../../assets/imgs/barra-center.svg";
import img3 from "../../assets/imgs/barra-center-mobile.svg";
import img4 from "../../assets/imgs/bg-card-title.svg";
import img5 from "../../assets/imgs/barras-pink.svg";
import { getBlogs } from "../../core/apiCore";
import moment from "moment";

const Sessao2 = () => {
  const [values, setValues] = useState({
    noticias: [],
    error: false,
    errorMsg: "",
  });
  const { noticias, error, errorMsg } = values;
  const init = () => {
    getBlogs().then((data) => {
      if (!data) {
        setValues({ ...values, error: true });
      } else {
        setValues({ ...values, noticias: data });
      }
    });
  };
  const abrirNoticia = (link) => {
    window.open(link, "_blank");
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <section className="pb-0 mt-0 position-relative d-flex bg-home-center">
      <div className="opac"></div>
      <div className="container position-relative">
        <div className="row space-inputs position-relative p-3 d-md-none">
          <div className="container col-lg-10">
            <div className="row d-flex inputs">
              <div className="col-12 col-md-4">
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder="Palavras-chaves"
                  aria-describedby="helpId"
                />
              </div>
              <div className="col-6 col-md-4">
                <button
                  type="button"
                  name=""
                  id=""
                  className="form-control"
                  aria-describedby="helpId"
                >
                  Projeto/meta
                </button>
              </div>
              <div className="col-6 col-md-4">
                <button
                  type="button"
                  name=""
                  id=""
                  className="form-control"
                  aria-describedby="helpId"
                >
                  Unidade/selo
                </button>
              </div>
            </div>
          </div>
          <object
            type="image/svg+xml"
            data={img1}
            className="position-absolute"
            aria-label=" "
          ></object>
        </div>

        <div className="col-12 bg-inputs d-none d-md-flex">
          <div className="row space-inputs-inline position-relative ph-3 pb-3">
            <object
              type="image/svg+xml"
              data={img2}
              className="d-none d-md-block w-100 bg-barra-center position-absolute"
              aria-label=" "
            ></object>
            <div className="container col-lg-10">
              <div className="row d-flex py-1 inputs">
                <div className="col-12 col-md-4">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="form-control"
                    placeholder="Palavras-chaves"
                    aria-describedby="helpId"
                  />
                </div>
                <div className="col-6 col-md-4">
                  <button
                    type="button"
                    name=""
                    id=""
                    className="form-control"
                    aria-describedby="helpId"
                  >
                    Projeto/meta
                  </button>
                </div>
                <div className="col-6 col-md-4">
                  <button
                    type="button"
                    name=""
                    id=""
                    className="form-control"
                    aria-describedby="helpId"
                  >
                    Unidade/selo
                  </button>
                </div>
              </div>
            </div>
            <a
              className="d-none d-md-flex position-absolute btn-search"
              href="/"
            >
              <i className="fas fa-search"></i>
            </a>
          </div>
        </div>
        <div className="col-12 bg-inputs d-none ">
          <object
            type="image/svg+xml"
            data={img2}
            className="d-none d-md-block w-100 bg-barra-center"
            aria-label=" "
          ></object>
          <object
            type="image/svg+xml"
            data={img3}
            className="d-md-none w-100 bg-barra-center"
            aria-label=" "
          ></object>
          <div className="container col-lg-10 inputs">
            <div className="row">
              <div className="col-12 col-md-4">
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder="Palavras-chaves"
                  aria-describedby="helpId"
                />
              </div>
              <div className="col-6 col-md-4">
                <button
                  type="button"
                  name=""
                  id=""
                  className="form-control"
                  aria-describedby="helpId"
                >
                  Projeto/meta
                </button>
              </div>
              <div className="col-6 col-md-4">
                <button
                  type="button"
                  name=""
                  id=""
                  className="form-control"
                  aria-describedby="helpId"
                >
                  Unidade/selo
                </button>
              </div>
            </div>
          </div>
          <a className="d-none d-md-flex position-absolute btn-search" href="/">
            <i className="fas fa-search"></i>
          </a>
        </div>

        <div className="col-12 mt-5 pt-5 align-items-center ads-home">
          <div className="ads728x90 mx-auto">
            <img
              src="https://picsum.photos/728/90"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>

        <div className="col-12 col-sm-11 col-lg-8 py-5 mb-5 align-items-center mx-auto card-space-home">
          <div className="card">
            <div className="card-header"></div>
            <div className="card-body position-relative">
              <div className="position-absolute bg-title-card">
                <div>
                  <object
                    type="image/svg+xml"
                    data={img4}
                    className="obj-left"
                    aria-label=" "
                  ></object>
                  <div className="bg-title">Notícias</div>
                </div>
                <div>
                  <object
                    type="image/svg+xml"
                    data={img5}
                    className="obj-right"
                    aria-label=" "
                  ></object>
                </div>
              </div>

              <div className="scrolling-area mt-3" id="os">
                <div className="scrolling-element-inside">
                  <ul className="list-group list-group-flush bg-transparent itens-news">
                    {noticias.map(
                      ({ title, subTitle, link, slug, _id, createdAt }, i) => {
                        return (
                          <li
                            key={i}
                            className="list-group-item bg-transparent border-0 pl-0"
                          >
                            <div className="c-color-secondary font-weight-bold">
                              {moment(createdAt).format("DD-MM-YYYY")}
                            </div>
                            <h3>{title}</h3>
                            <h4 className="c-color-gray">{subTitle}</h4>
                            <button
                              onClick={() => abrirNoticia(link)}
                              type="button"
                              className="text-white border-50"
                            >
                              Saiba mais
                            </button>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sessao2;
