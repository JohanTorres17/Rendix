import { SimboloNaranja } from './LogoComponents'

const items = [
  {
    letter: '✕',
    color: '#F78145',
    title: 'La X — el intercambio',
    desc: 'La X es el símbolo universal del intercambio, el cruce, el encuentro. En RendiX representa la transacción entre dos personas: el que tiene y el que necesita.',
  },
  {
    letter: '///',
    color: '#A0B046',
    title: 'Los trazos de pincel — energía y movimiento',
    desc: 'Las líneas de pincel superpuestas sobre la X crean dinamismo visual orgánico. Transmiten movimiento, agilidad y la idea de que los objetos están en constante circulación y uso.',
  },
  {
    letter: 'R',
    color: '#F2C94E',
    title: 'Rendi — rendir, producir',
    desc: 'La palabra "Rendi" viene de rendir. Hace referencia a que tus objetos pueden generar valor económico. Lo que tienes, rinde para ti.',
  },
  {
    letter: 'X',
    color: '#F24E4E',
    title: 'La X en el nombre — protagonista',
    desc: 'La X no solo es parte del nombre — es el elemento gráfico central. La X tipográfica fue modificada para alinear su estilo con el símbolo, creando una identidad cohesiva.',
  },
]

export default function Concepto() {
  return (
    <section id="s02" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">02 — Concepto y Simbología</span>
            <h2 className="sec-title">Por qué esta <em>X</em></h2>
            <p className="sec-desc">Cada elemento del símbolo fue diseñado con intención. La X no es decorativa — es el corazón de la marca.</p>
          </div>
        </div>

        <div className="row g-5 align-items-center">

          {/* Símbolo real */}
          <div className="col-12 col-md-5 d-flex justify-content-center">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(247,129,69,0.12) 0%, transparent 70%), var(--dark-2)',
                borderRadius: 20, padding: '48px', width: '100%',
                border: '1px solid var(--border)',
              }}
            >
              <SimboloNaranja size={180} />
            </div>
          </div>

          {/* Items */}
          <div className="col-12 col-md-7">
            {items.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'grid', gridTemplateColumns: '48px 1fr', gap: 16,
                  padding: '22px 0',
                  borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div style={{ fontFamily: 'Alata, sans-serif', fontSize: '1.5rem', color: item.color, lineHeight: 1, paddingTop: 2 }}>{item.letter}</div>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 4, color: '#fff' }}>{item.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}