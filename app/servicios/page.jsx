import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import ServiceCard from "../components/ServiceCard";

export const metadata = {
  title: "Servicios | Electrónica Darío",
};

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        <section>
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">
            Servicios de Electrónica Darío
          </h1>
          <p className="text-sm md:text-base text-slate-300 mb-6">
            Ofrezco servicio técnico profesional para equipos de electrónica y
            computación, tanto en taller como a domicilio.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <ServiceCard
              title="Computadoras y laptops"
              description="Formateo, instalación de sistemas, cambio de componentes, limpieza interna y optimización."
              items={[
                "Reinstalación de Windows",
                "Instalación de programas básicos",
                "Cambio de disco duro a SSD",
                "Ampliación de memoria RAM",
                "Limpieza interna completa",
              ]}
            />
            <ServiceCard
              title="Impresoras"
              description="Instalación, configuración y solución de errores comunes de impresión."
              items={[
                "Instalación por USB o red",
                "Solución de errores y atascos",
                "Mantenimiento básico",
              ]}
            />
            <ServiceCard
              title="Electrodomésticos electrónicos"
              description="Revisión y reparación de equipos electrónicos del hogar (según evaluación)."
              items={[
                "Televisores",
                "Equipos de sonido",
                "Microondas",
                "Otros dispositivos electrónicos",
              ]}
            />
            <ServiceCard
              title="Licencias de software"
              description="Venta e instalación de licencias originales de Windows y Office."
              items={[
                "Licencias Windows",
                "Licencias Microsoft Office",
                "Instalación y activación",
              ]}
            />
          </div>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-[0_5px_25px_rgba(0,0,0,0.45)]">
            <h2 className="text-lg font-semibold mb-2">¿No ves tu problema aquí?</h2>
            <p className="text-sm text-slate-300 mb-4">
              Escríbeme por WhatsApp, cuéntame qué equipo tienes y qué falla
              presenta, y te digo si puedo ayudarte y cuánto podría costar la
              reparación.
            </p>
            <a
              href="https://wa.me/593991680747"
              target="_blank"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-sm font-semibold text-white transition"
            >
              Consultar por WhatsApp
            </a>
          </div>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
