import React from "react";
import { Container, Row, Col } from "reactstrap";

import AuthNavbar from "../components/Navbars/AuthNavbar";
import AuthFooter from "../components/Footers/AuthFooter";


const AuthLayout = ({ children }) => {

  return (
    <>
      <h1>REGULER</h1>
      {children}
    </>
  );
}

export default AuthLayout;
