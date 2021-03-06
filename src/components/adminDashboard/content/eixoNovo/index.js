import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../../../../auth";
import { createEixo, getProjetos } from "../../../../core/apiCore";
import Multiselect from "multiselect-react-dropdown";
import ReactQuill from "react-quill";
import { QuillModules, QuillFormats } from "../../../../helpers/quill";
import {} from "../../../../../node_modules/react-quill/dist/quill.snow.css";

const EixoNovo = () => {
  const { user, token } = isAuthenticated();
  const [vis, setVis] = useState("");
  const [met, setMet] = useState("");
  const [pro, setPro] = useState("");
  const [values, setValues] = useState({
    projetos: [],
    projetos2: [],
    selectedValues: [],
    title: "",
    subTitle: "",
    borderColor: "",
    error: false,
    errorMsg: "",
    redirectToReferrer: false,
    formData: "",
  });
  const {
    projetos,
    projetos2,
    borderColor,
    selectedValues,
    title,
    subTitle,
    error,
    errorMsg,
    formData,
    redirectToReferrer,
  } = values;
  const handleVis = (e) => {
    // console.log(e);
    setVis(e);
    formData.set("vis", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("eixo-visao", JSON.stringify(e));
    }
  };
  const handleMet = (e) => {
    // console.log(e);
    setMet(e);
    formData.set("met", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("eixo-meta", JSON.stringify(e));
    }
  };
  const handlePro = (e) => {
    // console.log(e);
    setPro(e);
    formData.set("pro", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("eixo-projetos", JSON.stringify(e));
    }
  };
  const handleChange = (name) => (event) => {
    const value = name === "thumb" ? event.target.files[0] : event.target.value;

    setValues({ ...values, [name]: value });
    formData.set(name, value);
  };
  const handleMultiSelect = (name) => (event) => {
    let arrayProjetos = [];
    event.map((c) => {
      arrayProjetos.push(c._id);
    });
    setValues({ ...values, [name]: arrayProjetos });
    formData.set("projetos", arrayProjetos);
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
        document.location.href = "/admin/eixos";
      } else {
        document.location.href = "/";
      }
    }
  };
  const clickSubmit = (e) => {
    e.preventDefault();
    // make request to api to create Projeto
    createEixo(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true, errorMsg: data.error });
      } else {
        setValues({ ...values, error: false, redirectToReferrer: true });
      }
    });
  };
  const initProjetos = () => {
    getProjetos().then((data) => {
      if (!data || data.error) {
        setValues({ ...values, error: data.error });
        console.log("erro ao carregar as projetos");
      } else {
        setValues({
          ...values,
          projetos: data,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    initProjetos();
  }, []);

  return (
    <div className="dashboard-content">
      {redirectUser()}
      <form className="form-dashboard p-3" onSubmit={clickSubmit}>
        <div className="text-center">
          <h1>Criar novo Eixo</h1>
        </div>
        <div className="col-12 d-flex">
          <div className="col-6 p-2">
            <span>T??tulo do Eixo</span>
            <input
              type="text"
              className="form-control"
              placeholder="T??tulo do Eixo"
              onChange={handleChange("title")}
              value={title}
              autoFocus
              required
            />
          </div>

          <div className="col-6 p-2">
            <span>Subt??tulo do Eixo</span>
            <input
              type="text"
              className="form-control"
              placeholder="Sub T??tulo do Eixo"
              onChange={handleChange("subTitle")}
              value={subTitle}
            />
          </div>
        </div>
        <div className="col-12 d-flex">
          <div className="col-6 p-2">
            <span>Cor da borda</span>
            <input
              type="text"
              className="form-control"
              placeholder="Cor da borda"
              onChange={handleChange("borderColor")}
              value={borderColor}
              required
            />
          </div>

          <div className="col-6 p-2"></div>
        </div>
        <div className="col-12 d-flex form-novo-eixo-thumb">
          <div className="col text-center p-3">
            <h4>Thumbnail</h4>
            <br />
            <input
              onChange={handleChange("thumb")}
              type="file"
              name="thumb"
              accept="image/*"
            />
          </div>
        </div>
        <div className="col-12 d-flex p-3">
          {projetos && projetos.length > 0 ? (
            <Multiselect
              options={projetos}
              showCheckbox
              selectedValues={selectedValues}
              onSelect={handleMultiSelect("projetos2")}
              onRemove={handleMultiSelect("projetos2")}
              displayValue="slug"
              placeholder="Selecionar Projeto"
              emptyRecordMsg="Nenhuma Projeto foi encontrada!"
            />
          ) : (
            ""
          )}
        </div>
        <div className="mt-3 mb-3">
          <h4>Vis??o</h4>
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            value={vis}
            placeholder="Vis??o..."
            onChange={handleVis}
          />
        </div>
        <div className="mt-3 mb-3">
          <h4>Metas</h4>
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            value={met}
            placeholder="Metas..."
            onChange={handleMet}
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
            Criar novo Eixo
          </button>
        </h3>
      </form>
    </div>
  );
};

export default EixoNovo;
