import styled, { createGlobalStyle } from "styled-components";

const PlanosEixosStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;700&display=swap");
:root {
  --bs-primary: #376cb1;
  --bs-secondary: #48a2da;
  --bs-secondary-light: #bce0f8;
  --bs-grey: #626466;
  --bs-dark-blue: #2d3752;
  --bs-pink: #ec008b;
  --bs-yellow: #ce9028;
  --bs-yellow-light: #fcb831;
}

* {
  font-weight: 400;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Source Sans Pro", "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

a {
  text-decoration: none;
  color: #fff;
}

html {
  overflow-x: hidden;
}

body {
  height: 100%;
  overflow-x: hidden;
}
::-webkit-scrollbar-track {
  border: 5px solid #e6ebef;
  background-color: #d2d2d2;
}

::-webkit-scrollbar {
    width: 6px;
    background-color: rgb(230, 235, 239);
}

::-webkit-scrollbar-thumb {
  background-color: #EC008B;
  border-radius: 10px;
}
.div-button-voltar {
  z-index: 500;
  position: absolute;
  right: -61px;
  top: 55px;
}
.c-color-primary {
  color: var(--bs-primary);
}

.c-color-yellow {
  color: var(--bs-yellow);
}

.c-color-secondary {
  color: var(--bs-secondary);
}

.c-color-secondary-light {
  color: var(--bs-secondary-light);
}

.c-color-yellow-light {
  color: var(--bs-yellow-light);
}

.c-color-gray {
  color: var(--bs-grey);
}

.c-color-dark-blue {
  color: var(--bs-dark-blue);
}

.c-bgc-primary {
  background-color: var(--bs-primary);
}

.c-bgc-secondary {
  background-color: var(--bs-secondary);
}

.c-bgc-yellow-light {
  background-color: var(--bs-yellow-light);
}

.c-bgc-dark-blue {
  background-color: var(--bs-dark-blue);
}

.c-bgc-pink {
  background-color: var(--bs-pink);
}

.os-content {
  padding: 5px 16px !important;
}
.conheca-bg-top {
  width: 80%;
  padding: 25px;
  color: #fff;
  font-weight: 500;
  justify-content: flex-end;
  font-size: 35px;
}
.brd-obj-title-planos {
  display: block;
  flex-direction: column;
  align-items: flex-end;
  padding-right: 45px;
}

.navbar {
  height: 90px;
  box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.2);
}

.bg-default-blue {
  background: #1f5da4;
  background: linear-gradient(180deg, #1f5da4 0%, #1d3164 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1f5da4", endColorstr="#1d3164", GradientType=1);
}

.navbar-light .navbar-toggle-always {
  border: none;
  color: #fff;
}

.navbar-light navbar-toggle-always span {
  color: #fff;
}

.navbar-light .navbar-nav .nav-link {
  color: #fff;
  font-size: 1.5rem;
}

.logo-top {
  height: 2.7rem !important;
}

.navbar-toggle-always {
  position: relative;
  float: right;
  margin-right: 15px;
  padding: 27px 10px;
  padding-bottom: 27px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: transparent;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 4px;
  margin-left: 0;
  margin-right: 0;
}

.navbar-toggle-always.ffawe {
  font-size: 1.5rem;
}

.navbar-toggle-always:focus {
  outline: 0;
}

.navbar-toggle-always .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
}

.navbar-toggle-always .icon-bar + .icon-bar {
  margin-top: 4px;
}

.navbar-toggle-always .icon-bar-always {
  width: 30px;
  height: 4px;
  border: 1px solid #fff;
  display: block;
  border-radius: 10px;
  background: #fff;
  margin: 5px 0;
}

.dropdown-menu {
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 10rem;
  background-color: #001c46de;
  border-radius: 0;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  top: 85%;
  margin-top: 12px;
}

.dropdown-menu li {
  margin: 0 1rem;
  border-bottom: 1px solid var(--bs-blue);
  box-sizing: border-box;
}

