import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: "Sobre mí | Electrónica Darío",
};

export default function SobreMiPage() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-10">
        <section className="max-w-3xl space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Sobre Electrónica Darío
          </h1>
          <p className="text-sm md:text-base text-slate-300">
            Electrónica Darío nace con el objetivo de ofrecer un servicio técnico
            honesto, claro y accesible para quienes necesitan reparar sus equipos
            electrónicos sin sorpresas ni cuentos.
          </p>
          <p className="text-sm md:text-base text-slate-300">
            Cuento con experiencia en reparación de computadoras, laptops,
            impresoras y diversos electrodomésticos, así como en instalación de
            sistemas operativos y licencias de software. La idea es siempre buscar
            la solución más conveniente para el cliente, explicando de forma
            sencilla qué se va a hacer y por qué.
          </p>
          <p className="text-sm md:text-base text-slate-300">
            Trabajo tanto en taller como a domicilio, según lo que sea más cómodo
            para ti, siempre con atención personalizada y trato directo.
          </p>
          <p className="text-sm md:text-base text-slate-300">
            Si tienes alguna duda o quieres consultar por un equipo, puedes
            comunicarte directamente por WhatsApp o llamada al{" "}
            <span className="font-semibold text-slate-100">0991680747</span>.
          </p>
        </section>
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
