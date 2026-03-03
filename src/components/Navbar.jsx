"use client";

import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Image from "next/image";

function ColorSchemesExample() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) return;

    const heroHeight = hero.offsetHeight;

    const handleScroll = () => {
      if (window.scrollY >= heroHeight - 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll(); // 👈 importante
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
  fixed="top"
  className={
    scrolled
      ? "bg-dark navbar-dark shadow"
      : "bg-transparent navbar-dark"
  }
      >
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
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#sobremi">Sobre Mí</Nav.Link>
              <Nav.Link href="#diseno">Diseño</Nav.Link>
              <Nav.Link href="#dev">Dev</Nav.Link>
              <Nav.Link href="#cv">CV</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
