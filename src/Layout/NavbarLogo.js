import React from "react";
import { Navbar, Container } from "react-bootstrap";

const NavigationbarLogo = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/dashboard">Log Analyzer</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationbarLogo;
