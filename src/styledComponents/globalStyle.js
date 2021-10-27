import styled, { createGlobalStyle } from "styled-components";
import bg1 from "../assets/imgs/ValterBarraGeral_Azulada.jpg";

const GlobalStyle = createGlobalStyle`
th, td {
    vertical-align: middle;
  }
.bg-home-center {
  background-size: cover;
  height: 100%;
  min-height: 75vh;
  background-position: center;
  background-image: url(${bg1});
}
.bg-form-center {
  position: relative;
  min-height: 100vh;
}
.bg-form-center::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background-image: url(${bg1});
  filter: opacity(0.42);
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-form-center-inside {
  position: relative;
  min-height: inherit;
}
.form-to-center {
    max-width: 800px;
    margin: auto;
    min-height: inherit;
    display: flex;
display: -webkit-flex;
    flex-direction: column;
-webkit-flex-direction: column;
    justify-content: center;
}
.form-estiloso{
    background-color: #fff;
    padding: 3vw;
    margin: 0 15px 0 15px;
}
.button-voltar {
  -webkit-appearance: none;
  background: -webkit-gradient(to right, #9e4b96 0%, #f756b4 30%, #ed028c 100%);
  background: linear-gradient(to right, #9e4b96 0%, #f756b4 30%, #ed028c 100%);
  background-size: 500%;
  border: none;
  border-radius: 5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  color: #fff;
  cursor: pointer;
  font: 1.5em Raleway, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0.05em;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 5px 20px 5px 20px;
  max-height: 42px;
  min-width: 140px;
  max-width: 140px;
  position: relative;
}

.button-voltar:hover {
  animation-name: gradientVoltar;
  -webkit-animation-name: gradientVoltar;
  animation-duration: 2s;
  -webkit-animation-duration: s;
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
}
.button-voltar a:hover {
  color: #fff;
}
@keyframes gradientVoltar {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100%;
  }
}
.btn-editar, .btn-cancelar{
  color: #fff;
  margin: 5px
}
.btn-editar:focus, .btn-editar:hover, .btn-editar:active, .btn-cancelar:focus, .btn-cancelar:hover, .btn-cancelar:active{
  box-shadow: none;
  color: #fff;
}
.button-sair{
  width: -webkit-fill-available;
  text-align: initial;
}
.w-f-a{
  width: -webkit-fill-available;
}
.btn-salvar-modal, .btn-cancelar-modal{
  width: -webkit-fill-available;
}
.ReactModal__Content.ReactModal__Content--after-open{
    max-width: calc(85vw - 65px);
    margin-left: 35px;
    overflow: hidden!important;
    border-radius: 10px !important;
}
.span-red{
  color: red;
}
.form-cadastro-modal {
  display: flex;
display: -webkit-flex;
}
.form-cadastro-modal input, .form-cadastro-modal button {
  margin: 10px;
  width: -webkit-fill-available;
}
.form-cadastro-modal label{
  position: absolute;
  top: -15px;
  left: 10px
}
.fs-custom{
  font-size: 1rem;
}
.ql-editor{
  height: 25vh!important;
}
.cursor-pointer-custom{
  cursor: pointer;
}
.cursor-pointer-custom:hover {
  color: #00306e!important;
}
.link-sidebar-admin{
  color: #000;
}
.form-dashboard{
  max-width: calc(85vw - 65px);
  margin: auto;
}
.input-500{
  max-width: 500px;
  margin: 25px auto;
}
.form-nova-noticia input{
  margin: 15px 5px 15px 5px;
}
.form-nova-noticia thumb{
  margin: auto;
}
.m-a{
  margin: auto;
}
.form-nova-noticia-thumb{
  align-items: center;
}
.img-thumb-editar img{
  padding: 10px;
  max-width: 515px
}
.body-noticia{
  word-break: break-word;
}
.body-noticia img {
  max-height: 350px;
  display: block;
  margin: 15px auto;
}
.botao-eixo-interna{
  cursor: pointer;
}
#conteudo-corpo p br {
    display: none;
}
#conteudo-corpo h5 {
    color: #fcb831;
}
/*media queries*/
@media screen and (max-width: 991px) {
  .dn-991 {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .div-btns-acoes{
    text-align: center
  }
  .btn-editar, .btn-cancelar {
    width: 18vw;
    font-size: 2vw;
  }
  .ReactModal__Content.ReactModal__Content--after-open{
    max-width: calc(95vw - 65px);
    margin-left: 32px;
  }
}
@media screen and (max-width: 560px){
  .form-modal{
    width: 100%
  }
  .form-cadastro-modal{
    display: inline;
  }
  .form-cadastro-modal input, .form-cadastro-modal button {
    margin: 15px;
  }
  .form-cadastro-modal label{
    top: -15px;
    left: 15px;
    font-size: 2vw;
  }
  .ReactModal__Content.ReactModal__Content--after-open{
    padding: 5px!important;
  }
}
`;
export const GLink = styled.a`
  color: blue;
`;
export const ModalBody = styled.div`
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  -webkit-flex-direction: column;
  align-items: center;
`;

export const ModalHeader = styled.div`
  min-width: 300px;
  text-align: center;
  & p {
    margin-bottom: 15px;
    font-size: 1.5vw;
  }
  & h2 {
    font-size: 2vw;
  }
  @media screen and (max-width: 991px) {
    & p {
      font-size: 3vw;
    }
    & h2 {
      font-size: 3.5vw;
    }
  }
`;
export const ModalMeio = styled.div`
  min-width: -webkit-fill-available;
  text-align: center;
  position: relative;
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  & p {
    width: auto;
    font-size: 1.5vw;
    word-break: break-word;
    margin: auto;
  }
  @media screen and (max-width: 991px) {
    & p {
      font-size: 3vw;
    }
  }
`;
export const ModalFooter = styled.div`
  min-width: -webkit-fill-available;
  text-align: center;
  position: relative;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  & button {
    margin: 20px;
    font-size: 1.5vw;
  }
  @media screen and (max-width: 991px) {
    & button {
      font-size: 3vw;
    }
  }
  @media screen and (max-width: 600px) {
    & button {
      margin: 5px;
    }
  }
`;
export const DivBorderDynamic = styled.div.attrs((props) => props)`
  &::after {
    background: ${(props) => props.color}!important;
  }
`;
export default GlobalStyle;
