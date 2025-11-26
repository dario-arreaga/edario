"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center text-sm font-bold">
            ED
          </div>
          <div>
            <p className="font-semibold text-sm md:text-base">Electrónica Darío</p>
            <p className="text-xs text-slate-400">Servicio técnico</p>
          </div>
        </Link>

        {/* NAV PARA PANTALLAS GRANDES */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-blue-500 transition">Inicio</Link>
          <Link href="/servicios" className="hover:text-blue-500 transition">Servicios</Link>
          <Link href="/sobre-mi" className="hover:text-blue-500 transition">Sobre mí</Link>
          <Link href="/contacto" className="hover:text-blue-500 transition">Contacto</Link>
        </nav>

        {/* BOTÓN WHATSAPP (SOLO EN DESKTOP) */}
        <a
          href="https://wa.me/593991680747"
          target="_blank"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white transition"
        >
          WhatsApp
        </a>

        {/* ICONO MENÚ HAMBURGUESA (SOLO EN MÓVIL) */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <nav className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-4 space-y-4">
          <Link
            onClick={() => setOpen(false)}
            href="/"
            className="block text-slate-200 hover:text-blue-500 transition"
          >
            Inicio
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/servicios"
            className="block text-slate-200 hover:text-blue-500 transition"
          >
            Servicios
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/sobre-mi"
            className="block text-slate-200 hover:text-blue-500 transition"
          >
            Sobre mí
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/contacto"
            className="block text-slate-200 hover:text-blue-500 transition"
          >
            Contacto
          </Link>

          <a
            href="https://wa.me/593991680747"
            target="_blank"
            className="block text-center px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-sm font-semibold text-white transition"
          >
            WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
