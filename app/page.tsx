"use client";
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

const EVENTOS = [
  { ciudad: "Rosario", fecha: "22 de agosto, 2026", tema: "Big Data y Trazabilidad en el mercado actual.", disponibles: 12, total: 30 },
  { ciudad: "Córdoba", fecha: "05 de septiembre, 2026", tema: "Innovación en procesos de suscripción digital.", disponibles: 22, total: 30 },
  { ciudad: "Santa Fe", fecha: "19 de septiembre, 2026", tema: "Networking y transformación del productor.", disponibles: 28, total: 30 }
];

const TESTIMONIOS = [
  { nombre: "Marcela R.", ciudad: "Rosario", texto: "Volví con tres contactos clave y una perspectiva totalmente nueva del mercado." },
  { nombre: "Diego F.", ciudad: "Córdoba", texto: "Un espacio donde los productores hablamos de verdad, sin filtros. Eso vale oro." },
  { nombre: "Valeria M.", ciudad: "Buenos Aires", texto: "Me conecté con colegas de otras provincias que hoy son parte de mi red." }
];

const PILARES = [
  { icono: "☕", titulo: "Ambiente distendido", descripcion: "Sin presentaciones formales ni trajes. Conversaciones que fluyen." },
  { icono: "🤝", titulo: "Networking real", descripcion: "Conocés colegas de tu zona con los que podés crecer." },
  { icono: "💡", titulo: "Conocimiento aplicado", descripcion: "Insights concretos que podés usar desde el día uno." },
  { icono: "🛡️", titulo: "Respaldado por Nimbus", descripcion: "Organizado por NIMBUS Broker, con acceso a tecnología." }
];

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
    const t = setInterval(() => setTestimonioActivo((p) => (p + 1) % TESTIMONIOS.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#0F0F0F] font-sans antialiased">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 ${scrolled ? "py-3 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DDD0]" : "py-5 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Image src="/logo-nimbus.png" alt="Nimbus" width={130} height={38} priority className="h-9 w-auto" />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5A5A5A]">
            <a href="#encuentros" className="hover:text-[#C8873A]">Encuentros</a>
            <a href="#que-es" className="hover:text-[#C8873A]">¿Qué es?</a>
            <a href="#agenda" className="hover:text-[#C8873A]">Agenda</a>
          </nav>
          <div>
            {session ? (
              <button onClick={() => signOut()} className="text-sm border border-[#D4C4B0] px-4 py-2 rounded-full">Salir</button>
            ) : (
              <button onClick={() => signIn("google")} className="bg-[#0F0F0F] text-white px-5 py-2.5 rounded-full text-sm font-semibold">Acceso Productor</button>
            )}
          </div>
        </div>
      </header>

      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5EEE4] to-[#FAF7F2] -z-10" />
        <h1 className="text-5xl md:text-7xl font-extrabold mb-8">Nimbus presenta <br /><span className="text-[#C8873A]">Café Seguro</span></h1>
        <p className="text-lg text-[#5A5A5A] max-w-2xl mx-auto mb-10">Encuentros exclusivos para productores que quieren liderar la transformación del sector.</p>
        <div className="flex gap-3 justify-center">
          <a href="#encuentros" className="bg-[#C8873A] text-white px-8 py-4 rounded-full font-bold">Ver próximos encuentros</a>
        </div>
      </section>

      <section id="encuentros" className="py-24 px-6 bg-[#F2EAE0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {EVENTOS.map((ev) => (
            <div key={ev.ciudad} className="bg-white border border-[#EDE4D8] rounded-3xl p-8 flex flex-col justify-between min-h-[350px]">
              <div>
                <p className="text-[#C8873A] font-semibold text-sm mb-1">{ev.fecha}</p>
                <h3 className="text-4xl font-extrabold mb-3">{ev.ciudad}</h3>
                <p className="text-[#6B6B6B] text-sm mb-8">{ev.tema}</p>
              </div>
              <button className="w-full bg-[#10d210] text-black py-3.5 rounded-full font-bold">Inscribirme →</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-white border-t border-[#EDE4D8] py-16 px-6 text-center">
        <Image src="/logo-nimbus.png" alt="Nimbus" width={110} height={32} className="opacity-60 mx-auto mb-4" />
        <p className="text-xs text-[#9A9A9A]">NIMBUS BROKER DE SEGUROS S.A. | CUIT: 30-71612571-6</p>
      </footer>
    </div>
  );
}