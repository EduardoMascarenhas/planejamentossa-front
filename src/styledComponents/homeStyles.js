import styled, { createGlobalStyle } from "styled-components";

const HomeStyle = createGlobalStyle`
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
.img-btn-eixo {
  margin: auto auto 10px auto;
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

@media (min-width: 1440px) {
  #brd-image img {
    width: 90vw;
    margin-left: 5px !important;
  }
  .conheca {
    right: 80px !important;
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

@media (max-width: 992px) {
  .text-btn-mob-barra {
    width: 100%;
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
display: -webkit-flex;
    flex-direction: column;
-webkit-flex-direction: column;
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
-webkit-flex-wrap: initial;
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
  .brd-obj-title-planos {
    text-align: center !important;
  }
  .obj-title-planos {
    padding-top: 11% !important;
    width: 60% !important;
  }
  .brd-obj-title-planos:after {
    margin: 15px auto !important;
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
    width: 95% !important;
    margin-left: 10px !important;
    grid-template-columns: 60px 1fr !important;
  }
  #contact-list .list-group-item .name {
    font-size: 1rem;
    padding-left: 5px;
  }
  #contact-list .list-title {
    border: 1px solid #cc4995;
    border-radius: 5px;
    margin-left: -30px;
    padding-left: 30px;
    height: 56px;
    display: flex;
display: -webkit-flex;
    align-items: center;
    padding-right: 15px;
  }
  #brd-pink {
    padding-top: 0 !important;
  }
  #brd-pink .row .col {
    padding-right: 0 !important;
  }
  .brd-pink::after {
    background: none !important;
    width: auto !important;
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
}

@media (max-width: 767px) {
  .text-btn-mob-barra {
    width: 100%;
    font-size: 2vw;
    padding-top: 20vh;
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
display: -webkit-flex;
    flex-direction: column;
-webkit-flex-direction: column;
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
-webkit-flex-wrap: initial;
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
  .brd-obj-title-planos {
    text-align: center !important;
  }
  .obj-title-planos {
    padding-top: 20% !important;
  }
  .brd-obj-title-planos:after {
    margin: 15px auto !important;
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
  #contact-list .list-group-item .name {
    font-size: 0.65rem;
    padding-left: 5px;
  }
  #contact-list .list-title {
    border: 1px solid #cc4995;
    border-radius: 5px;
    margin-left: -30px;
    padding-left: 30px;
    height: 56px;
    display: flex;
display: -webkit-flex;
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
  #contact-list .list-group-item .name {
    font-size: 0.6rem;
  }
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
  .obj-title-planos {
    padding-top: 15% !important;
  }
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

.bg-home-center .inputs {
  position: relative;
  margin-top: 1.45%;
}

.bg-home-center .inputs input,
.bg-home-center .inputs button {
  border: none;
  background: none;
  border-right: 2px solid var(--bs-primary);
  border-radius: 0;
  box-sizing: border-box;
  padding: 0;
  margin: 0.375rem 0.75rem;
}

.bg-home-center .inputs input:focus {
  box-shadow: none;
}

.bg-home-center .inputs button {
  color: #808184;
}

.bg-home-center .inputs .col:last-child input,
.bg-home-center .inputs .col:last-child button {
  border: none;
}

.bg-home-center .btn-search {
  z-index: 1;
  min-height: 40px;
  width: 40px;
  top: 0;
  color: var(--bs-secondary-light);
  display: flex;
display: -webkit-flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
}

::-webkit-input-placeholder {
  color: #808184;
  box-shadow: none;
  text-align: center;
}

:-moz-placeholder {
  color: #808184;
  box-shadow: none;
  text-align: center;
}

.home-cover-center {
  min-height: 75vh;
}

.bg-barra-center {
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
}

.section-top-home {
  max-height: 41%; /* overflow: hidden;*/
  z-index: 900;
}

.section-top-home .bg-l,
.section-top-home .bg-r {
  top: 0;
  z-index: 0;
  width: 56vw;
  max-height: 100%;
  overflow: hidden;
}

.section-top-home .bg-l img,
.section-top-home .bg-r img {
  object-fit: cover;
}

.section-top-home .bg-l {
  left: 0;
}

.section-top-home .bg-r {
  right: 0;
}

.section-top-home .bg-blue {
  width: 100%;
  height: 100%;
  z-index: 900;
  top: 0;
  background: #091d4f;
  background: linear-gradient(
    180deg,
    rgba(9, 29, 79, 0.936012) 0%,
    rgba(0, 49, 105, 0.725928) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#091d4f", endColorstr="#003169", GradientType=1);
}

.section-top-home .slide {
  z-index: 1000;
  max-height: 41%;
}

.section-top-home .carousel-inner > .item > img,
.section-top-home .carousel-inner > .item > a > img {
  width: 100%;
  margin: auto;
}

.section-top-home .container {
  width: 100% !important;
}

.bg-eixos {
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  background: #ce4995;
  background: linear-gradient(90deg, #ce4995 0%, #9e4b96 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ce4995", endColorstr="#9e4b96", GradientType=1);
  box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.2);
}

.eixos {
  z-index: 10000;
}

.eixos .aba-hover {
  width: 250px;
  top: -63px;
  display: flex;
display: -webkit-flex;
  justify-content: center;
  border-top-right-radius: 10px;
  opacity: 0;
  right: 50%;
}

.eixos .aba-hover.aba-l {
  left: 50%;
  right: auto;
}

.eixos .aba-hover-txt {
  display: flex;
display: -webkit-flex;
  align-items: center;
  justify-content: center;
  margin-top: -8px;
  font-weight: 700;
  color: #f7c2d9;
}

.eixos .btns-barra {
  display: grid !important;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center; /*  align-items: center;*/
  position: relative;
}

.eixos .btns-barra .bg-btn-eixo {
  position: absolute;
  width: 220px;
  top: -27px;
  z-index: 10000;
}

.eixos .btns-barra .space-button {
  position: relative;
  width: 100%;
  display: flex;
display: -webkit-flex;
  justify-content: space-around;
  align-items: center;
  border-right: 2px solid #ffffff63;
  max-height: 60px;
}

.eixos .btns-barra .space-button .img-btn {
  max-width: 60px;
  cursor: pointer;
}

.eixos .btns-barra .space-button .on-hover {
  max-width: 60px;
}

.eixos .btns-barra .space-button .on-hover .front-image {
  z-index: 9999;
  transition: opacity 0.1s linear;
  cursor: pointer;
}

.eixos .btns-barra .space-button .on-hover .img-btn {
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: hidden;
  width: 60px;
  height: 60px;
  margin-left: -30px;
  margin-top: -30px;
}

.eixos .btns-barra .space-button .on-hover:hover > .front-image {
  opacity: 0;
}

.eixos .btns-barra .space-button.center {
  z-index: 10000;
  border: none;
  width: 100%;
  display: inline-flex;
  flex-direction: column;
-webkit-flex-direction: column;
  gap: 5px;
}

.eixos .btns-barra .space-button .fa,
.eixos .btns-barra .space-button .far,
.eixos .btns-barra .space-button .fas,
.eixos .btns-barra .space-button .fab {
  position: absolute;
  color: #3b60a7;
  font-size: 1.7rem;
}

.eixos .btns-barra .space-button .btn {
  width: 60px;
  height: 60px;
  padding: 12px;
  cursor: pointer;
  border: none;
  background-color: #fff;
  opacity: 0.6;
}

.eixos .btns-barra .space-button:hover > .aba-hover {
  opacity: 1;
}

.eixos .btns-barra .space-button:hover > .btn {
  background-color: #3b60a7;
}

.eixos .btns-barra .space-button:hover > .btn + .fa,
.eixos .btns-barra .space-button:hover > .btn + .far,
.eixos .btns-barra .space-button:hover > .btn + .fas,
.eixos .btns-barra .space-button:hover > .btn + .fab {
  color: #fff;
  cursor: pointer;
}

.eixos .txt-eixos {
  font-weight: 700;
  color: #f7c2d9;
  cursor: pointer;
}

.opac {
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(255, 255, 255, 0.5);
  top: 0;
  left: 0;
}

.opac h1 {
  color: #fff;
}

.ads728x90 {
  max-width: 728px;
  background-color: #ec008b;
}

.card {
  border: none;
  background: transparent;
  box-shadow: 9px 10px 0px 2px #2d3752;
}

.card .card-header {
  background-color: #48a2da;
  height: 90px;
  opacity: 0.8;
  border: none;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card .card-body {
  background-color: #e6ebef;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  max-height: 450px;
  min-height: 350px;
}

.card .card-body p {
  background: none;
}

.card .space-a {
  order: 1;
}

.card .space-b {
  order: 2;
}

.card .space-c {
  order: 3;
}

.card .space-d {
  order: 4;
}

.card .space-e {
  order: 5;
}

.card .bg-title-card {
  top: -60px;
  left: 2px;
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: space-around;
}

.card .bg-title-card div {
  position: relative;
}

.card .bg-title-card .obj-left {
  /* width: 100%;*/
}

.card .bg-title-card .obj-right {
  width: 100%;
  max-width: 60%;
  right: 5%;
  position: absolute;
  top: 45%;
}

.card .bg-title {
  position: absolute !important;
  top: 35%;
  color: #fff;
  font-size: 1.95rem;
  left: 35px;
  margin-top: -5%;
  font-weight: 700;
}

.itens-news div {
  font-weight: bold;
}

.itens-news li button {
  background-color: var(--bs-pink);
  border-radius: 20px;
  border: none;
  font-size: 0.9rem;
  padding: 2px 11px;
}

.itens-news li:first-child {
  padding-top: 0;
}

.scrolling-area {
  max-height: 350px;
  overflow: auto;
  padding: 1rem;
  direction: rtl;
}

.scrolling-element-inside {
  direction: ltr;
}
/*# sourceMappingURL=home.min.css.map */
.banner-download-div {
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 35px;
}
.banner-download {
  background: #ed028c;
  width: 728px;
  height: 90px;
  color: #fff;
  display: flex;
display: -webkit-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.banner-download:hover {
  background: #9e4b96;
}
.banner-download h3 {
  font-weight: 700;
}
.container-noticia {
  padding: 100px;
  position: relative;
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
  max-height: 42px;
  padding: 5px 20px 5px 20px;
  position: absolute;
  right: 0;
  margin-top: -50px;
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
.noticia-topo h3 {
  color: #ed028c;
  font-weight: 700;
  font-style: italic;
}
.noticia-topo h1 {
  color: #636366;
  font-weight: 700;
  font-size: 40px;
}
.noticia-topo p {
  margin: 0;
  font-weight: 700;
  color: #57a2da;
}
.noticia-corpo img {
  max-height: 420px;
  max-width: -webkit-fill-available;
}
.noticia-corpo h3 {
  font-weight: 700;
  color: #636366;
}
.noticia-corpo p {
  margin: 0;
  color: #636366;
  padding-top: 20px;
  font-size: 1.4rem;
}
.noticia-corpo {
  max-height: 500px;
  overflow-y: scroll;
}
.ltr {
  direction: ltr !important;
}
.pagina-erro {
  display: flex;
display: -webkit-flex;
  flex-direction: column;
-webkit-flex-direction: column;
  align-items: center;
  margin: 30vh 0 30vh 0;
}


/* Media  Query */
@media screen and (max-width: 991px) {
  .button-voltar {
    right: -25px;
    margin-top: -35px;
  }
  .container-noticia {
    padding: 50px;
  }
  .space-button {
    margin-top: -80px;
  }
}
@media screen and (max-width: 768px) {
  .container-noticia {
    padding: 50px 0 50px 0;
  }
  .button-voltar {
    right: 0px;
    margin-top: -42px;
  }
}
@media screen and (max-width: 480px) {
  .eixos .txt-eixos {
    font-size: 3vw;
  }
}

`;

export default HomeStyle;
