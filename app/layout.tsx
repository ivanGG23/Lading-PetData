import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PetData — Juntos salvamos vidas",
  description:
    "PetData conecta ciudadanos y rescatistas para atender animales en situación de abandono o maltrato en México. Reporta, rastrea y salva vidas desde tu celular.",
  keywords: ["rescate animal", "animales abandonados", "México", "PetData", "reporte animal"],
  openGraph: {
    title: "PetData — Juntos salvamos vidas",
    description: "Reporta animales en situación de riesgo. Descarga la app para Android.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}