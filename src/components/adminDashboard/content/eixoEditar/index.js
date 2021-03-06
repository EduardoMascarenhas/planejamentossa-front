import React, { useState, useEffect } from "react";
import { API } from "../../../../config";
import { isAuthenticated } from "../../../../auth";
import {
  createEixo,
  getProjetos,
  getEixo,
  updateEixo,
} from "../../../../core/apiCore";
import Multiselect from "multiselect-react-dropdown";
import ReactQuill from "react-quill";
import { QuillModules, QuillFormats } from "../../../../helpers/quill";
import "../../../../../node_modules/react-quill/dist/quill.snow.css";

const EixoEditar = ({ slug }) => {
  const { user, token } = isAuthenticated();
  const [vis, setVis] = useState("");
  const [met, setMet] = useState("");
  const [pro, setPro] = useState("");
  const [values, setValues] = useState({
    projetos: [],
    projetos2: [],
    selectedValues: [],
    projeto: {},
    title: "",
    borderColor: "",
    subTitle: "",
    error: false,
    errorMsg: "",
    redirectToReferrer: false,
    formData: "",
  });
  const {
    projetos,
    projetos2,
    projeto,
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
    if (vis) {
      formData.set("vis", e);
    }
  };
  const handleMet = (e) => {
    // console.log(e);
    setMet(e);
    if (met) {
      formData.set("met", e);
    }
  };
  const handlePro = (e) => {
    // console.log(e);
    setPro(e);
    if (pro) {
      formData.set("pro", e);
    }
  };
  const handleChange = (name) => (event) => {
    const value = name === "thumb" ? event.target.files[0] : event.target.value;
    setValues({ ...values, [name]: value });
    formData.set(name, value);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
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
  const renderProjetos = () => {
    if (projetos.length > 0) {
      return (
        <Multiselect
          options={projetos}
          showCheckbox
          selectedValues={selectedValues}
          onSelect={handleMultiSelect("projetos2")}
          onRemove={handleMultiSelect("projetos2")}
          displayValue="slug"
          placeholder="Selecionar Projeto"
          emptyRecordMsg="Nenhuma Projeto foi encontrado!"
        />
      );
    } else {
      initProjetos();
    }
  };
  const clickSubmit = (e) => {
    e.preventDefault();
    updateEixo(slug, user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true, errorMsg: data.error });
      } else {
        setValues({ ...values, error: false, redirectToReferrer: true });
        document.location.href = "/admin/eixos";
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
        });
      }
    });
  };
  const initEixo = (s) => {
    getEixo(s).then((data) => {
      if (!data || data.error) {
        console.log("Erro ao carregar a not??cia");
      } else {
        setVis(data.vis);
        setMet(data.met);
        setPro(data.pro);
        setValues({
          ...values,
          title: data.title,
          selectedValues: data.projetos,
          borderColor: data.borderColor,
          subTitle: data.subTitle,
          projetos2: data.projetos2,
        });
      }
    });
  };
  const init = () => {
    setValues({
      ...values,
      formData: new FormData(),
    });
  };
  useEffect(() => {
    init();
    initProjetos();
    if (slug) {
      initEixo(slug);
    }
  }, [slug]);

  return (
    <div className="dashboard-content">
      {redirectUser()}
      <form className="form-dashboard p-3" onSubmit={clickSubmit}>
        <div className="text-center">
          <h1>Editar Eixo</h1>
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
            />
          </div>

          <div className="col-6 p-2"></div>
        </div>
        <div className="col-12 d-flex form-novo-noticia-thumb">
          <div className="img-thumb-editar">
            <img
              className="update-blog-img"
              src={`${API}/eixo/thumb/${slug}`}
              alt=""
            />
          </div>
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
        <div className="col-12 d-flex p-3">{renderProjetos()}</div>
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
            Editar Eixo
          </button>
        </h3>
      </form>
    </div>
  );
};

export default EixoEditar;
