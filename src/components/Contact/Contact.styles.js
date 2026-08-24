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
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 16px;
`

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.125rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.description};
  line-height: 1.7;
  max-width: 560px;
  margin-bottom: 16px;
`

export const Email = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.spaceBlue};
  text-decoration: none;
  margin-bottom: 32px;
  word-break: break-all;

  &:hover {
    text-decoration: underline;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 32px;
`

export const EmailButton = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  padding: 14px 28px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.spaceBlue};
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export const SocialList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  list-style: none;
`

export const Tooltip = styled.span`
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  padding: 4px 10px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.tooltipBg};
  color: ${({ theme }) => theme.colors.tooltipText};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease, transform 0.15s ease;
`

export const SocialItem = styled.li`
  display: flex;
`

export const SocialLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.title};
  font-size: 1.35rem;
  text-decoration: none;
  transition: transform 0.25s ease, border-color 0.25s ease, color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark'
        ? '0 12px 24px rgba(0, 0, 0, 0.35)'
        : '0 12px 24px rgba(15, 23, 42, 0.1)'};
  }

  &:hover ${Tooltip},
  &:focus-visible ${Tooltip} {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
`
