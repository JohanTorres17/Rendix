import { SimboloNaranja, LogoNegro } from './LogoComponents'

const parts = [
  { num: '01', title: 'La X central', desc: 'El núcleo del símbolo. Dos trazos diagonales de pincel que se cruzan al centro forman la X, representando el intercambio entre personas.', color: '#F78145', label: 'Naranja Vivo' },
  { num: '02', title: 'Trazos de pincel superpuestos', desc: 'Líneas de pincel adicionales crean profundidad y organicidad. Rompen con la rigidez geométrica y transmiten velocidad y movimiento natural.', color: '#A0B046', label: 'Oliva' },
  { num: '03', title: 'Área cuadrada del símbolo', desc: 'En versiones con fondo de color, el símbolo se enmarca en un cuadrado. Funciona perfectamente como ícono de app, avatar y favicon.', color: '#F24E4E', label: 'Rojo Energía' },
  { num: '04', title: 'Wordmark RendiX', desc: 'El nombre en tipografía Alata con la X modificada para alinearse con el símbolo. El separador vertical crea orden visual entre ícono y texto.', color: '#F2C94E', label: 'Amarillo Sol' },
  { num: '05', title: 'Separador vertical', desc: 'Una línea vertical entre el símbolo y el wordmark. Mantiene la separación visual sin perder la unidad del conjunto.', color: '#7A8C82', label: 'Niebla' },
]

export default function LogoBreakdown() {
  return (
    <section id="s09" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">09 — Logo Breakdown</span>
            <h2 className="sec-title">Anatomía <em>detallada</em></h2>
            <p className="sec-desc">Cada componente del logo tiene una función visual y conceptual específica. Ningún elemento es arbitrario.</p>
          </div>
        </div>

        <div className="row g-5 align-items-start">

          {/* Canvas con logo real */}
          <div className="col-12 col-md-5">
            <div
              className="d-flex align-items-center justify-content-center flex-column gap-4"
              style={{
                background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(247,129,69,0.1) 0%, transparent 70%), var(--dark-2)',
                borderRadius: 16, padding: '48px 32px',
                border: '1px solid var(--border)',
              }}
            >
              {/* Símbolo grande */}
              <SimboloNaranja size={140} />
              {/* Logo completo */}
              <div style={{ background: '#1A1A1A', borderRadius: 8, padding: '12px 20px' }}>
                <LogoNegro height={48} />
              </div>
            </div>
          </div>

          {/* Parts list */}
          <div className="col-12 col-md-7">
            {parts.map((p, i) => (
              <div
                key={i}
                style={{
                  display: 'grid', gridTemplateColumns: '44px 1fr', gap: 16,
                  padding: '20px 0',
                  borderBottom: i < parts.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: '#F78145', fontWeight: 500, paddingTop: 2 }}>{p.num}</div>
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, marginBottom: 5, color: '#fff' }}>{p.title}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.6, marginBottom: 8 }}>{p.desc}</div>
                  <div className="d-flex align-items-center gap-2">
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                    <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: 'var(--muted)' }}>{p.color} — {p.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}