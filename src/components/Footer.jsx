import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-light pt-5 mt-auto">
        <div className="container">
          {/* Links */}
          <div className="row gy-4 pb-4">
            <div className="col-12 col-md-3">
              <Image
                            src="/jt-ext.png"
                            alt="Logo"
                            height={35}
                            width={212.56}
                            className="d-inline-block align-top"
                          />
              <p className="small text-secondary">
                Desarrollado por JDS Desarrollo Web. <br />
                {new Date().getFullYear()} - Todos los derechos reservados.
              </p>
            </div>

            <div className="col-6 col-md-2">
              <h6>Portfolios</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-secondary text-decoration-none">
                    Diseño Gráfico
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary text-decoration-none">
                    Web Development
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2">
              <h6>Información</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-secondary text-decoration-none">
                    Sobre Mí
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary text-decoration-none">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary text-decoration-none">
                    CV Online
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-3">
              <h6>Redes Sociales</h6>
              <div className="d-flex gap-3">
                <a href="#" className="text-secondary text-decoration-none">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/jonytelloc90/" className="text-secondary text-decoration-none">
                  LinkedIn
                </a>
                <a href="https://github.com/jonytellodev" className="text-secondary text-decoration-none">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
