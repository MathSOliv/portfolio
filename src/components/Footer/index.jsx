import { FOOTER } from '../../constants/contact'
import { Brand, Container, Copyright, FooterRoot } from './Footer.styles'

function Footer() {
  return (
    <FooterRoot>
      <Container>
        <Brand>{FOOTER.name}</Brand>
        <Copyright>
          © {FOOTER.year} {FOOTER.name}. Todos os direitos reservados.
        </Copyright>
      </Container>
    </FooterRoot>
  )
}

export default Footer
