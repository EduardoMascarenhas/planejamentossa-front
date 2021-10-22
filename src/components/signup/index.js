import React, { useState } from "react";
import { signup, authenticate, isAuthenticated } from "../../auth";
import img4 from "../../assets/imgs/bg-card-title.svg";
import img5 from "../../assets/imgs/barras-pink.svg";

const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { name, email, password, password2, error, redirectToReferrer } =
    values;
  const { user } = isAuthenticated();

  const redirectUser = () => {
    if (redirectToReferrer) {
      if ((user && user.role === 1) || user.role === 2) {
        document.location.href = "/admin/dashboard";
      } else {
        document.location.href = "/";
      }
    }
    if (isAuthenticated()) {
      if ((user && user.role === 1) || user.role === 2) {
        document.location.href = "/admin/dashboard";
      } else {
        document.location.href = "/";
      }
    }
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          redirectToReferrer: true,
        });
      }
    });
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

  return (
    <>
      <div className="bg-form-center container-entrar">
        <div className="bg-form-center-inside">
          <div className="form-to-center">
            <div className="card">
              <div className="card-header"></div>
              <div className="card-body position-relative">
                <div className="position-absolute bg-title-card">
                  <div>
                    <object
                      type="image/svg+xml"
                      data={img4}
                      className="obj-left"
                      aria-label=" "
                    ></object>
                    <div className="bg-title">Cadastrar</div>
                  </div>
                  <div>
                    <object
                      type="image/svg+xml"
                      data={img5}
                      className="obj-right"
                      aria-label=" "
                    ></object>
                  </div>
                </div>
                <form className="pt-3">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Digite seu Nome"
                      onChange={handleChange("name")}
                      value={name}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Digite seu Email"
                      onChange={handleChange("email")}
                      value={email}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Senha
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Digite sua Senha"
                      onChange={handleChange("password")}
                      value={password}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Senha
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirme sua Senha"
                      onChange={handleChange("password2")}
                      value={password2}
                    />
                  </div>
                  <div>
                    {showError()}
                    {redirectUser()}
                  </div>
                  <div className="text-center">
                    <button
                      onClick={clickSubmit}
                      type="submit"
                      className="btn btn-primary "
                    >
                      Cadastrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;
