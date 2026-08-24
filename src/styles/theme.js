const shared = {
  fonts: {
    primary: '"Poppins", sans-serif',
  },
  layout: {
    navbarHeight: '70px',
  },
  breakpoints: {
    nav: '900px',
    tablet: '768px',
  },
}

export const lightTheme = {
  ...shared,
  mode: 'light',
  logoFilter: 'none',
  colors: {
    spaceBlue: '#1E3A8A',
    primary: '#2563EB',
    greeting: '#64748B',
    title: '#0F172A',
    description: '#475569',
    text: '#0F172A',
    textMuted: '#475569',
    white: '#ffffff',
    background: '#ffffff',
    card: '#ffffff',
    border: '#e5e7eb',
    projectsBg: '#F8FAFC',
    overlay: 'rgba(15, 23, 42, 0.18)',
    modalOverlay: 'rgba(15, 23, 42, 0.62)',
    footerBg: '#1E3A8A',
    footerMuted: 'rgba(255, 255, 255, 0.75)',
    tooltipBg: '#0F172A',
    tooltipText: '#ffffff',
  },
  shadows: {
    navbar: '0 2px 8px rgba(15, 23, 42, 0.08)',
  },
}

export const darkTheme = {
  ...shared,
  mode: 'dark',
  logoFilter: 'brightness(0) invert(1)',
  colors: {
    spaceBlue: '#60A5FA',
    primary: '#3B82F6',
    greeting: '#94A3B8',
    title: '#F8FAFC',
    description: '#94A3B8',
    text: '#F1F5F9',
    textMuted: '#94A3B8',
    white: '#ffffff',
    background: '#0F172A',
    card: '#1E293B',
    border: '#334155',
    projectsBg: '#1E293B',
    overlay: 'rgba(15, 23, 42, 0.55)',
    modalOverlay: 'rgba(2, 6, 23, 0.78)',
    footerBg: '#020617',
    footerMuted: 'rgba(248, 250, 252, 0.7)',
    tooltipBg: '#F8FAFC',
    tooltipText: '#0F172A',
  },
  shadows: {
    navbar: '0 2px 8px rgba(0, 0, 0, 0.35)',
  },
}

export const themes = {
  light: lightTheme,
  dark: darkTheme,
}

export const THEME_STORAGE_KEY = 'theme-mode'
