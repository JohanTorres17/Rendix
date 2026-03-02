import Navbar from './components/NavBar.jsx'
import Cover from './components/Cover.jsx'
import LaMarca from './components/LaMarca.jsx'
import Concepto from './components/Concepto.jsx'
import Planimetria from './components/Planimetria.jsx'
import GamaCromatica from './components/GamaCromatica.jsx'
import Tipografia from './components/Tipografia.jsx'
import TamanioReserva from './components/TamanioReserva.jsx'
import VersionesLogo from './components/VersionesLogo.jsx'
import Paletas from './components/Paletas.jsx'
import LogoBreakdown from './components/LogoBreakdown.jsx'
import UsosIncorrectos from './components/UsosIncorrectos.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Cover />
        <LaMarca />
        <Concepto />
        <Planimetria />
        <GamaCromatica />
        <Tipografia />
        <TamanioReserva />
        <VersionesLogo />
        <Paletas />
        <LogoBreakdown />
        <UsosIncorrectos />
      </main>
    </div>
  )
}

export default App
