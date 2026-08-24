import { EXPERIENCES } from '../../constants/experiences'
import {
  Company,
  Container,
  Header,
  HighlightItem,
  Highlights,
  Item,
  List,
  Period,
  Role,
  Section,
  Title,
} from './Experience.styles'

function Experience() {
  return (
    <Section id="experiencia">
      <Container>
        <Title>Experiência</Title>
        <List>
          {EXPERIENCES.map((experience) => (
            <Item key={experience.id}>
              <Header>
                <Role>{experience.role}</Role>
                <Company>{experience.company}</Company>
                <Period>{experience.period}</Period>
              </Header>
              <Highlights>
                {experience.highlights.map((item) => (
                  <HighlightItem key={item}>{item}</HighlightItem>
                ))}
              </Highlights>
            </Item>
          ))}
        </List>
      </Container>
    </Section>
  )
}

export default Experience
