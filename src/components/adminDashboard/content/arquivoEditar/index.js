import React, { useState, useEffect } from "react";
import { API } from "../../../../config";
import { isAuthenticated } from "../../../../auth";
import { getArquivo, updateArquivo } from "../../../../core/apiCore";

const ArquivoEditar = ({ id }) => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    link: "",
    error: false,
    errorMsg: "",
    redirectToReferrer: false,
    formData: "",
  });
  const { link, error, errorMsg, formData, redirectToReferrer } = values;
  const handleChange = (name) => (event) => {
    const value =
      name === "arquivo" ? event.target.files[0] : event.target.value;
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
        document.location.href = "/admin/arquivos";
      } else {
        document.location.href = "/";
      }
    }
  };
  const clickSubmit = (e) => {
    e.preventDefault();
    updateArquivo(id, user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true, errorMsg: data.error });
      } else {
        setValues({ ...values, error: false, redirectToReferrer: true });
        document.location.href = "/admin/arquivos";
      }
    });
  };
  const init = () => {
    setValues({
      ...values,
      formData: new FormData(),
    });
  };
  const initArquivo = (id) => {
    if (id) {
      getArquivo(id).then((data) => {
        if (!data || data.error) {
          console.log("Erro ao carregar o Arquivo");
        } else {
          setValues({
            ...values,
            link: data.link,
          });
        }
      });
    }
  };

  useEffect(() => {
    init();
    if (id) {
      initArquivo(id);
    }
  }, [id]);

  return (
    <div className="dashboard-content">
      {redirectUser()}
      <form className="form-dashboard p-3" onSubmit={clickSubmit}>
        <div className="text-center">
          <h1>Editar Arquivo</h1>
        </div>
        <div
          className="col-12 d-flex form-novo-noticia-thumb"
          style={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          <div className="col text-center p-3">
            <h4>Arquivo PDF</h4>
            <br />
            <a
              href={`${API}/arquivo/pdf/619ba540fccc5b24386ac661`}
              target="_blank"
              rel="noreferrer noopener"
              style={{ color: "#2b2b2b" }}
            >
              Link do Arquivo salvo
            </a>
            <br />
            <input
              onChange={handleChange("arquivo")}
              type="file"
              name="arquivo"
              accept="application/pdf"
              className="mt-3"
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
            Editar Arquivo
          </button>
        </h3>
      </form>
    </div>
  );
};

export default ArquivoEditar;
