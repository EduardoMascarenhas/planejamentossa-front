import React, { useState, useEffect } from "react";
import { API } from "../../../../config";
import { isAuthenticated } from "../../../../auth";
import { getSlider, updateSlider } from "../../../../core/apiCore";

const SliderEditar = ({ id }) => {
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
    const value = name === "image" ? event.target.files[0] : event.target.value;
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
        document.location.href = "/admin/sliders";
      } else {
        document.location.href = "/";
      }
    }
  };
  const clickSubmit = (e) => {
    e.preventDefault();
    updateSlider(id, user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: true, errorMsg: data.error });
      } else {
        setValues({ ...values, error: false, redirectToReferrer: true });
        document.location.href = "/admin/sliders";
      }
    });
  };
  const init = () => {
    setValues({
      ...values,
      formData: new FormData(),
    });
  };
  const initSlider = (id) => {
    if (id) {
      getSlider(id).then((data) => {
        if (!data || data.error) {
          console.log("Erro ao carregar o Slider");
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
      initSlider(id);
    }
  }, [id]);

  return (
    <div className="dashboard-content">
      {redirectUser()}
      <form className="form-dashboard p-3" onSubmit={clickSubmit}>
        <div className="text-center">
          <h1>Editar Slide</h1>
        </div>
        <div className="col-12 d-flex">
          <div className="col-6 p-2 m-a">
            <span>Link do Slide</span>
            <input
              type="text"
              className="form-control"
              placeholder="Link do Slider"
              onChange={handleChange("link")}
              value={link}
            />
          </div>
        </div>
        <div
          className="col-12 d-flex form-novo-noticia-thumb"
          style={{ flexWrap: "wrap", justifyContent: "center" }}
        >
          <div className="img-thumb-editar">
            <img
              className="update-blog-img"
              src={`${API}/slider/image/${id}`}
              alt=""
            />
          </div>
          <div className="col text-center p-3">
            <h4>Imagem</h4>
            <br />
            <span>Tamanho: 1000x470 px </span>
            <br />
            <input
              onChange={handleChange("image")}
              type="file"
              name="image"
              accept="image/*"
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
            Editar Slide
          </button>
        </h3>
      </form>
    </div>
  );
};

export default SliderEditar;
