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

  useEffect(() => {
    initSelos();
  }, []);

  return (
    <section class="pb-0 mt-0 position-relative d-flex bg-home-center bg-selos">
      <div class="container">
        <div class="col-12 py-5 mb-5 align-items-center mx-auto card-space-home">
          <div class="scrolling-area mt-3" id="os">
            <div class="scrolling-element-inside">
              <ul class="list-group list-group-flush bg-transparent itens-news">
                {selos &&
                  selos.map((s, i) => {
                    return (
                      <li
                        key={i}
                        class="list-group-item  bg-transparent border-0 pl-0"
                      >
                        <div class="textos-selos">
                          <h2 class="c-color-gray fw-bolder">{s.title}</h2>
                          <h4 class="c-color-gray">{parser(s.body)}</h4>
                        </div>
                        <div class="imagem-selos">
                          <img
                            src={`${API}/selo/image/617ff7c101e8130eb4b25a9a`}
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
