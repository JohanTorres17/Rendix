import { LogoRojo, SimboloNaranja } from './LogoComponents'

const wrongs = [
  {
    title: 'No distorsionar',
    desc: 'Nunca estires ni comprimas el logo horizontalmente o verticalmente.',
    bg: '#0F1A15',
    render: () => <LogoRojo height={48} style={{ transform: 'scaleX(1.6)' }} />,
  },
  {
    title: 'No rotar',
    desc: 'El logo siempre en posición horizontal estándar.',
    bg: '#0F1A15',
    render: () => <LogoRojo height={48} style={{ transform: 'rotate(20deg)' }} />,
  },
  {
    title: 'No aplicar efectos',
    desc: 'Sin sombras, brillos, gradientes ni filtros sobre el logo.',
    bg: '#0F1A15',
    render: () => <SimboloNaranja size={64} style={{ filter: 'drop-shadow(0 0 12px #F78145) blur(1px)' }} />,
  },
  {
    title: 'No usar fondos no aprobados',
    desc: 'Solo fondos definidos en la paleta oficial de la marca.',
    bg: 'linear-gradient(135deg, #7C3AED, #EC4899)',
    render: () => <LogoRojo height={48} />,
  },
  {
    title: 'No reducir opacidad',
    desc: 'El logo siempre al 100% de opacidad. Sin versiones fantasma.',
    bg: '#0F1A15',
    render: () => <LogoRojo height={48} style={{ opacity: 0.25 }} />,
  },
  {
    title: 'No recolorear el símbolo',
    desc: 'No cambiar los colores del símbolo fuera de las versiones aprobadas.',
    bg: '#0F1A15',
    render: () => <SimboloNaranja size={64} style={{ filter: 'hue-rotate(180deg)' }} />,
  },
]

export default function UsosIncorrectos() {
  return (
    <section id="s10" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">10 — Usos Incorrectos</span>
            <h2 className="sec-title">Lo que <em>no</em> se debe hacer</h2>
            <p className="sec-desc">Estas aplicaciones dañan la coherencia visual de RendiX. Nunca modifiques el logo fuera de las versiones aprobadas.</p>
          </div>
        </div>

        {/* 3 columnas Bootstrap */}
        <div className="row g-3 mb-4">
          {wrongs.map((w, i) => {
            const Render = w.render
            return (
              <div key={i} className="col-12 col-sm-6 col-lg-4">
                <div className="brand-card h-100">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: 140, background: w.bg, padding: 28, position: 'relative', borderRadius: '12px 12px 0 0' }}
                  >
                    <div style={{
                      position: 'absolute', top: 10, right: 10,
                      width: 24, height: 24, borderRadius: '50%',
                      background: 'rgba(242,78,78,0.2)', color: '#F24E4E',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', fontWeight: 700,
                      border: '1px solid rgba(242,78,78,0.4)',
                    }}>✕</div>
                    <Render />
                  </div>
                  <div style={{ padding: '14px 16px', borderTop: '1px solid var(--border)' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, marginBottom: 3, color: '#fff' }}>{w.title}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{w.desc}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mt-5 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="d-flex align-items-center gap-2">
            <SimboloNaranja size={28} />
            <span style={{ fontFamily: 'Alata, sans-serif', fontSize: '1rem', color: '#fff', letterSpacing: '0.06em' }}>
              Rendi<span style={{ color: '#F78145' }}>X</span>
            </span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
            Manual de Marca v1.0.0 — © 2025 RendiX. Todos los derechos reservados.
          </div>
        </div>

      </div>
    </section>
  )
}