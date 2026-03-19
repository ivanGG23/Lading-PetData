"use client";

export default function Navbar() {
  const handleDownloadClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("descargar");
    if (target) {
      const navHeight = 60; // ajusta al alto real de tu nav
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="nav">
      <div className="nav-brand">
        <div className="nav-paw">🐾</div>
        <div>
          <div className="nav-title">PetData</div>
          <span className="nav-subtitle">App Oficial</span>
        </div>
      </div>
      <a href="#descargar" onClick={handleDownloadClick} className="nav-btn">
        ⬇ Descargar APK
      </a>
    </nav>
  );
}