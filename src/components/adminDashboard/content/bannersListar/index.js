import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { isAuthenticated } from "../../../../auth";
import { getBanners, deleteBanner } from "../../../../core/apiCore";
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../../../styledComponents/globalStyle";
import Modal from "react-modal";

Modal.setAppElement("#root");

const DashboardBannersListar = () => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    banners: [],
    modalId: "",
    error: "",
    redirectToReferrer: false,
  });
  const { banners, modalId, error, redirectToReferrer } = values;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpen2, setIsOpen2] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function closeModal2() {
    setIsOpen2(false);
  }
  function openModal(_id) {
    setIsOpen(true);
    setValues({
      ...values,
      modalId: _id,
    });
  }
  function openModal2(_id) {
    setIsOpen2(true);
    setValues({
      ...values,
      modalId: _id,
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

  const destroy = (_id) => {
    deleteBanner(_id, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        document.location.href = "/admin/banners";
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
  const editarBanner = (s) => {
    document.location.href = `/admin/banner-${s}`;
  };
  const redirectUser = () => {
    if (redirectToReferrer) {
      if ((user && user.role === 1) || user.role === 2) {
        document.location.href = "/admin/banners";
      } else {
        document.location.href = "/";
      }
    }
  };
  const redirectTo = (link) => {
    document.location.href = link;
  };
  const init = () => {
    getBanners().then((data) => {
      if (!data) {
        console.log("A busca por banners não teve nenhum retorno.");
      } else if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, banners: data });
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
          onClick={() => redirectTo("/admin/banner/novo")}
        >
          <FaPlusCircle /> Novo Banner
        </button>
      </div>
      <table className="table table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">
              <strong className="fs-custom">Banner</strong>
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
          {banners.map(({ _id }, i) => {
            return (
              <tr key={i}>
                <th className="td-custom-responsive fs-custom" scope="row">
                  Banner {i + 1}
                </th>
                {user.role === 2 ? (
                  <td className="td-custom-responsive fs-custom">
                    <div className="div-btns-acoes">
                      <button
                        type="button"
                        className="btn btn-warning btn-cancelar ml-1 fs-custom"
                        onClick={() => editarBanner(_id)}
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger btn-cancelar ml-1 fs-custom"
                        onClick={() => openModal2(_id)}
                      >
                        Remover
                      </button>
                    </div>
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
            <h2>{modalId}</h2>
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
              Deletar Banner <span className="span-red">{modalId}</span>?
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
    </div>
  );
};

export default DashboardBannersListar;
