import React, { useState, useEffect } from "react";
import { API } from "../../../../config";
import { isAuthenticated } from "../../../../auth";
import { createSelo } from "../../../../core/apiCore";
import ReactQuill, { Quill } from "react-quill";
import { QuillModules, QuillFormats } from "../../../../helpers/quill";
import "react-quill/dist/quill.snow.css";

const DashboardSeloContent = () => {
  const { user, token } = isAuthenticated();
  const [body, setBody] = useState("");
  const [values, setValues] = useState({
    title: "",
    error: false,
    errorMsg: "",
    redirectToReferrer: false,
    formData: "",
  });
  const { title, error, errorMsg, formData, redirectToReferrer } = values;

  const handleChange = (name) => (event) => {
    const value = name === "image" ? event.target.files[0] : event.target.value;

    setValues({ ...values, [name]: value });
    formData.set(name, value);
  };
  const handleBody = (e) => {
    // console.log(e);
    setBody(e);
    formData.set("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("carta", JSON.stringify(e));
    }
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
        document.location.href = "/admin/selos";
      } else {
        document.location.href = "/";
      }
    }
  };
  const clickSubmit = (e) => {
    e.preventDefault();
    createSelo(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true, errorMsg: data.error });
      } else {
        setValues({ ...values, error: false, redirectToReferrer: true });
      }
    });
  };

  const init = () => {
    setValues({ ...values, formData: new FormData() });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="dashboard-content">
      {redirectUser()}
      <form className="form-dashboard p-3" onSubmit={clickSubmit}>
        <div className="text-center">
          <h1>Novo Selo</h1>
        </div>
        <div className="col-12 d-flex">
          <div className="col-6 p-2 m-a">
            <span>Título do Selo</span>
            <input
              type="text"
              className="form-control"
              placeholder="Título do Selo"
              onChange={handleChange("title")}
              value={title}
              autoFocus
            />
          </div>
        </div>
        <div className="col-12 d-flex form-nova-noticia-thumb">
          <div className="col text-center p-3">
            <h4>Imagem</h4>
            <br />
            <input
              onChange={handleChange("image")}
              type="file"
              name="image"
              accept="image/*"
            />
          </div>
        </div>
        <div>
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            value={body}
            placeholder="Corpo do Selo..."
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
            Novo Selo
          </button>
        </h3>
      </form>
    </div>
  );
};

export default DashboardSeloContent;
