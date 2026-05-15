"use client";
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const EVENTOS = [
  { ciudad: "Rosario", fecha: "05 de septiembre, 2026", tema: "Innovación en procesos de suscripción digital.", disponibles: 12 },
  { ciudad: "Córdoba", fecha: "05 de septiembre, 2026", tema: "Innovación en procesos de suscripción digital.", disponibles: 22 },
  { ciudad: "Santa Fe", fecha: "10 de septiembre, 2026", tema: "Networking y transformación del productor.", disponibles: 28 }
];

export default function Home() {
  const { data: session } = useSession();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F1EA] text-[#2D2926] font-serif antialiased px-4 md:px-8 py-6">
      
      {/* HEADER ESTILO CARTA - BLANCO Y REDONDEADO */}
      <header className="max-w-7xl mx-auto mb-12">
        <div className="bg-white/80 backdrop-blur-sm border border-black/5 shadow-sm rounded-[30px] px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Logo Azul Extraído */}
            <img 
              src="https://www.nimbusseguros.com/images/logo.png" 
              alt="Nimbus" 
              className="h-10 w-auto"
            />
          </div>

          <div className="flex items-center">
            {session ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">{session.user?.name}</span>
                <button onClick={() => signOut()} className="text-xs uppercase tracking-widest border-b border-black">Salir</button>
              </div>
            ) : (
              <button 
                onClick={() => signIn("google")}
                className="bg-white border border-gray-200 shadow-md hover:shadow-lg rounded-full pl-2 pr-6 py-2 flex items-center gap-3 transition-all transform hover:-translate-y-0.5"
              >
                <div className="bg-white p-1 rounded-full shadow-inner">
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" className="w-8 h-8" />
                </div>
                <span className="text-sm font-bold text-gray-700">Acceso Productor</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* HERO SECTION - TIPOGRAFÍA IMPACTANTE */}
      <main className="max-w-5xl mx-auto text-center mb-24">
        <div className="inline-block px-6 py-2 mb-8 bg-[#BC8B5B] text-white rounded-xl text-[10px] font-bold uppercase tracking-[0.3em] shadow-sm">
          Experiencia Exclusiva
        </div>

        <h1 className="text-5xl md:text-[85px] font-bold leading-[0.95] tracking-tight mb-8 text-[#2D2926]">
          Nimbus presenta: <br />
          <span className="italic font-normal">Café Seguro</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-snug">
            Encuentros reales para productores que impulsan la transformación del sector con tecnología y disrupción.
          </p>
          <div className="relative group">
            <div className="absolute -inset-2 bg-[#BC8B5B]/10 rounded-full blur-xl transition-all group-hover:bg-[#BC8B5B]/20"></div>
            <img src="https://i.imgur.com/8L8tZ3v.png" alt="Café" className="relative w-48 md:w-64 rotate-12 drop-shadow-2xl" />
          </div>
        </div>

        <div className="inline-block border-2 border-[#BC8B5B]/30 rounded-[20px] px-10 py-4 bg-white/40 shadow-inner">
          <p className="text-xl italic font-light">El seguro se toma con café</p>
        </div>
      </main>

      {/* SECCIÓN ENCUENTROS - TARJETAS LIMPIAS */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">Próximos Encuentros</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {EVENTOS.map((ev, i) => (
            <div key={i} className="bg-white/60 backdrop-blur-sm border border-black/5 rounded-[35px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <span className="text-xs text-gray-400 mb-2 uppercase tracking-widest">{ev.fecha}</span>
              <h3 className="text-4xl font-bold mb-4 text-[#3B5998]">{ev.ciudad}</h3>
              <p className="text-sm text-gray-500 mb-10 leading-relaxed">{ev.tema}</p>
              
              <button className="bg-[#60A36D] text-white px-10 py-3 rounded-2xl font-bold text-sm shadow-lg shadow-[#60A36D]/30 hover:bg-[#4D8C59] transition-all">
                Inscribirme →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER MINIMALISTA */}
      <footer className="max-w-7xl mx-auto pt-16 border-t border-black/5 text-center text-gray-400">
        <p className="text-[10px] uppercase tracking-[0.2em] mb-4">Nimbus Broker de Seguros</p>
        <div className="flex justify-center gap-8 text-[11px] mb-12 font-medium">
          <a href="#" className="hover:text-black">NOSOTROS</a>
          <a href="#" className="hover:text-black">SSN</a>
          <a href="#" className="hover:text-black">WHATSAPP</a>
        </div>
      </footer>
    </div>
  );
}