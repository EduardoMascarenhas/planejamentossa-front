import React, { useState, useEffect } from "react";
import { getSelo, getProjetos } from "../../core/apiCore";
import parser from "html-react-parser";
import { API } from "../../config";
import moment from "moment";

const SeloContent = ({ selo }) => {
  const [projetos, setProjetos] = useState([]);
  const [values, setValues] = useState({
    selos: [],
    error: false,
    title: "",
    body: "",
    errorMsg: "",
    redirectToReferrer: false,
    formData: "",
  });
  const { selos, title, body, error, errorMsg, formData, redirectToReferrer } =
    values;
  const initSelos = (s) => {
    getSelo(s).then((data) => {
      if (!data || data.error) {
        console.log("Erro ao carregar o selo");
      } else {
        setValues({
          ...values,
          title: data.title,
          body: data.body,
        });
      }
    });
  };
  const paginaAnterior = () => {
    console.log(window.history.back());
  };
  const goToProject = (slug) => {
    window.location.href = `/projeto-${slug}/selo`;
  };
  const initProjetos = () => {
    getProjetos().then((data) => {
      if (data.error || !data) {
        console.log("erro ao carregar os projetos");
      } else {
        setProjetos(data);
      }
    });
  };
  useEffect(() => {
    if (selo) {
      initSelos(selo);
    }
    initProjetos();
  }, [selo]);

  return (
    <section className="pb-0 mt-0 position-relative d-flex bg-home-center bg-selos">
      <div className="container">
        <div className="col-12 py-5 mb-5 align-items-center mx-auto card-space-home">
          <div className="mt-3" id="os">
            <div className="topo-selos">
              <h3>SELO</h3>
              <button
                className="button-voltar"
                style={{ position: "relative", marginTop: "0" }}
              >
                {" "}
                <a href="#" onClick={() => paginaAnterior()}>
                  Voltar <i className="fas fa-arrow-left"></i>
                </a>{" "}
              </button>
            </div>

            <div className="">
              <ul className="list-group list-group-flush bg-transparent itens-news">
                <li className="list-group-item  bg-transparent border-0 pl-0">
                  <div className="textos-selos">
                    <h2 className="c-color-gray fw-bolder">
                      {title ? title : ""}
                    </h2>
                    <h4 className="c-color-gray">{parser(body)}</h4>
                  </div>
                  <div className="imagem-selos">
                    <img src={`${API}/selo/image/${selo}`} alt="" />
                  </div>
                </li>
                {projetos &&
                  projetos.map((p, i) => {
                    if (p.selos && p.selos.includes(selo)) {
                      return (
                        <div key={i} className="textos-selos mb-4 ps-3">
                          <h3
                            className="c-color-gray fw-bolder cursor-pointer"
                            onClick={() => goToProject(p.slug)}
                          >
                            {p.name}
                          </h3>
                          <h5 className="c-color-gray">
                            {p.eixo && p.eixo.title ? p.eixo.title : ""}
                          </h5>
                        </div>
                      );
                    }
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeloContent;
