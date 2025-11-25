export default function Footer() {
  return (
    <footer className="border-t border-[#1e293b] mt-12">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center md:text-left text-sm text-[#94a3b8]">
        <p>© {new Date().getFullYear()} Electrónica Darío — Todos los derechos reservados.</p>
        <p className="text-xs mt-2">
          Reparación de electrónica · Laptops · Computadoras · Impresoras · Licencias Windows/Office
        </p>
      </div>
    </footer>
  );
}
