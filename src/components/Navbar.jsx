
"use client";

import { Navbar, Container, Nav } from "react-bootstrap";
import Image from "next/image";

function ColorSchemesExample() {
  return (
        <>
      <Navbar bg="dark" data-bs-theme="dark">
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

          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    )
}

export default ColorSchemesExample;