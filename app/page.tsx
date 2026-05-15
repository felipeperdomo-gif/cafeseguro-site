"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div style={{ backgroundColor: '#FAF7F2', minHeight: '100vh', color: '#2D2926', fontFamily: 'sans-serif' }}>
      {/* Header Fijo y Limpio */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'rgba(250, 247, 242, 0.9)', padding: '20px', borderBottom: '1px solid #E8DDD0', zIndex: 100 }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <img src="https://www.nimbusseguros.com/images/logo.png" alt="Nimbus" style={{ height: '35px' }} />
            <button 
              onClick={() => signIn("google")}
              style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: 'white', border: '1px solid #E8DDD0', padding: '8px 16px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" alt="G" />
              Acceso Productor
            </button>
          </div>
          {session && (
            <button onClick={() => signOut()} style={{ background: '#f44336', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer' }}>Salir</button>
          )}
        </div>
      </header>

      {/* Contenido Principal Centrado */}
      <main style={{ paddingTop: '150px', textAlign: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ color: '#C8873A', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px' }}>EXPERIENCIA EXCLUSIVA</span>
          <h1 style={{ fontSize: 'clamp(40px, 8vw, 70px)', fontWeight: '900', margin: '20px 0', lineHeight: '1.1' }}>
            Nimbus presenta:<br />
            <span style={{ color: '#A66D2D' }}>Café Seguro</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#5A5A5A', marginBottom: '40px' }}>
            Encuentros reales para productores que impulsan la transformación del sector.
          </p>
          <div style={{ border: '1px solid #C8873A', padding: '15px 30px', borderRadius: '15px', display: 'inline-block', fontStyle: 'italic', backgroundColor: 'rgba(200, 135, 58, 0.05)' }}>
            El seguro se toma con café.
          </div>
        </div>

        {/* Tarjetas de Encuentros */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '80px auto', paddingBottom: '100px' }}>
          {['Rosario', 'Córdoba', 'Santa Fe'].map((ciudad) => (
            <div key={ciudad} style={{ backgroundColor: 'white', padding: '40px', borderRadius: '30px', border: '1px solid #EDE4D8', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
              <h3 style={{ fontSize: '32px', fontWeight: '900', marginBottom: '10px' }}>{ciudad}</h3>
              <p style={{ color: '#6B6B6B', marginBottom: '30px' }}>Próximamente temporada 2026</p>
              <button style={{ width: '100%', backgroundColor: '#10d210', color: 'white', border: 'none', padding: '15px', borderRadius: '15px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
                Inscribirme →
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}