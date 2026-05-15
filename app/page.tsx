"use client";
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

// Simulación de próximos eventos - ideal importar de un CMS/API luego
const EVENTOS = [
  {
    ciudad: "Rosario",
    fecha: "22 de agosto, 2026",
    tema: "Big Data y Trazabilidad en el mercado actual.",
    disponibles: 12,
    total: 30,
  },
  {
    ciudad: "Córdoba",
    fecha: "05 de septiembre, 2026",
    tema: "Innovación en procesos de suscripción digital.",
    disponibles: 22,
    total: 30,
  },
  {
    ciudad: "Santa Fe",
    fecha: "19 de septiembre, 2026",
    tema: "Networking y transformación del productor.",
    disponibles: 28,
    total: 30,
  },
];

// Botón flotante para WhatsApp
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/tu-numero"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[60] flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] transition-colors text-white shadow-xl px-4 py-3 rounded-full font-bold text-base md:hidden"
      aria-label="Contactar por WhatsApp"
    >
      <svg className="w-6 h-6" fill="none" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="16" fill="#25D366" />
        <path
          d="M23.8 19.6c-.4-.2-2.4-1.2-2.8-1.3s-.7-.2-1 .2-1.1 1.3-1.3 1.5c-.2.2-.5.2-.9 0s-1.6-.5-3.1-2.1c-1.1-1.1-1.8-2.4-2.1-2.9-.2-.5 0-.7.2-.9.2-.2.5-.6.8-.9.2-.3.3-.5.5-.8.2-.2.1-.4 0-.6-.1-.2-.9-2.3-1.2-3.1-.3-.7-.5-.6-.7-.6h-.6c-.2 0-.6.1-.9.3-.3.2-1.1 1.1-1.1 2.7s1.2 3.3 1.4 3.5c.2.3 2.2 3.6 5.4 4.8.8.3 1.4.5 1.9.5.6.1 1.2 0 1.7-.4l.1-.1c.4-.5 1.3-1.2 1.4-1.5 0-.2.1-.5-.1-.7z"
          fill="#fff"
        />
      </svg>
      WhatsApp
    </a>
  );
}

