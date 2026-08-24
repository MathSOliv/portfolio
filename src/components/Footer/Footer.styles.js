import styled from 'styled-components'

export const FooterRoot = styled.footer`
  padding: 32px 24px;
  background-color: ${({ theme }) => theme.colors.footerBg};
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`

export const Brand = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`

export const Copyright = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.footerMuted};
`
