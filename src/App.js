import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
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
import AdminDashboardCategorias from "./pages/adminCategorias";
import AdminCategoriaNova from "./pages/adminCategoriaNova";
import AdminNoticiaNova from "./pages/adminNoticiaNova";
import AdminNoticias from "./pages/adminNoticias";
import AdminNoticiaEditar from "./pages/adminNoticiaEditar";
import AdminDashboardProjetos from "./pages/adminProjetos";
import AdminProjetoNovo from "./pages/adminProjetoNovo";
import AdminProjetoEditar from "./pages/adminProjetoEditar";
import AdminEixos from "./pages/adminEixos";
import AdminEixoNovo from "./pages/adminEixoNovo";
import AdminEixoEditar from "./pages/adminEixoEditar";
import CartaPrefeito from "./pages/cartaPrefeito";
import AdminCartaNova from "./pages/adminCartaNova";
import AdminCartas from "./pages/adminCartas";
import AdminCartaEditar from "./pages/adminCartaEditar";
import EmDesenvolvimento from "./pages/emDesenvolvimento";
import AdminSlider from "./pages/adminSlider";
import AdminSliders from "./pages/adminSliders";
import AdminSliderEditar from "./pages/adminSliderEditar";
import AdminBanner from "./pages/adminBanner";
import AdminBanners from "./pages/adminBanners";
import AdminBannerEditar from "./pages/adminBannerEditar";
import ApresentacaoPlano from "./pages/apresentacaoPlano";
import AdminSelo from "./pages/adminSelo";
import AdminSeloEditar from "./pages/adminSeloEditar";
import AdminSelos from "./pages/adminSelos";
import Selos from "./pages/selos";
import Selo from "./pages/selo";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        {/**GLOBAL ROUTES */}
        <Route path="/" exact component={Home} />
        <Route path="/noticia-:slug" exact component={Noticia} />
        <Route path="/carta-do-prefeito" exact component={CartaPrefeito} />
        <Route path="/apresentacao-plano" exact component={ApresentacaoPlano} />
        <Route path="/planos-eixos" exact component={PlanosEixos} />
        <Route path="/projeto-:slug" exact component={Projeto} />
        <Route path="/projeto-:slug/:selo" exact component={Projeto} />
        <Route path="/selos" exact component={Selos} />
        <Route path="/selo-:seloId" exact component={Selo} />
        <Route
          path="/planos-eixos-:slug"
          exact
          component={PlanosEixosInterna}
        />
        <Route
          path="/planos-eixos-:slug/:projetos"
          exact
          component={PlanosEixosInterna}
        />
        <Route path="/painel" exact component={Entrar} />

        {/**ADMIN ROUTES */}
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/admin/selo/novo" component={AdminSelo} />
        <AdminRoute exact path="/admin/selos" component={AdminSelos} />
        <AdminRoute
          exact
          path="/admin/selo-:seloId"
          component={AdminSeloEditar}
        />

        <AdminRoute exact path="/admin/banner/novo" component={AdminBanner} />
        <AdminRoute exact path="/admin/banners" component={AdminBanners} />
        <AdminRoute
          exact
          path="/admin/banner-:bannerId"
          component={AdminBannerEditar}
        />
        <AdminRoute exact path="/admin/slider/novo" component={AdminSlider} />
        <AdminRoute exact path="/admin/sliders" component={AdminSliders} />
        <AdminRoute
          exact
          path="/admin/slider-:sliderId"
          component={AdminSliderEditar}
        />
        <AdminRoute
          exact
          path="/admin/projeto/novo"
          component={AdminProjetoNovo}
        />
        <AdminRoute
          exact
          path="/admin/projetos"
          component={AdminDashboardProjetos}
        />
        <AdminRoute
          exact
          path="/admin/projeto-:slug"
          component={AdminProjetoEditar}
        />
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
        <AdminRoute
          exact
          path="/admin/noticia/nova"
          component={AdminNoticiaNova}
        />
        <AdminRoute exact path="/admin/noticias" component={AdminNoticias} />
        <AdminRoute
          exact
          path="/admin/noticia-:slug"
          component={AdminNoticiaEditar}
        />

        <AdminRoute exact path="/admin/carta/nova" component={AdminCartaNova} />
        <AdminRoute exact path="/admin/cartas" component={AdminCartas} />
        <AdminRoute
          exact
          path="/admin/carta-:slug"
          component={AdminCartaEditar}
        />

        <AdminRoute exact path="/admin/eixo/novo" component={AdminEixoNovo} />
        <AdminRoute exact path="/admin/eixos" component={AdminEixos} />
        <AdminRoute
          exact
          path="/admin/eixo-:slug"
          component={AdminEixoEditar}
        />
        {/**404 ROUTE */}
        <Route exact component={Erro404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
