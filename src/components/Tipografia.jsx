const fonts = [
  {
    tag: 'Display / Logotipo',
    name: 'Alata',
    desc: 'Sans-serif geométrica de trazos firmes. Usada en el logotipo con modificaciones personalizadas en la X. Para títulos principales y display.',
    weights: ['400'],
    sample: (
      <div style={{ fontFamily: 'Alata, sans-serif', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 400, color: '#fff', letterSpacing: '0.04em', lineHeight: 1 }}>
        Rendi<span style={{ color: '#F78145' }}>X</span>
      </div>
    ),
  },
  {
    tag: 'Cuerpo / Interfaz',
    name: 'DM Sans',
    desc: 'Sans-serif humanista para cuerpo de texto, descripciones y UI. Legible en todos los tamaños y compatible con la energía de Alata.',
    weights: ['300', '400', '500', '600'],
    sample: (
      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1.05rem', fontWeight: 300, lineHeight: 1.75, color: 'var(--muted)', maxWidth: 480 }}>
        Publica lo que tienes, alquila lo que necesitas. RendiX conecta a personas de forma simple y segura para que los objetos estén siempre en movimiento y generando valor.
      </div>
    ),
  },
  {
    tag: 'Código / Datos',
    name: 'DM Mono',
    desc: 'Monoespaciada para especificaciones técnicas, colores HEX, versiones y datos de la identidad visual.',
    weights: ['400', '500'],
    sample: (
      <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.9rem', lineHeight: 1.7, color: '#fff' }}>
        <span style={{ color: '#F78145' }}>#11644D</span> — Verde Principal<br />
        <span style={{ color: '#A0B046' }}>#F78145</span> — Naranja Acento<br />
        version: <span style={{ color: '#F2C94E' }}>'1.0.0'</span>
      </div>
    ),
  },
]

const hierarchy = [
  { label: 'Display',      sample: 'RendiX',                        font: 'Alata, sans-serif',   size: '2.5rem',  weight: 400, color: '#fff' },
  { label: 'H1',           sample: 'Alquila sin complicaciones',    font: 'Alata, sans-serif',   size: '1.8rem',  weight: 400, color: '#fff' },
  { label: 'H2',           sample: 'Cómo funciona',                 font: 'Alata, sans-serif',   size: '1.3rem',  weight: 400, color: '#fff' },
  { label: 'Body',         sample: 'Texto de párrafo principal',    font: 'DM Sans, sans-serif', size: '1rem',    weight: 400, color: 'var(--text)' },
  { label: 'Body muted',   sample: 'Descripción secundaria',        font: 'DM Sans, sans-serif', size: '0.875rem',weight: 300, color: 'var(--muted)' },
  { label: 'Label',        sample: 'ETIQUETA · 01',                 font: 'DM Mono, monospace',  size: '0.7rem',  weight: 500, color: '#F78145', upper: true, tracking: '0.18em' },
]

export default function Tipografia() {
  return (
    <section id="s05" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">05 — Tipografía</span>
            <h2 className="sec-title">Sistema <em>tipográfico</em></h2>
            <p className="sec-desc">Tres familias para cubrir display, comunicación y datos técnicos de la marca.</p>
          </div>
        </div>

        <div className="d-flex flex-column gap-3 mb-4">
          {fonts.map(f => (
            <div key={f.name} className="row g-0 brand-card" style={{ borderRadius: 14 }}>
              <div className="col-12 col-lg-8" style={{ padding: '40px 48px' }}>
                {f.sample}
              </div>
              <div
                className="col-12 col-lg-4 d-flex flex-column justify-content-center gap-3"
                style={{ padding: '32px', borderLeft: '1px solid var(--border)', background: 'var(--dark-3)' }}
              >
                <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F78145' }}>{f.tag}</div>
                <div style={{ fontFamily: 'Alata, sans-serif', fontSize: '1.2rem', color: '#fff' }}>{f.name}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.55 }}>{f.desc}</div>
                <div className="d-flex flex-wrap gap-2">
                  {f.weights.map(w => (
                    <span key={w} style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', padding: '3px 8px', border: '1px solid var(--border)', borderRadius: 100, color: 'var(--muted)' }}>{w}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hierarchy */}
        <div className="brand-card" style={{ borderRadius: 14, overflow: 'hidden' }}>
          <div className="row g-0" style={{ background: 'var(--dark-3)', borderBottom: '1px solid var(--border)', padding: '12px 24px' }}>
            <div className="col-3" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Estilo</div>
            <div className="col-5" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Muestra</div>
            <div className="col-2 text-end" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tamaño</div>
            <div className="col-2 text-end" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.62rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Peso</div>
          </div>
          {hierarchy.map((h, i) => (
            <div key={i} className="row g-0 align-items-center" style={{ padding: '14px 24px', borderBottom: i < hierarchy.length - 1 ? '1px solid var(--border)' : 'none' }}>
              <div className="col-3" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.65rem', color: 'var(--muted)' }}>{h.label}</div>
              <div className="col-5" style={{ fontFamily: h.font, fontSize: h.size, fontWeight: h.weight, color: h.color, letterSpacing: h.tracking, textTransform: h.upper ? 'uppercase' : 'none' }}>{h.sample}</div>
              <div className="col-2 text-end" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'var(--muted)' }}>{h.size}</div>
              <div className="col-2 text-end" style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.72rem', color: 'var(--muted)' }}>{h.weight}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}