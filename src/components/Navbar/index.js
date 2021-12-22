import React, { useState } from "react";
import Link from "next/link";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import NavMenu from "./NavMenu";
import "./index.scss";

export default props => {
  const [state, setState] = useState({
    isOpen: false
  });

  const toggle = () => {
    setState({
      isOpen: !state.isOpen
    });
  };

  return (
    <Navbar color="light" className="navbar navbar-expand-lg navbar-light bg-light" style={{padding: "20px"}} light expand="md">
      <div className="container-fluid">
        <Link href="/">
        <a className="navbar-brand" href="home.html" style={{padding: "0 40px", color: "rgb(219, 210, 210)", display: "flex", alignItems: "center"}}><i className="fab fa-react" style={{paddingRight: "5px", color: "#ff0000", fontSize: "40px"}}></i>DONG<span>COIN</span></a>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavMenu />
          </Nav>

          <ul className="navbar-nav">
              <li className="nav-item">
                <input type="search" name="" id="" placeholder="Search....." />
              </li>
              
              <button type="button" className="btn gra-btn btn-success" style={{ border: "none", outline: "none", color: "#fff", marginLeft: "10px", padding: "8px 32px",
    borderRadius: "20px",}}>Start</button>
            </ul>
        </Collapse>
      </div>
    </Navbar>
  );
};
