import React, { useEffect, useState } from "react";
import { isAuthenticated } from "../../../../auth";
import { criarProjeto, getEixos, getSelos } from "../../../../core/apiCore";
import Multiselect from "multiselect-react-dropdown";
import { Select } from "antd";
import ReactQuill from "react-quill";
import { QuillModules, QuillFormats } from "../../../../helpers/quill";
import {} from "../../../../../node_modules/react-quill/dist/quill.snow.css";

const ProjetoNovo = () => {
  const { user, token } = isAuthenticated();
  const [eixos, setEixos] = useState([]);
  const [selos2, setSelos2] = useState([]);
  const [body, setBody] = useState("");
  const [values, setValues] = useState({
    name: "",
    subTitle: "",
    selos: [],
    selectedValues: [],
    eixo: "",
    formData: "",
  });
  const [error, setError] = useState("");
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const { Option } = Select;

  const { name, subTitle, eixo, selos, selectedValues, formData } = values;

  const handleChange = (name) => (event) => {
    const value = name === "thumb" ? event.target.files[0] : event.target.value;
    setValues({ ...values, [name]: value });
    formData.set(name, value);
  };
  const handleMultiSelect = (name) => (event) => {
    let arraySelos = [];
    event.map((c) => {
      arraySelos.push(c._id);
    });
    setValues({ ...values, [name]: arraySelos });
    formData.set("selos", arraySelos);
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
    criarProjeto(user._id, token, formData).then((data) => {
      if (data.error || !data) {
        setError(data.error);
      } else {
        setError("");
        setRedirectToReferrer(true);
      }
    });
  };
  const handleBody = (e) => {
    // console.log(e);
    setBody(e);
    formData.set("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("noticia", JSON.stringify(e));
    }
  };
  function handleChangeEixos(value) {
    setValues({ ...values, eixo: value });
    formData.set("eixo", value);
  }
  function handleChangeSelos(value) {
    setValues({ ...values, selo: value });
    formData.set("selo", value);
  }
  const init = () => {
    setValues({ ...values, formData: new FormData() });
  };
  const initEixos = () => {
    getEixos().then((data) => {
      if (data.error || !data) {
        console.log("Erro ao carregar os eixos!");
      } else {
        setEixos(data);
      }
    });
  };
  const initSelos = () => {
    getSelos().then((data) => {
      if (data.error || !data) {
        console.log("Erro ao carregar os selos!");
      } else {
        setSelos2(data);
      }
    });
  };
  useEffect(() => {
    init();
    initEixos();
    initSelos();
  }, []);
  return (
    <div className="dashboard-content">
      {showError()}
      {redirectUser()}
      <form className="form-dashboard p-3" onSubmit={clickSubmit}>
        <div className="text-center">
          <h1>Criar novo Projeto</h1>
        </div>
        <div className="col-12 d-flex">
          <div className="col-6 p-2">
            <span>Título do Projeto</span>
            <input
              type="text"
              className="form-control"
              placeholder="Título do Projeto"
              onChange={handleChange("name")}
              value={name}
              autoFocus
              required
            />
          </div>

          <div className="col-6 p-2">
            <span>Subtítulo do Projeto</span>
            <input
              type="text"
              className="form-control"
              placeholder="Sub Título do Projeto"
              onChange={handleChange("subTitle")}
              value={subTitle}
            />
          </div>
        </div>
        <div className="col-12 d-flex">
          <div className="col-6 p-2">
            <Select
              showSearch
              defaultValue="Eixos"
              onChange={handleChangeEixos}
              className="select-custom"
            >
              {eixos &&
                eixos.map((e, i) => {
                  return (
                    <Option key={i} value={e._id}>
                      {e.title}
                      <hr className="m-0" />
                    </Option>
                  );
                })}
            </Select>
          </div>
          <div className="col-6 p-2">
            {selos2 && selos2.length > 0 ? (
              <Multiselect
                options={selos2}
                showCheckbox
                selectedValues={selectedValues}
                onSelect={handleMultiSelect("selos")}
                onRemove={handleMultiSelect("selos")}
                displayValue="title"
                placeholder="Selecionar Selo"
                emptyRecordMsg="Nenhuma Selo foi encontrado!"
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div>
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            value={body}
            placeholder="Corpo do Projeto..."
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
            Criar novo Projeto
          </button>
        </h3>
      </form>
    </div>
  );
};

export default ProjetoNovo;
