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

// Botón flotante para WhatsApp solo en mobile
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

function RedesSociales() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-[#1d3557] font-bold">Seguinos:</span>
      <a
        href="https://facebook.com/nimbus"
        aria-label="Facebook"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-2 bg-gradient-to-tr from-[#2074E0] to-[#68C5FB] hover:from-[#1664b8] hover:to-[#7ed6fb] transition-colors"
      >
        {/* Facebook Icon */}
        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M15.117,8.38V6.799c0-.758.505-.938.861-.938h1.903V3.055L14.82,3C12.705,3,12.081,4.185,12.081,6.003V8.38H10v2.972h2.077V21h3.04V11.352H18l.268-2.972H15.117Z"/></svg>
      </a>
      <a
        href="https://linkedin.com/company/nimbus"
        aria-label="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-2 bg-gradient-to-tr from-[#2074E0] to-[#68C5FB] hover:from-[#1664b8] hover:to-[#7ed6fb] transition-colors"
      >
        {/* LinkedIn Icon */}
        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-8 7H7v8h4v-8zm-2-2a1 1 0 100-2 1 1 0 000 2zm6 2h-2v8h2v-4c0-.6.5-1 1-1s1 .4 1 1v4h2v-4.2c0-2.5-2-2.8-2-2.8zm-1-2a1 1 0 110-2 1 1 0 010 2z"/></svg>
      </a>
      <a
        href="https://instagram.com/nimbus"
        aria-label="Instagram"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-2 bg-gradient-to-tr from-[#2074E0] to-[#68C5FB] hover:from-[#1664b8] hover:to-[#7ed6fb] transition-colors"
      >
        {/* Instagram Icon */}
        <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2C5.678 2 4 3.678 4 5.75v12.5C4 20.322 5.678 22 7.75 22h8.5C18.322 22 20 20.322 20 18.25V5.75C20 3.678 18.322 2 16.25 2h-8.5zm0 1.5h8.5c1.202 0 2.25 1.048 2.25 2.25v12.5c0 1.202-1.048 2.25-2.25 2.25h-8.5A2.256 2.256 0 015.5 18.25V5.75C5.5 4.548 6.548 3.5 7.75 3.5zm4.25 3A5.25 5.25 0 007 11.75c0 2.761 2.239 5 5 5s5-2.239 5-5A5.25 5.25 0 0012 6.5zM12 8a3.75 3.75 0 110 7.5A3.75 3.75 0 0112 8zm5.25-.75a.75.75 0 100 1.5.75.75 0 000-1.5z"/></svg>
      </a>
    </div>
  );
}

function FooterInst() {
  return (
    <footer className="bg-white border-t border-[#EDE4D8] text-[#24292f] pt-9 pb-4 px-2 md:px-0 text-xs">
      {/* Fila Superior */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto pb-7 border-b border-[#ececec] gap-5">
        <RedesSociales />
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-[#1d3557]">Contactanos:</span>
          <a href="tel:+541145678900" className="flex items-center gap-1 hover:underline text-[#1976d2] font-bold">
            <svg className="inline-block h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.78 19.78 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.13.96.37 1.89.73 2.77a2 2 0 01-.45 2.11l-1.27 1.27a16 16 0 006.58 6.58l1.27-1.27a2 2 0 012.11-.45c.88.36 1.81.6 2.77.73A2 2 0 0122 16.92z"></path></svg>
            +54 11 4567-8900
          </a>
          <a href="mailto:info@nimbus.com.ar" className="flex items-center gap-1 hover:underline text-[#1976d2] font-bold">
            <svg className="inline-block h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"></path><path d="M22,6L12,13L2,6"></path></svg>
            info@nimbus.com.ar
          </a>
        </div>
      </div>
      {/* Fila Central Legales */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4 items-center justify-between pt-6 pb-4 text-[#23272f]">
        <div className="flex items-center">
          <span className="font-bold text-[#0F1C47]">N° SSN 1647</span>
        </div>
        <div className="">
          Departamento de Orientación y Asistencia al Asegurado
        </div>
        <div className="flex items-center">
          <span className="mr-2">0800-666-8400</span>
        </div>
        <div className="flex items-center justify-end gap-2">
          <a
            href="https://www.argentina.gob.ar/ssn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1976d2] underline font-bold"
          >
            argentina.gob.ar/ssn
          </a>
          <img
            src="/logo-ssn.png"
            alt="SSN"
            className="h-6 w-auto"
          />
        </div>
      </div>
      {/* Fila Inferior Legal + Servicio Atención */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-6 pt-6 mt-3 border-t border-[#ececec]">
        <div className="bg-[#F9F9FA] p-4 rounded-md md:w-2/5">
          <span>
            Servicio de Atención al Asegurado: Para reclamos y consultas puede comunicarse con la SSN, www.argentina.gob.ar/ssn, 0800-666-8400, <b>servicioalasegurado@ssn.gob.ar</b>
          </span>
        </div>
        <div className="flex-1 flex flex-col gap-1 text-[11px]">
          <span className="font-semibold text-[#0F1C47]">Servicio de Atención al Asegurado Nimbus</span>
          <div>
            <span className="font-bold text-[#23272f]">Felipe Ricardo Luis Perdomo</span> - <span className="text-[#1976d2] font-bold">+54 9 341 591-0132</span>
          </div>
          <div>
            <span className="font-bold text-[#23272f]">Guillermo Jose Joannas</span> - <span className="text-[#1976d2] font-bold">+54 9 341 617-9072</span>
          </div>
        </div>
      </div>
    </footer>
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
    <div className="min-h-screen bg-[#FAF7F2] text-[#0F0F0F] font-sans antialiased relative">
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
            <div className="hidden md:block">
              <RedesSociales />
            </div>
            <a
              href="https://wa.me/tu-numero"
              target="_blank"
              className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-bold shadow-sm hover:bg-[#128C7E] transition-colors"
            >
              <span className="text-lg">WhatsApp</span>
            </a>
            {session ? (
              <div className="flex items-center gap-3">
                {session.user?.image &&
                  <Image
                    src={session.user.image}
                    alt={session.user?.name || "Perfil"}
                    width={36}
                    height={36}
                    className="rounded-full object-cover border-2 border-[#C8873A] bg-white"
                  />}
                <span className="text-sm font-medium hidden md:block truncate max-w-[130px]">{session.user?.name}</span>
                <button
                  onClick={() => signOut()}
                  className="bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-bold"
                >
                  Salir
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="flex items-center gap-2 bg-white border border-[#D4C4B0] text-[#0F0F0F] px-5 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-gray-50 transition-all"
              >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                Acceso Productor
              </button>
            )}
          </div>
        </div>
      </header>

      <FloatingWhatsApp />

      {/* HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-6 pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#F5EEE4] via-[#FAF7F2] to-[#FAF7F2] -z-10" />
        <div className="inline-block px-4 py-1.5 mb-6 border border-[#C8873A]/20 bg-[#C8873A]/5 rounded-full text-[#C8873A] text-xs font-bold uppercase tracking-widest">
          Experiencia Exclusiva
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
          Nimbus presenta:<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C8873A] to-[#A66D2D]">Café Seguro</span>
        </h1>
        <p className="text-xl text-[#5A5A5A] max-w-2xl mx-auto mb-8 leading-relaxed">
          Encuentros reales para productores que impulsan la transformación del sector con tecnología y disrupción.
        </p>
        <div className="bg-white/60 backdrop-blur border border-[#E8DDD0] p-4 rounded-2xl inline-flex flex-col gap-2 shadow">
          <p className="text-sm italic text-[#808080]">El seguro se toma con café.</p>
        </div>
      </section>

      {/* Próximos Encuentros */}
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

      {/* Footer institucional Argentina */}
      <FooterInst />
    </div>
  );
}