.dropdown-menu li.search {
  border: none;
  background-color: var(--bs-yellow);
  border-radius: 20px;
  margin-bottom: 5px;
}

.dropdown-menu li.search a {
  color: var(--bs-dark-blue) !important;
  padding: 2px 32px !important;
  text-align: center !important;
  margin: 10px 0 !important;
}

.dropdown-menu li.search a:hover {
  color: #fff !important;
}

.dropdown-menu li:last-child {
  border: none;
}

.navbar-toggle-always:hover .dropdown-menu {
  display: block;
  overflow: hidden;
}

.navbar-toggle-always:hover .dropdown-menu a {
  color: var(--bs-yellow);
  text-transform: uppercase;
  font-weight: 700;
  padding: 10px 0;
}

.navbar-toggle-always:hover .dropdown-menu a:hover {
  background: none;
  color: #f6b850;
}

.navbar-toggle-always:hover .icon-bar-always {
  border: 1px solid var(--bs-yellow);
  background: var(--bs-yellow);
}

.navbar-toggle-always:hover .fas {
  color: var(--bs-yellow);
}

.navbar-toggle-always .icon-bar-always:hover {
  background: var(--bs-yellow);
}

.navbar-toggle-always .icon-bar-always + .icon-bar-always {
  margin-top: 4px;
}

.btn-group {
  gap: 15px;
}

.dot {
  width: 8px;
  height: 8px;
  background: #fff;
  border-radius: 50%;
}

@media (min-width: 320px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
}

@media (min-width: 480px) {
  /* smartphones, Android phones, landscape iPhone */
}

@media (min-width: 600px) {
  /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */
}

@media (min-width: 768px) {
  #brd-image img {
    width: 90vw;
    margin-left: 30px;
  }
  .eixos .btns-barra .space-button {
    max-height: 60px;
    margin-top: -55px;
  }
  .navbar-toggle-always {
    display: block !important;
    background-color: transparent;
    border: 1px solid #333333;
  }
  .space-inputs-inline object {
    top: -2px;
  }
  .btns-social {
    grid-template-columns: 0.7fr 0.7fr 0.7fr 0.7fr;
  }
  .btns-social a:hover {
    color: var(--bs-secondary-light) !important;
  }
  .section-top-home .bg-l img,
  .section-top-home .bg-r img {
    object-fit: cover;
    width: 100%;
    max-height: 100%;
  }
  .bg-home-center .inputs {
    background: #fff !important;
    clip-path: polygon(0 0, 100% 0, 99% 100%, 1% 100%) !important;
    width: 80%;
    margin: 0 auto;
    height: 30px;
  }
  .bg-home-center .inputs input,
  .bg-home-center .inputs button[type="button"] {
    font-size: 0.8rem !important;
    margin: 0 0.75rem !important;
  }
  .bg-home-center .inputs input[type="text"] {
    border: none;
  }
  .bg-home-center .inputs button[type="button"]:nth-child(1) {
    border-left: 2px solid var(--bs-primary) !important;
  }
  .bg-home-center .btn-search {
    right: 3.5%;
    font-size: 1.7rem;
  }
  .card .bg-title-card .bg-title {
    font-size: 1.9rem !important;
  }
}

@media (min-width: 801px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
  .bg-barra-center {
    position: absolute !important;
  }
  .bg-inputs {
    justify-content: center !important;
  }
  .space-inputs-inline {
    text-align: center !important;
    border: none !important;
    width: 100%;
    align-items: center;
  }
  .space-inputs-inline .container {
    z-index: 1 !important;
  }
  .space-inputs-inline object {
    top: 0 !important;
    padding: 0;
    margin: 0;
    width: 92%;
    z-index: 0;
  }
  .space-inputs-inline input[type="text"],
  .space-inputs-inline button[type="button"] {
    border: none !important;
    border-radius: 0 !important;
    height: 25px !important;
    margin: 0 !important;
    padding: 0 5px !important;
    text-align: center !important;
    background: #fff !important;
    font-size: 0.8rem !important;
  }
  .space-inputs-inline button[type="button"]:nth-child(1) {
    border-left: 2px solid var(--bs-primary) !important;
  }
  .space-inputs-inline .inputs {
    background: #fff !important;
    row-gap: 5px !important;
    clip-path: polygon(0 0, 100% 0, 99% 100%, 1% 100%) !important;
  }
  .space-inputs-inline .inputs div {
    padding: 0 !important;
  }
}

