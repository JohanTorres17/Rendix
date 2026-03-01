const pillars = [
  { icon: '📦', title: 'Publica lo que tienes', desc: 'Cualquier persona puede subir un objeto — consola, electrodoméstico, herramienta — y ponerlo en alquiler en minutos.' },
  { icon: '🔍', title: 'Encuentra lo que necesitas', desc: 'Los usuarios buscan y alquilan objetos cercanos por el tiempo exacto que los necesitan, sin comprarlo.' },
  { icon: '💸', title: 'Genera ingresos', desc: 'El dueño recibe pago por cada alquiler. Los objetos que no usas se convierten en una fuente de ingresos pasivos.' },
]

const valores = [
  { word: 'Comunidad', desc: 'Personas ayudando personas' },
  { word: 'Acceso',    desc: 'Usa sin necesidad de comprar' },
  { word: 'Rinde',     desc: 'Saca provecho de lo que tienes' },
]

export default function LaMarca() {
  return (
    <section id="s01" className="brand-section">
      <div className="container">

        <div className="row mb-5">
          <div className="col-12">
            <span className="sec-num">01 — La Marca</span>
            <h2 className="sec-title">¿Qué es <em>RendiX</em>?</h2>
            <p className="sec-desc">
              RendiX es una plataforma de alquiler colaborativo entre personas. Conecta a quienes tienen objetos sin usar con quienes los necesitan temporalmente — como Airbnb, pero para cosas.
            </p>
          </div>
        </div>

        <div className="row g-5 align-items-start">

          {/* Columna izquierda */}
          <div className="col-12 col-md-6">
            <blockquote
              className="mb-4"
              style={{
                fontFamily: 'Alata, sans-serif',
                fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
                fontWeight: 400,
                color: '#fff', lineHeight: 1.35,
                paddingLeft: '20px',
                borderLeft: '3px solid #F78145',
                margin: 0,
              }}
            >
              "Lo que tienes, rinde. Lo que necesitas, está cerca."
            </blockquote>

            <div className="row g-3 mt-2">
              {valores.map(v => (
                <div className="col-12 col-sm-4" key={v.word}>
                  <div className="text-center p-3 brand-card h-100">
                    <div style={{ fontFamily: 'Alata, sans-serif', fontSize: '1.1rem', color: '#F78145', marginBottom: 4 }}>{v.word}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha */}
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column gap-3">
              {pillars.map(p => (
                <div key={p.title} className="d-flex gap-3 align-items-start p-3 brand-card" style={{ borderRadius: 10 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 8,
                    background: 'var(--green)', flexShrink: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem',
                  }}>{p.icon}</div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: 3, color: '#fff' }}>{p.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.5 }}>{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}