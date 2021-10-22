import React, { useState } from "react";
import { isAuthenticated } from "../../../../auth";

const CategoriaNova = () => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    name: "",
    error: "",
    redirectToReferrer: false,
  });
  const { name, error, redirectToReferrer } = values;
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const showError = () => {
    <div
      class="alert alert-danger"
      style={{ display: error ? "" : "none" }}
      role="alert"
    >
      {error}
    </div>;
  };
  const redirectUser = () => {
    if (redirectToReferrer) {
      if ((user && user.role === 1) || user.role === 2) {
        document.location.href = "/admin/dashboard/categorias";
      } else {
        document.location.href = "/";
      }
    }
  };
  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
  };
  return (
    <div className="dashboard-content">
      <form className="pt-3" onSubmit={clickSubmit}>
        <div className="text-center">
          <h1>Criar nova Categoria</h1>
        </div>
        <div className="form-group-dashboard">
          <input
            type="text"
            className="form-control"
            placeholder="Nome da nova Categoria"
            onChange={handleChange}
            value={name}
            autoFocus
            required
          />
        </div>
        <h3 className="text-center">
          <button className="hvr-shutter-out-verticall botao-pesquisar">
            Criar nova Categoria
          </button>
        </h3>
      </form>
    </div>
  );
};

export default CategoriaNova;