@media (min-width: 1024px) {
  .eixos .btns-barra .space-button {
    margin-top: initial;
  }
  .bg-home-center .inputs {
    width: 100%;
    height: 35px;
  }
  /* big landscape tablets, laptops, and desktops */
  .bg-home-center .btn-search {
    width: 50px !important;
    height: 60px !important;
  }
}

@media (min-width: 1280px) {
  /* hi-res laptops and desktops */
  .os-host-resize-disabled.os-host-scrollbar-horizontal-hidden
    > .os-scrollbar-vertical {
    top: 10px !important;
  }
  .card .bg-title-card {
    margin-left: -23px;
  }
  .img-content {
    max-height: 1280px;
  }
}

@media (min-width: 1320px) {
  .card .bg-title-card .obj-left {
    width: 85%;
  }
  .list-group-item {
    width: 100% !important;
  }
  .bg-home-center .btn-search {
    width: 80px !important;
    height: 80px !important;
  }
  .inputs {
    margin-top: 2.45% !important;
  }
}

@media (min-width: 1380px) {
  .card .bg-title-card .bg-title {
    font-size: 2.65rem !important;
    top: 28%;
  }
}

@media (min-width: 1920px) {
  #contact-list {
    max-width: 500px!important; 
  }
}
@media (min-width: 1440px) {
  #brd-image img {
    width: 90vw;
    margin-left: 5px !important;
  }
}
@media (max-width: 1440px) {
  .conheca {
    width: 100%;
    margin-left: -65px;
  }
}

@media (min-width: 1920px) {
  .dots.dots-r {
    top: 53px;
    right: -375px;
  }
  .dots.dots-l {
    bottom: -480px;
    left: -375px;
  }
}

