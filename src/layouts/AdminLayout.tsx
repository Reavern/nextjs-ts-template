import React from "react";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "../components/Navbars/AdminNavbar.jsx";
import AdminFooter from "../components/Footers/AdminFooter.jsx";
import Sidebar from "../components/Sidebar/Sidebar";


const AdminLayout = ({children}) => {

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <AdminNavbar />
        {children}
        {/* <Container fluid>
          <AdminFooter />
        </Container> */}
      </div>
    </>
  );
}

export default AdminLayout;
