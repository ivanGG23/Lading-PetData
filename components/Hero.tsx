import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-pill">🐾 México · Rescate Animal</div>
      <h1>
        Reporta. Rastrea.
        <br />
        <em>Salva vidas.</em>
      </h1>
      <p className="hero-sub">
        PetData conecta ciudadanos y rescatistas para atender animales en situación de abandono
        o maltrato. Descarga la app y empieza a ayudar hoy.
      </p>
      <div className="hero-actions">
        <Link href="#descargar" className="btn-white">
          ⬇ Descargar APK
        </Link>
        <Link href="#como-funciona" className="btn-outline">
          ¿Cómo funciona?
        </Link>
      </div>
    </div>
  );
}