@media (max-width: 991px) {
  .text-btn-mob-barra {
    width: 100%;
    font-size: 0.8rem;
    padding-top: 100px;
  }
  .bg-home-center .inputs {
    margin-top: 0 !important;
  }
  .bg-home-center .inputs > div > div {
    height: 20px;
  }
  .bg-home-center .inputs button {
    border: none !important;
    margin: 0.5rem 0.75rem 0.5rem 0 !important;
    font-size: 0.8rem !important;
  }
  .ads-home {
    margin-top: 0 !important;
    padding-top: 1rem !important;
  }
  .card-space-home {
    padding-top: 1.8rem !important;
  }
  .bg-inputs {
    min-height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .card {
    width: 97% !important;
    box-shadow: 9px 10px 0px 2px #2d3752c2 !important;
  }
  .card .card-header {
    height: 35px !important;
  }
  .card .bg-title-card {
    top: -17px !important;
  }
  .card .bg-title-card .obj-left {
    width: 65%;
    position: absolute !important;
    left: -10px;
  }
  .card .bg-title-card .obj-right {
    max-width: 80% !important;
    right: 5% !important;
    position: absolute !important;
    top: calc(100% + 10px) !important;
  }
  .card .bg-title-card .bg-title {
    top: 35%;
    left: 15px;
    margin-top: -1%;
  }
  .carousel-control-prev {
    padding-left: 10px !important;
  }
  .carousel-control-next {
    padding-right: 10px !important;
  }
  .slide {
    padding: 0 !important;
  }
  .section-top-home {
    height: 100% !important;
  }
  .logo-top {
    height: auto !important;
    width: 65%;
  }
  .section-top-home .bg-l img,
  .section-top-home .bg-r img {
    height: auto;
    width: 100vh;
  }
  .navbar {
    height: 50px;
  }
  .navbar > .container {
    height: 30px;
  }
  .navbar > .container,
  .navbar > .container-fluid,
  .navbar > .container-lg,
  .navbar > .container-md,
  .navbar > .container-sm,
  .navbar > .container-xl,
  .navbar > .container-xxl {
    flex-wrap: initial;
  }
  .dots.dots-r {
    top: 53px;
    right: 0px;
  }
  .dots.dots-l {
    bottom: -480px;
    left: 0px;
  }
  .bg-eixos {
    background: #cf3b95 !important;
  }
  .eixos .btns-barra {
    align-items: center !important;
  }
  .eixos .btns-barra .space-button {
    border: none !important;
  }
  .eixos .btns-barra .space-button .on-hover .img-btn {
    border: 3px solid #cf3b95;
    border-radius: 100%;
    box-sizing: border-box;
  }
  .eixos .btns-barra .space-button.center {
    gap: 4px !important;
    margin-right: 2.8rem !important;
    margin-left: 2.8rem !important;
  }
  .dropdown-menu {
    top: 63%;
  }
  .btn-group {
    justify-content: center;
    align-items: center;
    height: 50px;
  }
  .conheca {
    width: 70vw !important;
    height: 65px !important;
    font-size: 3rem !important;
    padding-right: 30px !important;
  }
  #contact-list .space-thumb {
    width: 60px !important;
    height: 60px !important;
  }
  #contact-list .space-thumb .thumbnail {
    padding: 0.2rem;
    width: 85px;
    height: 85px;
    margin-top: -12px;
  }
  #contact-list .brd-yellow {
    border: 1px solid #cb840d !important;
  }
  #contact-list .list-group-item {
    padding-bottom: 8px !important;
    width: 95% !important;
    margin-left: 10px !important;
    grid-template-columns: 60px 1fr !important;
    margin-bottom: 1rem;
  }
  #contact-list .list-group-item .name {
    font-size: 1.8vw;
    padding-left: 5px;
  }
  #contact-list .list-title {
    border: 2px solid #cc4995;
    border-radius: 5px;
    margin-left: -30px;
    padding-left: 55px;
    height: 80px;
    display: flex;
    align-items: center;
    padding-right: 15px;
  }
  #brd-pink {
    padding-top: 0 !important;
  }
  #brd-pink .row .col {
    padding-right: 0 !important;
  }
  #brd-image {
    padding-left: 0 !important;
  }
  #brd-image img {
    width: 90vw;
    margin-left: 15px;
    margin-top: 10px;
    box-shadow: -8px 9px 0px 1px #ce4995;
  }
  .space-inputs {
    text-align: center;
    border: none;
    background: #001c47;
  }
  .space-inputs .container {
    z-index: 1;
  }
  .space-inputs object {
    top: 80% !important;
    padding: 0;
    margin: 0;
    width: 92%;
    z-index: 0;
  }
  .space-inputs input[type="text"],
  .space-inputs button[type="button"] {
    border: none !important;
    border-radius: 0 !important;
    height: 25px !important;
    margin: 0 !important;
    padding: 0 5px !important;
    text-align: center !important;
    background: #fff !important;
    font-size: 0.8rem !important;
  }
  .space-inputs .inputs {
    row-gap: 5px;
  }
  .space-inputs .inputs div {
    padding: 0 !important;
  }
  .ads728x90 {
    margin-top: 32px;
  }
  img.img-content {
    max-width: 95%;
    margin-bottom: 2rem;
  }
}

