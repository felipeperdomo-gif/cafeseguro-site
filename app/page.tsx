"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', color: '#002D72', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      
      {/* HEADER - Logo a la izquierda, login dinámico a la derecha */}
      <header style={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#FFFFFF', padding: '15px 30px', borderBottom: '1px solid #E5E5E5', zIndex: 100, boxSizing: 'border-box' }}>
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

      {/* SECCIÓN PRINCIPAL - HERO CORREGIDO */}
      <main style={{ paddingTop: '160px', textAlign: 'center', paddingLeft: '20px', paddingRight: '20px', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          
          <span style={{ color: '#25D366', fontSize: '12px', fontWeight: '800', letterSpacing: '3px', textTransform: 'uppercase' }}>
            Experiencia Exclusiva
          </span>
          
          <h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: '900', margin: '20px 0', lineHeight: '1.1', color: '#002D72', letterSpacing: '-0.02em' }}>
            CAFE SEGURO
          </h1>
          
          <p style={{ fontSize: '19px', color: '#4A4A4A', marginBottom: '40px', lineHeight: '1.5', maxWidth: '650px', margin: '0 auto 40px' }}>
            Encuentros reales para productores que impulsan la transformación del sector con tecnología y disrupción.
          </p>
          
          <div style={{ borderLeft: '4px solid #25D366', padding: '10px 20px', display: 'inline-block', fontStyle: 'italic', backgroundColor: '#F0FFF5', color: '#002D72', fontWeight: '500', borderRadius: '0 8px 8px 0' }}>
            "El seguro se toma con café"
          </div>

        </div>

        {/* TARJETAS DE ENCUENTROS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '90px auto', textAlign: 'left' }}>
          {[
            { ciudad: 'Rosario', fecha: '22 de agosto, 2026', tema: 'Big Data y Trazabilidad en el mercado actual.' },
            { ciudad: 'Córdoba', fecha: '05 de septiembre, 2026', tema: 'Innovación en procesos de suscripción digital.' },
            { ciudad: 'Santa Fe', fecha: '19 de septiembre, 2026', tema: 'Networking y transformación del productor.' }
          ].map((item) => (
            <div key={item.ciudad} style={{ backgroundColor: '#FFFFFF', padding: '40px 30px', borderRadius: '24px', border: '1px solid #EAF0F6', boxShadow: '0 10px 30px rgba(0,45,114,0.04)', boxSizing: 'border-box' }}>
              
              <p style={{ color: '#25D366', fontWeight: '700', fontSize: '13px', marginBottom: '8px', letterSpacing: '0.5px' }}>
                {item.fecha}
              </p>
              
              <h3 style={{ fontSize: '3