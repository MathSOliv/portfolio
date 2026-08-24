import { useEffect, useState } from 'react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { NAV_LINKS } from '../../constants/navigation'
import { useThemeMode } from '../../context/ThemeModeContext'
import {
  LinkItem,
  LinksList,
  Logo,
  LogoLink,
  MenuToggle,
  Nav,
  NavActions,
  NavLink,
  ThemeToggle,
} from './Navbar.styles'

function Navbar() {
  const { isDark, toggleTheme } = useThemeMode()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('nav-open', isMenuOpen)

    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.classList.remove('nav-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <Nav>
      <LogoLink href="#inicio" onClick={closeMenu}>
        <Logo src="/deep_blue_logo.png" alt="Matheus Oliveira" />
      </LogoLink>
      <LinksList id="nav-menu" $open={isMenuOpen}>
        {NAV_LINKS.map((link) => (
          <LinkItem key={link.href}>
            <NavLink href={link.href} onClick={closeMenu}>
              {link.label}
            </NavLink>
          </LinkItem>
        ))}
      </LinksList>
      <NavActions>
        <ThemeToggle
          type="button"
          onClick={toggleTheme}
          aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
          title={isDark ? 'Modo claro' : 'Modo escuro'}
        >
          {isDark ? <FiSun /> : <FiMoon />}
        </ThemeToggle>
        <MenuToggle
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="nav-menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </MenuToggle>
      </NavActions>
    </Nav>
  )
}

export default Navbar
