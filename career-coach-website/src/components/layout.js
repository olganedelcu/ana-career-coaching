import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/global.css"; 

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main> 
      <Footer />
    </>
  );
};

export default Layout;