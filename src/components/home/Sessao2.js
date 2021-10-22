import React from "react";
import img1 from "../../assets/imgs/barra-center-mobile-planejamento.svg";
import img2 from "../../assets/imgs/barra-center.svg";
import img3 from "../../assets/imgs/barra-center-mobile.svg";
import img4 from "../../assets/imgs/bg-card-title.svg";
import img5 from "../../assets/imgs/barras-pink.svg";

const Sessao2 = () => {
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
          <div className="row text-center banner-download-div">
            <div className="banner-download">
              <h3>BANNER DOWNLOAD 728X90 px</h3>
            </div>
          </div>

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
                    <li className="list-group-item bg-transparent border-0 pl-0">
                      <div className="c-color-secondary font-weight-bold">
                        00/00/0000
                      </div>
                      <h4 className="c-color-gray">
                        In non ante sed risus mattis aliquet sit amet vel ex.
                        Morbi purus tellus, blandit nec enim at, bibendum
                        egestas nisl. Sed placerat vehicula mattis.
                      </h4>
                      <button type="button" className="text-white border-50">
                        Saiba mais
                      </button>
                    </li>
                    <li className="list-group-item bg-transparent border-0 pl-0">
                      <div className="c-color-secondary font-weight-bold">
                        00/00/0000
                      </div>
                      <h4 className="c-color-gray">
                        In non ante sed risus mattis aliquet sit amet vel ex.
                        Morbi purus tellus, blandit nec enim at, bibendum
                        egestas nisl. Sed placerat vehicula mattis.
                      </h4>
                      <button type="button" className="text-white border-50">
                        Saiba mais
                      </button>
                    </li>
                    <li className="list-group-item bg-transparent border-0 pl-0">
                      <div className="c-color-secondary font-weight-bold">
                        00/00/0000
                      </div>
                      <h4 className="c-color-gray">
                        In non ante sed risus mattis aliquet sit amet vel ex.
                        Morbi purus tellus, blandit nec enim at, bibendum
                        egestas nisl. Sed placerat vehicula mattis.
                      </h4>
                      <button type="button" className="text-white border-50">
                        Saiba mais
                      </button>
                    </li>
                    <li className="list-group-item bg-transparent border-0 pl-0">
                      <div className="c-color-secondary font-weight-bold">
                        00/00/0000
                      </div>
                      <h4 className="c-color-gray">
                        In non ante sed risus mattis aliquet sit amet vel ex.
                        Morbi purus tellus, blandit nec enim at, bibendum
                        egestas nisl. Sed placerat vehicula mattis.
                      </h4>
                      <button type="button" className="text-white border-50">
                        Saiba mais
                      </button>
                    </li>
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
