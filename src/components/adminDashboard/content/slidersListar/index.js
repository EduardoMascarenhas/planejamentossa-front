import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { isAuthenticated, signup } from "../../../../auth";
import { getSliders, deleteSlider } from "../../../../core/apiCore";
import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalMeio,
} from "../../../../styledComponents/globalStyle";
import Modal from "react-modal";

Modal.setAppElement("#root");

const DashboardSlidersListar = () => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    sliders: [],
    modalId: "",
    error: "",
    redirectToReferrer: false,
  });
  const { sliders, modalId, error, redirectToReferrer } = values;
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
    deleteSlider(_id, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        document.location.href = "/admin/sliders";
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
  const editarSlider = (s) => {
    document.location.href = `/admin/slider-${s}`;
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
  const redirectTo = (link) => {
    document.location.href = link;
  };
  const init = () => {
    getSliders().then((data) => {
      if (!data) {
        console.log("A busca por slides não teve nenhum retorno.");
      } else if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, sliders: data });
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
          onClick={() => redirectTo("/admin/slider/novo")}
        >
          <FaPlusCircle /> Novo Slide
        </button>
      </div>
      <table className="table table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">
              <strong className="fs-custom">Slide</strong>
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
          {sliders.map(({ _id }, i) => {
            return (
              <tr key={i}>
                <th className="td-custom-responsive fs-custom" scope="row">
                  Slide {i + 1}
                </th>
                {user.role === 2 ? (
                  <td className="td-custom-responsive fs-custom">
                    <div className="div-btns-acoes">
                      <button
                        type="button"
                        className="btn btn-warning btn-cancelar ml-1 fs-custom"
                        onClick={() => editarSlider(_id)}
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
              Deletar Slide <span className="span-red">{modalId}</span>?
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

export default DashboardSlidersListar;
