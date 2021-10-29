import React, { useState, useEffect } from "react";
import { API } from "../../../../config";
import { isAuthenticated } from "../../../../auth";
import { createCarta, getCarta, updateCarta } from "../../../../core/apiCore";
import Multiselect from "multiselect-react-dropdown";
import ReactQuill from "react-quill";
import { QuillModules, QuillFormats } from "../../../../helpers/quill";
import {} from "../../../../../node_modules/react-quill/dist/quill.snow.css";

const CartaEditar = ({ slug }) => {
  const { user, token } = isAuthenticated();
  const [body, setBody] = useState("");
  const [values, setValues] = useState({
    selectedValues: [],
    carta: {},
    title: "",
    subTitle: "",
    error: false,
    errorMsg: "",
    redirectToReferrer: false,
    formData: "",
  });
  const {
    carta,
    selectedValues,
    title,
    subTitle,
    error,
    errorMsg,
    formData,
    redirectToReferrer,
  } = values;
  const handleBody = (e) => {
    setBody(e);
    formData.set("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("carta", JSON.stringify(e));
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
        document.location.href = "/admin/cartas";
      } else {
        document.location.href = "/";
      }
    }
  };
  const clickSubmit = (e) => {
    e.preventDefault();
    updateCarta(slug, user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true, errorMsg: data.error });
      } else {
        setValues({ ...values, error: false, redirectToReferrer: true });
      }
    });
    document.location.href = "/admin/cartas";
  };
  const init = () => {
    setValues({ ...values, formData: new FormData() });
  };
  const initCarta = (s) => {
    getCarta(s).then((data) => {
      if (!data || data.error) {
        console.log("Erro ao carregar a carta");
      } else {
        setValues({
          ...values,
          title: data.title,
          subTitle: data.subTitle,
        });
        setBody(data.body);
      }
    });
  };

  useEffect(() => {
    init();
    if (slug) {
      initCarta(slug);
    }
  }, [slug]);

  return (
    <div className="dashboard-content">
      {redirectUser()}
      <form className="form-dashboard p-3" onSubmit={clickSubmit}>
        <div className="text-center">
          <h1>Editar Carta</h1>
        </div>
        <div className="col-12 d-flex">
          <div className="col-6 p-2">
            <span>Título da Carta</span>
            <input
              type="text"
              className="form-control"
              placeholder="Título da Carta"
              onChange={handleChange("title")}
              value={title}
              autoFocus
              required
            />
          </div>

          <div className="col-6 p-2">
            <span>Subtítulo da Carta</span>
            <input
              type="text"
              className="form-control"
              placeholder="Sub Título da Carta"
              onChange={handleChange("subTitle")}
              value={subTitle}
            />
          </div>
        </div>
        <div className="col-12 d-flex form-nova-carta-thumb">
          <div className="img-thumb-editar">
            <img
              className="update-blog-img"
              src={`${API}/carta/thumb/${slug}`}
              alt=""
            />
          </div>
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
        <div>
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            value={body}
            placeholder="Corpo da Carta..."
            onChange={() => handleBody()}
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
            Editar Carta
          </button>
        </h3>
      </form>
    </div>
  );
};

export default CartaEditar;
