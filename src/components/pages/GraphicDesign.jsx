"use client";

import { useState } from "react";
import { Container, Row, Col, Card, Button, Nav } from "react-bootstrap";
import projectsData from "../data/projects.json";
import categories from "../data/categories.json";



export default function PortfolioBehance() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section className="py-5 bg-light" id="portfolio">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold">Mis Trabajos en Behance</h2>
          <p className="text-muted">
            Aquí puedes ver algunos de mis mejores trabajos publicados en
            Behance.
          </p>
        </div>

        <Nav variant="pills" className="justify-content-center mb-4 flex-wrap">
          {categories.map((category) => (
            <Nav.Item key={category}>
              <Nav.Link
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                style={{ cursor: "pointer" }}
              >
                {category}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Row>
          {filteredProjects.map((project) => (
            <Col key={project.id} md={4} sm={6} className="mb-4">
              <Card className="h-100 shadow-sm portfolio-card">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {project.description}
                  </Card.Text>
                  <Button variant="primary" href={project.link} target="_blank">
                    Ver Proyecto
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button
            variant="primary"
            size="lg"
            href="https://behance.net/tuusuario"
            target="_blank"
          >
            Ver mi Behance completo
          </Button>
        </div>
      </Container>
    </section>
  );
}
