// Logos reales de RendiX usando las imágenes originales

import logoRojo    from '../assets/logo-rojo.png'
import logoNegro   from '../assets/logo-negro.png'
import logoVerde   from '../assets/logo-verde.png'
import simNegro    from '../assets/simbolo-negro.png'
import simNaranja  from '../assets/simbolo-naranja.png'
import simVerde    from '../assets/simbolo-verde.png'

export const LogoRojo = ({ height = 60, style }) => (
  <img src={logoRojo} alt="RendiX logo rojo" height={height} style={{ objectFit: 'contain', ...style }} />
)

export const LogoNegro = ({ height = 60, style }) => (
  <img src={logoNegro} alt="RendiX logo negro" height={height} style={{ objectFit: 'contain', ...style }} />
)

export const LogoVerde = ({ height = 60, style }) => (
  <img src={logoVerde} alt="RendiX logo verde" height={height} style={{ objectFit: 'contain', ...style }} />
)

export const SimboloNegro = ({ size = 48, style }) => (
  <img src={simNegro} alt="RendiX símbolo negro" width={size} height={size} style={{ objectFit: 'contain', ...style }} />
)

export const SimboloNaranja = ({ size = 48, style }) => (
  <img src={simNaranja} alt="RendiX símbolo naranja" width={size} height={size} style={{ objectFit: 'contain', ...style }} />
)

export const SimboloVerde = ({ size = 48, style }) => (
  <img src={simVerde} alt="RendiX símbolo verde" width={size} height={size} style={{ objectFit: 'contain', ...style }} />
)