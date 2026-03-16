export default function Download() {
  return (
    <div className="download-section" id="descargar">
      <div className="download-inner">
        <div className="dl-badge">🤖 Android · v1.0.0-beta</div>
        <div className="dl-title">
          Descarga y empieza
          <br />
          a <em>ayudar hoy</em>
        </div>
        <p className="dl-desc">
          Disponible para Android. Instala el APK directamente y únete a la red que está
          cambiando la realidad de los animales abandonados en México.
        </p>

        {/*
          Reemplaza href="#" con la URL real de tu APK, por ejemplo:
          href="/downloads/petdata-v1.0.0.apk"
          o un enlace externo a tu servidor / GitHub Releases
        */}
        <a href="https://drive.google.com/file/d/1TzD4V3GmE_Im5j7BcloOEKv2U1AAKJoT/view?usp=sharing" className="apk-btn">
          ⬇ Descargar APK — Android
        </a>

        <div className="dl-note">🔒 Archivo seguro · Android 8.0+ requerido</div>
        <div className="dl-warning">
          ⚠️ Activa &ldquo;Instalar apps de fuentes desconocidas&rdquo; antes de instalar
        </div>
      </div>
    </div>
  );
}