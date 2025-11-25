import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-black/50 backdrop-blur border-b border-[#1e293b]">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 bg-[#2563EB] rounded-xl flex items-center justify-center font-bold">
            ED
          </div>
          <div>
            <p className="font-semibold">Electrónica Darío</p>
            <span className="text-xs text-[#94a3b8]">Servicio técnico</span>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="hover:text-[#2563EB]">Inicio</Link>
          <Link href="/servicios" className="hover:text-[#2563EB]">Servicios</Link>
          <Link href="/sobre-mi" className="hover:text-[#2563EB]">Sobre mí</Link>
          <Link href="/contacto" className="hover:text-[#2563EB]">Contacto</Link>
        </nav>

        <a
          href="https://wa.me/593991680747"
          target="_blank"
          className="hidden md:inline-flex px-4 py-2 text-sm rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] transition"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
