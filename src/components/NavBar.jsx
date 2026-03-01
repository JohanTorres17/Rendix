import { useState, useEffect } from 'react'
import { SimboloNaranja } from './LogoComponents'

const navLinks = [
  { href: '#s01', label: 'La Marca' },
  { href: '#s02', label: 'Concepto' },
  { href: '#s04', label: 'Colores' },
  { href: '#s05', label: 'Tipografía' },
  { href: '#s07', label: 'Versiones' },
  { href: '#s09', label: 'Breakdown' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{
        background: scrolled ? 'rgba(15,26,21,0.97)' : 'rgba(15,26,21,0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        transition: 'background 0.3s',
        padding: '10px 0',
      }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2 text-decoration-none" href="#cover">
          <SimboloNaranja size={32} />
          <span style={{ fontFamily: 'Alata, sans-serif', fontSize: '1.1rem', color: '#fff', letterSpacing: '0.06em' }}>
            Rendi<span style={{ color: '#F78145' }}>X</span>
          </span>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-1">
            {navLinks.map(link => (
              <li className="nav-item" key={link.href}>
                <a
                  className="nav-link"
                  href={link.href}
                  style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', fontWeight: 500 }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}