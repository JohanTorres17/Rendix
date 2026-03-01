import { SimboloNaranja, LogoVerde } from './LogoComponents'

const XLabel = ({ style }) => (
  <span style={{
    position: 'absolute', fontFamily: 'DM Mono, monospace',
    fontSize: '0.6rem', color: '#F78145', fontWeight: 600,
    background: 'var(--dark-2)', padding: '0 4px', borderRadius: 3,
    border: '1px solid rgba(247,129,69,0.3)',
    ...style,
  }}>X</span>
)

const sizes = [
  { uso: 'Web / Pantalla', full: '180px', icon: '32px' },
  { uso: 'Email / App',    full: '120px', icon: '24px' },
  { uso: 'Impresión',      full: '30mm',  icon: '8mm'  },
  { uso: 'Favicon',        full: '—',     icon: '16px' },
]

export default function TamanioReserva() {
  return (
    <section id="s06" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">06 — Tamaño y Área de Reserva</span>
            <h2 className="sec-title">Espacio y <em>escala</em></h2>
            <p className="sec-desc">El área de reserva es el espacio mínimo que debe mantenerse alrededor del logotipo igual o mayor al alto de la letra "X" dentro del logo.</p>
          </div>
        </div>

        <div className="row g-4">

          {/* Área de reserva */}
          <div className="col-12 col-md-6">
            <div className="brand-card h-100 p-4">
              <h5 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 4, color: '#fff' }}>Área de Reserva</h5>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: 24 }}>
                Espacio libre igual a X en todos los lados. Ningún elemento puede invadir esta zona.
              </p>
              <div className="d-flex align-items-center justify-content-center" style={{ background: 'var(--dark-3)', borderRadius: 10, padding: '48px', minHeight: 180 }}>
                <div style={{ position: 'relative', display: 'inline-block', padding: 32, border: '1.5px dashed rgba(247,129,69,0.5)' }}>
                  <XLabel style={{ top: -8, left: '50%', transform: 'translateX(-50%)' }} />
                  <XLabel style={{ bottom: -8, left: '50%', transform: 'translateX(-50%)' }} />
                  <XLabel style={{ left: -8, top: '50%', transform: 'translateY(-50%) rotate(-90deg)' }} />
                  <XLabel style={{ right: -8, top: '50%', transform: 'translateY(-50%) rotate(90deg)' }} />
                  {/* Logo real dentro del área de reserva */}
                  <LogoVerde height={44} />
                </div>
              </div>
            </div>
          </div>

          {/* Tamaños mínimos */}
          <div className="col-12 col-md-6">
            <div className="brand-card h-100 p-4">
              <h5 style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 4, color: '#fff' }}>Tamaños Mínimos</h5>
              <p style={{ fontSize: '0.78rem', color: 'var(--muted)', marginBottom: 24 }}>
                No reducir el logo por debajo de estos valores para garantizar legibilidad óptima.
              </p>
              <table className="w-100" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: 'var(--dark-3)' }}>
                    <th style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: 'var(--muted)', padding: '10px 12px', textAlign: 'left', fontWeight: 500, borderBottom: '1px solid var(--border)' }}>Uso</th>
                    <th style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: 'var(--muted)', padding: '10px 12px', textAlign: 'right', fontWeight: 500, borderBottom: '1px solid var(--border)' }}>Logo completo</th>
                    <th style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: 'var(--muted)', padding: '10px 12px', textAlign: 'right', fontWeight: 500, borderBottom: '1px solid var(--border)' }}>Solo símbolo</th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((s, i) => (
                    <tr key={i} style={{ borderBottom: i < sizes.length - 1 ? '1px solid var(--border)' : 'none' }}>
                      <td style={{ padding: '12px', fontSize: '0.82rem', color: 'var(--text)' }}>{s.uso}</td>
                      <td style={{ padding: '12px', fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'right' }}>{s.full}</td>
                      <td style={{ padding: '12px', fontFamily: 'DM Mono, monospace', fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'right' }}>{s.icon}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}