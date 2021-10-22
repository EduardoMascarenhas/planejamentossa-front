import React from "react";
import img1 from "../../assets/imgs/Terreiro-de-Jesus---PROPEG_PMS_TDEJESUS_V3.jpg";
import img2 from "../../assets/imgs/barra-center-interna.svg";
import img3 from "../../assets/imgs/Ativo 2.png";
import img4 from "../../assets/imgs/barra-center-interna.svg";
import img5 from "../../assets/imgs/btn-eixo-interna-1.png";
import img6 from "../../assets/imgs/btn-eixo-interna-2.png";
import img7 from "../../assets/imgs/btn-eixo-interna-3.png";

const PEIDesktop = () => {
  return (
    <main className="h-100 dn-991">
      <div className="container-fluid position-relative pb-5 pt-5 bg-blue-0-deg">
        <div className="position-absolute bg-blue"></div>
        <section className="position-relative bar-yellow c-bgc-yellow-light">
          <div className="container position-relative d-flex align-items-center justify-content-center">
            <div className="space-thumb">
              <img src={img1} alt="" className="thumbnail rounded-circle" />
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
            <div className="col-xs-12 col-sm-6 c-color-yellow-light title">
              CAPITAL DA INOVAÇÃO E DESENVOLVIMENTO INCLUSIVO
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
              <div className="bg-yellow"></div>
              <ul className="list-group" id="contact-list">
                <li
                  data-id="conteudo1"
                  className="list-group-item list-group-item-custom pb-5 px-0 bg-transparent border-0"
                >
                  <div className="me-2">
                    <div className="space-thumb">
                      <img
                        src={img5}
                        alt=""
                        className="thumbnail rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="text-white position-relative">
                    <span className="name fw-bold">VISÃO</span>
                  </div>
                </li>
                <li
                  data-id="conteudo2"
                  className="list-group-item list-group-item-custom pb-5 px-0 bg-transparent border-0"
                >
                  <div className="me-2">
                    <div className="space-thumb">
                      <img
                        src={img6}
                        alt=""
                        className="thumbnail rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="text-white position-relative">
                    <span className="name fw-bold">METAS</span>
                  </div>
                </li>
                <li
                  data-id="conteudo3"
                  className="list-group-item list-group-item-custom pb-5 px-0 bg-transparent border-0"
                >
                  <div className="me-2">
                    <div className="space-thumb">
                      <img
                        src={img7}
                        alt=""
                        className="thumbnail rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="text-white position-relative">
                    <span className="name fw-bold">PROJETOS</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-8 position-relative pb-5 mb-5 corpo">
              <div className="container">
                <h4
                  id="conteudo-titulo"
                  className="c-color-yellow-light title-text"
                >
                  In non ante sed risus mattis aliquet sit amet vel ex.
                </h4>
              </div>
              <div className="scrolling-area mt-3" id="os">
                <div className="scrolling-element-inside">
                  <div className="container position-relative">
                    <p className="c-color-grey" id="conteudo-corpo">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer accumsan viverra viverra. Sed bibendum sapien et
                      fermentum lacinia. Proin eu fringilla augue. Phasellus sit
                      amet lectus dui. Etiam vitae volutpat sem, quis fermentum
                      elit. Etiam id dignissim massa, a porta leo. Etiam non mi
                      velit. Cras ultrices dignissim tellus, dictum varius
                      mauris suscipit a.
                      <br /> <br />
                      Sed tincidunt lorem in justo accumsan, sit amet cursus
                      eros sodales. In hac habitasse platea dictumst. Sed at
                      nisi sed orci aliquet consequat id et sem. Praesent et
                      orci luctus, pretium lacus et, imperdiet nisl. Vestibulum
                      sagittis dolor vitae mauris consequat, placerat lobortis
                      neque tincidunt. Nam ac leo scelerisque, mollis lectus
                      quis, convallis sem. Maecenas varius sapien eget nisi
                      efficitur luctus ac non turpis. Nullam vitae tortor
                      aliquet leo vulputate imperdiet luctus vel dolor. Cras
                      vitae efficitur purus, sodales interdum magna. Aliquam
                      facilisis tempor pharetra.
                      <br /> <br />
                      Donec condimentum magna eget hendrerit porta. Sed posuere
                      quis lorem et sagittis. Duis consequat condimentum sapien
                      a scelerisque. Nam lacinia fringilla sem eget lacinia.
                      Fusce ipsum justo, vulputate vel sem id, faucibus
                      scelerisque libero. Aliquam accumsan justo ac feugiat
                      commodo. Aenean sit amet lobortis massa. Nunc vel ultrices
                      diam. Aliquam tincidunt eros ac felis laoreet iaculis.
                      <br /> <br />
                      Donec condimentum magna eget hendrerit porta. Sed posuere
                      quis lorem et sagittis. Duis consequat condimentum sapien
                      a scelerisque. Nam lacinia fringilla sem eget lacinia.
                      Fusce ipsum justo, vulputate vel sem id, faucibus
                      scelerisque libero. Aliquam accumsan justo ac feugiat
                      commodo. Aenean sit amet lobortis massa. Nunc vel ultrices
                      diam. Aliquam tincidunt eros ac felis laoreet iaculis.
                      <br /> <br />
                      Donec condimentum magna eget hendrerit porta. Sed posuere
                      quis lorem et sagittis. Duis consequat condimentum sapien
                      a scelerisque. Nam lacinia fringilla sem eget lacinia.
                      Fusce ipsum justo, vulputate vel sem id, faucibus
                      scelerisque libero. Aliquam accumsan justo ac feugiat
                      commodo. Aenean sit amet lobortis massa. Nunc vel ultrices
                      diam. Aliquam tincidunt eros ac felis laoreet iaculis.
                    </p>
                  </div>
                </div>
              </div>
              <div className="btn-scroll position-absolute">
                <button
                  type="button"
                  id="conteudo-button"
                  className="btn btn-link btn-sm btn-more"
                >
                  +
                </button>
                <div className="txt">Conheça a ficha do projeto</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PEIDesktop;
