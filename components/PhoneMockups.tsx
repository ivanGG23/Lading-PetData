"use client";

export default function PhoneMockups() {
  return (
    <div className="mockups-wrap reveal">

      {/* Phone 1: Home Screen */}
      <div className="phone">
        <div className="phone-notch" />
        <div className="p-topbar">
          <div className="p-topbar-brand">
            <div className="p-topbar-paw">🐾</div>
            <div className="p-topbar-title">PetData</div>
          </div>
          <span style={{ color: "white", fontSize: "0.85rem" }}>🔔</span>
        </div>
        <div className="p-hero-phone">
          <div className="p-hero-pill">¡Tu ayuda importa!</div>
          <div className="p-hero-title">Reporta un caso al instante</div>
          <div className="p-hero-sub">Usa tu ubicación para ayudar a rescatistas.</div>
          <div className="p-hero-btn">+ Crear Nuevo Reporte</div>
        </div>
        <div style={{ fontSize: "0.65rem", fontWeight: 800, color: "var(--text)", marginBottom: "0.5rem" }}>
          Resumen Mensual
        </div>
        <div className="p-stats">
          <div className="p-stat">
            <div className="p-stat-num">142</div>
            <div className="p-stat-up">↑ 12%</div>
            <div className="p-stat-label">Activos</div>
          </div>
          <div className="p-stat">
            <div className="p-stat-num">856</div>
            <div className="p-stat-up">↑ 5%</div>
            <div className="p-stat-label">Rescatados</div>
          </div>
          <div className="p-stat">
            <div className="p-stat-num">64</div>
            <div className="p-stat-up">&nbsp;</div>
            <div className="p-stat-label">Adoptados</div>
          </div>
        </div>
        <div className="p-section-header">
          <span className="p-section-title">Últimos Reportes</span>
          <span className="p-section-link">Ver todos</span>
        </div>
        <div className="p-chips">
          <div className="p-chip active">Todos</div>
          <div className="p-chip">Perros</div>
          <div className="p-chip">Gatos</div>
          <div className="p-chip">Urgentes</div>
        </div>
        <div className="p-card">
          <div className="p-card-img">🐕</div>
          <div className="p-card-body">
            <div className="p-card-row">
              <span className="p-card-title">Perro – Rescate</span>
              <div className="p-badges">
                <span className="p-badge media">MEDIA</span>
                <span className="p-badge proceso">En Proceso</span>
              </div>
            </div>
            <div className="p-card-desc">
              Perro mestizo encontrado cerca de la fuente. Parece desorientado...
            </div>
            <div className="p-card-meta">🕐 Hace 2 horas · 📍 Parque Central</div>
            <div className="p-card-btn">Ver Detalles</div>
          </div>
        </div>
        <div className="p-bottomnav">
          <div className="p-nav-item">
            <span className="p-nav-icon">🏠</span>
            <div className="p-nav-label" style={{ color: "var(--green)" }}>Inicio</div>
          </div>
          <div className="p-nav-item">
            <span className="p-nav-icon">🗺️</span>
            <div className="p-nav-label">Mapa</div>
          </div>
          <div className="p-nav-item">
            <span className="p-nav-icon">📋</span>
            <div className="p-nav-label">Reportes</div>
          </div>
          <div className="p-nav-item">
            <span className="p-nav-icon">⚙️</span>
            <div className="p-nav-label">Config</div>
          </div>
        </div>
      </div>

      {/* Phone 2: Nuevo Reporte */}
      <div className="phone">
        <div className="phone-notch" />
        <div className="p-topbar">
          <span style={{ color: "white", fontSize: "0.75rem" }}>←</span>
          <span style={{ color: "white", fontWeight: 800, fontSize: "0.75rem" }}>Nuevo Reporte</span>
          <span />
        </div>
        <div style={{ marginTop: "0.6rem" }}>
          <div className="p-photo-box">📸</div>
          <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.3rem" }}>Tipo de animal</div>
          <div className="p-form-field">🐶 Perro</div>
          <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.3rem" }}>Estado del animal</div>
          <div className="p-form-field">⚠️ En peligro inmediato</div>
          <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.3rem" }}>Ubicación</div>
          <div className="p-form-field" style={{ color: "var(--green)" }}>📍 GPS detectado automáticamente</div>
          <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.3rem" }}>Descripción</div>
          <div className="p-form-field" style={{ height: 48, alignItems: "flex-start", paddingTop: "0.4rem" }}>
            Descripción del animal...
          </div>
          <div className="p-form-field">📞 Contacto opcional</div>
          <div className="p-submit">+ Crear Reporte</div>
        </div>
      </div>

      {/* Phone 3: Detalle del reporte */}
      <div className="phone">
        <div className="phone-notch" />
        <div className="p-topbar">
          <span style={{ color: "white", fontSize: "0.75rem" }}>←</span>
          <span style={{ color: "white", fontWeight: 800, fontSize: "0.75rem" }}>Detalle del Reporte</span>
          <span />
        </div>
        <div style={{ marginTop: "0.6rem" }}>
          <div
            style={{
              background: "linear-gradient(135deg,#a5d6a7,#4caf50)",
              borderRadius: 10, height: 75,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "2rem", marginBottom: "0.6rem",
            }}
          >
            🐱
          </div>
          <div className="p-card-row" style={{ marginBottom: "0.4rem" }}>
            <span style={{ fontWeight: 800, fontSize: "0.75rem" }}>Gato – Desnutrido</span>
            <div className="p-badges">
              <span className="p-badge alta">ALTA</span>
              <span className="p-badge proceso">En Proceso</span>
            </div>
          </div>
          <div style={{ fontSize: "0.6rem", color: "var(--text-sec)", lineHeight: 1.5, marginBottom: "0.5rem" }}>
            Colonia de gatos en edificio abandonado. Necesitan voluntarios para captura humanitaria.
          </div>
          <div style={{ fontSize: "0.57rem", color: "var(--text-sec)", marginBottom: "0.5rem" }}>
            📍 Av. Las Américas · 🕐 Hace 5 horas · 👤 María G.
          </div>
          <div style={{ background: "var(--green-pale)", borderRadius: 8, padding: "0.5rem", marginBottom: "0.5rem" }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--green)", marginBottom: "0.2rem" }}>
              Historial de estados
            </div>
            <div style={{ fontSize: "0.55rem", color: "var(--text-sec)" }}>
              ✅ Pendiente → En revisión → En proceso
            </div>
          </div>
          <div style={{ border: "1px solid var(--divider)", borderRadius: 8, padding: "0.5rem", marginBottom: "0.5rem" }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 700, color: "var(--text)", marginBottom: "0.35rem" }}>
              Comentarios
            </div>
            <div style={{ background: "var(--bg)", borderRadius: 6, padding: "0.35rem", fontSize: "0.55rem", color: "var(--text-sec)" }}>
              Laura R.: Ya voy en camino. 🙏
            </div>
          </div>
          <div
            style={{ background: "var(--green)", color: "white", borderRadius: 8, padding: "0.4rem", textAlign: "center", fontSize: "0.6rem", fontWeight: 800 }}
          >
            Asignarme este caso
          </div>
        </div>
      </div>

    </div>
  );
}