@media (max-width: 768px) {
  .text-btn-mob-barra {
    width: 100%;
    font-size: 0.65rem;
    padding-top: 67px;
  }
  .bg-home-center .inputs {
    margin-top: 0 !important;
  }
  .bg-home-center .inputs > div > div {
    height: 20px;
  }
  .bg-home-center .inputs button {
    border: none !important;
    margin: 0.5rem 0.75rem 0.5rem 0 !important;
    font-size: 0.8rem !important;
  }
  .ads-home {
    margin-top: 0 !important;
    padding-top: 1rem !important;
  }
  .card-space-home {
    padding-top: 1.8rem !important;
  }
  .bg-inputs {
    min-height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .card {
    width: 97% !important;
    box-shadow: 9px 10px 0px 2px #2d3752c2 !important;
  }
  .card .card-header {
    height: 35px !important;
  }
  .card .bg-title-card {
    top: -17px !important;
  }
  .card .bg-title-card .obj-left {
    width: 90%;
    position: absolute !important;
    left: -10px !important;
  }
  .card .bg-title-card .obj-right {
    max-width: 80% !important;
    right: 5% !important;
    position: absolute !important;
    top: calc(100% + 10px) !important;
  }
  .card .bg-title-card .bg-title {
    top: 35%;
    font-size: 1.65rem;
    left: 15px;
  }
  .carousel-control-prev {
    padding-left: 10px !important;
  }
  .carousel-control-next {
    padding-right: 10px !important;
  }
  .slide {
    padding: 0 !important;
  }
  .section-top-home {
    height: 100% !important;
  }
  .logo-top {
    height: auto !important;
    width: 90%;
  }
  .section-top-home .bg-l img,
  .section-top-home .bg-r img {
    height: auto;
    width: 100vh;
  }
  .navbar {
    height: 50px;
  }
  .navbar > .container {
    height: 30px;
  }
  .navbar > .container,
  .navbar > .container-fluid,
  .navbar > .container-lg,
  .navbar > .container-md,
  .navbar > .container-sm,
  .navbar > .container-xl,
  .navbar > .container-xxl {
    flex-wrap: initial;
  }
  .dots.dots-r {
    top: 53px;
    right: 0px;
  }
  .dots.dots-l {
    bottom: -480px;
    left: 0px;
  }
  .bg-eixos {
    background: #cf3b95 !important;
  }
  .eixos .btns-barra {
    align-items: center !important;
    grid-template-columns: repeat(3, 1fr) !important;
    padding: 0 15px;
  }
  .eixos .btns-barra .space-button {
    border: none !important;
  }
  .eixos .btns-barra .space-button .on-hover .img-btn {
    border: 3px solid #cf3b95;
    border-radius: 100%;
    box-sizing: border-box;
  }
  .eixos .btns-barra .space-button.center {
    gap: 4px !important;
    margin-right: 2.8rem !important;
    margin-left: 2.8rem !important;
  }
  .dropdown-menu {
    top: 63%;
  }
  .btn-group {
    justify-content: center;
    align-items: center;
    height: 50px;
  }
  .conheca {
    width: 70vw !important;
    height: 50px !important;
    font-size: 1.5rem !important;
    padding-right: 30px !important;
  }
  #contact-list .space-thumb {
    width: 60px !important;
    height: 60px !important;
  }
  #contact-list .space-thumb .thumbnail {
    padding: 0.2rem;
    width: 100% !important;
    height: 100% !important;
  }
  #contact-list .brd-yellow {
    border: 1px solid #cb840d !important;
  }
  #contact-list .list-group-item {
    padding-bottom: 8px !important;
    margin-left: 10px !important;
    grid-template-columns: 60px 1fr !important;
  }
  #contact-list .list-title {
    border: 2px solid #cc4995;
    border-radius: 5px;
    margin-left: -30px;
    padding-left: 30px;
    height: 56px;
    display: flex;
    align-items: center;
    padding-right: 15px;
  }
  #brd-pink .row .col {
    padding-right: 0 !important;
  }
  .brd-pink::after {
    background: none !important;
    width: auto !important;
  }
  .space-b {
    order: 2 !important;
  }
  .space-b {
    order: 4 !important;
  }
  .space-inputs {
    text-align: center;
    border: none;
    background: #001c47;
  }
  .space-inputs .container {
    z-index: 1;
  }
  .space-inputs object {
    padding: 0;
    margin: 0;
    width: 92%;
    z-index: 0;
  }
  .space-inputs input[type="text"],
  .space-inputs button[type="button"] {
    border: none !important;
    border-radius: 0 !important;
    height: 25px !important;
    margin: 0 !important;
    padding: 0 5px !important;
    text-align: center !important;
    background: #fff !important;
    font-size: 0.8rem !important;
  }
  .space-inputs .inputs {
    row-gap: 5px;
  }
  .space-inputs .inputs div {
    padding: 0 !important;
  }
  .space-inputs .inputs div:nth-child(1) input[type="text"] {
    border-top-left-radius: 51px !important;
    border-top-right-radius: 51px !important;
  }
  .space-inputs .inputs div:nth-child(2) {
    padding-right: 0.2rem !important;
  }
  .space-inputs .inputs div:nth-child(3) {
    padding-left: 0.2rem !important;
  }
  .space-inputs .inputs div:nth-child(2) button[type="button"] {
    border-bottom-left-radius: 51px !important;
  }
  .space-inputs .inputs div:nth-child(3) button[type="button"] {
    border-bottom-right-radius: 51px !important;
  }
  .ads728x90 {
    margin-top: 32px;
  }
}

