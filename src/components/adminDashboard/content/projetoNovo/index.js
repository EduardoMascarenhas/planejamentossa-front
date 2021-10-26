import React, { useState } from "react";
import { isAuthenticated } from "../../../../auth";
import { criarProjeto } from "../../../../core/apiCore";

const ProjetoNovo = () => {
  const { user, token } = isAuthenticated();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const handleChange = (e) => {
    setName(e.target.value);
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
    criarProjeto(user._id, token, { name }).then((data) => {
      if (data.error || !data) {
        setError(data.error);
      } else {
        setError("");
        setRedirectToReferrer(true);
      }
    });
  };
  return (
    <div className="dashboard-content">
      {showError()}
      {redirectUser()}
      <form className="form-dashboard p-3" onSubmit={clickSubmit}>
        <div className="text-center">
          <h1>Criar novo Projeto</h1>
        </div>
        <div className="input-500">
          <input
            type="text"
            className="form-control"
            placeholder="Nome da nova Projeto"
            onChange={handleChange}
            value={name}
            autoFocus
            required
          />
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
