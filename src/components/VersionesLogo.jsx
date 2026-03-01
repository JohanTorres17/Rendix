import { LogoRojo, LogoNegro, LogoVerde, SimboloNegro, SimboloNaranja, SimboloVerde } from './LogoComponents'

const versions = [
  {
    name: 'Versión Roja',
    use: 'Versión principal de alto impacto',
    bg: '#F24E4E',
    Preview: () => <LogoRojo height={56} />,
  },
  {
    name: 'Versión Negra',
    use: 'Uso formal y neutro',
    bg: '#1A1A1A',
    Preview: () => <LogoNegro height={56} />,
  },
  {
    name: 'Versión Verde',
    use: 'Sobre fondos blancos o claros',
    bg: '#F5F5F5',
    Preview: () => <LogoVerde height={56} />,
  },
  {
    name: 'Símbolo — Negro',
    use: 'Avatar, favicon, app icon',
    bg: '#1A1A1A',
    Preview: () => (
      <div className="d-flex align-items-flex-end gap-3" style={{ alignItems: 'flex-end' }}>
        <SimboloNegro size={72} />
        <SimboloNegro size={48} />
        <SimboloNegro size={32} />
      </div>
    ),
  },
  {
    name: 'Símbolo — Naranja',
    use: 'Interfaces digitales con fondo oscuro',
    bg: '#0F1A15',
    Preview: () => (
      <div className="d-flex align-items-flex-end gap-3" style={{ alignItems: 'flex-end' }}>
        <SimboloNaranja size={72} />
        <SimboloNaranja size={48} />
        <SimboloNaranja size={32} />
      </div>
    ),
  },
  {
    name: 'Símbolo — Verde',
    use: 'Materiales impresos y fondos claros',
    bg: '#F5F5F5',
    Preview: () => (
      <div className="d-flex align-items-flex-end gap-3" style={{ alignItems: 'flex-end' }}>
        <SimboloVerde size={72} />
        <SimboloVerde size={48} />
        <SimboloVerde size={32} />
      </div>
    ),
  },
]

export default function VersionesLogo() {
  return (
    <section id="s07" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">07 — Versiones de Logo</span>
            <h2 className="sec-title">Variantes <em>aprobadas</em></h2>
            <p className="sec-desc">Estas son las únicas versiones autorizadas del logo RendiX. Úsalas según el contexto y el fondo de aplicación.</p>
          </div>
        </div>

        {/* 3 columnas Bootstrap */}
        <div className="row g-3">
          {versions.map((v, i) => {
            const Preview = v.Preview
            return (
              <div key={i} className="col-12 col-sm-6 col-lg-4">
                <div className="brand-card h-100">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: 160, background: v.bg, padding: 28, borderRadius: '12px 12px 0 0' }}
                  >
                    <Preview />
                  </div>
                  <div className="d-flex align-items-center justify-content-between p-3" style={{ borderTop: '1px solid var(--border)' }}>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, marginBottom: 2, color: '#fff' }}>{v.name}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{v.use}</div>
                    </div>
                    <a className="btn-brand" href="#" onClick={e => e.preventDefault()}>PNG</a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}