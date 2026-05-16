"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#002D72', fontFamily: '"Times New Roman", Times, serif', margin: 0, padding: 0 }}>
      
      {/* HEADER EDITORIAL */}
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
                  style={{ backgroundColor: 'transparent', color: '#002D72', border: '1px solid #002D72', padding: '8px 20px', borderRadius: '0px', cursor: 'pointer', fontWeight: '600', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.2s' }}
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

      {/* SECCIÓN PRINCIPAL: HERO ESTILO MUSEO FRANS HALS */}
      <main style={{ paddingTop: '220px', paddingLeft: '40px', paddingRight: '40px', boxSizing: 'border-box', maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'left', borderBottom: '1px solid #002D72', paddingBottom: '80px', marginBottom: '100px' }}>
          
          <p style={{ fontFamily: 'sans-serif', color: '#25D366', fontSize: '11px', fontWeight: '700', letterSpacing: '4px', textTransform: 'uppercase', margin: '0 0 20px 0' }}>
            — Experiencia Exclusiva de Transformación
          </p>
          
          <h1 style={{ fontSize: 'clamp(54px, 10vw, 110px)', fontWeight: '400', margin: '0 0 40px 0', lineHeight: '0.95', letterSpacing: '-0.03em', textTransform: 'uppercase', color: '#002D72' }}>
            Café<br />Seguro
          </h1>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start', marginTop: '60px' }}>
            <p style={{ fontSize: '24px', color: '#111111', lineHeight: '1.4', margin: 0, fontWeight: '300', fontStyle: 'italic', maxWidth: '550px' }}>
              Encuentros reales para productores que impulsan la transformación del sector con tecnología y disrupción.
            </p>
            <div style={{ fontFamily: 'sans-serif', borderLeft: '1px solid #25D366', paddingLeft: '25px', color: '#4A4A4A', fontSize: '14px', lineHeight: '1.6' }}>
              <span style={{ fontWeight: '700', color: '#002D72', display: 'block', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '1px' }}>Manifiesto</span>
              “El seguro se toma con café”. Un espacio diseñado para debatir las nuevas reglas del ecosistema asegurador, conectar visiones y liderar el cambio cultural del mercado.
            </div>
          </div>

        </div>

        {/* AGENDA / TARJETAS ESTILO EXPOSICIÓN */}
        <div style={{ marginBottom: '160px' }}>
          <h2 style={{ fontFamily: 'sans-serif', fontSize: '12px', fontWeight: '800', color: '#002D72', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '50px' }}>
            Agenda de Exhibiciones 2026
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1px', backgroundColor: '#EDE4D8', border: '1px solid #EDE4D8' }}>
            {[
              { ciudad: 'Rosario', fecha: 'AGO 22', descripcion: 'Espacio de networking, análisis profundo sobre Big Data y Trazabilidad en el mercado actual.' },
              { ciudad: 'Córdoba', fecha: 'SEP 05', descripcion: 'Espacio de networking enfocado en la innovación radical en procesos de suscripción digital.' },
              { ciudad: 'Santa Fe', fecha: 'SEP 19', descripcion: 'Espacio de networking y debate sobre la transformación cultural integral del productor.' }
            ].map((item) => (
              <div key={item.ciudad} style={{ backgroundColor: '#FFFFFF', padding: '50px 40px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', minHeight: '400px' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid #F0F0F0', paddingBottom: '20px', marginBottom: '30px' }}>
                  <span style={{ fontFamily: 'sans-serif', color: '#25D366', fontWeight: '700', fontSize: '13px', letterSpacing: '1px' }}>{item.fecha}</span>
                  <span style={{ fontFamily: 'sans-serif', color: '#888888', fontSize: '11px', letterSpacing: '1px' }}>TEMPORADA 26</span>
                </div>

                <h3 style={{ fontSize: '48px', fontWeight: '400', color: '#002D72', margin: '0 0 20px 0', letterSpacing: '-0.01em' }}>
                  {item.ciudad}
                </h3>
                
                <p style={{ color: '#4A4A4A', fontSize: '16px', lineHeight: '1.5', margin: '0 0 40px 0', fontWeight: '300', flexGrow: 1 }}>
                  {item.descripcion}
                </p>
                
                <button style={{ fontFamily: 'sans-serif', width: '100%', backgroundColor: '#002D72', color: '#FFFFFF', border: 'none', padding: '16px', borderRadius: '0px', fontWeight: '700', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '2px', cursor: 'pointer', transition: 'background 0.2s' }}>
                  Inscribirme al encuentro
                </button>

              </div>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER INSTITUCIONAL ADAPTADO A LA NUEVA ESTÉTICA MUSEO */}
      <footer style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #111111', padding: '80px 40px 40px', color: '#555555', fontFamily: 'sans-serif', fontSize: '12px', textAlign: 'left', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          
          {/* Fila superior */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '60px', marginBottom: '60px' }}>
            <div style={{ display: 'flex', gap: '80px', flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px', color: '#111111' }}>Seguinos</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <a href="#" style={{ color: '#555555', textDecoration: 'none', fontWeight: '500' }}>Facebook</a>
                  <a href="#" style={{ color: '#555555', textDecoration: 'none', fontWeight: '500' }}>LinkedIn</a>
                  <a href="#" style={{ color: '#555555', textDecoration: 'none', fontWeight: '500' }}>Instagram</a>
                </div>
              </div>
              <div>
                <p style={{ fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px', color: '#111111' }}>Contacto</p>
                <p style={{ margin: 0, lineHeight: '1.6' }}>Soporte Comercial: consultas@nimbusseguros.com</p>
              </div>
            </div>
            <div>
              <span style={{ fontSize: '24px', fontWeight: '300', fontFamily: 'serif', fontStyle: 'italic', color: '#002D72' }}>El seguro se toma con café.</span>
            </div>
          </div>

          {/* Fila intermedia legal SSN */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '30px', borderTop: '1px solid #E5E5E5', paddingTop: '40px', paddingBottom: '40px', alignItems: 'center' }}>
            <div>
              <p style={{ margin: 0, color: '#888888', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '1px' }}>Nº de inscripción SSN</p>
              <p style={{ margin: '5px 0 0 0', fontWeight: '700', color: '#111111', fontSize: '14px' }}>1647</p>
            </div>
            <div>
              <p style={{ margin: 0, color: '#555555', maxWidth: '260px', lineHeight: '1.4', fontSize: '11px' }}>Departamento de Orientación y Asistencia al Asegurado</p>
            </div>
            <div>
              <p style={{ margin: 0, color: '#002D72', fontWeight: '700', fontSize: '15px' }}>0800-666-8400</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
              <a href="https://www.argentina.gob.ar/ssn" target="_blank" rel="noreferrer" style={{ color: '#002D72', textDecoration: 'underline', fontSize: '11px' }}>www.argentina.gob.ar/ssn</a>
              <span style={{ fontWeight: '900', color: '#002D72', fontSize: '18px', letterSpacing: '1px', fontFamily: 'serif' }}>SSN</span>
            </div>
          </div>

          {/* Fila inferior responsabilidades */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', borderTop: '1px solid #E5E5E5', paddingTop: '40px' }}>
            <div style={{ backgroundColor: '#F9F9F9', padding: '25px', borderRadius: '0px', lineHeight: '1.6', color: '#555555', fontSize: '11px', border: '1px solid #EEEEEE' }}>
              La entidad aseguradora dispone de un <strong>Servicio de Atención al Asegurado</strong> que atenderá las consultas y reclamos que presenten los tomadores de seguros, asegurados, beneficiarios y/o derechohabientes. <br /><br />
              En caso de que existiera un reclamo ante la entidad aseguradora y que el mismo no haya sido resuelto o haya sido desestimado, total o parcialmente, o que haya sido denegada su admisión, podrá comunicarse con la Superintendencia de Seguros de la Nación por teléfono al 0800-666-8400, correo electrónico a consultas@ssn.gob.ar o formulario disponible en la página argentina.gob.ar/ssn
            </div>
            <div style={{ fontSize: '11px', lineHeight: '1.8', color: '#555555' }}>
              <p style={{ margin: '0 0 15px 0', color: '#888888', textTransform: 'uppercase', letterSpacing: '1px' }}>Composición del Servicio</p>
              <p style={{ margin: 0 }}><strong>Responsable Titular:</strong> Felipe Ricardo Luis Perdomo</p>
              <p style={{ margin: '0 0 15px 0' }}>Teléfono de contacto: +54 9 3442 57-1384</p>
              <p style={{ margin: 0 }}><strong>Responsable Suplente:</strong> Guillermo Jose Joannas</p>
              <p style={{ margin: '0 0 5px 0' }}>Teléfono de contacto: +54 9 3442 46-1715</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px', fontSize: '11px', color: '#A0A0A0', borderTop: '1px solid #F5F5F5', paddingTop: '30px' }}>
            © 2026 Nimbus Broker de Seguros S.A. — CUIT: 30-71612571-6. Diseño de Identidad Exclusiva.
          </div>

        </div>
      </footer>

    </div>
  );
}