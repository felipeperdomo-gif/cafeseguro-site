"use client";
import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

// Colores corporativos
const nimbusGreen = "#86FF6B";
const nimbusGreenHover = "#69cc54";
const nimbusBlue = "#0051FF";
const nimbusGreenBorder = "#53e14b";

// Color youtube oficial
const youtubeRed = "#FF0000";

export default function Home() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (session && session.user?.email) {
      setEmail(session.user.email);
    }
  }, [session]);

  const eventos = [
    { ciudad: "Rosario", fecha: "22 Agosto", tema: "Big Data y Trazabilidad" },
    { ciudad: "Buenos Aires", fecha: "5 Septiembre", tema: "IA aplicada a Seguros" },
    { ciudad: "Córdoba", fecha: "19 Septiembre", tema: "Optimización de Costos" }
  ];

  const encuentrosAnteriores = [
    {
      ciudad: "Posadas",
      fecha: "10 Mayo 2026",
      descripcion: "Último encuentro realizado en el Hotel Julio Cesar, con productores de la región y enfoque en innovación y networking.",
      youtube: "",
    },
    {
      ciudad: "Paraná",
      fecha: "15 Junio 2024",
      descripcion: "Primer encuentro en Paraná con foco en transformación digital del productor asegurador.",
      youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      ciudad: "Santa Fe",
      fecha: "10 Mayo 2024",
      descripcion: "Herramientas digitales para productores y debate sobre el futuro de los seguros.",
      youtube: "https://www.youtube.com/watch?v=Zi_XLOBDo_Y"
    }
  ];

  return (
    <main className="min-h-screen w-full bg-white text-black flex flex-col items-center px-4 py-0 font-sans">
      {/* Header con enlaces a redes sociales */}
      <header className="w-full flex items-center justify-between py-6 px-2 sm:px-8 bg-white">
        <div className="flex items-center gap-4">
          {/* Logo con opción invert si es blanco */}
          <a
            href="https://nimbusseguros.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src='/logo-nimbus.png'
              alt='Nimbus Logo'
              className='h-[6.9rem] w-auto invert hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer'
              style={{ filter: "invert(1)" }}
            />
          </a>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
            {/* Redes sociales */}
            <a
              href="https://www.instagram.com/nimbusseguros/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-orange-600 transition-colors text-gray-800"
            >
              <svg height="26" width="26" fill="currentColor" viewBox="0 0 448 512">
                <path d="M224,202.7A53.3,53.3,0,1,0,277.3,256,53.38,53.38,0,0,0,224,202.7Zm124.7-41a54,54,0,0,0-30.2-30.2C300,124,256.6,120,224,120s-76,.05-94.5,11.5a54,54,0,0,0-30.2,30.2C120,156,120,199.4,120,232s.05,76,11.5,94.5a54,54,0,0,0,30.2,30.2C192,388,235.4,392,268,392s76-.05,94.5-11.5a54,54,0,0,0,30.2-30.2C388,356,392,312.6,392,280S387.95,204,376.5,185.5ZM224,338.3A82.3,82.3,0,1,1,306.3,256,82.3,82.3,0,0,1,224,338.3ZM370.5,168.3A19.2,19.2,0,1,1,389.7,149.1,19.2,19.2,0,0,1,370.5,168.3Z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/NimbusBroker"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-orange-600 transition-colors text-gray-800"
            >
              <svg height="26" width="26" fill="currentColor" viewBox="0 0 320 512">
                <path d="M279.14 288l14.22-92.66h-88.91V127.7c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121 44.38-121 124.72v70.62H22.89V288H104.4v224h100.2V288z" />
              </svg>
            </a>
            <a
              href="https://wa.me/541158031184"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:text-orange-600 transition-colors"
            >
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded-xl text-base shadow-lg border border-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M380.9 97.1C339-3.4 207.8-33.7 112.5 39.5 50.7 85.9 12.7 160.7 23.5 238.8c1.4 9.8 3.2 19.2 5.7 28.3C8.6 326.1-13.6 388.5 10.7 450.3 19 469.7 41.5 488.1 68.8 492.5c-2.1-20.9-2.9-41.6-2.7-64.7 7.6-5.3 26.7-13.4 38.9-17.5 18.3-6.1 39.3-1.8 57.2 9a223.3 223.3 0 0090.2 32c7.3 1.4 14.7 2.1 22.2 2.1 55.1 0 109.3-22.3 150-63.1 74.2-73.4 91.4-189.6 45.3-272.2zm-167.6 314.8c-29.8.4-59.1-6.4-85.2-19.4l-8.3-4.3-55.2 14.1 14.6-53.9-5.2-8.3c-12.8-20.9-20-45-20-70.9 0-79.1 64.7-142.8 144.3-142.8s144.3 63.6 144.3 142.8-64.7 142.8-144.3 142.8zm99.4-116.8c-9.2 25.3-36.5 35.9-57.6 24.1s-53.6-33-75.9-51.9c-22.9-19.7-38.6-47.7-42.5-77.1s5.3-61.1 26-84c15.3-16.2 57.3-21.2 67.7-7.5 4.8 6.3 6.5 16.4 1.1 25.7-6.1 10.4-18.1 34.5-21.2 40.2s-.4 10.9 3 13.7c2.3 1.7 7.9 6.2 17.1 13.7s21.1 17.1 26.9 20.2c5.7 3.1 9.2 4.1 13.6-2.1s15.7-19.5 19.8-25.2c4.2-5.8 8.9-6.7 15.5-4.6 12.1 3.9 38.3 15.6 43.9 17.8 6.3 2.7 11 8.2 8.8 15z"/>
                </svg>
                WhatsApp
              </button>
            </a>
            {/* ACCESO PRODUCTOR */}
            {!session ? (
              <button
                onClick={() => signIn('google')}
                className="flex items-center gap-2 border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 font-bold px-4 py-2 rounded-xl text-base shadow-orange-500/30 shadow-sm bg-white text-orange-600"
                style={{ minWidth: 175 }}
              >
                <svg width="23" height="23" viewBox="0 0 48 48">
                  <g>
                    <path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.284c-1.51 4.084-5.313 7-9.474 7-5.514 0-10-4.486-10-10s4.486-10 10-10c2.411 0 4.609.86 6.342 2.282l6.449-6.449C34.581 8.074 29.65 6 24 6 12.954 6 4 14.954 4 26s8.954 20 20 20c11.046 0 19.5-7.954 19.5-20 0-1.333-.102-2.416-.289-3.417z"/>
                    <path fill="#34A853" d="M6.577 14.742l6.571 4.819C15.614 16.296 19.531 13 24 13c2.411 0 4.609.86 6.342 2.282l6.449-6.449C34.581 8.074 29.65 6 24 6c-6.832 0-12.672 3.014-16.423 8.742z"/>
                    <path fill="#FBBC05" d="M24 46c5.276 0 9.941-1.783 13.302-4.838l-6.152-5.137C29.508 37.369 26.868 38.5 24 38.5c-4.142 0-7.739-2.837-9.08-6.781l-6.507 5.045C10.248 42.421 16.65 46 24 46z"/>
                    <path fill="#EA4335" d="M43.611 20.083H42V20H24v8h11.284c-.621 1.68-1.61 3.106-2.868 4.188l.002-.001 6.156 5.141C41.927 37.081 45 32.95 45 26c0-1.333-.102-2.416-.289-3.417z"/>
                  </g>
                </svg>
                Acceso Productor
              </button>
            ) : (
              <div
                className="flex flex-col items-end gap-0"
                style={{ minWidth: 175 }}
              >
                <div className="flex items-center gap-3 px-4 py-2 bg-zinc-100 rounded-xl shadow shadow-orange-300/10 border-2 border-orange-600/40">
                  {session.user?.image ? (
                    <Image
                      src={session.user.image}
                      alt={session.user?.name || "Usuario"}
                      width={32}
                      height={32}
                      className="rounded-full object-cover h-8 w-8 border-2 border-orange-500/50 bg-white"
                    />
                  ) : (
                    <span className="inline-flex items-center justify-center rounded-full overflow-hidden bg-zinc-100 border-2 border-orange-500/40 h-8 w-8">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-orange-600">
                        <circle cx="12" cy="7" r="5" stroke="currentColor" strokeWidth="2" />
                        <path d="M17.5 21v-2a5.5 5.5 0 00-11 0v2" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </span>
                  )}
                  <span className="text-orange-500 font-semibold">
                    {session.user?.name || "Productor"}
                  </span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="mt-1 flex items-center gap-2 border-2 border-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 font-bold px-4 py-1 rounded-xl text-base shadow-orange-500/20 shadow-sm bg-white text-orange-600"
                  style={{ minWidth: 120, fontSize: 15 }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M16 17l5-5m0 0l-5-5m5 5H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13 17v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Salir
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center pt-14 pb-14 text-center w-full relative bg-white text-black">
        {/* Brand Badge (vacío) */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center justify-center md:hidden"></div>
        {session && session.user ? (
          <>
            <span className="inline-block mb-5 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1 text-orange-500 text-xs font-semibold uppercase tracking-wider shadow-sm">
              EXPERIENCIA EXCLUSIVA
            </span>
            <h1 className="font-black flex flex-col items-center gap-2 mb-4">
              <span className="text-3xl sm:text-4xl md:text-5xl text-black tracking-tight mb-2">
                <span className="font-black" style={{ color: nimbusBlue }}>Nimbus</span>{" "}
                presenta:
                <span
                  className="inline-block font-black text-4xl sm:text-6xl md:text-7xl ml-2"
                  style={{
                    background: "linear-gradient(90deg, #ff6d1b 10%, #ffd28d 90%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Café Seguro
                </span>
              </span>
              <span className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold text-orange-400">
                ¡Bienvenido{session.user.name ? `, ${session.user.name}` : ""}!
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-orange-500 mb-5">
              En Nimbus, crecemos con vos.
            </p>
            <p
              className="text-gray-800 max-w-3xl mx-auto text-2xl md:text-3xl font-semibold leading-snug tracking-wide mb-8"
              style={{ paddingBottom: "40px" }}
            >
              Encuentros exclusivos para los productores de seguros que impulsan la transformación del sector con tecnología y disrupción.
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl leading-snug font-light pb-6 tracking-wide">
              El seguro se toma con café.<br />
              Encuentros reales para productores tecnológicos.
            </p>
          </>
        ) : (
          <>
            <span className="inline-block mb-6 rounded-full bg-orange-500/10 border border-orange-500/30 px-4 py-1 text-orange-500 text-xs font-semibold uppercase tracking-wider shadow-sm">
              EXPERIENCIA EXCLUSIVA
            </span>
            <h1 className="font-black flex flex-col items-center gap-2 mb-3">
              <span className="text-3xl sm:text-4xl md:text-5xl text-black tracking-tight mb-2">
                <span className="font-black" style={{ color: nimbusBlue }}>Nimbus</span> presenta:
                <span
                  className="inline-block font-black text-4xl sm:text-6xl md:text-7xl ml-2"
                  style={{
                    background: "linear-gradient(90deg, #ff6d1b 10%, #ffd28d 90%)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  Café Seguro
                </span>
              </span>
            </h1>
            <p
              className="text-gray-800 max-w-3xl mx-auto text-2xl md:text-3xl font-semibold leading-snug tracking-wide mb-8"
              style={{ paddingBottom: "40px" }}
            >
              Encuentros exclusivos para los productores de seguros que impulsan la transformación del sector con tecnología y disrupción.
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl leading-snug font-light pb-6 tracking-wide">
              El seguro se toma con café.<br />
              Encuentros reales para productores tecnológicos.
            </p>
          </>
        )}
      </section>

      {/* Próximos Encuentros */}
      <section className="w-full max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl md:text-4xl mb-10 font-extrabold text-black tracking-tight text-center">
          Próximos Encuentros
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {eventos.map((e, i) => (
            <div
              key={i}
              className="flex flex-col justify-between min-h-[285px] p-8 md:p-9 rounded-3xl bg-white border border-orange-500/20 hover:border-orange-600/85 transition-all duration-200 group shadow-md hover:shadow-orange-600/10 hover:scale-[1.025] cursor-pointer"
            >
              <div>
                {/* Fecha */}
                <span className="block text-sm md:text-base font-mono text-orange-600 mb-2 tracking-wider font-semibold">
                  {e.fecha}
                </span>
                {/* Ciudad */}
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-black tracking-tight group-hover:text-orange-500 transition-colors duration-200">
                  {e.ciudad}
                </h3>
                <p className="text-gray-800 text-base md:text-lg mb-6 font-normal">{e.tema}</p>
              </div>
              {/* Botón mejorado */}
              <button
                className="w-fit px-6 py-2 rounded-2xl font-bold text-base bg-[#86FF6B] border-2 border-[#53e14b] text-black shadow transition-all hover:bg-[#69cc54] focus:outline-none"
                style={{
                  boxShadow: "0 2px 16px 0 #86FF6B22"
                }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = nimbusGreenHover)}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = nimbusGreen)}
              >
                Inscribirme
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Encuentros Anteriores */}
      <section className="w-full max-w-6xl mx-auto mt-28 md:mt-32 bg-white">
        <h2 className="text-3xl md:text-4xl mb-10 font-extrabold text-black tracking-tight text-center">
          Encuentros Anteriores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {encuentrosAnteriores.map((encuentro, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-zinc-100 border border-orange-500/15 flex flex-col overflow-hidden shadow-lg"
            >
              {/* Imagen reemplazada por fondo neutro */}
              <div className="w-full h-56 bg-zinc-200 flex items-center justify-center" />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-orange-600 font-mono text-xs mb-2 block tracking-wide font-semibold">{encuentro.fecha}</span>
                  <h3 className="text-2xl font-extrabold mb-2 text-black">{encuentro.ciudad}</h3>
                  <p className="text-gray-800 text-base mb-4 font-normal">{encuentro.descripcion}</p>
                </div>
                <div>
                  {encuentro.youtube && (
                    <a
                      href={encuentro.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-black hover:text-blue-700 transition-colors font-semibold underline"
                    >
                      <svg className="w-6 h-6" fill={youtubeRed} viewBox="0 0 24 24">
                        <path d="M23.498 6.186c-.273-1.037-1.088-1.852-2.126-2.125C19.293 3.5 12 3.5 12 3.5s-7.293 0-9.372.561c-1.038.273-1.852 1.088-2.126 2.125C.5 8.265.5 12 .5 12s0 3.735.502 5.814c.273 1.037 1.088 1.852 2.126 2.126C4.707 20.5 12 20.5 12 20.5s7.293 0 9.372-.561c1.038-.273 1.852-1.088 2.126-2.126C23.5 15.735 23.5 12 23.5 12s0-3.735-.002-5.814zM9.75 15.568V8.432L15.818 12l-6.068 3.568z" />
                      </svg>
                      Ver en YouTube
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Enlace general a canal de Youtube */}
        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@NimbusBroker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-black hover:text-blue-700 underline font-bold text-xl transition-all"
          >
            <svg className="w-7 h-7" fill={youtubeRed} viewBox="0 0 24 24">
              <path d="M23.498 6.186c-.273-1.037-1.088-1.852-2.126-2.125C19.293 3.5 12 3.5 12 3.5s-7.293 0-9.372.561c-1.038.273-1.852 1.088-2.126 2.125C.5 8.265.5 12 .5 12s0 3.735.502 5.814c.273 1.037 1.088 1.852 2.126 2.126C4.707 20.5 12 20.5 12 20.5s7.293 0 9.372-.561c1.038-.273 1.852-1.088 2.126-2.126C23.5 15.735 23.5 12 23.5 12s0-3.735-.002-5.814zM9.75 15.568V8.432L15.818 12l-6.068 3.568z" />
            </svg>
            Ver todos los encuentros en nuestro canal de YouTube
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-28 md:mt-32 bg-zinc-100 p-10 md:p-12 rounded-3xl border border-orange-500/30 w-full max-w-3xl text-center shadow-xl shadow-orange-400/10" style={{ boxShadow: "0 8px 42px 0 rgba(254,120,22,0.07)" }}>
        <h2 className="text-2xl md:text-3xl font-bold mb-1 text-orange-400 tracking-tight">
          Recibí la agenda de Café Seguro
        </h2>
        <p className="text-gray-800 text-base font-normal mb-6">
          Novedades, insights del mercado y acceso anticipado a los próximos encuentros.
        </p>
        <form
          className="flex flex-col md:flex-row gap-4 items-center justify-center"
          onSubmit={e => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Tu email profesional"
            className={`flex-1 bg-white border border-orange-500/20 focus:border-orange-500 text-gray-800 p-4 rounded-2xl outline-none transition-all font-medium text-base placeholder:text-gray-400 disabled:bg-zinc-100 disabled:cursor-not-allowed`}
            value={email}
            onChange={e => setEmail(e.target.value)}
            {...(session && session.user?.email ? { readOnly: true, disabled: true } : {})}
          />
          <button
            type="submit"
            className="w-fit px-6 py-2 rounded-2xl font-bold text-base bg-[#86FF6B] border-2 border-[#53e14b] text-black shadow transition-all hover:bg-[#69cc54]"
            style={{ boxShadow: "0 4px 18px 0 #86FF6B33" }}
            onMouseOver={e => (e.currentTarget.style.backgroundColor = nimbusGreenHover)}
            onMouseOut={e => (e.currentTarget.style.backgroundColor = nimbusGreen)}
          >
            Suscribirme
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full mt-28 text-center border-t border-orange-600/20 py-11 px-4 bg-white text-black font-light text-sm">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-2">
          {/* Usar solo el footer logo en el footer */}
          <img
            src="/logo-nimbus.png"
            alt="Nimbus Seguros"
            className="h-8 mb-3 invert"
            style={{ maxWidth: 160, filter: "invert(1)" }}
          />
          <div className="text-black">
            NIMBUS BROKER DE SEGUROS S.A. <br />
            CUIT: 30-71612571-6 &middot; Mat. SSN N° 1647 <br />
            San Martín 518, Concepción del Uruguay, Entre Ríos
          </div>
          <div className="text-black">
            Tel.: <a href="tel:+541152285577" className="text-orange-600 hover:underline">+54 11 5228-5577</a> &nbsp; &bull; &nbsp;
            <a href="mailto:info@nimbusseguros.com" className="text-orange-600 hover:underline">info@nimbusseguros.com</a>
          </div>
          <div className="text-black">
            <a href="https://www.nimbusseguros.com/politicas/defensa-del-asegurado.pdf" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
              Defensa del Asegurado
            </a>
            &nbsp; &bull; &nbsp;
            <a href="https://www.argentina.gob.ar/ssn" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
              Superintendencia de Seguros de la Nación
            </a>
            &nbsp; &bull; &nbsp;
            <a href="https://www.argentina.gob.ar/ssn/tecnologia-y-innovacion/denuncias" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">
              Denuncias / Reclamos SSN
            </a>
          </div>
          <div className="mt-2 text-xs text-gray-500">© {new Date().getFullYear()} Nimbus Broker de Seguros S.A. Todos los derechos reservados.</div>
        </div>
      </footer>
    </main>
  );
}