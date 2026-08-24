import styled, { css } from 'styled-components'

export const Section = styled.section`
  display: flex;
  align-items: center;
  padding: 80px 24px;
  background-color: ${({ theme }) => theme.colors.background};
  scroll-margin-top: ${({ theme }) => theme.layout.navbarHeight};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 48px 20px 64px;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 48px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 32px;
  }
`

export const Content = styled.div`
  flex: 1;
  max-width: 560px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Greeting = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.greeting};
  margin-bottom: 12px;
`

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: clamp(2.25rem, 6vw, 4rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.title};
  line-height: 1.1;
  margin-bottom: 16px;
`

export const Role = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.spaceBlue};
  margin-bottom: 20px;
`

export const Subtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.125rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.description};
  line-height: 1.6;
  max-width: 540px;
  margin-bottom: 40px;
`

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`

const buttonBase = css`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  padding: 14px 28px;
  border-radius: 8px;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
`

export const PrimaryButton = styled.a`
  ${buttonBase}
  background-color: ${({ theme }) => theme.colors.spaceBlue};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export const SecondaryButton = styled.a`
  ${buttonBase}
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.border};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const PhotoContainer = styled.div`
  position: relative;
  flex-shrink: 0;
  width: min(360px, 35vw);
  margin-top: 24px;
  margin-right: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: min(240px, 70vw);
    margin: 0;
  }
`

export const PhotoAccent = styled.div`
  position: absolute;
  top: -24px;
  right: -24px;
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${({ theme }) => theme.colors.spaceBlue};
  z-index: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    top: -12px;
    right: -12px;
  }
`

export const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
`

export const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`