@media (max-width: 480px) {
  .eixos .btns-barra .bg-btn-eixo {
    width: 38% !important;
    top: -23px !important;
  }
  .eixos .btns-barra .space-button {
    margin-top: -35px;
    max-height: 25px !important;
  }
  .eixos .btns-barra .space-button .center {
    margin-top: 0;
  }
  .eixos .btns-barra .space-button .img-btn {
    max-width: 40px !important;
  }
  .card {
    width: 97% !important;
    box-shadow: 9px 10px 0px 2px #2d3752c2 !important;
  }
  .card .card-header {
    height: 35px !important;
  }
  .card .bg-title-card {
    top: -17px !important;
  }
  .card .bg-title-card .obj-left {
    width: 90%;
    position: absolute !important;
    left: -10px;
  }
  .card .bg-title-card .obj-right {
    max-width: 80% !important;
    right: 5% !important;
    position: absolute !important;
    top: calc(100% + 10px) !important;
  }
  .card .bg-title-card .bg-title {
    top: 35%;
    font-size: 1.65rem;
    left: 15px; /*  margin-top: -1%;*/
  }
  #brd-image {
    padding-left: 15px !important;
  }
  #brd-image img {
    width: 90vw; /*  margin-left: auto !important;*/
    margin-top: 10px;
    box-shadow: -8px 9px 0px 1px #ce4995;
  }
  .text-btn-mob-barra {
    font-size: 0.6rem;
    padding-top: 70px;
  }
}

@media (max-width: 414px) {
  .carousel-control-next img,
  .carousel-control-prev img {
    width: 2rem !important;
  }
  .eixos .btns-barra .bg-btn-eixo {
    width: 35% !important;
    top: -22.5px !important;
  }
  .eixos .btns-barra .space-button {
    margin-top: -35px;
    max-height: 25px !important;
  }
  .eixos .btns-barra .space-button .center {
    margin-top: 0;
  }
  .eixos .btns-barra .space-button .img-btn {
    max-width: 40px !important;
  }
  .eixos .btns-barra .space-button .on-hover .img-btn {
    width: 40px !important;
    height: 40px !important;
    margin-left: -20px !important;
    margin-top: -20px !important;
  }
}

@media (max-width: 375px) {
  .carousel-control-next img,
  .carousel-control-prev img {
    width: 2rem !important;
  }
  .eixos .btns-barra .bg-btn-eixo {
    width: 42% !important;
    top: -23px !important;
  }
  .eixos .btns-barra .space-button {
    max-height: 25px !important;
  }
  .eixos .btns-barra .space-button .img-btn {
    max-width: 40px !important;
  }
  .eixos .btns-barra .space-button .on-hover .img-btn {
    width: 40px !important;
    height: 40px !important;
    margin-left: -20px !important;
    margin-top: -20px !important;
  }
}

@media (max-width: 320px) {
  .card .bg-title-card .bg-title {
    left: 4px !important;
    font-size: 1.3rem !important;
    margin-top: -1% !important;
  }
}

