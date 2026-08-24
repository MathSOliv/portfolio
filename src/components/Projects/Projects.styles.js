import styled from 'styled-components'

export const Section = styled.section`
  padding: 80px 24px;
  background-color: ${({ theme }) => theme.colors.projectsBg};
  scroll-margin-top: ${({ theme }) => theme.layout.navbarHeight};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 64px 20px;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 48px;
  text-align: center;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.nav}) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  color: inherit;
  font: inherit;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover,
  &:focus-visible {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark'
        ? '0 18px 36px rgba(0, 0, 0, 0.45)'
        : '0 18px 36px rgba(15, 23, 42, 0.14)'};
  }
`

export const CardMedia = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#0F172A' : '#1E3A8A'};
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`

export const Badge = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background-color: rgba(15, 23, 42, 0.8);
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.75rem;
  font-weight: 500;
`

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 20px 24px 24px;
`

export const CardTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};
`

export const CardSummary = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.45;
`

export const CardHint = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

export const TechChip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.projectsBg};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.8rem;
  font-weight: 500;

  svg {
    font-size: 0.95rem;
  }
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.modalOverlay};
`

export const Dialog = styled.div`
  position: relative;
  width: min(720px, 100%);
  max-height: min(88vh, 840px);
  overflow: auto;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: ${({ theme }) =>
    theme.mode === 'dark'
      ? '0 24px 64px rgba(0, 0, 0, 0.55)'
      : '0 24px 64px rgba(15, 23, 42, 0.22)'};
`

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: rgba(15, 23, 42, 0.72);
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(15, 23, 42, 0.9);
  }
`

export const ModalMedia = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 8;
  overflow: hidden;
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#0F172A' : '#1E3A8A'};
`

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 20px;
  }
`

export const ModalTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};
  padding-right: 40px;
`

export const Problem = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.spaceBlue};
  line-height: 1.5;
`

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.95rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.description};
  line-height: 1.6;
`

export const Role = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const Highlights = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 18px;
`

export const HighlightItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.description};
  line-height: 1.5;
`

export const Note = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.5;
`

export const ModalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

export const ModalLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.spaceBlue};
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`
