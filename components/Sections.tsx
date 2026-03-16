/* ── Stats Band ─────────────────────────────────────────── */
export function StatsBand() {
  const stats = [
    { num: "+856", label: "Animales rescatados" },
    { num: "GPS",  label: "Ubicación en tiempo real" },
    { num: "3",    label: "Roles de usuario" },
    { num: "100%", label: "Trazabilidad de casos" },
  ];
  return (
    <div className="stats-band">
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="reveal">
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Features ────────────────────────────────────────────── */
const features = [
  { color: "c-green",  icon: "📍", title: "Reporte con GPS",         desc: "Registra la ubicación exacta del animal con las coordenadas del dispositivo. Precisión metro a metro para una respuesta más rápida." },
  { color: "c-yellow", icon: "🗺️", title: "Mapa de calor",           desc: "Rescatistas y administradores visualizan zonas críticas con mayor concentración de reportes activos para optimizar recursos." },
  { color: "c-blue",   icon: "🔁", title: "Trazabilidad completa",   desc: "Cada reporte pasa por estados claros: Pendiente → En revisión → En proceso → Resuelto, con historial y evidencias fotográficas." },
  { color: "c-green",  icon: "⭐", title: "Sistema de reputación",   desc: "Los ciudadanos ganan y pierden puntos según la veracidad de sus reportes, premiando a los colaboradores reales." },
  { color: "c-orange", icon: "🛡️", title: "Moderación activa",       desc: "Los administradores pueden suspender cuentas y revisar reportes marcados como falsos para mantener la calidad." },
  { color: "c-yellow", icon: "📸", title: "Evidencias fotográficas", desc: "Sube fotos al crear y al cerrar el reporte. El historial visual completo de cada caso queda guardado en el sistema." },
];

export function Features() {
  return (
    <div className="features-section">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Funcionalidades</span>
          <div className="section-title">
            Todo lo que necesitas
            <br />
            para <em>actuar rápido</em>
          </div>
          <p className="section-desc">
            Cada función fue pensada para el flujo real de trabajo de ciudadanos y rescatistas
            sobre el terreno.
          </p>
        </div>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className={`feature-card ${f.color} reveal`}>
              <div className={`feature-icon-wrap ${f.color}`}>{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── How It Works ────────────────────────────────────────── */
const steps = [
  { num: "01", title: "Descarga la app",          desc: "Instala el APK en tu Android y crea tu cuenta como ciudadano o rescatista en segundos." },
  { num: "02", title: "Reporta un animal",        desc: "Toma una foto, selecciona el tipo y estado del animal. El GPS captura la ubicación automáticamente." },
  { num: "03", title: "Un rescatista lo atiende", desc: "Los rescatistas filtran reportes por zona y especie, se asignan casos y actualizan el estado en tiempo real." },
  { num: "04", title: "El caso se cierra",        desc: "Se cierra con evidencia fotográfica y el ciudadano que reportó recibe puntos de reputación." },
];

export function HowItWorks() {
  return (
    <div className="how-section" id="como-funciona">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Flujo de uso</span>
          <div className="section-title">
            ¿Cómo <em>funciona</em>?
          </div>
        </div>
        <div className="steps-grid">
          {steps.map((s) => (
            <div key={s.num} className="step-card reveal">
              <div className="step-num">{s.num}</div>
              <div className="step-title">{s.title}</div>
              <div className="step-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Roles ───────────────────────────────────────────────── */
const roles = [
  {
    icon: "👤", name: "Ciudadano", tag: "Reporte básico",
    desc: "Cualquier persona que encuentre un animal en riesgo y quiera reportarlo de forma rápida.",
    perks: ["Hasta 3 reportes por día", "Seguimiento del estado de sus casos", "Sistema de puntos por veracidad", "Historial personal de reportes"],
  },
  {
    icon: "🦸", name: "Rescatista", tag: "Atención en campo",
    desc: "Profesionales o voluntarios que atienden reportes activos y dan seguimiento en campo.",
    perks: ["Filtrar reportes por zona y especie", "Asignarse y desasignarse casos", "Marcar reportes como falsos", "Acceso al mapa de calor"],
  },
  {
    icon: "🛡️", name: "Administrador", tag: "Control total",
    desc: "Gestiona la plataforma y garantiza la calidad e integridad de toda la información.",
    perks: ["Moderar y cerrar reportes", "Suspender o banear usuarios", "Consultar estadísticas globales", "Acceso completo al mapa de calor"],
  },
];

export function Roles() {
  return (
    <div className="roles-section">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Tipos de usuario</span>
          <div className="section-title">
            Una plataforma
            <br />
            para <em>todos</em>
          </div>
        </div>
        <div className="roles-grid">
          {roles.map((r) => (
            <div key={r.name} className="role-card reveal">
              <div className="role-header">
                <div className="role-avatar">{r.icon}</div>
                <div>
                  <div className="role-name">{r.name}</div>
                  <span className="role-tag">{r.tag}</span>
                </div>
              </div>
              <div className="role-desc">{r.desc}</div>
              <div className="perk-list">
                {r.perks.map((p) => (
                  <div key={p} className="perk">
                    <div className="perk-check">✓</div>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}