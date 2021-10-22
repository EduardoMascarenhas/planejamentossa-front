import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styledComponents/globalStyle";
import Entrar from "./pages/entrar";
import Erro404 from "./pages/erro404";
import Home from "./pages/home";
import Noticia from "./pages/noticia";
import PlanosEixos from "./pages/planosEixos";
import PlanosEixosInterna from "./pages/planosEixosInterna";
import Projeto from "./pages/projeto";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./pages/adminDashboard";
import Cadastrar from "./pages/cadastrar";
import AdminDashboardCategorias from "./pages/adminDashboardCategorias";
import AdminCategoriaNova from "./pages/adminCategoriaNova";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        {/**GLOBAL ROUTES */}
        <Route path="/" exact component={Home} />
        <Route path="/noticia" exact component={Noticia} />
        <Route path="/planos-eixos" exact component={PlanosEixos} />
        <Route path="/projeto" exact component={Projeto} />
        <Route
          path="/planos-eixos-interna"
          exact
          component={PlanosEixosInterna}
        />
        <Route path="/painel" exact component={Entrar} />

        {/**ADMIN ROUTES */}
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute
          exact
          path="/admin/categoria/nova"
          component={AdminCategoriaNova}
        />
        <AdminRoute
          exact
          path="/admin/categorias"
          component={AdminDashboardCategorias}
        />
        {/**404 ROUTE */}
        <Route exact component={Erro404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
