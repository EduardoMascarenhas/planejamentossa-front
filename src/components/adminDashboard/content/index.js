import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { isAuthenticated, signup } from "../../../auth";
import { listUsers, updateUserRole, deleteUser } from "../../../core/apiCore";
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalMeio,
} from "../../../styledComponents/globalStyle";
import Modal from "react-modal";

Modal.setAppElement("#root");

const DashboardContent = () => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    users: [],
    name: "",
    email: "",
    password: "",
    password2: "",
    modalName: "",
    modalEmail: "",
    modalRole: "",
    modalId: "",
    error: "",
    redirectToReferrer: false,
  });
  const {
    users,
    name,
    email,
    password,
    password2,
    modalName,
    modalEmail,
    modalRole,
    modalId,
    error,
    redirectToReferrer,
  } = values;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  const [modalIsOpen3, setIsOpen3] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function closeModal2() {
    setIsOpen2(false);
  }
  function closeModal3() {
    setIsOpen3(false);
  }
  function openModal(name, email, role, _id) {
    setIsOpen(true);
    setValues({
      ...values,
      modalName: name,
      modalEmail: email,
      modalRole: role,
      modalId: _id,
    });
  }
  function openModal2(name, email, role, _id) {
    setIsOpen2(true);
    setValues({
      ...values,
      modalName: name,
      modalEmail: email,
      modalRole: role,
      modalId: _id,
    });
  }
  function openModal3() {
    setIsOpen3(true);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const changeRole = (event) => {
    const value = event.target.value;
    setValues({ ...values, modalRole: parseInt(value) });
  };
  const submmitRole = (e) => {
    e.preventDefault();

    const userRole = { role: modalRole, _id: modalId, name: modalName };
    updateUserRole(user._id, token, userRole).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        document.location.href = "/admin/dashboard";
      }
    });
  };
  const destroy = (_id) => {
    deleteUser(_id, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        document.location.href = "/admin/dashboard";
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
  const redirectUser = () => {
    if (redirectToReferrer) {
      if ((user && user.role === 1) || user.role === 2) {
        document.location.href = "/admin/dashboard";
      } else {
        document.location.href = "/";
      }
    }
  };
  const init = () => {
    listUsers(user._id, token).then((data) => {
      if (!data) {
        console.log("A busca de usuários não teve nenhum retorno.");
      } else if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, users: data });
      }
    });
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
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="dashboard-content">
      <div>
        <button
          type="button"
          className="btn btn-info btn-editar mr-1 fs-custom"
          onClick={() => openModal3()}
        >
          <FaPlusCircle /> Novo Usuário
        </button>
      </div>
      <table className="table table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">
              <strong className="fs-custom">Nome</strong>
            </th>
            <th className="dn-991" scope="col">
              <strong className="fs-custom">Email</strong>
            </th>
            <th scope="col">
              <strong className="fs-custom">Função</strong>
            </th>
            {user.role === 2 ? (
              <th scope="col">
                <strong className="fs-custom">Ações</strong>
              </th>
            ) : (
              ""
            )}
          </tr>
        </thead>
        <tbody>
          {users.map(({ name, email, role, _id }, i) => {
            return (
              <tr key={i}>
                <th className="td-custom-responsive fs-custom" scope="row">
                  {i + 1}
                </th>
                <td className="td-custom-responsive fs-custom">{name}</td>
                <td className="td-custom-responsive fs-custom dn-991">
                  {email}
                </td>
                <td className="td-custom-responsive fs-custom">
                  {role === 0
                    ? "Usuário Comum"
                    : role === 1
                    ? "Usuário Admin"
                    : role === 2
                    ? "Admin Geral"
                    : ""}
                </td>
                {user.role === 2 ? (
                  <td className="td-custom-responsive fs-custom">
                    {user._id === _id ? (
                      " "
                    ) : (
                      <div className="div-btns-acoes">
                        <button
                          type="button"
                          className="btn btn-warning btn-editar mr-1 fs-custom"
                          onClick={() => openModal(name, email, role, _id)}
                        >
                          Função
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-cancelar ml-1 fs-custom"
                          onClick={() => openModal2(name, email, role, _id)}
                        >
                          Remover
                        </button>
                      </div>
                    )}
                  </td>
                ) : (
                  ""
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal Dinâmica"
      >
        <ModalBody>
          <ModalHeader>
            <h2>{modalName}</h2>
            <p>{modalEmail}</p>
          </ModalHeader>

          <ModalMeio>
            <div className="col-4">
              <p>Usuário Comum</p>
              <input
                type="radio"
                onChange={changeRole}
                name="radioRole"
                checked={modalRole === 0 ? true : false}
                value={0}
              />
            </div>
            <div className="col-4">
              <p>Administrador Comum</p>
              <input
                type="radio"
                onChange={changeRole}
                name="radioRole"
                checked={modalRole === 1 ? true : false}
                value={1}
              />
            </div>
            <div className="col-4">
              <p>Administrador Geral</p>
              <input
                type="radio"
                onChange={changeRole}
                name="radioRole"
                checked={modalRole === 2 ? true : false}
                value={2}
              />
            </div>
          </ModalMeio>
          <ModalFooter className="w-f-a">
            <div className="w-f-a">
              <button
                type="button"
                className="btn btn-success btn-salvar-modal"
                onClick={submmitRole}
              >
                Salvar
              </button>
            </div>
            <div className="w-f-a">
              <button
                type="button"
                className="btn btn-danger btn-cancelar-modal"
                onClick={closeModal}
              >
                Cancelar
              </button>
            </div>
          </ModalFooter>
        </ModalBody>
      </Modal>
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="Modal Dinâmica"
      >
        <ModalBody>
          <ModalHeader>
            <h2>
              Deletar Usuário <span className="span-red">{modalName}</span>?
            </h2>
          </ModalHeader>
          <ModalFooter className="w-f-a">
            <div className="w-f-a">
              <button
                type="button"
                className="btn btn-success btn-salvar-modal"
                onClick={() => destroy(modalId)}
              >
                Confirmar
              </button>
            </div>
            <div className="w-f-a">
              <button
                type="button"
                className="btn btn-danger btn-cancelar-modal"
                onClick={closeModal2}
              >
                Cancelar
              </button>
            </div>
          </ModalFooter>
        </ModalBody>
      </Modal>
      <Modal
        isOpen={modalIsOpen3}
        onRequestClose={closeModal3}
        style={customStyles}
        contentLabel="Modal Dinâmica"
      >
        <ModalBody>
          <ModalHeader>
            <h2>Criar Novo Usuário</h2>
          </ModalHeader>
          <ModalMeio>
            <form className="pt-3 form-modal">
              <div className="mb-3 form-cadastro-modal">
                <div className="position-relative">
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
                <div className="position-relative">
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
              </div>
              <div className="mb-3 form-cadastro-modal">
                <div className="position-relative">
                  <label htmlFor="exampleInputPassword1" className="form-label">
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
                <div className="position-relative">
                  <label htmlFor="exampleInputPassword1" className="form-label">
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
              </div>
              <div>
                {showError()}
                {redirectUser()}
              </div>
              <div className="text-center form-cadastro-modal">
                <div className="w-f-a">
                  <button
                    onClick={clickSubmit}
                    type="submit"
                    className="btn btn-primary btn-salvar-modal"
                  >
                    Cadastrar
                  </button>
                </div>
                <div className="w-f-a">
                  <button
                    type="button"
                    className="btn btn-danger btn-cancelar-modal"
                    onClick={closeModal3}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          </ModalMeio>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DashboardContent;
