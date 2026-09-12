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
            Full stack na Palmont Engenharia. Comecei sozinho o P-SIG — React e
            PHP, JWT em cookie httpOnly, integração com o TOTVS Protheus — e hoje
            o sistema atende cerca de 150 a 200 pessoas por dia.
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
