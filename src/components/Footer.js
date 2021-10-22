import React from "react";

const Footer = () => {
  return (
    <section className="pb-3 pt-3 mt-0 bg-default-blue">
      <div className="container">
        <div className="row f-flex justify-content-between">
          <div className="text-center my-1 btn-container-footer">
            <div className="mb-1 mr-3 align-self-center pt-0 d-inline-block">
              <a
                href="/"
                role="button"
                className="p-2 m-2 c-color-secondary-light"
              >
                <i className="fab fa-youtube" aria-hidden="true"></i>
              </a>
              <a
                href="/"
                role="button"
                className="p-2 m-2 c-color-secondary-light"
              >
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a
                href="/"
                role="button"
                className="p-2 m-2 c-color-secondary-light"
              >
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a
                href="/"
                role="button"
                className="p-2 m-2 c-color-secondary-light"
              >
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
