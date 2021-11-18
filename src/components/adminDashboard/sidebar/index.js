import React, { useEffect, useState } from "react";
import {
  FaUserFriends,
  FaAngleDown,
  FaCog,
  FaUserAlt,
  FaRegNewspaper,
  FaEnvelope,
} from "react-icons/fa";
import { RiSlideshow3Line } from "react-icons/ri";
import { GiPostStamp } from "react-icons/gi";
import { isAuthenticated, signout } from "../../../auth";
import { listUsers } from "../../../core/apiCore";
import { DButton } from "../../../styledComponents/adminDashboardStyle";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const DashboardSidebar = () => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    users: [],
    error: "",
  });
  const { users } = values;
  const init = () => {
    listUsers(user._id, token).then((data) => {
      if (!data) {
        setValues({
          ...values,
          error: "A busca por usuários não retornou nada.",
        });
      } else if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, users: data });
      }
    });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <SideNav
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="usuarios">
        <NavItem eventKey="usuarios">
          <NavIcon>
            <a href="/admin/dashboard">
              <FaUserFriends className="side-dash-ico" />
            </a>
          </NavIcon>
          <NavText>
            <a href="/admin/dashboard">Usuários do Sistema</a>
          </NavText>
        </NavItem>
        <NavItem eventKey="slides">
          <NavIcon>
            <RiSlideshow3Line className="side-dash-ico" />
          </NavIcon>
          <NavText>
            Slides / Banner
            <FaAngleDown />
          </NavText>
          <NavItem eventKey="/admin/slider/novo">
            <NavText>
              <a className="link-sidebar-admin" href="/admin/slider/novo">
                Novo Slide
              </a>
            </NavText>
          </NavItem>
          <NavItem eventKey="/admin/sliders">
            <NavText>
              <a className="link-sidebar-admin" href="/admin/sliders">
                Listar Slides
              </a>
            </NavText>
          </NavItem>
          <NavItem eventKey="/admin/banner/novo">
            <NavText>
              <a className="link-sidebar-admin" href="/admin/banner/novo">
                Novo Banner
              </a>
            </NavText>
          </NavItem>
          <NavItem eventKey="/admin/banners">
            <NavText>
              <a className="link-sidebar-admin" href="/admin/banners">
                Listar Banners
              </a>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="noticias">
          <NavIcon>
            <FaRegNewspaper className="side-dash-ico" />
          </NavIcon>
          <NavText>
            Notícias
            <FaAngleDown />
          </NavText>
          <NavItem eventKey="/admin/noticia/nova">
            <NavText>
              <a className="link-sidebar-admin" href="/admin/noticia/nova">
                Nova Notícia
              </a>
            </NavText>
          </NavItem>
          <NavItem eventKey="/admin/noticias">
            <NavText>
              <a className="link-sidebar-admin" href="/admin/noticias">
                Listar Notícias
              </a>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="cartas">
          <NavIcon>
            <FaEnvelope className="side-dash-ico" />
          </NavIcon>
          <NavText>
            Carta / Apresentação
            <FaAngleDown />
          </NavText>
          <NavItem eventKey="/admin/carta/nova">
            <NavText>
              <a className="link-sidebar-admin" href="/admin/carta/nova">
                Nova
              </a>
            </NavText>
          </NavItem>
          <NavItem eventKey="/admin/cartas">
            <NavText>
              <a className="link-sidebar-admin" href="/admin/cartas">
                Listar
              </a>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="eixos">
          <NavIcon>
            <FaCog className="side-dash-ico" />
          </NavIcon>
          <NavText>
            Eixos
            <FaAngleDown />
          </NavText>
          <NavItem eventKey="/projeto/novo">
            <NavText>
              <a className="link-sidebar-admin" href="/admin/projeto/novo">
                Novo Projeto
              </a>
            </NavText>
          </NavItem>
          <NavItem eventKey="/projetos">
            <NavText>
              <a className="link-sidebar-admin" href="/admin/projetos">
                Listar Projetos
              </a>
            </NavText>
          </NavItem>
          <NavItem eventKey="/eixo/novo">
            <NavText>
              <a className="link-sidebar-admin" href="/admin/eixo/novo">
                Eixo Novo
              </a>
            </NavText>
          </NavItem>
          <NavItem eventKey="/eixos">
            <NavText>
              <a className="link-sidebar-admin" href="/admin/eixos">
                Listar Eixos
              </a>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="selos">
          <NavIcon>
            <GiPostStamp className="side-dash-ico" />
          </NavIcon>
          <NavText>
            Selos
            <FaAngleDown />
          </NavText>
          <NavItem eventKey="/admin/selo/novo">
            <NavText>
              <a className="link-sidebar-admin" href="/admin/selo/novo">
                Novo Selo
              </a>
            </NavText>
          </NavItem>
          <NavItem eventKey="/admin/selos">
            <NavText>
              <a className="link-sidebar-admin" href="/admin/selos">
                Listar Selos
              </a>
            </NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="perfil">
          <NavIcon>
            <FaUserAlt className="side-dash-ico" />
          </NavIcon>
          <NavText>
            Perfil
            <FaAngleDown />
          </NavText>
          <NavItem eventKey="/admin/dashboard/perfil">
            <NavText>Ver Perfil</NavText>
          </NavItem>
          <NavItem eventKey="/sair">
            <NavText>
              <DButton className="button-sair" onClick={signout}>
                Sair
              </DButton>
            </NavText>
          </NavItem>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default DashboardSidebar;
