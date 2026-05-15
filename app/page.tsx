"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#002D72', fontFamily: 'sans-serif' }}>
      
      {/* HEADER - CORREGIDO: Logo a la izquierda, login dinámico y sutil a la derecha */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '15px 30px', borderBottom: '1px solid #E5E5E5', zIndex: 100, boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          {/* Logo Oficial */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="https://www.nimbusseguros.com/images/logo.png" alt="Nimbus" style={{ height: '32px', width: 'auto' }} />
          </div>
          
          {/* Acción única a la derecha: O entra o sale, nunca ambos */}
          <div>
            {session ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '14px', color: '#4A4A4A', fontWeight: '500' }}>{session.user?.name}</span>
                <button 
                  onClick={() => signOut()} 
                  style={{ backgroundColor: 'transparent', color: '#002D72', border: '1px solid #002D72', padding: '6px 16px', borderRadius: '20px', cursor: 'pointer', fontWeight: '600', fontSize: '13px', transition: 'all 0.2s' }}
                >
                  Salir
                </button>
              </div>
            ) : (
              <button 
                onClick={() => signIn("google")}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#FFFFFF', border: '1px solid #002D72', padding: '6px 16px', borderRadius: '20px', fontWeight: '700', color: '#002D72', cursor: 'pointer', fontSize: '13px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}
              >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="14" height="14" alt="G" />
                Acceso Productor
              </button>
            )}
          </div>

        </div>
      </header>

      {/* SECCIÓN PRINCIPAL - DISEÑO EN BLANCO, AZUL Y VERDE */}
      <main style={{ paddingTop: '160px', textAlign: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          
          <span style={{ color: '#25D366', fontSize: '12px', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase' }}>
            Experiencia Exclusiva
          </span>
          
          <h1 style={{ fontSize: 'clamp(38px, 6vw, 68px)', fontWeight: '900', margin: '20px 0', lineHeight: '1.1', color: '#002D72', tracking: '-0.02em' }}>
            Nimbus presenta:<br />
            <span style={{ color: '#002D72' }}>Café Seguro</span>
          </h1>
          
          <p style={{ fontSize: '19px', color: '#4A4A4A', marginBottom: '40px', lineHeight: '1.5', maxWidth: '650px', margin: '0 auto 40px' }}>
            Encuentros reales para productores que impulsan la transformación del sector con tecnología y disrupción.
          </p>
          
          <div style={{ borderLeft: '4px solid #25D366', padding: '10px 20px', display: 'inline-block', fontStyle: 'italic', backgroundColor: '#F0FFF5', color: '#002D72', fontWeight: '500', borderRadius: '0 8px 8px 0' }}>
            "El seguro se toma con café"
          </div>

        </div>

        {/* CONTENEDOR DE TARJETAS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '90px auto', paddingBottom: '100px' }}>
          {[
            { ciudad: 'Rosario', fecha: '22 de agosto, 2026' },
            { ciudad: 'Córdoba', fecha: '05 de septiembre, 2026' },
            { ciudad: 'Santa Fe', fecha: '19 de septiembre, 2026' }
          ].map((item) => (
            <div key={item.ciudad} style={{ backgroundColor: '#FFFFFF', padding: '40px 30px', borderRadius: '24px', border: '1px solid #EAF0F6', textAlign: 'left', boxShadow: '0 10px 30px rgba(0,45,114,0.04)', position: 'relative' }}>
              
              <p style={{ color: '#25D366', fontWeight: '700', fontSize: '13px', marginBottom: '8px', letterSpacing: '0.5px' }}>
                {item.fecha}
              </p>
              
              <h3 style={{ fontSize: '34px', fontWeight: '800', color: '#002D72', marginBottom: '12px' }}>
                {item.ciudad}
              </h3>
              
              <p style={{ color: '#666666', fontSize: '14px', marginBottom: '30px', lineHeight: '1.4' }}>
                Networking y análisis profundo sobre la transformación y ecosistemas del sector asegurador.
              </p>
              
              <button style={{ width: '100%', backgroundColor: '#002D72', color: '#FFFFFF', border: 'none', padding: '14px', borderRadius: '12px', fontWeight: '700', fontSize: '15px', cursor: 'pointer', transition: 'background 0.2s' }}>
                Inscribirme →
              </button>

            </div>
          ))}
        </div>
      </main>

      {/* FOOTER CORPORATIVO */}
      <footer style={{ backgroundColor: '#002D72', color: '#FFFFFF', padding: '50px 20px', textAlign: 'center' }}>
        <img src="https://www.nimbusseguros.com/images/logo.png" alt="Nimbus" style={{ height: '28px', filter: 'brightness(0) invert(1)', marginBottom: '20px', opacity: 0.9 }} />
        <p style={{ fontSize: '12px', opacity: 0.5, letterSpacing: '0.5px' }}>
          © 2026 Nimbus Broker de Seguros. Todos los derechos reservados.
        </p>
      </footer>

    </div>
  );
}