"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#002D72', fontFamily: '"Times New Roman", Times, serif', margin: 0, padding: 0 }}>
      
      {/* HEADER EDITORIAL MINIMALISTA */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.98)', padding: '20px 40px', borderBottom: '1px solid #111111', zIndex: 100, boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="https://www.nimbusseguros.com/images/logo.png" alt="Nimbus" style={{ height: '28px', width: 'auto', filter: 'contrast(1.1)' }} />
          </div>
          
          <div style={{ fontFamily: 'sans-serif' }}>
            {session ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ fontSize: '13px', color: '#111111', fontWeight: '500', letterSpacing: '0.5px' }}>{session.user?.name}</span>
                <button 
                  onClick={() => signOut()} 
                  style={{ backgroundColor: 'transparent', color: '#002D72', border: '1px solid #002D72', padding: '8px 20px', borderRadius: '0px', cursor: 'pointer', fontWeight: '600', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}
                >
                  Salir
                </button>
              </div>
            ) : (
              <button 
                onClick={() => signIn("google")}
                style={{ display: 'flex', alignItems: 'center', gap: '10px', backgroundColor: '#FFFFFF', border: '1px solid #002D72', padding: '8px 22px', borderRadius: '0px', fontWeight: '700', color: '#002D72', cursor: 'pointer', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}
              >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="12" height="12" alt="G" />
                Acceso Productor
              </button>
            )}
          </div>

        </div>
      </header>

      {/* HERO ASIMÉTRICO: ESTILO MUSEO FRANS HALS */}
      <main style={{ paddingTop: '220px', paddingLeft: '40px', paddingRight: '40px', boxSizing: 'border-box', maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'left', borderBottom: '1px solid #111111', paddingBottom: '80px', marginBottom: '100px' }}>
          
          <p style={{ fontFamily: 'sans-serif', color: '#111111', fontSize: '11px', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase', margin: '0 0 20px 0' }}>
            — EXPOSICIÓN EDITORIAL O1 / CAFÉ SEGURO
          </p>
          
          <h1 style={{ fontSize: 'clamp(54px, 10vw, 110px)', fontWeight: '400', margin: '0 0 40px 0', lineHeight: '0.95', letterSpacing: '-0.03em', textTransform: 'uppercase', color: '#002D72' }}>
            El seguro<br /><span style={{ fontStyle: 'italic', color: '#111111', paddingLeft: '8vw' }}>se toma</span><br />con café.
          </h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'start', marginTop: '80px' }}>
            <p style={{ fontSize: '24px', color: '#111111', lineHeight: '1.4', margin: 0, fontWeight: '300', maxWidth: '550px' }}>
              Un ciclo de encuentros reales diseñado para productores que impulsan la transformación del sector con tecnología, arte y disrupción.
            </p>
            <div style={{ fontFamily: 'sans-serif', borderTop: '1px solid #111111', paddingTop: '25px', color: '#4A4A4A', fontSize: '13px', lineHeight: '1.6', maxWidth: '400px' }}>
              <span style={{ fontWeight: '700', color: '#002D72', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '1px' }}>MANIFIESTO</span>
              Espacios curados para deconstruir las reglas del mercado, conectar visiones y liderar el cambio cultural del ecosistema asegurador desde la afinidad de una mesa compartida.
            </div>
          </div>

        </div>

        {/* AGENDA ESTILO EXPOSICIÓN DE ARTE */}
        <div style={{ marginBottom: '160px' }}>
          <h2 style={{ fontFamily: 'sans-serif', fontSize: '12px', fontWeight: '800', color: '#002D72', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '50px' }}>
            Calendario de Exhibiciones 2026
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            {[
              { id: 'O1', ciudad: 'Rosario', fecha: 'AGOSTO 22', descripcion: 'Networking e inmersión en analítica predictiva, Big Data y trazabilidad aplicable.' },
              { id: 'O2', ciudad: 'Córdoba', fecha: 'SEPTIEMBRE 05', descripcion: 'Innovación radical en modelos de suscripción automatizada y digitalización inmediata.' },
              { id: 'O3', ciudad: 'Santa Fe', fecha: 'SEPTIEMBRE 19', descripcion: 'Debate abierto sobre el rol del productor en la transformación cultural del negocio.' }
            ].map((item) => (
              <div key={item.ciudad} style={{ borderTop: '1px solid #111111', paddingTop: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '340px' }}>
                
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'sans-serif', color: '#888888', fontSize: '11px', marginBottom: '25px' }}>
                    <span>{item.id} // {item.fecha}</span>
                    <span>EDICIÓN 2026</span>
                  </div>

                  <h3 style={{ fontSize: '44px', fontWeight: '400', color: '#002D72', margin: '0 0 20px 0', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
                    {item.ciudad}
                  </h3>
                  
                  <p style={{ color: '#4A4A4A', fontSize: '15px', lineHeight: '1.5', margin: '0 0 30px 0', fontWeight: '300' }}>
                    {item.descripcion}
                  </p>
                </div>
                
                <button style={{ fontFamily: 'sans-serif', width: '100%', backgroundColor: '#002D72', color: '#FFFFFF', border: 'none', padding: '16px', fontWeight: '700', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', cursor: 'pointer' }}>
                  Solicitar Invitación
                </button>

              </div>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #111111', padding: '80px 40px 40px', color: '#555555', fontFamily: 'sans-serif', fontSize: '12px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '60px', marginBottom: '60px' }}>
            <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px', color: '#111111' }}>Contacto</p>
                <p style={{ margin: 0, lineHeight: '1.6' }}>consultas@nimbusseguros.com</p>
              </div>
            </div>
            <div>
              <span style={{ fontSize: '24px', fontWeight: '300', fontFamily: 'serif', fontStyle: 'italic', color: '#002D72' }}>El seguro se toma con café.</span>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px', fontSize: '11px', color: '#A0A0A0', borderTop: '1px solid #F5F5F5', paddingTop: '30px' }}>
            © 2026 Nimbus Broker de Seguros S.A. — CUIT: 30-71612571-6.
          </div>

        </div>
      </footer>

    </div>
  );
}