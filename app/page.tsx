"use client";
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const EVENTOS = [
  { ciudad: "Rosario", fecha: "22 de agosto, 2026", tema: "Big Data y Trazabilidad en el mercado actual.", disponibles: 12, total: 30 },
  { ciudad: "Córdoba", fecha: "05 de septiembre, 2026", tema: "Innovación en procesos de suscripción digital.", disponibles: 22, total: 30 },
  { ciudad: "Santa Fe", fecha: "19 de septiembre, 2026", tema: "Networking y transformación del productor.", disponibles: 28, total: 30 }
];

export default function Home() {
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0F0F0F] font-sans antialiased">
      {/* HEADER CON LOGO AZUL GRANDE, FOTO Y BIENVENIDA */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 ${scrolled ? "py-3 bg-white/95 backdrop-blur-md border-b border-[#E8DDD0]" : "py-5 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo 2x grande y azul */}
            <Image
              src="/logo-nimbus.png"
              alt="Nimbus"
              width={260}
              height={76}
              priority
              className="h-18 w-auto"
              style={{ filter: "brightness(0) saturate(100%) invert(26%) sepia(97%) saturate(2002%) hue-rotate(186deg) brightness(95%) contrast(102%)" }}
            />
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://wa.me/tu-numero" target="_blank" className="hidden md:flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-full text-sm font-bold shadow-sm hover:bg-[#128C7E] transition-colors">
              <span className="text-lg">WhatsApp</span>
            </a>
            {session ? (
              <div className="flex items-center gap-4">
                {/* Foto de perfil del usuario logueado */}
                {session.user?.image && (
                  <Image
                    src={session.user.image}
                    alt={session.user?.name || "Perfil"}
                    width={44}
                    height={44}
                    className="rounded-full border-2 border-blue-600 shadow-sm"
                  />
                )}
                <div className="flex flex-col items-end">
                  {/* Mensaje de bienvenida */}
                  <span className="text-sm font-semibold text-blue-900">¡Bienvenido{session.user?.name ? `, ${session.user?.name}` : ""}!</span>
                  <button
                    onClick={() => signOut()}
                    className="bg-orange-600 text-white px-5 py-2 mt-1 rounded-full text-sm font-bold"
                  >
                    Salir
                  </button>
                </div>
              </div>
            ) : (
              <button onClick={() => signIn("google")} className="flex items-center gap-2 bg-white border border-[#D4C4B0] text-[#0F0F0F] px-5 py-2.5 rounded-full text-sm font-bold shadow-sm hover:bg-gray-50 transition-all">
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5" />
                Acceso Productor
              </button>
            )}
          </div>
        </div>
      </header>

      {/* HERO SECTION - LA IMPRONTA */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#F5EEE4] via-white to-white -z-10" />
        <div className="inline-block px-4 py-1.5 mb-6 border border-[#C8873A]/20 bg-[#C8873A]/5 rounded-full text-[#C8873A] text-xs font-bold uppercase tracking-widest">
          Experiencia Exclusiva
        </div>
        <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
          Nimbus presenta:<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C57A8] to-[#27449E]">Café Seguro</span>
        </h1>
        <p className="text-xl text-[#5A5A5A] max-w-2xl mx-auto mb-10 leading-relaxed">
          Encuentros reales para productores que impulsan la transformación del sector con tecnología y disrupción.
        </p>
        <div className="bg-white/50 backdrop-blur-sm border border-[#E8DDD0] p-4 rounded-2xl inline-flex flex-col gap-2">
          <p className="text-sm italic text-[#808080]">El seguro se toma con café.</p>
        </div>
      </section>

      {/* PRÓXIMOS ENCUENTROS */}
      <section id="encuentros" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-16 uppercase tracking-widest">Próximos Encuentros</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENTOS.map((ev) => (
              <div key={ev.ciudad} className="group bg-white border border-[#EDE4D8] rounded-[40px] p-10 flex flex-col justify-between transition-all hover:shadow-2xl hover:shadow-[#C8873A]/10 hover:-translate-y-2 min-h-[400px]">
                <div>
                  <div className="text-[#2C57A8] font-bold text-sm mb-4">{ev.fecha}</div>
                  <h3 className="text-4xl font-black mb-4 group-hover:text-[#2C57A8] transition-colors">{ev.ciudad}</h3>
                  <p className="text-[#6B6B6B] leading-relaxed">{ev.tema}</p>
                </div>
                <button className="w-full bg-[#10d210] hover:bg-[#0eb80e] text-white py-4 rounded-full font-black text-lg shadow-lg shadow-[#10d210]/20 transition-all">
                  Inscribirme →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-[#EDE4D8] py-20 px-6 text-center">
        <Image
          src="/logo-nimbus.png"
          alt="Nimbus"
          width={240}
          height={70}
          className="opacity-40 mx-auto mb-8 grayscale"
          style={{ filter: "brightness(0) saturate(100%) invert(26%) sepia(97%) saturate(2002%) hue-rotate(186deg) brightness(95%) contrast(102%)" }}
        />
        <div className="flex justify-center gap-6 mb-8 text-[#9A9A9A]">
           <span className="text-xs">NIMBUS BROKER DE SEGUROS S.A.</span>
           <span className="text-xs">CUIT: 30-71612571-6</span>
        </div>
      </footer>
    </div>
  );
}