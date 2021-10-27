import React, { useState, useEffect } from "react";
import { isAuthenticated } from "../../../../auth";
import { createBlog, getCategorias } from "../../../../core/apiCore";
import Multiselect from "multiselect-react-dropdown";
import ReactQuill from "react-quill";
import { QuillModules, QuillFormats } from "../../../../helpers/quill";
import {} from "../../../../../node_modules/react-quill/dist/quill.snow.css";

const NoticiaNova = () => {
  const { user, token } = isAuthenticated();
  const [body, setBody] = useState("");
  const [values, setValues] = useState({
    categorias: [],
    categories: [],
    selectedValues: [],
    title: "",
    subTitle: "",
    error: false,
    errorMsg: "",
    redirectToReferrer: false,
    formData: "",
  });
  const {
    categorias,
    categories,
    selectedValues,
    title,
    subTitle,
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
  const handleMultiSelect = (name) => (event) => {
    let arrayCategories = [];
    event.map((c) => {
      arrayCategories.push(c._id);
    });
    setValues({ ...values, [name]: arrayCategories });
    formData.set("categories", arrayCategories);
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
  const initCategorias = () => {
    getCategorias().then((data) => {
      if (!data || data.error) {
        setValues({ ...values, error: data.error });
        console.log("erro ao carregar as categorias");
      } else {
        setValues({
          ...values,
          categorias: data,
          formData: new FormData(),
        });
      }
    });
  };

  useEffect(() => {
    initCategorias();
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
        <div className="col-12 d-flex form-nova-noticia-thumb">
          <div className="col text-center p-3">
            <span>Thumbnail</span>
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
          {categorias && categorias.length > 0 ? (
            <Multiselect
              options={categorias}
              showCheckbox
              selectedValues={selectedValues}
              onSelect={handleMultiSelect("categories")}
              onRemove={handleMultiSelect("categories")}
              displayValue="slug"
              placeholder="Selecionar Categoria"
              emptyRecordMsg="Nenhuma Categoria foi encontrada!"
            />
          ) : (
            ""
          )}
        </div>
        <div>
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            value={body}
            placeholder="Corpo da Notícia..."
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
            Criar nova Notícia
          </button>
        </h3>
      </form>
    </div>
  );
};

export default NoticiaNova;
