import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../../../auth";
import { criarProjeto } from "../../../../core/apiCore";
import ReactQuill from "react-quill";
import { QuillModules, QuillFormats } from "../../../../helpers/quill";
import {} from "../../../../../node_modules/react-quill/dist/quill.snow.css";

const ProjetoNovo = () => {
  const { user, token } = isAuthenticated();
  const [body, setBody] = useState("");
  const [values, setValues] = useState({
    name: "",
    subTitle: "",
    formData: "",
  });
  const [error, setError] = useState("");
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const { name, subTitle, formData } = values;

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
        {error}
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
    setError("");
    // make request to api to create Projeto
    criarProjeto(user._id, token, formData).then((data) => {
      if (data.error || !data) {
        setError(data.error);
      } else {
        setError("");
        setRedirectToReferrer(true);
      }
    });
  };
  const handleBody = (e) => {
    // console.log(e);
    setBody(e);
    formData.set("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("noticia", JSON.stringify(e));
    }
  };
  const init = () => {
    setValues({ ...values, formData: new FormData() });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="dashboard-content">
      {showError()}
      {redirectUser()}
      <form className="form-dashboard p-3" onSubmit={clickSubmit}>
        <div className="text-center">
          <h1>Criar novo Projeto</h1>
        </div>
        <div className="col-12 d-flex">
          <div className="col-6 p-2">
            <span>Título do Projeto</span>
            <input
              type="text"
              className="form-control"
              placeholder="Título do Projeto"
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
              placeholder="Sub Título do Projeto"
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
            Criar novo Projeto
          </button>
        </h3>
      </form>
    </div>
  );
};

export default ProjetoNovo;
