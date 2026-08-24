import styled from 'styled-components'

export const Section = styled.section`
  padding: 80px 24px;
  background-color: ${({ theme }) => theme.colors.background};
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

export const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px 20px;
  list-style: none;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 88px;
`

export const Logo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  display: block;
  filter: ${({ theme }) =>
    theme.mode === 'dark' ? 'brightness(1.25)' : 'none'};
`

export const Name = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textMuted};
  text-align: center;
  line-height: 1.3;
  max-width: 96px;
`
