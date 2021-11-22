import React, { useState, useEffect } from "react";
import { API } from "../../../../config";
import { isAuthenticated } from "../../../../auth";
import { createArquivo } from "../../../../core/apiCore";

const DashboardArquivoContent = () => {
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
    createArquivo(user._id, token, formData).then((data) => {
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
          <h1>Novo Arquivo</h1>
        </div>
        <div className="col-12 d-flex form-nova-noticia-thumb">
          <div className="col text-center p-3">
            <h4>Arquivo PDF</h4>
            <br />
            <input
              onChange={handleChange("arquivo")}
              type="file"
              name="arquivo"
              accept="application/pdf"
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
            Novo Arquivo
          </button>
        </h3>
      </form>
    </div>
  );
};

export default DashboardArquivoContent;
