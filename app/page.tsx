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
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2D2926] font-sans antialiased">
      {/* HEADER PREMIUM - CORREGIDO */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/90 backdrop-blur-sm px-6 py-4 flex items-center justify-between border-b border-[#E8DDD0]">
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          {/* Logo Nimbus y Acceso Productor Unificados */}
          <div className="flex items-center gap-4">
            <Image src="/logo-nimbus.png" alt="Nimbus" width={130} height={38} priority className="h-9 w-auto" />
            <button 
              onClick={() => signIn("google")}
              className="flex items-center gap-2.5 bg-white border border-[#E8DDD0] text-[#2D2926] px-5 py-2 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-all"
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google G" className="w-5 h-5" />
              Acceso Productor
            </button>
          </div>
          
          {session ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium hidden md:block">{session.user?.name}</span>
              <button onClick={() => signOut()} className="bg-orange-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md hover:bg-orange-700">Salir</button>
            </div>
          ) : null }
        </div>
      </header>

      {/* MAIN CONTENT - ALINEADO Y CENTRADO */}
      <main className="pt-32 px-6 md:px-16 pb-20 max-w-7xl mx-auto text-center">
        {/* Hero Section */}
        <section className="mb-20">
          <span className="inline-block px-4 py-1 mb-8 border border-[#C8873A]/20 bg-[#C8873A]/5 rounded-full text-[#C8873A] text-xs font-bold uppercase tracking-widest">
            Experiencia Exclusiva
          </span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tighter">
            Nimbus presenta:<br />
            <span className="text-[#A66D2D]">Café Seguro</span>
          </h1>
          <p className="text-lg md:text-xl text-[#5A5A5A] max-w-3xl mx-auto leading-relaxed mb-10">
            Encuentros reales para productores que impulsan la transformación del sector.
          </p>
          <div className="border-2 border-[#C8873A]/30 rounded-2xl px-10 py-4 bg-white/50 backdrop-blur-sm italic text-gray-600 shadow-inner inline-block">
            El seguro se toma con café.
          </div>
        </section>

        {/* Próximos Encuentros - Arreglado */}
        <section className="mb-32">
          <h2 className="text-3xl font-black text-center mb-12 uppercase tracking-widest">Próximos Encuentros</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {EVENTOS.map((ev) => (
              <div key={ev.ciudad} className="group bg-white border border-[#EDE4D8] rounded-[36px] p-10 flex flex-col items-center justify-between shadow-md shadow-[#C8873A]/5 hover:shadow-2xl hover:shadow-[#C8873A]/10 hover:-translate-y-1.5 transition-all duration-300 min-h-[400px]">
                <div>
                  <div className="text-[#C8873A] font-bold text-sm mb-4">{ev.fecha}</div>
                  <h3 className="text-4xl font-black mb-4 group-hover:text-[#C8873A] transition-colors">{ev.ciudad}</h3>
                  <p className="text-[#6B6B6B] leading-relaxed mb-8">{ev.tema}</p>
                </div>
                <button className="w-full bg-[#10d210] hover:bg-[#0eb80e] text-white py-4 rounded-full font-black text-lg shadow-lg shadow-[#10d210]/20 transition-all">
                  Inscribirme →
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-[#EDE4D8] py-20 px-6 text-center">
        <Image src="/logo-nimbus.png" alt="Nimbus" width={110} height={32} className="opacity-40 mx-auto mb-8 grayscale" />
        <div className="text-gray-400 text-xs font-semibold space-y-1 mb-8">
          <p>NIMBUS BROKER DE SEGUROS S.A.</p>
          <p>CUIT: 30-71612571-6</p>
        </div>
      </footer>
    </div>s
  );
}