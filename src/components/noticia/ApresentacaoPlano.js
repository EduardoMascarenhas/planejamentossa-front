import React, { useState, useEffect } from "react";
import { getCarta } from "../../core/apiCore";
import { API } from "../../config";
import moment from "moment";
import img1 from "../../assets/imgs/img-noticia-1.png";

const ApresentacaoPlano = () => {
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
    initNoticia("apresentacao-do-plano");
  }, []);

  return (
    <>
      <section className="mt-0 bg-img-custom-2">
        <div className="container">
          <div className="col-lg-12 container-noticia">
            <button className="button-voltar button-apresentacao-plano">
              {" "}
              <a href="/">
                Voltar <i className="fas fa-arrow-left"></i>
              </a>{" "}
            </button>
            <div className="noticia-topo">
              <h1>{title}</h1>
              <p>{postedBy}</p>
            </div>
            <div className="scrolling-area area-carta-prefeito mt-4" id="os">
              <div className="ltr">
                <div className="col-12 d-flex">
                  <div className="col-6 w100-991">
                    <div
                      className="body-noticia-prefeito"
                      dangerouslySetInnerHTML={{ __html: body }}
                    />
                  </div>
                  <div className="col-6 dn-991 img-carta-prefeito">
                    <img
                      className="img-com-borda-2"
                      src={`${API}/carta/thumb/${slug}`}
                      alt=""
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

export default ApresentacaoPlano;
