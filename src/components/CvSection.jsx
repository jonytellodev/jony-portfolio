"use client"

import { Container, Accordion, Button } from "react-bootstrap";

export default function CvSection() {
  return (
    <section id="cv" className="bg-light py-5">
      <Container>
        <h2 className="mb-4 text-center">Curriculum Vitae</h2>

        <Accordion>

          {/* CV Diseñador */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              🎨 Perfil Diseñador Gráfico
            </Accordion.Header>
            <Accordion.Body>

              <div style={{ height: "600px" }}>
                <iframe
                  src="/cv-gd.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>

              <div className="mt-3 text-center">
                <Button
                  variant="dark"
                  href="/cv-gd.pdf"
                  target="_blank"
                >
                  Descargar CV Diseñador
                </Button>
              </div>

            </Accordion.Body>
          </Accordion.Item>

          {/* CV Developer */}
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              💻 Perfil Desarrollador Frontend
            </Accordion.Header>
            <Accordion.Body>

              <div style={{ height: "600px" }}>
                <iframe
                  src="/cv-dev.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "10px" }}
                />
              </div>

              <div className="mt-3 text-center">
                <Button
                  variant="dark"
                  href="/cv-dev.pdf"
                  target="_blank"
                >
                  Descargar CV Developer
                </Button>
              </div>

            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </Container>
    </section>
  );
}