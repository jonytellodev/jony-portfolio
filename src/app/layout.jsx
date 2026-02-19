import 'bootstrap/dist/css/bootstrap.min.css'

export const metadata = {
  title: "Jonathan Tello Carrasco | Dev & Graphic Designer",
  description: "Portafolio de Jonathan Tello Carrasco, desarrollador web y diseñador gráfico. Explora mis proyectos, habilidades y experiencia en el mundo del desarrollo y diseño.",
}


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
