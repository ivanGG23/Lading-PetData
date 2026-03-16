import Link from "next/link";

const legalLinks = [
  { href: "/aviso-de-privacidad",        label: "Aviso de Privacidad" },
  { href: "/terminos-y-condiciones",     label: "Términos y Condiciones" },
  { href: "/deslinde-de-responsabilidad",label: "Deslinde de Responsabilidad" },
  { href: "/politica-de-contenido",      label: "Política de Contenido" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
        <div
          style={{
            width: 32, height: 32,
            background: "var(--yellow)",
            borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.9rem",
          }}
        >
          🐾
        </div>
        <span className="footer-title">PetData</span>
      </div>

      <div className="footer-legal">
        {legalLinks.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.25rem" }}>
        <span className="footer-copy">Hecho con ❤️ en México · © 2025</span>
        <span className="footer-stack">Node.js · TypeScript · PostgreSQL · MongoDB</span>
      </div>
    </footer>
  );
}