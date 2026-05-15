import type { NextConfig } from "next";

/**
 * Configuración Next.js + Tailwind para colores institucionales de Nimbus.
 * Agrega nimbusBlue (#0051FF) y nimbusGreen (#70FF00) como colores extendidos,
 * asegurando que estén disponibles como bg-nimbusBlue, text-nimbusGreen, etc.
 */

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  experimental: {
    // Permite configuración extendida para Tailwind CSS vía next.config.js si usas twin.macro o twin's config merging
    // Si NO usas twin.macro, ignora este bloque; la configuración Tailwind real está en tailwind.config.js
    // Este fragmento es sólo para referencia si Next.js/tailwind se configuran juntos aquí.
    tailwind: {
      theme: {
        extend: {
          colors: {
            nimbusBlue: "#0051FF",
            nimbusGreen: "#70FF00",
          },
        },
      },
    },
  },
};

export default nextConfig;
