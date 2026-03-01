import { useState } from 'react'

const paletas = [
  {
    name: 'Paleta Principal — Energía',
    desc: 'Sitios web, app, presentaciones',
    colors: [
      { hex: '#0F1A15', light: false },
      { hex: '#11644D', light: false },
      { hex: '#A0B046', light: false },
      { hex: '#F2C94E', light: false },
      { hex: '#F78145', light: false },
      { hex: '#F24E4E', light: false },
    ],
  },
  {
    name: 'Paleta Oscura — Dark Mode',
    desc: 'Interfaces oscuras y banners de impacto',
    colors: [
      { hex: '#060D09', light: false },
      { hex: '#0F1A15', light: false },
      { hex: '#162219', light: false },
      { hex: '#11644D', light: false },
      { hex: '#F78145', light: false },
      { hex: '#F24E4E', light: false },
    ],
  },
  {
    name: 'Paleta Clara — Light Mode',
    desc: 'Documentos, propuestas, materiales impresos',
    colors: [
      { hex: '#FFFFFF', light: true  },
      { hex: '#F7F5F2', light: true  },
      { hex: '#EFECE7', light: true  },
      { hex: '#A0B046', light: true  },
      { hex: '#F78145', light: false },
      { hex: '#11644D', light: false },
    ],
  },
]

export default function Paletas() {
  const [toast, setToast] = useState('')

  const copy = (hex) => {
    navigator.clipboard.writeText(hex)
    setToast(`Copiado: ${hex}`)
    setTimeout(() => setToast(''), 2000)
  }

  return (
    <section id="s08" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">08 — Paletas de Color</span>
            <h2 className="sec-title">Combinaciones <em>aprobadas</em></h2>
            <p className="sec-desc">Tres paletas oficiales para distintos contextos. Haz clic en cada color para copiar el HEX.</p>
          </div>
        </div>

        <div className="row g-4">
          {paletas.map((p, i) => (
            <div key={i} className="col-12">
              <div style={{ border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden' }}>
                <div className="d-flex align-items-center justify-content-between px-4 py-3" style={{ background: 'var(--dark-2)', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>{p.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>{p.desc}</div>
                </div>
                <div className="d-flex" style={{ height: 100 }}>
                  {p.colors.map((c, j) => (
                    <div
                      key={j}
                      style={{ flex: 1, background: c.hex, cursor: 'pointer', position: 'relative', transition: 'flex 0.3s', border: c.light ? '1px solid #ddd' : 'none' }}
                      onClick={() => copy(c.hex)}
                      onMouseEnter={e => e.currentTarget.style.flex = '2'}
                      onMouseLeave={e => e.currentTarget.style.flex = '1'}
                      title={`Copiar ${c.hex}`}
                    />
                  ))}
                </div>
                {/* HEX labels row */}
                <div className="d-flex" style={{ background: 'var(--dark-3)' }}>
                  {p.colors.map((c, j) => (
                    <div key={j} style={{ flex: 1, padding: '6px 4px', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.55rem', color: 'var(--muted)', cursor: 'pointer' }} onClick={() => copy(c.hex)}>{c.hex}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {toast && (
        <div style={{
          position: 'fixed', bottom: 28, left: '50%', transform: 'translateX(-50%)',
          background: '#F78145', color: '#fff', padding: '10px 22px',
          borderRadius: 100, fontSize: '0.78rem', zIndex: 9999,
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
        }}>{toast}</div>
      )}
    </section>
  )
}