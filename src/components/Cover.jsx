import { LogoRojo, SimboloNaranja, SimboloVerde } from './LogoComponents'

const meta = [
  { label: 'Versión',     value: '1.0.0' },
  { label: 'Actualizado', value: 'Enero 2025' },
  { label: 'Autor',       value: 'RendiX Studio' },
  { label: 'Secciones',   value: '10' },
]

export default function Cover() {
  return (
    <section
      id="cover"
      style={{
        minHeight: '100vh',
        background: 'var(--dark)',
        display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      {/* Glow verde */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 70% at 80% 40%, rgba(17,100,77,0.25) 0%, transparent 60%)',
      }} />
      {/* Glow naranja */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 30% 40% at 20% 70%, rgba(247,129,69,0.1) 0%, transparent 50%)',
      }} />

      {/* Background X grande */}
      <div style={{
        position: 'absolute', right: '-60px', top: '50%',
        transform: 'translateY(-50%)',
        opacity: 0.05, pointerEvents: 'none',
      }}>
        <SimboloNaranja size={500} />
      </div>

      <div className="container position-relative">
        <div className="row align-items-center">

          {/* Columna izquierda — texto */}
          <div className="col-12 col-lg-7">
            <div className="d-flex align-items-center gap-2 mb-4">
              <div style={{ width: 32, height: 1, background: '#F78145' }} />
              <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.68rem', letterSpacing: '0.2em', color: '#F78145' }}>
                Manual de Identidad de Marca — 2025
              </span>
            </div>

            <h1 style={{
              fontFamily: 'Alata, sans-serif',
              fontSize: 'clamp(4rem, 10vw, 8rem)',
              fontWeight: 400, color: '#fff',
              lineHeight: 0.9, letterSpacing: '0.04em',
              marginBottom: '8px',
            }}>
              Rendi<span style={{ color: '#F78145' }}>X</span>
            </h1>

            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '56px',
            }}>Plataforma de alquiler colaborativo</p>

            <div className="d-flex flex-wrap gap-4 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              {meta.map(m => (
                <div key={m.label}>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', marginBottom: 4 }}>{m.label}</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha — logos reales */}
          <div className="col-12 col-lg-5 d-none d-lg-flex flex-column align-items-center justify-content-center gap-3">
            <SimboloNaranja size={140} />
            <div className="d-flex gap-3">
              <SimboloVerde size={72} />
              <SimboloNaranja size={72} style={{ opacity: 0.5 }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}