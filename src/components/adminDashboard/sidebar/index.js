import React, { useEffect, useState } from "react";
import {
  FaUserFriends,
  FaAngleDown,
  FaCog,
  FaUserAlt,
  FaRegNewspaper,
} from "react-icons/fa";
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
        <NavItem eventKey="noticias">
          <NavIcon>
            <FaRegNewspaper className="side-dash-ico" />
          </NavIcon>
          <NavText>
            Notícias
            <FaAngleDown />
          </NavText>
          <NavItem eventKey="/noticia/nova">
            <NavText>Nova Notícia</NavText>
          </NavItem>
          <NavItem eventKey="/noticias">
            <NavText>Listar Notícias</NavText>
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
          <NavItem eventKey="/eixo/novo">
            <NavText>Novo Eixo</NavText>
          </NavItem>
          <NavItem eventKey="/eixos">
            <NavText>Listar Eixos</NavText>
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
