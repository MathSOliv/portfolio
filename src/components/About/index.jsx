import { ABOUT } from '../../constants/about'
import { Container, Content, Paragraph, Section, Title } from './About.styles'

function About() {
  return (
    <Section id="sobre">
      <Container>
        <Title>{ABOUT.title}</Title>
        <Content>
          {ABOUT.paragraphs.map((paragraph) => (
            <Paragraph key={paragraph}>{paragraph}</Paragraph>
          ))}
        </Content>
      </Container>
    </Section>
  )
}

export default About
