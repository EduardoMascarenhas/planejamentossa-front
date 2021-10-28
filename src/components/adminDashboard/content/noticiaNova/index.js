import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../../../../auth";
import { createBlog } from "../../../../core/apiCore";
import Multiselect from "multiselect-react-dropdown";
import ReactQuill from "react-quill";
import { QuillModules, QuillFormats } from "../../../../helpers/quill";
import {} from "../../../../../node_modules/react-quill/dist/quill.snow.css";

const NoticiaNova = () => {
  const { user, token } = isAuthenticated();
  const [body, setBody] = useState("");
  const [values, setValues] = useState({
    title: "",
    subTitle: "",
    link: "",
    error: false,
    errorMsg: "",
    redirectToReferrer: false,
    formData: "",
  });
  const {
    title,
    subTitle,
    link,
    error,
    errorMsg,
    formData,
    redirectToReferrer,
  } = values;
  const handleBody = (e) => {
    // console.log(e);
    setBody(e);
    formData.set("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("noticia", JSON.stringify(e));
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
        document.location.href = "/admin/noticias";
      } else {
        document.location.href = "/";
      }
    }
  };
  const clickSubmit = (e) => {
    e.preventDefault();
    // make request to api to create Categoria
    createBlog(user._id, token, formData).then((data) => {
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

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="dashboard-content">
      {redirectUser()}
      <form className="form-dashboard p-3" onSubmit={clickSubmit}>
        <div className="text-center">
          <h1>Criar nova Notícia</h1>
        </div>
        <div className="col-12 d-flex">
          <div className="col-6 p-2">
            <span>Título da Notícia</span>
            <input
              type="text"
              className="form-control"
              placeholder="Título da Notícia"
              onChange={handleChange("title")}
              value={title}
              autoFocus
              required
            />
          </div>

          <div className="col-6 p-2">
            <span>Subtítulo da Notícia</span>
            <input
              type="text"
              className="form-control"
              placeholder="Sub Título da Notícia"
              onChange={handleChange("subTitle")}
              value={subTitle}
            />
          </div>
        </div>
        <div className="col-12 d-flex">
          <div className="col-6 p-2">
            <span>Link da Notícia</span>
            <input
              type="text"
              className="form-control"
              placeholder="Link da Notícia"
              onChange={handleChange("link")}
              value={link}
              autoFocus
              required
            />
          </div>
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
            Criar nova Notícia
          </button>
        </h3>
      </form>
    </div>
  );
};

export default NoticiaNova;
