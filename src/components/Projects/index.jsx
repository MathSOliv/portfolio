import { useCallback, useState } from 'react'
import { PROJECTS } from '../../constants/projects'
import { TECH_ICONS } from '../../constants/techIcons'
import ProjectModal from './ProjectModal'
import {
  Badge,
  Card,
  CardBody,
  CardHint,
  CardImage,
  CardMedia,
  CardSummary,
  CardTitle,
  Container,
  Grid,
  Placeholder,
  Section,
  TechChip,
  TechList,
  Title,
} from './Projects.styles'

function ProjectMedia({ project }) {
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = Boolean(project.image) && !imageFailed

  return (
    <CardMedia>
      {showImage ? (
        <CardImage
          src={project.image}
          alt=""
          onError={() => setImageFailed(true)}
        />
      ) : (
        <Placeholder aria-hidden="true">{project.title}</Placeholder>
      )}
      <Badge>{project.badge}</Badge>
    </CardMedia>
  )
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const closeModal = useCallback(() => setSelectedProject(null), [])

  return (
    <Section id="projetos">
      <Container>
        <Title>Projetos</Title>
        <Grid>
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              type="button"
              onClick={() => setSelectedProject(project)}
              aria-haspopup="dialog"
            >
              <ProjectMedia project={project} />
              <CardBody>
                <CardTitle>{project.title}</CardTitle>
                {project.summary ? (
                  <CardSummary>{project.summary}</CardSummary>
                ) : null}
                <TechList>
                  {project.technologies.map((tech) => {
                    const Icon = TECH_ICONS[tech]

                    return (
                      <TechChip key={tech}>
                        {Icon ? <Icon aria-hidden="true" /> : null}
                        {tech}
                      </TechChip>
                    )
                  })}
                </TechList>
                <CardHint>Ver detalhes</CardHint>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Container>
      {selectedProject ? (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      ) : null}
    </Section>
  )
}

export default Projects