@media (orientation: landscape) and (min-width: 1024px) {
  #brd-image img {
    width: auto;
    margin-left: 5px;
  }
  .grid-content-page {
    grid-template-columns: 45vw 1fr !important;
  }
}

@media (orientation: landscape) and (min-width: 1320px) {
  .list-group-item {
    width: 95%;
  }
  .grid-content-page {
    grid-template-columns: 20vw 1fr !important;
  }
}

@media (orientation: landscape) and (min-width: 1440px) {
  .grid-content-page {
    grid-template-columns: 15vw 1fr !important;
  }
}

@media (orientation: landscape) and (max-width: 736px) {
  .bg-home-center .container {
    max-width: 100% !important;
  }
}

@media (orientation: landscape) and (max-width: 992px) {
  .space-inputs object {
    width: 70%;
    z-index: 0;
    left: calc(100% - 85%);
  }
  .card .bg-title-card .obj-left {
    width: 70% !important;
  }
  .card .bg-title-card .bg-title {
    font-size: 2.3rem !important;
  }
}

.dots {
  position: absolute;
  opacity: 0.3;
  width: 360px;
}

.dots.dots-r {
  top: 75px;
  right: -375px;
}

.dots.dots-l {
  bottom: 65px;
  left: -370px;
  z-index: 10001;
}

.carousel-control-next img,
.carousel-control-prev img {
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
}

.carousel-control-next {
  justify-content: flex-end;
  width: 15%;
  padding-right: 15px;
}

.carousel-control-prev {
  justify-content: flex-start;
  width: 15%;
  padding-left: 15px;
}

.flip-h {
  transform: scaleX(-1);
}

.pos-l-a {
  left: auto;
}

.pos-r-a {
  right: auto;
}

.btn-container-footer a {
  text-decoration: none !important;
  font-size: 1.5rem;
}

.btn-container-footer a:hover {
  color: #ffffff;
}

