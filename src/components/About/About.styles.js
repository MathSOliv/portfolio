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
  margin-bottom: 32px;
  text-align: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.125rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.description};
  line-height: 1.7;
  text-align: left;
`
