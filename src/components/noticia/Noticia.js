import React, { useState, useEffect } from "react";
import { getBlog } from "../../core/apiCore";
import { API } from "../../config";
import moment from "moment";
import img1 from "../../assets/imgs/img-noticia-1.png";

const noticias = {
  titulo:
    "Escritório Social Móvel orienta cidadãos sobre obras do Novo Mané Dendê",
  subTitulo:
    "O Escritório Social Móvel retomou seu funcionamento itinerante, nos bairros de Alto da Terezinha, Rio Sena, Ilha Amarela e Plataforma, após dois meses de dedicação exclusiva aos moradores que estão na área onde a obra do projeto Novo Mané Dendê (PNMD) está acontecendo.",
  corpo:
    "O Escritório Social Móvel retomou seu funcionamento itinerante, nos bairros de Alto da Terezinha, Rio Sena, Ilha Amarela e Plataforma, após dois meses de dedicação exclusiva aos moradores que estão na área onde a obra do projeto Novo Mané Dendê (PNMD) está acontecendo. Neste momento, as intervenções ocorrem na Avenida Tronco, no bairro de Ilha Amarela (mais conhecida como Barro Vermelho).",

  createdAt: "Criado: 15 Outubro 2021",
};
const Noticia = ({ slug }) => {
  const [body, setBody] = useState("");
  const [values, setValues] = useState({
    categories: [],
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
    categories,
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
    getBlog(s).then((data) => {
      if (!data || data.error) {
        console.log("Erro ao carregar a notícia");
      } else {
        setBody(data.body);
        setValues({
          ...values,
          title: data.title,
          subTitle: data.subTitle,
          categories: data.categories,
          postedBy: data.postedBy.name,
          createdAt: data.postedBy,
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
                src={`${API}/noticia/thumb/${slug}`}
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

export default Noticia;
