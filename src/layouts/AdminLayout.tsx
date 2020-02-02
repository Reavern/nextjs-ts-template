import React from "react";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "../components/Navbars/AdminNavbar";
import AdminFooter from "../components/Footers/AdminFooter";
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
