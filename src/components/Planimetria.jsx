import planimetriaImg from '../assets/planimetria.png'

const specs = [
  { val: '1X',     label: 'Unidad base' },
  { val: '4X',     label: 'Ancho símbolo' },
  { val: '10X',    label: 'Ancho wordmark' },
  { val: '15.25X', label: 'Ancho total' },
]

export default function Planimetria() {
  return (
    <section id="s03" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12 col-lg-8">
            <span className="sec-num">03 — Planimetría</span>
            <h2 className="sec-title">Construcción <em>geométrica</em></h2>
            <p className="sec-desc">
              El logo de RendiX parte de la fuente Alata con modificaciones propias. La X fue reformulada con líneas diagonales superpuestas para crear una intersección dinámica. La estructura se apoya en una unidad base (1X) que garantiza medidas uniformes y correcta visibilidad en toda escala.
            </p>
          </div>
        </div>

        <div
          className="d-flex flex-column align-items-center gap-5 p-4 p-md-5"
          style={{ background: 'var(--dark-2)', border: '1px solid var(--border)', borderRadius: 16 }}
        >
          {/* Imagen real de planimetría */}
          <div className="w-100" style={{ borderRadius: 10, overflow: 'hidden', background: '#fff' }}>
            <img
              src={planimetriaImg}
              alt="Planimetría RendiX"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>

          {/* Specs — 4 columnas Bootstrap */}
          <div className="row g-0 w-100" style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border)' }}>
            {specs.map((s, i) => (
              <div
                key={i}
                className="col-6 col-md-3"
                style={{
                  background: 'var(--dark-3)', padding: '20px', textAlign: 'center',
                  borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '1.1rem', color: '#F78145', marginBottom: 4 }}>{s.val}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}