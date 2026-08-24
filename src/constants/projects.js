export const PROJECTS = [
  {
    id: 1,
    title: 'P-SIG',
    badge: 'Sistema interno',
    summary: 'QSSMA e RH · único dev · cerca de 100 a 150 usuários',
    problem:
      'A QSSMA precisava registrar desvios, treinamentos e auditorias no campo. O RH controlava colaboradores, benefícios e alojamento em Excel. O Protheus tinha o colaborador ativo, mas não o restante.',
    description:
      'Sistema interno que desenvolvo sozinho na Palmont Engenharia. Nasceu em Power Apps na QSSMA, migrou para web (PHP e MySQL) quando a ferramenta não aguentou o volume e, depois, o front foi para React. Hoje atende qualidade/segurança e RH, com cerca de 100 a 150 usuários. Com a descontinuação do MySQL na Azure, o banco da aplicação passou para MariaDB.',
    role: 'Único desenvolvedor — front, API PHP, bancos, jobs e dashboards.',
    highlights: [
      'Módulos QSSMA: desvios, treinamentos, auditoria interna, checklist, CIPA e não conformidades, pensados também para uso no celular',
      'Duas migrações de plataforma por limite de escala: Power Apps → PHP/HTML e, em seguida, o front para React e Styled Components',
      'Módulo de RH no lugar de planilha: colaboradores, benefícios, folha e alojamento',
      'PHP consulta o SQL Server do TOTVS Protheus (ativos, matrícula, função e obra) e guarda no MariaDB o que o ERP não tem',
      'Login com JWT em cookies httpOnly',
      'Jobs em Python no Linux (ex.: lançamento automático de folgas de campo)',
      'Dashboards gerenciais em Power BI sobre os módulos do P-SIG',
      'Migração MySQL → MariaDB após a descontinuação do MySQL na Azure',
    ],
    technologies: ['React', 'PHP', 'MariaDB', 'SQL Server', 'Styled Components'],
    image: '/projects/psig.png',
    note: 'Código e ambiente não são públicos — projeto interno da Palmont.',
    links: [],
  },
  {
    id: 2,
    title: 'Bolão da Copa do Mundo 2026',
    badge: 'Projeto pessoal',
    summary: 'Full stack · palpites, ranking e painel admin',
    problem:
      'Colaboradores queriam palpitar nos jogos da Copa, somar pontos e acompanhar um ranking com regras claras.',
    description:
      'Aplicação web completa de bolão: autenticação, papéis de usuário e administrador, janela de palpites, motor de pontuação e painel para lançar resultados.',
    role: 'Desenvolvimento full stack (front, API e banco).',
    highlights: [
      'Autenticação com senha criptografada e perfis (usuário e admin)',
      'Janela de horário para envio de palpites (fuso de Brasília)',
      'Motor de pontuação: placar exato 15 pts, vencedor 5 pts',
      'Ranking dinâmico e painel admin para lançar resultados',
      'API REST em PHP, prepared statements e transações no MySQL',
      'Integração com API externa de futebol (football-data.org)',
    ],
    technologies: ['React', 'PHP', 'MySQL'],
    note: 'Projeto pessoal full stack. Código ainda não está publicado no GitHub.',
    links: [
      {
        label: 'Ver no LinkedIn',
        href: 'https://www.linkedin.com/posts/matheus-oliveira-bb4b321a0_react-php-mysql-activity-7472751760219049985-GfzH',
      },
    ],
  },
]
