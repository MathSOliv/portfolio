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

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
  max-width: 800px;
  margin: 0 auto;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px 24px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.card};
  text-align: left;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) =>
      theme.mode === 'dark'
        ? '0 18px 36px rgba(0, 0, 0, 0.45)'
        : '0 18px 36px rgba(15, 23, 42, 0.14)'};
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const Role = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};
`

export const Company = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.spaceBlue};
`

export const Period = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.95rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textMuted};
`

export const Highlights = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 18px;
`

export const HighlightItem = styled.li`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.95rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.description};
  line-height: 1.6;
`
