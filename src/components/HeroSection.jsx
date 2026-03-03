import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="hero-section min-vh-100 d-flex align-items-center text-white pt-5">
      <article className="container">
        <div className="row align-items-center">
          {/* IZQUIERDA */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <Image
              src="/jonyfoto.png"
              alt="Jony portrait"
              width={400}
              height={400}
              className="rounded-circle img-fluid"
            />

            <h1 className="mt-4 display-4 fw-bold">
              Hola, soy <span className="text-primary">Jonathan</span>
            </h1>
          </div>

          {/* DERECHA */}
          <div className="col-md-6 text-center text-md-start">
            <p className="lead text-light">
              Desarrollador Web & Diseñador Gráfico. <br /> Creo experiencias digitales
              modernas, funcionales y visualmente atractivas.
            </p>
          </div>
        </div>

        {/* BOTONES */}
        <div className="mt-5 text-center text-md-start">
          <a href="#cv" className="btn btn-primary me-3">
            Ver mi CV
          </a>

          <a href="#contacto" className="btn btn-outline-light">
            Contacto
          </a>
        </div>
      </article>
    </section>
  );
}
