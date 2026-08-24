import {
  Actions,
  Container,
  Content,
  Greeting,
  Photo,
  PhotoAccent,
  PhotoContainer,
  PhotoWrapper,
  PrimaryButton,
  Role,
  SecondaryButton,
  Section,
  Subtitle,
  Title,
} from './Hero.styles'

function Hero() {
  return (
    <Section id="inicio">
      <Container>
        <Content>
          <Greeting>Olá, eu sou</Greeting>
          <Title>Matheus Oliveira</Title>
          <Role>Desenvolvedor Full Stack</Role>
          <Subtitle>
            Único desenvolvedor do P-SIG na Palmont Engenharia: sistema interno
            usado por cerca de 100 a 150 pessoas, em React e PHP, com login JWT,
            jobs em Python e integração com o TOTVS Protheus.
          </Subtitle>
          <Actions>
            <PrimaryButton href="#projetos">Ver projetos</PrimaryButton>
            <SecondaryButton href="#contato">Entrar em contato</SecondaryButton>
          </Actions>
        </Content>
        <PhotoContainer>
          <PhotoAccent />
          <PhotoWrapper>
            <Photo src="/hero_image.png" alt="Foto de Matheus Oliveira" />
          </PhotoWrapper>
        </PhotoContainer>
      </Container>
    </Section>
  )
}

export default Hero