.bg-blue-0-deg {
  background: #1f5da4;
  background: linear-gradient(0deg, #1f5da4 0%, #1d3164 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1f5da4", endColorstr="#1d3164", GradientType=1);
}

.bg-pink-a {
  background: #ce4995;
  background: linear-gradient(90deg, #ce4995 0%, #9e4b96 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ce4995", endColorstr="#9e4b96", GradientType=1);
}

.bg-pink-b {
  background: #ce4995;
  background: linear-gradient(270deg, #ce4995 0%, #9e4b96 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ce4995", endColorstr="#9e4b96", GradientType=1);
}

.bg-pink-180 {
  background: #ce4995;
  background: linear-gradient(180deg, #ce4995 0%, #9e4b96 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ce4995", endColorstr="#9e4b96", GradientType=1);
}

.bg-pink-135 {
  background: #ce4995;
  background: linear-gradient(180deg, #ce4995 0%, #9e4b96 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ce4995", endColorstr="#9e4b96", GradientType=1);
}

html,
body {
  height: 100%;
  overflow-x: hidden;
}

main > .container {
  padding: 60px 15px 0;
}

.grid-content-page {
  display: grid;
  grid-template-columns: 55vw 1fr;
}

.conheca {
  width: 200%;
  height: 70px;
  position: absolute;
  color: #fff;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-left: -57px;
  padding-right: 30px;
}

.obj-title-planos {
  max-width: 40vw;
}

#brd-pink {
  position: relative;
}
.brd-pink::after {
  display: block;
  width: 10px;
  height: 100%;
  background: #ce4995;
  background: linear-gradient(180deg, #ce4995 25%, #9e4b96 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ce4995", endColorstr="#9e4b96", GradientType=1);
  content: "";
  box-sizing: border-box;
  position: absolute;
  right: 0px;
  top: 0px;
  box-shadow: 4px 0px 7px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 4px 0px 7px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 4px 0px 7px -2px rgba(0, 0, 0, 0.75);
  z-index: 100;
}

.space-thumb {
  width: 80px;
  height: 80px;
}

.space-thumb .thumbnail {
  position: relative;
  background: linear-gradient(135deg, #ce4995, #9e4b96);
  padding: 5px;
  object-fit: cover;
  box-sizing: border-box;
  width: 80px;
  height: 80px;
}

.brd-yellow::after {
  background: #fcb831;
  background: linear-gradient(180deg, #fcb831 0%, #cb840d 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#fcb831", endColorstr="#cb840d", GradientType=1);
}

#contact-list .name {
  font-size: 1.3rem;
}

.list-group-item {
  display: grid;
  flex-direction: column;
  align-items: center;
  grid-template-columns: 95px 1fr;
  cursor: pointer;
}

.list-group-item:hover .thumbnail {
  background: linear-gradient(135deg, #fcb831, #cb840d);
}

.list-title {
  display: flex;
}

/*custom class*/
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
.row-flex {
  display: flex;
}
.col-um {
  width: 30%;
}
.col-dois {
  width: 70%;
  padding-right: 10px;
}
.db-991 {
  display: none;
}
.bg-blue {
  background-color: #1d3368;
}
.m-a {
  margin: auto;
}
.col-com-img {
}
.brd-obj-title-planos:after {
  height: 3px;
  display: block;
  width: 40vw;
  background: #0179c0;
  border-radius: 10px;
  content: "";
  margin-top: 20px;
  margin-bottom: 15px;
}

/* media queries */
/*               */
/* media queries MIN */
@media screen and (min-width: 1200px) {
  .col-um {
    width: 45%;
  }
  .col-dois {
    width: 55%;
  }
  #contact-list {
    max-width: 300px;
  }
}
@media screen and (min-width: 992px) {
  .obj-title-planos {
    max-width: 18em;
    margin-top: 1rem;
  }
  .brd-obj-title-planos:after {
    height: 3px;
    display: block;
    width: 18em;
    background: #0179c0;
    border-radius: 10px;
    content: "";
    margin-top: 20px;
    margin-bottom: 15px;
  }
}

/* media queries MAX */
@media screen and (max-width: 1440px) {
  .col-um {
    width: 40%;
  }
  .col-dois {
    width: 60%;
  }
  .brd-obj-title-planos {
    padding-right: 60px;
  }
}
@media screen and (max-width: 1366px) {
  #contact-list .name {
    font-size: 0.8rem;
  }
  .brd-obj-title-planos {
    padding-right: 80px;
  }
  .col-um {
    width: 30%;
  }
  .col-dois {
    width: 70%;
  }
}
@media screen and (max-width: 1200px) {
}
@media screen and (max-width: 991px) {
  .brd-pink::after {
    display: none;
  }
  .conheca-bg-top {
    padding: 10px;
    font-size: 25px;
    width: -webkit-fill-available;
  }
  .dn-991 {
    display: none;
  }
  .db-991 {
    display: block;
  }
  .brd-obj-title-planos {
    padding: 0 0 25px 0;
  }
}
@media screen and (max-width: 768px) {
  .brd-obj-title-planos {
    padding-right: 25px;
  }
  .col-um {
    display: none;
  }
  .col-dois {
    width: 100%;
    padding-left: 2rem;
  }
  #contact-list .space-thumb .thumbnail {
    margin-top: 0;
  }
}
@media screen and (max-width: 550px) {
  .col-dois {
    padding-left: 1rem;
  }
}
@media screen and (max-width: 500px) {
  .brd-obj-title-planos {
    padding-right: 10px;
  }
  .conheca-bg-top {
    font-size: 20px;
  }
}
@media screen and (max-width: 480px) {
  #brd-image img {
    margin-left: 0;
  }
  img.img-content {
    max-width: 100%;
  }
  #contact-list .list-group-item {
    margin-left: 5px !important;
  }
}
@media screen and (max-width: 455px) {
  .col-dois {
    padding-left: 0;
  }
}
@media screen and (max-width: 425px) {
  .button-voltar {
    max-width: 100px;
    min-width: 100px;
    margin-top: 10px;
    font: 0.8em Raleway, sans-serif;
  }
}


`;

export default PlanosEixosStyle;
