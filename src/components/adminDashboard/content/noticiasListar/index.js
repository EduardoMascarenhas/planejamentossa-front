import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { isAuthenticated, signup } from "../../../../auth";
import { getBlogs, deleteBlog } from "../../../../core/apiCore";
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalMeio,
} from "../../../../styledComponents/globalStyle";
import Modal from "react-modal";

Modal.setAppElement("#root");

const DashboardNoticiasListar = () => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    noticias: [],
    modalName: "",
    modalSlug: "",
    error: "",
    redirectToReferrer: false,
  });
  const {
    noticias,
    modalName,
    modalSlug,
    error,
    redirectToReferrer,
  } = values;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function closeModal2() {
    setIsOpen2(false);
  }
  function openModal(name, _id) {
    setIsOpen(true);
    setValues({
      ...values,
      modalName: name,
      modalId: _id,
    });
  }
  function openModal2(name, slug) {
    setIsOpen2(true);
    setValues({
      ...values,
      modalName: name,
      modalSlug: slug,
    });
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

  const destroy = (slug) => {
    deleteBlog(slug, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        document.location.href = "/admin/noticias";
      }
    });
    
  };
  const showError = () => {
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
      role="alert"
    >
      {error}
    </div>;
  };
  const editarNoticia = (s) => {
    document.location.href = `/admin/noticia-${s}`;
  };
  const redirectUser = () => {
    if (redirectToReferrer) {
      if ((user && user.role === 1) || user.role === 2) {
        document.location.href = "/admin/noticias";
      } else {
        document.location.href = "/";
      }
    }
  };
  const init = () => {

    getBlogs().then((data) => {
      if (!data) {
        console.log("A busca por notícias não teve nenhum retorno.");
      } else if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, noticias: data });
      }
    });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="dashboard-content">
      <table className="table table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">
              <strong className="fs-custom">Nome</strong>
            </th>
            <th scope="col">
              <strong className="fs-custom">Slug</strong>
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
          {noticias.map(({ title, slug, _id }, i) => {
            return (
              <tr key={i}>
                <th className="td-custom-responsive fs-custom" scope="row">
                  {i + 1}
                </th>
                <td className="td-custom-responsive fs-custom">{title}</td>
                <td className="td-custom-responsive fs-custom">{slug}</td>
                {user.role === 2 ? (
                  <td className="td-custom-responsive fs-custom">
                    {user._id === _id ? (
                      " "
                    ) : (
                      <div className="div-btns-acoes">
                        <button
                          type="button"
                          className="btn btn-warning btn-cancelar ml-1 fs-custom"
                          onClick={() => editarNoticia(slug)}
                        >
                          Editar
                        </button>
                        <button
                          type="button"
                          className="btn btn-danger btn-cancelar ml-1 fs-custom"
                          onClick={() => openModal2(title, slug)}
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
          </ModalHeader>

          <ModalFooter className="w-f-a">
            <div className="w-f-a">
              <button
                type="button"
                className="btn btn-success btn-salvar-modal"
                onClick={closeModal}
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
              Deletar Notícia <span className="span-red">{modalName}</span>?
            </h2>
          </ModalHeader>
          <ModalFooter className="w-f-a">
            <div className="w-f-a">
              <button
                type="button"
                className="btn btn-success btn-salvar-modal"
                onClick={() => destroy(modalSlug)}
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
    </div>
  );
};

export default DashboardNoticiasListar;
