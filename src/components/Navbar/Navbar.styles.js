import styled from 'styled-components'

export const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.layout.navbarHeight};
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  padding: 0 24px;
  box-shadow: ${({ theme }) => theme.shadows.navbar};
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 16px;
  }
`

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`

export const Logo = styled.img`
  height: 50px;
  width: auto;
  filter: ${({ theme }) => theme.logoFilter};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 40px;
  }
`

export const LinksList = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  margin-left: auto;

  @media (max-width: 1100px) {
    gap: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.nav}) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    position: absolute;
    top: ${({ theme }) => theme.layout.navbarHeight};
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    margin-left: 0;
    padding: 8px 0 16px;
    background-color: ${({ theme }) => theme.colors.background};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.navbar};
  }
`

export const LinkItem = styled.li`
  display: flex;
`

export const NavLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.nav}) {
    width: 100%;
    padding: 14px 24px;
  }
`

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
  gap: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.nav}) {
    margin-left: auto;
  }
`

export const ThemeToggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.25rem;
  cursor: pointer;
  transition: color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.projectsBg};
  }
`

export const MenuToggle = styled(ThemeToggle)`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.nav}) {
    display: inline-flex;
  }
`
