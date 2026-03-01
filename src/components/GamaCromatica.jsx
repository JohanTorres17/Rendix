import { useState } from 'react'

const mainColors = [
  { hex: '#11644D', name: 'Bosque',        role: 'Principal',  col: 'col-md-4', light: false },
  { hex: '#F78145', name: 'Naranja Vivo',  role: 'Acento',     col: 'col-md-4', light: false },
  { hex: '#F24E4E', name: 'Rojo Energía',  role: 'Impacto',    col: 'col-md-4', light: false },
]

const swatches = [
  { hex: '#0D4F3C', name: 'Verde Profundo', usage: 'Fondos oscuros' },
  { hex: '#A0B046', name: 'Oliva',          usage: 'Acento secundario' },
  { hex: '#F2C94E', name: 'Amarillo Sol',   usage: 'Alertas / Tags' },
  { hex: '#0F1A15', name: 'Noche',          usage: 'Background' },
  { hex: '#7A8C82', name: 'Niebla',         usage: 'Texto secundario' },
]

export default function GamaCromatica() {
  const [toast, setToast] = useState('')

  const copy = (hex) => {
    navigator.clipboard.writeText(hex)
    setToast(`Copiado: ${hex}`)
    setTimeout(() => setToast(''), 2000)
  }

  return (
    <section id="s04" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">04 — Gama Cromática</span>
            <h2 className="sec-title">Sistema de <em>color</em></h2>
            <p className="sec-desc">Una paleta que combina la estabilidad del verde bosque con la energía del naranja y el impacto del rojo. Naturaleza, dinamismo y acción.</p>
          </div>
        </div>

        {/* 3 colores principales */}
        <div className="row g-2 mb-3">
          {mainColors.map(c => (
            <div key={c.hex} className={`col-12 ${c.col}`}>
              <div
                style={{ background: c.hex, minHeight: 220, position: 'relative', borderRadius: 12, cursor: 'pointer', overflow: 'hidden' }}
                onClick={() => copy(c.hex)}
              >
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '20px 24px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff', marginBottom: 2 }}>{c.name}</div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)' }}>{c.hex} · {c.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Swatches — 5 columnas */}
        <div className="row g-3">
          {swatches.map(s => (
            <div key={s.hex} className="col-6 col-sm-4 col-lg">
              <div className="brand-card h-100" style={{ cursor: 'pointer' }} onClick={() => copy(s.hex)}>
                <div style={{ height: 80, background: s.hex }} />
                <div style={{ padding: '10px 12px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, marginBottom: 2, color: '#fff' }}>{s.name}</div>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: 'var(--muted)' }}>{s.hex}</div>
                  <div style={{ fontSize: '0.62rem', color: 'var(--muted)', marginTop: 2 }}>{s.usage}</div>
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