import "./globals.css";

export const metadata = {
  title: "Electrónica Darío | Servicio Técnico en Guayaquil",
  description:
    "Reparación de electrodomésticos, computadoras, laptops e impresoras. Servicio técnico a domicilio y venta de licencias de Windows y Office.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="2d2899e7-348c-419c-b75d-04bfd898f30f"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
