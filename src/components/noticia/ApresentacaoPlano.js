import React, { useState, useEffect } from "react";
import { getCartas } from "../../core/apiCore";
import { API } from "../../config";
import moment from "moment";
import img1 from "../../assets/imgs/img-noticia-1.png";

const ApresentacaoPlano = () => {
  const [values, setValues] = useState({
    apresentacoes: [],
    error: false,
    errorMsg: "",
    redirectToReferrer: false,
    formData: "",
  });
  const { apresentacoes, error, errorMsg, formData, redirectToReferrer } =
    values;
  const initApresentacoes = () => {
    getCartas().then((data) => {
      if (!data || data.error) {
        console.log("Erro ao carregar a carta");
      } else {
        setValues({
          ...values,
          apresentacoes: data,
        });
      }
    });
  };

  useEffect(() => {
    initApresentacoes();
  }, []);

  return (
    <section className="mt-0">
      <div className="container">
        <div className="col-lg-12 container-noticia">
          <button className="button-voltar">
            {" "}
            <a href="/">
              Voltar <i className="fas fa-arrow-left"></i>
            </a>{" "}
          </button>
          {apresentacoes &&
            apresentacoes.map((a, i) => {
              if (a.slug === "carta-do-prefeito") {
                return <></>;
              } else {
                return (
                  <div key={i}>
                    <div className="noticia-topo">
                      <h3>{a.subTitle}</h3>
                      <h1>{a.title}</h1>
                      <p>{a.postedBy.name}</p>
                      <p>{moment(a.createdAt).format("DD-MM-YYYY")}</p>
                    </div>
                    <div className="noticia-corpo scrolling-area mt-4" id="os">
                      <div className="ltr">
                        <img
                          className="update-blog-img"
                          src={`${API}/carta/thumb/${a.slug}`}
                          alt=""
                        />
                        <h3
                          className="body-noticia"
                          dangerouslySetInnerHTML={{ __html: a.body }}
                        />
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </section>
  );
};

export default ApresentacaoPlano;
