"use client";
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

// ─── Datos ────────────────────────────────────────────────────────────────────
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

const TESTIMONIOS = [
  {
    nombre: "Marcela R.",
    ciudad: "Rosario",
    texto: "Volví con tres contactos clave y una perspectiva totalmente nueva del mercado. No es una charla más.",
  },
  {
    nombre: "Diego F.",
    ciudad: "Córdoba",
    texto: "Un espacio donde los productores hablamos de verdad, sin filtros. Eso vale oro.",
  },
  {
    nombre: "Valeria M.",
    ciudad: "Buenos Aires",
    texto: "Me conecté con colegas de otras provincias que hoy son parte de mi red. Café Seguro construye.",
  },
];

const PILARES = [
  {
    icono: "☕",
    titulo: "Ambiente distendido",
    descripcion: "Sin presentaciones formales ni trajes. Un café, una mesa redonda y conversaciones que fluyen.",
  },
  {
    icono: "🤝",
    titulo: "Networking real",
    descripcion: "Conocés colegas de tu zona con los que podés crecer, colaborar y compartir cartera.",
  },
  {
    icono: "💡",
    titulo: "Conocimiento aplicado",
    descripcion: "Cada encuentro tiene un tema central con insights concretos que podés usar desde el día uno.",
  },
  {
    icono: "🛡️",
    titulo: "Respaldado por Nimbus",
    descripcion: "Organizado por NIMBUS Broker, con acceso a herramientas, tecnología y soporte para tu crecimiento.",
  },
];

