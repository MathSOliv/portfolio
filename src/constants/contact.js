import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const CONTACT = {
  title: 'Contato',
  description:
    'Aberto a oportunidades de desenvolvedor full stack. Fale comigo por e-mail ou LinkedIn.',
  email: 'matheus.silvagab@gmail.com',
  links: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/matheus-oliveira-bb4b321a0/',
      Icon: FaLinkedin,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/MathSOliv',
      Icon: FaGithub,
    },
  ],
}

export const FOOTER = {
  name: 'Matheus Oliveira',
  year: new Date().getFullYear(),
}