export default function Home() {
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);

  // Mejor UX: Detener header antes del scroll profundo y reducir tamaño
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0F0F0F] font-sans antialiased">
      {/* HEADER PRINCIPAL */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 ${scrolled
          ? "py-2 bg-[#FAF7F2]/95 backdrop-blur-2xl border-b border-[#E8DDD0] shadow"
          : "py-5 bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/logo-nimbus.png"
              alt="Nimbus"
              width={130}
              height={38}
              priority
              className="h-9 w-auto"
            />
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/tu-numero"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:bg-[#128C7E] transition-all"
              aria-label="Contactar por WhatsApp"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="16" fill="#25D366" />
                <path
                  d="M23.8 19.6c-.4-.2-2.4-1.2-2.8-1.3s-.7-.2-1 .2-1.1 1.3-1.3 1.5c-.2.2-.5.2-.9 0s-1.6-.5-3.1-2.1c-1.1-1.1-1.8-2.4-2.1-2.9-.2-.5 0-.7.2-.9.2-.2.5-.6.8-.9.2-.3.3-.5.5-.8.2-.2.1-.4 0-.6-.1-.2-.9-2.3-1.2-3.1-.3-.7-.5-.6-.7-.6h-.6c-.2 0-.6.1-.9.3-.3.2-1.1 1.1-1.1 2.7s1.2 3.3 1.4 3.5c.2.3 2.2 3.6 5.4 4.8.8.3 1.4.5 1.9.5.6.1 1.2 0 1.7-.4l.1-.1c.4-.5 1.3-1.2 1.4-1.5 0-.2.1-.5-.1-.7z"
                  fill="#fff"
                />
              </svg>
              <span className="text-base font-semibold">WhatsApp</span>
            </a>
            {session ? (
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium hidden md:block truncate max-w-[160px]">
                  {session.user?.name}
                </span>
                <button
                  onClick={() => signOut()}
                  className="bg-gradient-to-tr from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:to-orange-700 transition-colors text-white px-5 py-2 rounded-full text-sm font-bold shadow-md"
                >
                  Salir
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="flex items-center gap-2 bg-white border border-[#E5D2BA] text-[#0F0F0F] px-5 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-gray-50 transition-all"
                aria-label="Acceso con Google"
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  className="w-5 h-5"
                  loading="lazy"
                />
                Acceso Productor
              </button>
            )}
          </div>
        </div>
      </header>

      <FloatingWhatsApp />

      {/* HERO */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FFF3DF] via-[#FAF7F2] to-[#F3E7DB] -z-10 pointer-events-none" />
        <div className="inline-block px-5 py-2 mb-8 border border-[#C8873A]/30 bg-[#fffaf2bb] rounded-full text-[#C8873A] text-sm md:text-base font-bold uppercase tracking-widest shadow-sm backdrop-blur">
          EXPERIENCIA EXCLUSIVA
        </div>
        <h1 className="text-5xl md:text-7xl xl:text-8xl font-black mb-7 tracking-tight bg-gradient-to-r from-[#C8873A] via-[#FDA94B] to-[#A66D2D] text-transparent bg-clip-text drop-shadow-sm">
          Nimbus presenta:<br />
          <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#A66D2D] via-[#C8873A] to-[#FDA94B]">
            Café Seguro
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-[#5A5A5A] max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          Encuentros reales para productores que impulsan la transformación del sector con tecnología y disrupción.
        </p>
        <div className="bg-white/70 backdrop-blur-md border border-[#E8DDD0] p-4 rounded-2xl inline-flex flex-col gap-1.5 shadow">
          <p className="text-base italic text-[#707070]">
            El seguro se toma con café.
          </p>
        </div>
        <div className="absolute bottom-[-3.5rem] left-0 w-full flex justify-center pointer-events-none md:bottom-[-4rem]">
          <span className="block animate-bounce text-[#C8873A] text-5xl opacity-60 select-none">↓</span>
        </div>
      </section>

      {/* PRÓXIMOS ENCUENTROS */}
      <section id="encuentros" className="py-24 px-5 md:px-7 bg-gradient-to-b from-[#FAF7F2] via-[#FBF8F4] to-[#FFF8EF]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 uppercase tracking-widest text-[#C8873A] drop-shadow-sm">
            Próximos Encuentros
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {EVENTOS.map((ev) => (
              <div
                key={ev.ciudad}
                className="group bg-white border border-[#EDE4D8] rounded-[36px] p-9 flex flex-col justify-between shadow-md shadow-[#C8873A]/5 hover:shadow-xl hover:shadow-[#C8873A]/20 hover:-translate-y-2 transition-all min-h-[400px] relative"
              >
                <div>
                  <div className="text-[#C8873A] font-bold text-sm mb-3">
                    {ev.fecha}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-3 group-hover:text-[#C8873A] transition-colors truncate">
                    {ev.ciudad}
                  </h3>
                  <p className="text-[#6B6B6B] leading-relaxed min-h-[54px]">{ev.tema}</p>
                </div>
                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex items-center justify-between text-xs text-[#C8873A] font-semibold px-1">
                    <span>
                      {ev.disponibles} lugares libres
                    </span>
                    <span>
                      {ev.total} cupos
                    </span>
                  </div>
                  <button
                    disabled={ev.disponibles <= 0}
                    className={`w-full flex justify-center items-center gap-2 bg-gradient-to-br from-[#25D366] via-[#10d210] to-[#37e178] hover:from-[#10d210] hover:to-[#0eb80e] text-white font-extrabold rounded-full text-lg py-4 shadow-lg transition-all duration-150 ${
                      ev.disponibles === 0
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    {ev.disponibles === 0 ? "Agotado" : "Inscribirme →"}
                  </button>
                </div>
                <span className="absolute top-6 right-8 text-xs font-bold uppercase text-[#E0BD8C] tracking-widest">
                  Evento
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER MEJORADO */}
      <footer className="bg-white border-t border-[#EDE4D8] py-16 px-6 text-center mt-10">
        <Image
          src="/logo-nimbus.png"
          alt="Nimbus"
          width={120}
          height={35}
          className="opacity-50 mx-auto mb-7 grayscale transition-all hover:grayscale-0 hover:opacity-70"
        />
        <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-6 mb-8 text-[#9A9A9A]">
          <span className="text-xs md:text-sm font-semibold">
            NIMBUS BROKER DE SEGUROS S.A.
          </span>
          <span className="text-xs md:text-sm font-semibold hidden md:inline">
            |
          </span>
          <span className="text-xs md:text-sm font-semibold">
            CUIT: 30-71612571-6
          </span>
        </div>
        <div className="text-xs text-[#B9AFA0] font-medium">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}