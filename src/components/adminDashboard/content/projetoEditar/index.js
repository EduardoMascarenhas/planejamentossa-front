import React, { useState, useEffect } from "react";
import { API } from "../../../../config";
import { isAuthenticated } from "../../../../auth";
import { getProjeto, updateProjeto } from "../../../../core/apiCore";
import ReactQuill from "react-quill";
import { QuillModules, QuillFormats } from "../../../../helpers/quill";
import {} from "../../../../../node_modules/react-quill/dist/quill.snow.css";

const ProjetoEditar = ({ slug }) => {
  const { user, token } = isAuthenticated();
  const [body, setBody] = useState("");
  const [values, setValues] = useState({
    selectedValues: [],
    projeto: {},
    name: "",
    subTitle: "",
    error: false,
    errorMsg: "",
    redirectToReferrer: false,
    formData: "",
  });
  const {
    projeto,
    selectedValues,
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
  const clickSubmit = (e) => {
    e.preventDefault();
    updateProjeto(slug, user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true, errorMsg: data.error });
      } else {
        setValues({ ...values, error: false, redirectToReferrer: true });
      }
    });
    document.location.href = "/admin/projetos";
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
        });
      }
    });
  };

  useEffect(() => {
    init();
    if (slug) {
      initProjeto(slug);
    }
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
            <span>Título do Projeto</span>
            <input
              type="text"
              className="form-control"
              placeholder="Título da Projeto"
              onChange={handleChange("name")}
              value={name}
              autoFocus
              required
            />
          </div>

          <div className="col-6 p-2">
            <span>Subtítulo do Projeto</span>
            <input
              type="text"
              className="form-control"
              placeholder="Sub Título da Projeto"
              onChange={handleChange("subTitle")}
              value={subTitle}
              autoFocus
            />
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
