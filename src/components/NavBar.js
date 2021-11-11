import React from "react";
import logoNav from "../assets/imgs/logo-topo-home.png";
import dotAtivo2 from "../assets/imgs/Ativo 2.png";
import livroPDF from "../assets/files/bts_prefeitura_ssa_relatorio_FINAL_versao-WEB.pdf";
import { isAuthenticated, signout } from "../auth";

const NavBar = () => {
  const { user, token } = isAuthenticated();
  return (
    <header>
      <nav className="navbar bg-default-blue sticky-top navbar-light bg-white navbar-expand-md">
        <div className="container position-relative">
          <div className="btn-group pull-left" role="group" aria-label="Menu">
            <button
              type="button"
              className="navbar-toggle-always"
              id="navbarDropdownMenuLink"
              data-target="#left"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="icon-bar-always"></span>
              <span className="icon-bar-always"></span>
              <span className="icon-bar-always"></span>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    HOME
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/carta-do-prefeito">
                    CARTA DO PREFEITO
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="apresentacao-plano">
                    APRESENTAÇÃO DO PLANO
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/planos-eixos">
                    EIXOS TEMÁTICOS
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/selos">
                    SELOS
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href={livroPDF}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    LIVRO EM PDF
                  </a>
                </li>
                {user && user._id ? (
                  <li>
                    <a className="dropdown-item" href="/" onClick={signout}>
                      SAIR / DESLOGAR
                    </a>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </button>
          </div>

          <div className="text-center">
            <a href="/">
              <img src={logoNav} className="img-fluid logo-top" alt="" />
            </a>
          </div>
          <ul className="navbar-nav col-2 justify-content-center text-center d-none d-md-grid btns-social">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.youtube.com/user/PrefeituradoSalvador"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://twitter.com/prefsalvador"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.facebook.com/prefsalvador/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.instagram.com/prefsalvador/?hl=pt-br"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>

          <div className="dots dots-r dn-991">
            <img src={dotAtivo2} className="d-block w-100" alt="..." />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
