"use client";

import { Navbar, Container, Nav } from "react-bootstrap";
import Image from "next/image";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/JT-logo.png"
              alt="Logo"
              height={40}
              width={40}
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto flex-column flex-lg-row text-center text-lg-start">
              <Nav.Link className="py-2 px-lg-3" href="#home">Home</Nav.Link>
              <Nav.Link className="py-2 px-lg-3" href="#sobremi">Sobre Mí</Nav.Link>
              <Nav.Link className="py-2 px-lg-3" href="#diseñoportfolio">Diseño Gráfico</Nav.Link>
              <Nav.Link className="py-2 px-lg-3" href="#devportfolio">Proyectos Dev</Nav.Link>
              <Nav.Link className="py-2 px-lg-3" href="#CVOnline">CV Online</Nav.Link>
              <Nav.Link className="py-2 px-lg-3" href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
