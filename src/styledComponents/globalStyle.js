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
.w728-h90{
  max-width: 728px;
  max-height: 90px;
  overflow: hidden;
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
#conteudo-button {
  padding-bottom: 10px;
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
.cursor-pointer{
  cursor: pointer;
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
#conteudo-corpo-2 p br {
  display: none;
}
#conteudo-corpo-2 p img {
  width: 100%;
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
.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  border-left: 2px solid #376cb1 !important;
  border-top: none!important;
  border-right: none!important;
  border-bottom: none!important;
}
.ant-select {
    width: -webkit-fill-available;
    margin-top: -2px;
}
.body-noticia{
  word-break: break-word;
  line-height: 2.3rem;
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
    color: #df6825;
    padding-bottom: 10px;
    font-weight: 800;
}
grid-container {
display: grid;
grid-template-columns: repeat(2, 31%);
grid-auto-rows: 90px;
grid-gap: 5px;
margin-right: 0.5rem!important;
margin-left: 0.5rem!important;
justify-content: space-around;
}

[short] {
grid-row: span 1;
align-items: flex-start;
}

[tall] {
grid-row: span 3;
align-items: baseline;
position: relative;
}


grid-item {
display: flex;
align-items: center;
}

grid-container .space-thumb{
    width: 70px;    
    height: 70px;
    margin-right: 0.5rem;
}

grid-container .space-thumb .thumbnail {
    width: 100%;
    height: 100%;
}

grid-container .name{
    font-size: .6rem !important;
}
@media (max-width: 991px){
  grid-container #brd-image img {
  width: 55vw;
  margin-top:0;
}
}

@media (max-width: 480px){
grid-container #brd-image  {
padding-left: 0px !important;
}
grid-container #brd-image img {
width: 60vw;
margin-top:0;
}
grid-container .name{
font-size: .5rem !important;
}
}

@media (max-width: 767px) {
#contact-list .list-title {
        
        padding-right: 0 !important;
    }
}
.space-thumb{
  cursor: pointer;
}
.m-0{
  margin: 0%;
}
.bg-img-custom-2{
  background-image: url('./assets/img/bg-uma-cidade-cada-vez-melhor.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-img-custom-2 .noticia-topo h1{
  color: #eeae20;
}
.bg-img-custom-2 .noticia-topo p{
  color: #eeae20;
}
.button-apresentacao-plano {
  background: linear-gradient(to right,#eeae20 0%,#eeae20 30%,#9b7115 100%)!important;
}
.bg-img-custom{
  background-image: url('./assets/img/bg-azul-carta.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-img-custom .noticia-topo h1{
  color: #e380a9;
}
.bg-img-custom .noticia-topo p{
  color: #e380a9;
}
.body-noticia-prefeito h3{
  color: #fff!important;
  font-weight: 300!important;
  font-size: 1.3rem;
}
.body-noticia-prefeito h2 {
  color: #fff;
}
.body-noticia-prefeito p {
  color: #fff;
  font-size: 1.2rem;
}
.body-noticia-prefeito p br {
  display: none;
}
.img-com-borda{
  box-shadow: 8px 9px 0px 1px #ce4995;
}
.img-com-borda-2{
  box-shadow: 8px 9px 0px 1px #eeae20;
}
.img-carta-prefeito {
    direction: rtl;
}
.img-carta-prefeito img{
  max-width: 80%;
}

.area-carta-prefeito {
  max-height: 100vh!important;
}
.ant-select-dropdown {
  border-bottom-right-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top: 4px solid #ed028c;
  text-align: center;
}

.custom-scroll::-webkit-scrollbar-track {
  border: 5px solid transparent;
  background-color: transparent;
}

.custom-scroll::-webkit-scrollbar {
    width: 6px;
    background-color: transparent;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #EC008B;
  border-radius: 10px;
}

.topo-selos{
  direction: ltr;
  display: flex;
  justify-content: space-between;
  padding-left: 1rem;
  margin-bottom: 15px;
}
.topo-selos h3 {
  color: #ed028c;
}
.selos-inside{
  max-height: 500px;
}

.bg-selos {
    background: #eaefff;
}
.bg-selos .imagem-selos{
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
  
.bg-selos .imagem-selos img {
  max-width: 65%;
}
.bg-selos .scrolling-area{
  max-height: initial !important;
  height:100vh;
}

.bg-selos .list-group-item{ display:grid; align-items: center;grid-template-columns: 1fr 1fr;  padding-bottom: 5rem !important;
}

   

@media (max-width: 680px) {
  .bg-selos .topo-selos {
    padding-left: 0;
  }
  .bg-selos .list-group-item{
      display: flex !important;
      display: -webkit-flex !important;
      flex-direction: column !important;;
      padding-left: 0 !important;
      padding-right: 0 !important;
  }
  .bg-selos .imagem-selos  {
      padding-top: 2rem;
      
  }
  .bg-selos .imagem-selos img {
      max-width: 100%; 
  }
       
}
/*media queries*/
@media screen and (max-width: 991px) {
  .dn-991 {
    display: none;
  }
  .w100-991{
    width: 100%!important;
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
