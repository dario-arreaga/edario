import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "Contacto | Electrónica Darío",
};

export default function ContactoPage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <section className="max-w-2xl space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">Contacto</h1>
          <p className="text-sm md:text-base text-slate-300">
            Puedes contactarme por llamada o WhatsApp para consultas, cotizaciones
            y agendar visitas a domicilio.
          </p>

          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-[0_5px_25px_rgba(0,0,0,0.45)] space-y-4">
            <div>
              <h2 className="text-sm font-semibold mb-1">Teléfono / WhatsApp</h2>
              <p className="text-sm text-slate-200">
                <a href="tel:+593991680747" className="hover:text-blue-500">
                  0991680747
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-sm font-semibold mb-1">WhatsApp directo</h2>
              <a
                href="https://wa.me/593991680747"
                target="_blank"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-sm font-semibold text-white transition"
              >
                Abrir chat de WhatsApp
              </a>
            </div>

            <div>
              <h2 className="text-sm font-semibold mb-1">Horario de atención</h2>
              <p className="text-sm text-slate-300">
                Lunes a sábado · 9:00 a 18:00
              </p>
            </div>

            <p className="text-xs text-slate-500">
              Si no contesto de inmediato, probablemente estoy en reparación o en
              ruta a domicilio. Déjame tu mensaje y te respondo lo antes posible.
            </p>
          </div>
<div className="rounded-xl overflow-hidden shadow-lg border border-slate-800">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d996.763966987581!2d-79.57682452769947!3d-2.1322274611730463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d4757c51b8053%3A0xf10785f881b13942!2zRWxlY3Ryw7NuaWNhICJEYXLDrW8i!5e0!3m2!1ses!2sec!4v1764107576433!5m2!1ses!2sec"
    
    className="w-full h-[350px] md:h-[450px]"
    
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

        </section>

      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
