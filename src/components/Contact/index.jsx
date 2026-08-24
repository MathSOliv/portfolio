import { CONTACT } from '../../constants/contact'
import {
  Actions,
  Container,
  Description,
  Email,
  EmailButton,
  Section,
  SocialItem,
  SocialLink,
  SocialList,
  Title,
  Tooltip,
} from './Contact.styles'

function Contact() {
  return (
    <Section id="contato">
      <Container>
        <Title>{CONTACT.title}</Title>
        <Description>{CONTACT.description}</Description>
        <Email href={`mailto:${CONTACT.email}`}>{CONTACT.email}</Email>
        <Actions>
          <EmailButton href={`mailto:${CONTACT.email}`}>
            Enviar e-mail
          </EmailButton>
        </Actions>
        <SocialList>
          {CONTACT.links.map((link) => (
            <SocialItem key={link.label}>
              <SocialLink
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.Icon />
                <Tooltip>{link.label}</Tooltip>
              </SocialLink>
            </SocialItem>
          ))}
        </SocialList>
      </Container>
    </Section>
  )
}

export default Contact
