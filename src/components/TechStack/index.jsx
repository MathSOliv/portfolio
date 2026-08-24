import { TECHNOLOGIES } from '../../constants/technologies'
import {
  Container,
  Item,
  Items,
  Logo,
  Name,
  Section,
  Title,
} from './TechStack.styles'

function TechStack() {
  return (
    <Section id="stack">
      <Container>
        <Title>Tecnologias</Title>
        <Items>
          {TECHNOLOGIES.map((tech) => (
            <Item key={tech.name}>
              <Logo src={tech.image} alt="" />
              <Name>{tech.name}</Name>
            </Item>
          ))}
        </Items>
      </Container>
    </Section>
  )
}

export default TechStack
