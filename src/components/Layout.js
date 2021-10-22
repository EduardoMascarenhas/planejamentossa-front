import React from "react";
import Footer from "./Footer";

import NavBar from "./NavBar";

const Layout = ({ className, children }) => (
  <div className="d-flex flex-column h-100">
    <NavBar />
    <div className="margin-navbar"></div>
    <div className={className}>{children}</div>
    <Footer />
  </div>
);

export default Layout;
