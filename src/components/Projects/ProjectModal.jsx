import { useEffect, useRef, useState } from 'react'
import { FiX } from 'react-icons/fi'
import { TECH_ICONS } from '../../constants/techIcons'
import {
  Badge,
  CardImage,
  CloseButton,
  Description,
  Dialog,
  HighlightItem,
  Highlights,
  ModalBody,
  ModalLink,
  ModalLinks,
  ModalMedia,
  ModalTitle,
  Note,
  Overlay,
  Placeholder,
  Problem,
  Role,
  TechChip,
  TechList,
} from './Projects.styles'

const FOCUSABLE =
  'button, a[href], textarea, input, select, [tabindex]:not([tabindex="-1"])'

function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = Boolean(project.image) && !imageFailed

  useEffect(() => {
    const previous = document.activeElement
    document.body.classList.add('modal-open')
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = [...dialogRef.current.querySelectorAll(FOCUSABLE)]
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKeyDown)
      if (previous instanceof HTMLElement) previous.focus()
    }
  }, [onClose])

  function handleOverlayClick(event) {
    if (event.target === overlayRef.current) onClose()
  }

  return (
    <Overlay
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="presentation"
    >
      <Dialog
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`project-title-${project.id}`}
      >
        <CloseButton
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar detalhes do projeto"
        >
          <FiX />
        </CloseButton>
        <ModalMedia>
          {showImage ? (
            <CardImage
              src={project.image}
              alt={`Preview de ${project.title}`}
              onError={() => setImageFailed(true)}
            />
          ) : (
            <Placeholder aria-hidden="true">{project.title}</Placeholder>
          )}
          <Badge>{project.badge}</Badge>
        </ModalMedia>
        <ModalBody>
          <ModalTitle id={`project-title-${project.id}`}>
            {project.title}
          </ModalTitle>
          <Problem>{project.problem}</Problem>
          <Description>{project.description}</Description>
          <Role>{project.role}</Role>
          <Highlights>
            {project.highlights.map((item) => (
              <HighlightItem key={item}>{item}</HighlightItem>
            ))}
          </Highlights>
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
          {project.note ? <Note>{project.note}</Note> : null}
          {project.links.length > 0 ? (
            <ModalLinks>
              {project.links.map((link) => (
                <ModalLink
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </ModalLink>
              ))}
            </ModalLinks>
          ) : null}
        </ModalBody>
      </Dialog>
    </Overlay>
  )
}

export default ProjectModal
