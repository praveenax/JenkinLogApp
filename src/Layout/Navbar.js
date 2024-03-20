import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/dashboard">Log Analyzer</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/dashboard">Home</Nav.Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Nav.Link href="/upload">New</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigationbar;