// ─── Componente principal ─────────────────────────────────────────────────────
export default function Home() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [testimonioActivo, setTestimonioActivo] = useState(0);
  const [suscripto, setSuscripto] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const t = setInterval(
      () => setTestimonioActivo((p) => (p + 1) % TESTIMONIOS.length),
      4500
    );
    return () => clearInterval(t);
  }, []);

  const handleSuscripcion = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSuscripto(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0F0F0F] font-sans antialiased">
      {/* ── HEADER ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 ${
          scrolled
            ? "py-3 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DDD0] shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Image
            src="/logo-nimbus.png"
            alt="Nimbus Broker"
            width={130}
            height={38}
            priority
            className="h-9 w-auto"
          />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5A5A5A]">
            <a href="#encuentros" className="hover:text-[#C8873A] transition-colors">Encuentros</a>
            <a href="#que-es" className="hover:text-[#C8873A] transition-colors">¿Qué es?</a>
            <a href="#agenda" className="hover:text-[#C8873A] transition-colors">Agenda</a>
          </nav>
          <div>
            {session ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-[#5A5A5A] hidden md:block">{session.user?.name}</span>
                <button
                  onClick={() => signOut()}
                  className="text-sm border border-[#D4C4B0] px-4 py-2 rounded-full hover:bg-[#F5EEE4]"
                >
                  Salir
                </button>
              </div>
            ) : (
              <button
                onClick={() => signIn("google")}
                className="bg-[#0F0F0F] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all"
              >
                Acceso Productor
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5EEE4] via-[#FAF7F2] to-[#FAF7F2] -z-10" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 border border-[#C8873A]/30 text-[#C8873A] px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-8 bg-white/50">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8873A] animate-pulse" />
            Temporada 2026 . Cupos limitados
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8 text-[#0F0F0F]">
            Nimbus presenta
            <br />
            <span className="text-[#C8873A]">Café Seguro</span>
          </h1>
          <p className="text-lg md:text-xl text-[#5A5A5A] max-w-2xl mx-auto leading-relaxed mb-10">
            Encuentros exclusivos para productores de seguros que quieren crecer, conectarse y liderar la transformación del sector.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#encuentros" className="bg-[#C8873A] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#B07632] transition-all shadow-lg shadow-[#C8873A]/20">
              Ver próximos encuentros
            </a>
            <a href="#que-es" className="border border-[#D4C4B0] text-[#3A3A3A] px-8 py-4 rounded-full font-semibold text-sm hover:bg-white transition-all">
              ¿Qué es Café Seguro?
            </a>
          </div>
        </div>
      </section>

      {/* ── ¿QUÉ ES CAFÉ SEGURO? ── */}
      <section id="que-es" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C8873A] text-xs font-bold uppercase tracking-[0.2em] mb-3">El concepto</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">Más que un evento. <br /> Una comunidad.</h2>
            <p className="text-[#5A5A5A] text-lg max-w-xl mx-auto leading-relaxed">
              Café Seguro nació como respuesta a la falta de espacios genuinos de encuentro para productores. Informalidad, conocimiento y red.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILARES.map((p) => (
              <div key={p.titulo} className="bg-white border border-[#EDE4D8] rounded-2xl p-7 hover:shadow-md transition-all">
                <div className="text-3xl mb-4">{p.icono}</div>
                <h3 className="font-bold text-base mb-2">{p.titulo}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">{p.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRÓXIMOS ENCUENTROS ── */}
      <section id="encuentros" className="py-24 px-6 bg-[#F2EAE0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-[#C8873A] text-xs font-bold uppercase tracking-[0.2em] mb-3">Temporada 2026</p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Próximos encuentros</h2>
            </div>
            <p className="text-[#6B6B6B] max-w-xs text-sm leading-relaxed">
              Cada encuentro es en una ciudad diferente. Cupos reducidos para garantizar calidad de conversación.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EVENTOS.map((ev) => {
              const pct = Math.round(((ev.total - ev.disponibles) / ev.total) * 100);
              const urgente = ev.disponibles <= 10;
              return (
                <div key={ev.ciudad} className="bg-white border border-[#EDE4D8] rounded-3xl p-8 flex flex-col justify-between min-h-[400px]">
                  <div>
                    {urgente && (
                      <span className="inline-block bg-red-50 text-red-500 text-[10px] font-bold px-2 py-1 rounded mb-4">¡Últimos cupos!</span>
                    )}
                    <p className="text-[#C8873A] font-semibold text-sm mb-1">{ev.fecha}</p>
                    <h3 className="text-4xl font-extrabold mb-3">{ev.ciudad}</h3>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed mb-8">{ev.tema}</p>
                  </div>
                  <div>
                    <div className="mb-5">
                      <div className="flex justify-between text-xs text-[#9A9A9A] mb-1.5 font-medium">
                        <span>{ev.disponibles} cupos disponibles</span>
                        <span>{pct}% ocupado</span>
                      </div>
                      <div className="h-1.5 bg-[#EDE4D8] rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${urgente ? "bg-red-400" : "bg-[#C8873A]"}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                    <button className="w-full bg-[#10d210] text-black py-3.5 rounded-full text-sm font-bold hover:scale-[1.02] transition-all">
                      Inscribirme →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#C8873A] text-xs font-bold uppercase tracking-[0.2em] mb-12">Qué dicen los productores</p>
          <div className="relative min-h-[140px]">
            {TESTIMONIOS.map((t, i) => (
              <div
                key={t.nombre}
                className={`absolute inset-0 transition-all duration-700 ${
                  i === testimonioActivo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <p className="text-2xl md:text-3xl font-bold leading-snug text-[#1A1A1A] mb-6 italic">"{t.texto}"</p>
                <p className="text-sm text-[#9A9A9A] font-medium">{t.nombre} — {t.ciudad}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNER NIMBUS ── */}
      <section className="py-16 px-6 bg-[#0F0F0F]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[#C8873A] text-xs font-bold uppercase tracking-[0.2em] mb-2">Respaldado por</p>
            <h3 className="text-white text-3xl font-extrabold">NIMBUS Broker de Seguros</h3>
            <p className="text-[#808080] mt-2 text-sm max-w-md leading-relaxed">
              Tecnología y soporte real para productores que quieren operar en otro nivel.
            </p>
          </div>
          <a href="https://www.nimbus.com.ar" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-7 py-3.5 rounded-full text-sm font-bold hover:bg-white hover:text-black transition-all">
            Conocé Nimbus →
          </a>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section id="agenda" className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#F2EAE0] rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="max-w-md">
            <h2 className="text-4xl font-extrabold mb-3 tracking-tight"></h2>