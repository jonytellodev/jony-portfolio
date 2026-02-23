import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Jonathan Tello Carrasco | Dev & Graphic Designer",
  description:
    "Portafolio de Jonathan Tello Carrasco, desarrollador web y diseñador gráfico. Explora mis proyectos, habilidades y experiencia en el mundo del desarrollo y diseño.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-fill">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
