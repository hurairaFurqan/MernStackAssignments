import React from "react";
import { Container, Navbar,Nav } from "react-bootstrap";
import {NavLink} from "react-router-dom"
const Layout = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to={"/"}>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to={"/"} as={NavLink}>
                EntryToll
              </Nav.Link>
              <Nav.Link to={"/exitToll"} as={NavLink}>
                ExitToll
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Layout;
