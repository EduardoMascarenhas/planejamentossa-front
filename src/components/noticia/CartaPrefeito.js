import React, { useState, useEffect } from "react";
import { getCarta } from "../../core/apiCore";
import { API } from "../../config";
import moment from "moment";
import img1 from "../../assets/imgs/img-noticia-1.png";

const CartaPrefeito = ({ slug }) => {
  const [body, setBody] = useState("");
  const [values, setValues] = useState({
    title: "",
    subTitle: "",
    createdAt: "",
    postedBy: "",
    error: false,
    errorMsg: "",
    redirectToReferrer: false,
    formData: "",
  });
  const {
    title,
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
          createdAt: data.createdAt,
        });
      }
    });
  };

  useEffect(() => {
    if (slug) {
      initNoticia(slug);
    }
  }, [slug]);

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
          <div className="noticia-topo">
            <h3>{subTitle}</h3>
            <h1>{title}</h1>
            <p>{postedBy}</p>
            <p>{moment(createdAt).format("HH:mm / DD-MM-YYYY")}</p>
          </div>
          <div className="noticia-corpo scrolling-area mt-4" id="os">
            <div className="ltr">
              <img
                className="update-blog-img"
                src={`${API}/carta/thumb/${slug}`}
                alt=""
              />
              <h3
                className="body-noticia"
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartaPrefeito;
