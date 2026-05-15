"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

// Eventos constantes
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

// --- FOOTER COMPONENT ---
function SSNFooter() {
  return (
    <footer className="bg-white border-t border-[#EDE4D8] text-xs text-[#444] font-sans">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-8">

        {/* Fila Superior: Redes y Contacto */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-7 border-b border-[#EDE4D8]">
          {/* Izquierda: Seguinos */}
          <div>
            <div className="font-bold text-[#222] mb-3">Seguinos:</div>
            <div className="flex gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#4D7FC3] to-[#00BFFF] text-white text-lg shadow hover:opacity-80 transition"
                 aria-label="Facebook">
                <svg fill="none" height="18" width="18" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 0-10.5 8.92v-6.31H7.55V12h2.95V9.83c0-2.93 1.75-4.55 4.43-4.55 1.28 0 2.62.23 2.62.23v2.89h-1.47c-1.45 0-1.9.91-1.9 1.85V12h3.23l-.52 2.61H14.18v6.31A9.001 9.001 0 0 0 21 12z" fill="currentColor" /></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#3383C8] to-[#64A6F8] text-white text-lg shadow hover:opacity-80 transition"
                 aria-label="LinkedIn">
                <svg fill="none" height="18" width="18" viewBox="0 0 24 24"><path d="M17 16v-3.25c0-1.53-.28-2.7-2-2.7-1 0-1.6.52-1.87 1.02h-.03V10H10V16h2v-3.07c0-.82.16-1.63 1.18-1.63 1.01 0 1.02.96 1.02 1.69V16H17zM7 9c.69 0 1.25-.56 1.25-1.25S7.69 6.5 7 6.5a1.25 1.25 0 1 0 0 2.5zM8 10H6v6h2v-6zm4-7a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 2a7 7 0 1 1 0 14A7 7 0 0 1 12 5z" fill="currentColor"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#48a3c6] via-[#0b5ba7] to-[#5ed2fb] text-white text-base shadow hover:opacity-80 transition"
                 aria-label="Instagram">
                <svg fill="none" height="18" width="18" viewBox="0 0 24 24"><path d="M7.001 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1-.002 6.002A3 3 0 0 1 12 7zm4.5-.25a1.25 1.25 0 1 0 .001 2.501A1.25 1.25 0 0 0 16.5 6.75z" fill="currentColor"/></svg>
              </a>
            </div>
          </div>
          {/* Derecha: Contactanos */}
          <div className="mt-5 md:mt-0">
            <div className="font-bold text-[#222] mb-3">Contactanos</div>
            <div className="flex gap-2">
              <a href="tel:+543422571384" className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#18a0fb] to-[#1ea7fd] text-white text-lg shadow hover:opacity-80 transition" aria-label="Teléfono">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884l2-3.5a1 1 0 0 1 1.664-.11l2.2 2.834a1 1 0 0 1-.217 1.42l-1.13.85a1 1 0 0 0-.298 1.354 7.032 7.032 0 0 0 5.264 5.263 1 1 0 0 0 1.354-.297l.85-1.131a1 1 0 0 1 1.419-.217l2.834 2.201a1 1 0 0 1-.11 1.664l-3.5 2a3 3 0 0 1-2.853.04C5.71 16.405 2.885 13.58 2.128 10.13a3 3 0 0 1 .045-2.855z" /></svg>
              </a>
              <a href="mailto:info@nimbusseguros.com.ar" className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#1ea7fd] to-[#0b5ba7] text-white text-lg shadow hover:opacity-80 transition" aria-label="Mail">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 20 20"><path d="M2.94 6.94A1.5 1.5 0 0 1 4 6.5h12c.383 0 .734.144 1.06.44l-7 6.516-7-6.516zm-.44 7.06A1.5 1.5 0 0 1 2.5 14V7.707l6.646 6.175a2 2 0 0 0 2.708 0L17.5 7.708V14a1.5 1.5 0 0 1-1.5 1.5h-12a1.5 1.5 0 0 1-1.5-1.5z" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Fila Central: Legales, 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8 border-b border-[#EDE4D8] items-center text-[#404040]">
          <div>
            <span className="text-[#444]">Nº de inscripción SSN</span>
            <div className="font-semibold text-[#222] mt-1">1647</div>
          </div>
          <div>
            <span>Departamento de Orientación y Asistencia al Asegurado</span>
          </div>
          <div>
            <span className="text-[#0051FF] font-bold">0800-666-8400</span>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://www.argentina.gob.ar/ssn" target="_blank" rel="noopener noreferrer" className="text-[#0051FF] underline hover:text-[#1d6be3]">www.argentina.gob.ar/ssn</a>
            {/* Logo SSN oficial */}
            <img src="/ssn-arg-logo.png" alt="SSN" className="h-6 w-auto ml-2" />
          </div>
        </div>

        {/* Fila Inferior: Cuadros legales */}
        <div className="flex flex-col lg:flex-row gap-8 py-8">
          {/* Descargo legal a la izquierda */}
          <div className="bg-[#f8f9fb] rounded-lg p-5 flex-1 mb-3 lg:mb-0 text-[#555]">
            La entidad aseguradora dispone de un <strong>Servicio de Atención al Asegurado</strong> que atenderá las consultas y reclamos que presenten los tomadores de seguros, asegurados, beneficiarios y/o derechohabientes.
            <br /><br />
            En caso de que existiera un reclamo ante la entidad aseguradora y que el mismo no haya sido resuelto o haya sido desestimado, total o parcialmente, o que haya sido denegada su admisión, podrá comunicarse con la Superintendencia de Seguros de la Nación por teléfono al <span className="text-[#0051FF] font-bold">0800-666-8400</span>, correo electrónico a <span className="text-[#0051FF] font-semibold">consultas@ssn.gob.ar</span> o formulario disponible en la página <span className="text-[#0051FF]">argentina.gob.ar/ssn</span>
          </div>
          {/* Responsables a la derecha */}
          <div className="flex-1 text-xs text-[#444]">
            <div className="mb-2 text-[#888]">El Servicio de Atención al Asegurado está integrado por:</div>
            <div className="mb-4">
              <span className="font-semibold">Responsable:&nbsp;</span>Felipe Ricardo Luis Perdomo<br />
              Teléfono: <span className="text-[#0051FF] font-medium">+54 9 3442 57-1384</span>
            </div>
            <div>
              <span className="font-semibold">Suplente:&nbsp;</span>Guillermo Jose Joannas<br />
              Teléfono: <span className="text-[#0051FF] font-medium">+54 9 3442 46-1715</span>
            </div>
          </div>
        </div>

        <div className="text-center text-[#BBBBBB] pt-8 border-t border-[#EFEFEF] text-[10px]">
          © 2026 Nimbus Broker de Seguros S.A. — CUIT: 30-71612571-6. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-white font-sans text-[#0F0F0F]">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 border-b border-[#EDE4D8] shadow-sm px-4 md:px-10 py-3 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image src="/logo-nimbus.png" alt="Nimbus" width={110} height={36} priority className="h-8 w-auto" />
          </div>
          {/* Socials y session */}
          <div className="flex items-center gap-4">

            {/* Social icons (como estaban antes) */}
            <div className="hidden md:flex items-center gap-2 mr-5">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#4D7FC3] to-[#00BFFF] text-white text-base shadow hover:opacity-80 transition" aria-label="Facebook">
                <svg fill="none" height="17" width="17" viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 0-10.5 8.92v-6.31H7.55V12h2.95V9.83c0-2.93 1.75-4.55 4.43-4.55 1.28 0 2.62.23 2.62.23v2.89h-1.47c-1.45 0-1.9.91-1.9 1.85V12h3.23l-.52 2.61H14.18v6.31A9.001 9.001 0 0 0 21 12z" fill="currentColor" /></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#3383C8] to-[#64A6F8] text-white text-base shadow hover:opacity-80 transition" aria-label="LinkedIn">
                <svg fill="none" height="17" width="17" viewBox="0 0 24 24"><path d="M17 16v-3.25c0-1.53-.28-2.7-2-2.7-1 0-1.6.52-1.87 1.02h-.03V10H10V16h2v-3.07c0-.82.16-1.63 1.18-1.63 1.01 0 1.02.96 1.02 1.69V16H17zM7 9c.69 0 1.25-.56 1.25-1.25S7.69 6.5 7 6.5a1.25 1.25 0 1 0 0 2.5zM8 10H6v6h2v-6zm4-7a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 2a7 7 0 1 1 0 14A7 7 0 0 1 12 5z" fill="currentColor"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#48a3c6] via-[#0b5ba7] to-[#5ed2fb] text-white text-base shadow hover:opacity-80 transition" aria-label="Instagram">
                <svg fill="none" height="17" width="17" viewBox="0 0 24 24"><path d="M7.001 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1-.002 6.002A3 3 0 0 1 12 7zm4.5-.25a1.25 1.25 0 1 0 .001 2.501A1.25 1.25 0 0 0 16.5 6.75z" fill="currentColor"/></svg>
              </a>
            </div>
            {/* Perfil logueado */}
            {session ? (
              <div className="flex items-center gap-3">
                {/* Imagen perfil */}
                {session.user?.image && (
                  <img src={session.user.image} alt={session.user?.name || "Perfil"} className="w-8 h-8 rounded-full shadow object-cover border border-[#D4C4B0]" />
                )}
                <span className="text-sm font-medium hidden md:block">{session.user?.name}</span>
                <button onClick={() => signOut()} className="bg-[#002D72] text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-[#21488A] transition">
                  Salir
                </button>
              </div>
            ) : (
              <button onClick={() => signIn("google")} className="flex items-center gap-2 bg-white border border-[#D4C4B0] text-[#0F0F0F] px-4 py-2 rounded-full text-xs font-bold shadow-sm hover:bg-gray-50 transition-all">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                Acceso Productor
              </button>
            )}
          </div>
        </div>
      </header>

      {/* HERO principal moderno */}
      <section className="min-h-[480px] flex flex-col justify-center items-center text-center px-4 pt-32 pb-16 bg-white">
        <h1 className="uppercase font-black text-[clamp(44px,8vw,86px)] tracking-tight mb-7 mt-4 text-[#002D72]">CAFE SEGURO</h1>
        <p className="max-w-2xl text-[18px] md:text-[20px] text-[#4A4A4A] mb-8 leading-relaxed">
          Encuentros reales para productores que impulsan la transformación del sector con tecnología y disrupción.
        </p>
        <div className="bg-white border-l-4 border-[#10d210] px-6 py-4 italic text-[#666] text-[16px] max-w-lg w-full mx-auto text-left shadow-sm">
          El seguro se toma con café.
        </div>
      </section>
      
      {/* PRÓXIMOS ENCUENTROS */}
      <section id="encuentros" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-extrabold uppercase tracking-wide text-center mb-12 text-[#002D72]">Próximos Encuentros</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENTOS.map((ev) => (
              <div key={ev.ciudad} className="group bg-white border border-[#EDE4D8] rounded-3xl p-8 flex flex-col justify-between shadow-sm transition-all hover:shadow-lg hover:shadow-[#9fd7fb]/20 hover:-translate-y-2 min-h-[370px]">
                <div>
                  <div className="text-[#25D366] font-bold text-xs mb-3">{ev.fecha}</div>
                  <h3 className="text-3xl font-black mb-2 group-hover:text-[#0b5ba7] transition-colors">
                    {ev.ciudad}
                  </h3>
                  <p className="text-[#575757] text-xs mb-10">{ev.tema}</p>
                </div>
                <button
                  className="w-full bg-[#002D72] hover:bg-[#2553ad] text-white py-3 rounded-full font-bold text-base shadow-lg transition-all duration-200"
                  disabled={ev.disponibles <= 0}
                >
                  {ev.disponibles > 0 ? "Inscribirme →" : "Sin vacantes"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <SSNFooter />
    </div>
  );
}