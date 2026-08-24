import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import { ThemeModeProvider } from './context/ThemeModeContext'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {
  return (
    <ThemeModeProvider>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </ThemeModeProvider>
  )
}

export default App
