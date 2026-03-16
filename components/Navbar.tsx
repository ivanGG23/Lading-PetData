import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <div className="nav-paw">🐾</div>
        <div>
          <div className="nav-title">PetData</div>
          <span className="nav-subtitle">App Oficial</span>
        </div>
      </div>
      <Link href="#descargar" className="nav-btn">
        ⬇ Descargar APK
      </Link>
    </nav>
  );
}