import React from "react";
import img1 from "../../assets/imgs/dots.png";

const PMobile = () => {
  return (
    <main className="h-100 db-991">
      <div className="container-fluid position-relative pt-5 bg-blue-0-deg">
        <div className="bg-rosa-titulo">
          <h1>
            CONHEÇA <b>OS EIXOS DO PLANO</b>
          </h1>
        </div>
        <div className="div-voltar">
          <div className="dots dots-voltar dot-esquerdo">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
          <button className="button-voltar">
            {" "}
            <a href="/">
              Voltar <i className="fas fa-arrow-left"></i>
            </a>{" "}
          </button>
          <div className="dots dots-voltar dot-direito">
            <img src={img1} className="d-block w-100" alt="..." />
          </div>
        </div>
        <div className="div-titulo-projeto">
          <h1>CAPITAL DA INOVAÇÃO E DO DESENVOLVIMENTO</h1>
        </div>

        <section className="position-relative bar-yellow bar-yellow-projetos c-bgc-yellow-light">
          <div className="container position-relative d-flex align-items-center justify-content-center">
            <div className="titulo-projetos">
              <h1>PROJETOS</h1>
            </div>
          </div>
        </section>
      </div>
      <div className="container-fluid position-relative content-center p0-991">
        <div className="container container-eixos-interna">
          <div className="row">
            <div className="col-12 position-relative pb-5 mb-5 corpo">
              <div className="container">
                <h4
                  className="c-color-yellow-light title-text"
                  id="conteudo-titulo-2"
                >
                  In non ante sed risus mattis aliquet sit amet vel ex.
                </h4>
              </div>
              <div className="scrolling-area mt-3" id="os">
                <div className="scrolling-element-inside">
                  <div className="container position-relative">
                    <p className="c-color-grey" id="conteudo-corpo-2">
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
              <div className="btn-scroll-2 position-relative">
                <button
                  type="button"
                  className="btn btn-link btn-sm btn-more"
                  id="conteudo-button-2"
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

export default PMobile;
