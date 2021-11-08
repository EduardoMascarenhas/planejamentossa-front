import React, { useState, useEffect } from "react";
import { getSelos } from "../../core/apiCore";
import parser from "html-react-parser";
import { API } from "../../config";
import moment from "moment";

const SelosContent = () => {
  const [values, setValues] = useState({
    selos: [],
    error: false,
    errorMsg: "",
    redirectToReferrer: false,
    formData: "",
  });
  const { selos, error, errorMsg, formData, redirectToReferrer } = values;
  const goToSelo = (id) => {
    window.location.href = `/selo-${id}`;
  };
  const initSelos = (s) => {
    getSelos(s).then((data) => {
      if (!data || data.error) {
        console.log("Erro ao carregar os selos");
      } else {
        setValues({
          ...values,
          selos: data,
        });
      }
    });
  };
  const paginaAnterior = () => {
    console.log(window.history.back());
  };
  useEffect(() => {
    initSelos();
  }, []);

  return (
    <section className="pb-0 mt-0 position-relative d-flex bg-home-center bg-selos">
      <div className="container">
        <div className="col-12 py-5 mb-5 align-items-center mx-auto card-space-home">
          <div className="mt-3" id="os">
            <div className="topo-selos">
              <h3>SELOS</h3>
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
                {selos &&
                  selos.map((s, i) => {
                    return (
                      <li
                        key={i}
                        className="list-group-item  bg-transparent border-0 pl-0"
                      >
                        <div className="textos-selos">
                          <h2
                            className="c-color-gray fw-bolder"
                            onClick={() => goToSelo(s._id)}
                          >
                            {s.title}
                          </h2>
                          <h4 className="c-color-gray">{parser(s.body)}</h4>
                        </div>
                        <div className="imagem-selos">
                          <img
                            src={`${API}/selo/image/${s._id}`}
                            onClick={() => goToSelo(s._id)}
                            alt=""
                          />
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelosContent;
