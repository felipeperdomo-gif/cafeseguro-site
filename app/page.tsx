"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#002D72', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      
      {/* HEADER */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: 'rgba(255, 255, 255, 0.95)', padding: '15px 30px', borderBottom: '1px solid #E5E5E5', zIndex: 100, boxShadow: '0 2px 10px rgba(0,0,0,0.02)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src="https://www.nimbusseguros.com/images/logo.png" alt="Nimbus" style={{ height: '32px', width: 'auto' }} />
          </div>
          
          <div>
            {session ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <span style={{ fontSize: '14px', color: '#4A4A4A', fontWeight: '500' }}>{session.user?.name}</span>
                <button 
                  onClick={() => signOut()} 
                  style={{ backgroundColor: 'transparent', color: '#002D72', border: '1px solid #002D72', padding: '6px 16px', borderRadius: '20px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' }}
                >
                  Salir
                </button>
              </div>
            ) : (
              <button 
                onClick={() => signIn("google")}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#FFFFFF', border: '1px solid #002D72', padding: '6px 16px', borderRadius: '20px', fontWeight: '700', color: '#002D72', cursor: 'pointer', fontSize: '13px' }}
              >
                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="14" height="14" alt="G" />
                Acceso Productor
              </button>
            )}
          </div>

        </div>
      </header>

      {/* HERO PRINCIPAL - CONTROLADO TOTALMENTE */}
      <main style={{ paddingTop: '160px', textAlign: 'center', paddingLeft: '20px', paddingRight: '20px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          
          <span style={{ color: '#25D366', fontSize: '12px', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase' }}>
            Experiencia Exclusiva
          </span>
          
          <h1 style={{ fontSize: 'clamp(46px, 8vw, 82px)', fontWeight: '900', margin: '20px 0', lineHeight: '1.1', color: '#002D72', letterSpacing: '-0.02em' }}>
            CAFE SEGURO
          </h1>
          
          <p style={{ fontSize: '19px', color: '#4A4A4A', marginBottom: '40px', lineHeight: '1.5', maxWidth: '650px', margin: '0 auto 40px' }}>
            Encuentros reales para productores que impulsan la transformación del sector con tecnología y disrupción.
          </p>
          
          <div style={{ borderLeft: '4px solid #25D366', padding: '10px 20px', display: 'inline-block', fontStyle: 'italic', backgroundColor: '#F0FFF5', color: '#002D72', fontWeight: '500', borderRadius: '0 8px 8px 0' }}>
            &ldquo;El seguro se toma con café&rdquo;
          </div>

        </div>

        {/* PROXIMOS ENCUENTROS */}
        <div style={{ margin: '80px auto 20px', maxWidth: '1100px', textAlign: 'left' }}>
          <h2 style={{ fontSize: '14px', fontWeight: '800', color: '#002D72', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '30px', textAlign: 'center' }}>
            Próximos Encuentros
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '30px' }}>
            {[
              { ciudad: 'Rosario', fecha: '22 de agosto, 2026', descripcion: 'Espacio de networking, Big Data y Trazabilidad en el mercado actual.' },
              { ciudad: 'Córdoba', fecha: '05 de septiembre, 2026', descripcion: 'Espacio de networking, innovación en procesos de suscripción digital.' },
              { ciudad: 'Santa Fe', fecha: '19 de septiembre, 2026', descripcion: 'Espacio de networking y transformación profunda del productor.' }
            ].map((item) => (
              <div key={item.ciudad} style={{ backgroundColor: '#FFFFFF', padding: '40px 30px', borderRadius: '24px', border: '1px solid #EAF0F6', boxShadow: '0 10px 30px rgba(0,45,114,0.04)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ color: '#25D366', fontWeight: '700', fontSize: '13px', marginBottom: '8px', letterSpacing: '0.5px', marginTop: 0 }}>{item.fecha}</p>
                  <h3 style={{ fontSize: '34px', fontWeight: '800', color: '#002D72', marginBottom: '12px', marginTop: 0 }}>{item.ciudad}</h3>
                  <p style={{ color: '#666666', fontSize: '14px', marginBottom: '30px', lineHeight: '1.4', marginTop: 0 }}>{item.descripcion}</p>
                </div>
                <button style={{ width: '100%', backgroundColor: '#002D72', color: '#FFFFFF', border: 'none', padding: '14px', borderRadius: '12px', fontWeight: '700', fontSize: '15px', cursor: 'pointer', marginTop: 'auto' }}>
                  Inscribirme →
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #EDE4D8', padding: '60px 40px 40px', marginTop: '120px', color: '#707070', fontSize: '12px', textAlign: 'left', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', marginBottom: '40px' }}>
            <div>
              <p style={{ fontWeight: 'bold', marginBottom: '15px', color: '#333333', marginTop: 0 }}>Seguinos:</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a href="#" style={{ display: 'flex', width: '32px', height: '32px', backgroundColor: '#3b5998', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>f</a>
                <a href="#" style={{ display: 'flex', width: '32px', height: '32px', backgroundColor: '#0077b5', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>in</a>
                <a href="#" style={{ display: 'flex', width: '32px', height: '32px', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>ig</a>
              </div>
            </div>
            <div>
              <p style={{ fontWeight: 'bold', marginBottom: '15px', color: '#333333', marginTop: 0 }}>Contactanos</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ display: 'flex', width: '32px', height: '32px', backgroundColor: '#0051FF', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', color: '#fff', cursor: 'default' }}>📞</span>
                <span style={{ display: 'flex', width: '32px', height: '32px', backgroundColor: '#00A3AD', borderRadius: '50%', justifyContent: 'center', alignItems: 'center', color: '#fff', cursor: 'default' }}>✉️</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', borderTop: '1px solid #EAF0F6', paddingTop: '30px', paddingBottom: '30px', alignItems: 'center' }}>
            <div>
              <p style={{ margin: 0, color: '#888888' }}>Nº de inscripción SSN</p>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#555555' }}>1647</p>
            </div>
            <div>
              <p style={{ margin: 0, color: '#888888', maxWidth: '240px' }}>Departamento de Orientación y Asistencia al Asegurado</p>
            </div>
            <div>
              <p style={{ margin: 0, color: '#0051FF', fontWeight: 'bold', fontSize: '14px' }}>0800-666-8400</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
              <a href="https://www.argentina.gob.ar/ssn" target="_blank" rel="noreferrer" style={{ color: '#0051FF', textDecoration: 'underline' }}>www.argentina.gob.ar/ssn</a>
              <span style={{ fontWeight: '900', color: '#002D72', fontSize: '16px', letterSpacing: '1px' }}>SSN</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', borderTop: '1px solid #EAF0F6', paddingTop: '30px' }}>
            <div style={{ backgroundColor: '#F5F5F5', padding: '20px', borderRadius: '8px', lineHeight: '1.6', color: '#555555', fontSize: '11px' }}>
              La entidad aseguradora dispone de un <strong>Servicio de Atención al Asegurado</strong> que atenderá las consultas y reclamos que presenten los tomadores de seguros, asegurados, beneficiarios y/o derechohabientes. <br /><br />
              En caso de que existiera un reclamo ante la entidad aseguradora y que el mismo no haya sido resuelto o haya sido desestimado, total o parcialmente, o que haya sido denegada su admisión, podrá comunicarse con la Superintendencia de Seguros de la Nación por teléfono al 0800-666-8400, correo electrónico a consultas@ssn.gob.ar o formulario disponible en la página argentina.gob.ar/ssn
            </div>
            <div style={{ fontSize: '11px', lineHeight: '1.8' }}>
              <p style={{ margin: '0 0 10px 0', color: '#888888' }}>El Servicio de Atención al Asegurado está integrado por:</p>
              <p style={{ margin: 0 }}><strong>Responsable:</strong> Felipe Ricardo Luis Perdomo</p>
              <p style={{ margin: '0 0 15px 0' }}>Teléfono: +54 9 3442 57-1384</p>
              <p style={{ margin: 0 }}><strong>Suplente:</strong> Guillermo Jose Joannas</p>
              <p style={{ margin: '0 0 5px 0' }}>Teléfono: +54 9 3442 46-1715</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px', fontSize: '11px', color: '#B0B0B0', borderTop: '1px solid #F5F5F5', paddingTop: '20px' }}>
            © 2026 Nimbus Broker de Seguros S.A. — CUIT: 30-71612571-6. Todos los derechos reservados.
          </div>

        </div>
      </footer>

    </div>
  );
}