import React, { useState, useEffect } from "react";
import { API } from "../../../../config";
import { isAuthenticated } from "../../../../auth";
import { Select } from "antd";
import {
  getProjeto,
  updateProjeto,
  getEixos,
  getSelos,
} from "../../../../core/apiCore";
import Multiselect from "multiselect-react-dropdown";
import ReactQuill from "react-quill";
import { QuillModules, QuillFormats } from "../../../../helpers/quill";
import {} from "../../../../../node_modules/react-quill/dist/quill.snow.css";

const ProjetoEditar = ({ slug }) => {
  const { user, token } = isAuthenticated();
  const [body, setBody] = useState("");
  const [eixos, setEixos] = useState([]);
  const [selos2, setSelos2] = useState([]);
  const { Option } = Select;
  const [values, setValues] = useState({
    selectedValues: [],
    projeto: {},
    name: "",
    subTitle: "",
    eixo: {},
    selos: [],
    error: false,
    errorMsg: "",
    redirectToReferrer: false,
    formData: "",
  });
  const {
    projeto,
    selectedValues,
    eixo,
    selos,
    name,
    subTitle,
    error,
    errorMsg,
    formData,
    redirectToReferrer,
  } = values;
  const handleBody = (e) => {
    console.log(e);
    setBody(e);
    formData.set("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("projeto", JSON.stringify(e));
    }
  };
  const handleChange = (name) => (event) => {
    const value = name === "thumb" ? event.target.files[0] : event.target.value;

    setValues({ ...values, [name]: value });
    formData.set(name, value);
  };
  const handleMultiSelect = (name) => (event) => {
    let arraySelos = [];
    event.map((c) => {
      arraySelos.push(c._id);
    });
    setValues({ ...values, [name]: arraySelos });
    formData.set("selos", arraySelos);
  };
  const showError = () => {
    return (
      <div
        className="alert alert-danger"
        style={{ display: error ? "" : "none" }}
        role="alert"
      >
        {errorMsg}
      </div>
    );
  };
  const redirectUser = () => {
    if (redirectToReferrer) {
      if ((user && user.role === 1) || user.role === 2) {
        document.location.href = "/admin/projetos";
      } else {
        document.location.href = "/";
      }
    }
  };
  function handleChangeEixos(value) {
    setValues({ ...values, eixo: value });
    formData.set("eixo", value);
  }
  const clickSubmit = (e) => {
    e.preventDefault();
    updateProjeto(slug, user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true, errorMsg: data.error });
      } else {
        setValues({ ...values, error: false, redirectToReferrer: true });
      }
    });
  };
  const init = () => {
    setValues({
      ...values,
      formData: new FormData(),
    });
  };
  const initProjeto = (s) => {
    getProjeto(s).then((data) => {
      if (!data || data.error) {
        console.log("Erro ao carregar o projeto");
      } else {
        setBody(data.body);
        setValues({
          ...values,
          name: data.name,
          subTitle: data.subTitle,
          eixo: data.eixo,
          selos: data.selos,
          selectedValues: data.selos,
        });
      }
    });
  };
  const initSelos = () => {
    getSelos().then((data) => {
      if (data.error || !data) {
        console.log("erro ao carregar os selos");
      } else {
        setSelos2(data);
      }
    });
  };
  const initEixos = () => {
    getEixos().then((data) => {
      if (data.error || !data) {
        console.log("erro ao carregar os eixos");
      } else {
        setEixos(data);
      }
    });
  };
  useEffect(() => {
    init();
    if (slug) {
      initProjeto(slug);
    }
    initEixos();
    initSelos();
  }, [slug]);

  return (
    <div className="dashboard-content">
      {redirectUser()}
      <form className="form-dashboard p-3" onSubmit={clickSubmit}>
        <div className="text-center">
          <h1>Editar Projeto</h1>
        </div>
        <div className="col-12 d-flex">
          <div className="col-6 p-2">
            <span>T??tulo do Projeto</span>
            <input
              type="text"
              className="form-control"
              placeholder="T??tulo do Projeto"
              onChange={handleChange("name")}
              value={name}
              autoFocus
              required
            />
          </div>

          <div className="col-6 p-2">
            <span>Subt??tulo do Projeto</span>
            <input
              type="text"
              className="form-control"
              placeholder="Sub T??tulo do Projeto"
              onChange={handleChange("subTitle")}
              value={subTitle}
            />
          </div>
        </div>
        <div className="col-12 d-flex">
          <div className="col-6 p-2">
            {eixo && eixo ? (
              <span>
                Eixo atual: <b>{eixo.title}</b>
              </span>
            ) : (
              ""
            )}
            <Select
              showSearch
              defaultValue="Eixos"
              onChange={handleChangeEixos}
              className="select-custom"
            >
              {eixos &&
                eixos.map((e, i) => {
                  return (
                    <Option key={i} value={e._id}>
                      {e.title}
                      <hr className="m-0" />
                    </Option>
                  );
                })}
            </Select>
          </div>
          <div className="col-6 p-2">
            {selos2 && selos2.length > 0 ? (
              <Multiselect
                options={selos2}
                showCheckbox
                selectedValues={selectedValues}
                onSelect={handleMultiSelect("selos")}
                onRemove={handleMultiSelect("selos")}
                displayValue="title"
                placeholder="Selecionar Selo"
                emptyRecordMsg="Nenhuma Selo foi encontrado!"
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            value={body}
            placeholder="Corpo do Projeto..."
            onChange={handleBody}
          />
        </div>
        <div className="col-12 d-flex p-3">
          <div className="m-a">{showError()}</div>{" "}
        </div>

        <h3 className="text-center">
          <button
            type="submit"
            className="btn btn-info btn-editar mr-1 fs-custom"
          >
            {" "}
            Editar Projeto
          </button>
        </h3>
      </form>
    </div>
  );
};

export default ProjetoEditar;
