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
    badge: 'Uso interno',
    summary: 'Full stack · em produção · API PHP no GitHub',
    problem:
      'Colaboradores queriam palpitar nos jogos da Copa, somar pontos e acompanhar um ranking com regras claras — sem planilha.',
    description:
      'Bolão interno em produção na Palmont. O front é React; a API é PHP 8 e MySQL, com cadastro pela matrícula conferida no SQL Server do Protheus. Há palpites por jogo e especiais (campeão e artilheiro), ranking, termômetro, comparação entre participantes, chaveamento do mata-mata e painel admin para lançar placar e recalcular pontos.',
    role: 'Desenvolvimento full stack (front React, API PHP e banco).',
    highlights: [
      'Cadastro: matrícula validada no Protheus (SRA010); o nome oficial não vem do cliente; senha com password_hash',
      'Prazo de palpite: 20 minutos antes do kickoff (Brasília), com bloqueio também no horário de expediente',
      'Pontuação em transação: grupos 15 (placar exato) ou 5 (vencedor/empate); mata-mata soma placar (30) e quem classifica (20), inclusive pênaltis',
      'Admin separado: 401/403 na API; matrículas autorizadas vêm do .env, não do código',
      'Ranking e consulta de colaborador exigem sessão; prepared statements no MySQL',
      'API documentada no GitHub (regras, endpoints e schema). O token de sessão não é JWT — é um token simples validado no servidor',
    ],
    technologies: ['React', 'PHP', 'MySQL', 'SQL Server'],
    note: 'App no ar com login por matrícula Palmont. Código da API é público; o front React não está neste repositório.',
    links: [
      {
        label: 'Abrir o app',
        href: 'https://sistemaintegrado.palmont.com.br/world-cup-2026',
      },
      {
        label: 'API no GitHub',
        href: 'https://github.com/MathSOliv/bolao-copa-2026-api',
      },
    ],
  },
]
