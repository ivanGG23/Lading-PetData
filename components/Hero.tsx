"use client";

export default function Hero() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const navHeight = 60;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

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
        <a href="#descargar" onClick={scrollTo("descargar")} className="btn-white">
          ⬇ Descargar APK
        </a>
        <a href="#como-funciona" onClick={scrollTo("como-funciona")} className="btn-outline">
          ¿Cómo funciona?
        </a>
      </div>
    </div>
  );
}