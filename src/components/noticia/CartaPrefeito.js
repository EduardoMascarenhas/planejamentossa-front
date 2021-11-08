import React, { useState, useEffect } from "react";
import { getCarta } from "../../core/apiCore";
import { API } from "../../config";

const CartaPrefeito = () => {
  const [body, setBody] = useState("");
  const [values, setValues] = useState({
    title: "",
    subTitle: "",
    slug: "",
    createdAt: "",
    postedBy: "",
    error: false,
    errorMsg: "",
    redirectToReferrer: false,
    formData: "",
  });
  const {
    title,
    slug,
    createdAt,
    postedBy,
    subTitle,
    error,
    errorMsg,
    formData,
    redirectToReferrer,
  } = values;
  const initNoticia = (s) => {
    getCarta(s).then((data) => {
      if (!data || data.error) {
        console.log("Erro ao carregar a carta");
      } else {
        setBody(data.body);
        setValues({
          ...values,
          title: data.title,
          subTitle: data.subTitle,
          postedBy: data.postedBy.name,
          slug: data.slug,
          createdAt: data.createdAt,
        });
      }
    });
  };

  useEffect(() => {
    initNoticia("carta-do-prefeito");
  }, []);

  return (
    <>
      <section className=" dn-991 mt-0 bg-img-custom">
        <div className="container">
          <div className="col-lg-12 container-noticia">
            <button className="button-voltar">
              {" "}
              <a href="/">
                Voltar <i className="fas fa-arrow-left"></i>
              </a>{" "}
            </button>
            <div className="noticia-topo">
              <h1>{title}</h1>
              <p>{postedBy}</p>
            </div>
            <div className="col-12 d-flex">
              <div
                className="custom-scroll scrolling-area area-carta-prefeito mt-4"
                id="os"
              >
                <div className="ltr">
                  <div className="w100-991">
                    <div
                      className="body-noticia-prefeito"
                      dangerouslySetInnerHTML={{ __html: body }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-6 img-carta-prefeito">
                <img
                  className="img-com-borda"
                  src={`${API}/carta/thumb/${slug}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section className="mt-0 bg-img-custom">
        <div className="container">
          <div className="col-lg-12 container-noticia">
            <button className="button-voltar">
              {" "}
              <a href="/">
                Voltar <i className="fas fa-arrow-left"></i>
              </a>{" "}
            </button>
            <div className="noticia-topo">
              <h1 className="titulo-mobile">{title}</h1>
              <p>{postedBy}</p>
            </div>
            <div className="col-12 d-flex">
              <div
                className="custom-scroll scrolling-area area-carta-prefeito mt-4"
                id="os"
              >
                <div className="ltr">
                  <div className="w100-991">
                    <img
                      className="img-com-borda img-com-borda-mobile"
                      src={`${API}/carta/thumb/${slug}`}
                      alt=""
                    />
                    <div
                      className="body-noticia-prefeito texto-noticia-mobile"
                      dangerouslySetInnerHTML={{ __html: body }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartaPrefeito;
