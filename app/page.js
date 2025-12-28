import Header from "../app/components/Header";
import Footer from "../app/components/Footer";
import WhatsAppButton from "../app/components/WhatsAppButton";
import ServiceCard from "../app/components/ServiceCard";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-4 py-10 space-y-16">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-blue-500 mb-3">
              Servicio técnico profesional
            </p>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Reparación de electrónica y computación en Milagro.
            </h1>
            <p className="text-slate-300 text-sm md:text-base mb-6">
              En <span className="font-semibold">Electrónica Darío</span> reparamos
              electrodomésticos, computadoras, laptops e impresoras. También ofrecemos
              servicio técnico a domicilio y venta de licencias originales de{" "}
              <span className="font-semibold">Windows y Office</span>.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+593991680747"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition"
              >
                Llamar al 0991680747
              </a>
              <a
                href="https://wa.me/593991680747"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold border border-slate-600 text-slate-200 hover:text-blue-500 hover:border-blue-500 transition"
              >
                Escribir por WhatsApp
              </a>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold border border-slate-600 text-slate-200 hover:text-blue-500 hover:border-blue-500 transition"
              >
                Ver todos los servicios
              </Link>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Atención de lunes a sábado · Reparaciones rápidas y confiables.
            </p>
          </div>

          {/* Tarjeta lateral */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h2 className="text-base font-semibold mb-3">
              ¿Qué tipo de problema tienes?
            </h2>
            <ul className="text-sm text-slate-300 space-y-2 mb-4">
              <li>• Tu computadora o laptop está lenta o no enciende</li>
              <li>• Tu impresora no imprime o marca error</li>
              <li>• Algún electrodoméstico no prende o se apaga solo</li>
              <li>• Necesitas formateo e instalación de Windows/Office</li>
            </ul>
            <p className="text-sm text-slate-200 mb-4">
              Cuéntame tu problema por WhatsApp y te doy una evaluación rápida
              y una posible solución.
            </p>
            <a
              href="https://wa.me/593991680747"
              target="_blank"
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold bg-emerald-500 hover:bg-emerald-600 text-white transition"
            >
              Enviar mensaje ahora
            </a>
          </div>
        </section>

        {/* SERVICIOS DESTACADOS */}
        <section className="border-t border-slate-900 pt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl md:text-2xl font-semibold">
              Servicios principales
            </h2>
            <Link
              href="/servicios"
              className="text-sm text-blue-500 hover:underline"
            >
              Ver más
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ServiceCard
              title="Reparación de computadoras y laptops"
              description="Solución a problemas de hardware y software: lentitud, formateo, sistemas que no arrancan y más."
              items={[
                "Formateo e instalación de Windows",
                "Respaldo de información",
                "Limpieza interna y cambio de pasta térmica",
              ]}
            />
            <ServiceCard
              title="Electrodomésticos del hogar"
              description="Reparación de equipos como televisores, equipos de sonido, microondas y otros."
              items={[
                "Diagnóstico de fallas",
                "Reparaciones eléctricas y electrónicas",
                "Mantenimiento preventivo",
              ]}
            />
            <ServiceCard
              title="Impresoras y licencias"
              description="Instalación, configuración y reparación de impresoras. Venta de licencias originales."
              items={[
                "Instalación de impresoras",
                "Solución de errores de impresión",
                "Licencias Windows / Office",
              ]}
            />
          </div>
        </section>

        {/* SERVICIO A DOMICILIO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold mb-3">
              Servicio técnico a domicilio
            </h2>
            <p className="text-sm md:text-base text-slate-300 mb-3">
              Si no puedes traer tu equipo, voy hasta tu domicilio dentro de la
              ciudad para revisión y reparación según el caso.
            </p>
            <p className="text-sm text-slate-300 mb-4">
              Coordina la visita por WhatsApp indicando:
            </p>
            <ul className="text-sm text-slate-300 space-y-1 mb-4">
              <li>• Tipo de equipo (computadora, impresora, electrodoméstico)</li>
              <li>• Descripción breve del problema</li>
              <li>• Sector donde te encuentras</li>
            </ul>
            <p className="text-xs text-slate-500">
              *El valor de la visita se descuenta del costo de la reparación si
              aceptas el servicio.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h3 className="text-base font-semibold mb-2">
              Agenda tu visita ahora
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              Envía un mensaje directo y coordinamos día y hora:
            </p>
            <a
              href="https://wa.me/593991680747?text=Hola%2C%20deseo%20consultar%20por%20servicio%20t%C3%A9cnico%20a%20domicilio."
              target="_blank"
              className="w-full inline-flex items-center justify-center px-5 py-3 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition"
            >
              Agendar por WhatsApp
            </a>
            <p className="mt-4 text-xs text-slate-400">
              También puedes llamar al{" "}
              <span className="font-semibold text-slate-200">0991680747</span>.
            </p>
          </div>
        </section>
      </main>

      <WhatsAppButton />
      <Footer />
    </>
  );
}
