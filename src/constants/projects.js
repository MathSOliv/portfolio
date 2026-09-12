export const PROJECTS = [
  {
    id: 1,
    title: 'P-SIG',
    badge: 'Sistema interno',
    summary: 'React e PHP · ~150–200 usuários/dia · 9 módulos de negócio',
    problem:
      'A QSSMA registrava desvios, treinamentos e auditorias no campo pelo Power Apps. O RH controlava colaboradores, benefícios e alojamento em Excel. O Protheus tinha o colaborador ativo, mas não o restante — e outras áreas pediram o mesmo tipo de sistema.',
    description:
      'Sistema interno da Palmont Engenharia. Nasceu em Power Apps na QSSMA, migrou para web (PHP e MySQL) quando a ferramenta não aguentou o volume e, depois, o front foi para React. Comecei sozinho; hoje outras duas pessoas também alteram o código e eu reviso. Além de qualidade/segurança e RH, o sistema cobre compras, contabilidade, frota, inventário de TI, cadastro de produtos e relatórios. Cerca de 150 a 200 pessoas usam por dia. Com a descontinuação do MySQL na Azure, o banco da aplicação passou para MariaDB.',
    role: 'Comecei sozinho — front, API PHP e bancos. Hoje reviso e integro o código de outras duas pessoas.',
    highlights: [
      'SSMA: desvios, investigações, treinamentos, auditoria interna, checklist, CIPA, RAC, EPI, exames ocupacionais e inspeção ambiental',
      'RH: colaboradores, admissão/transferência, benefícios, folha, folga de campo, afastamentos, alojamento/repúblicas e geração de contratos em PDF',
      'Também: controle de medição e pedidos de compra, contabilidade, frota, inventário de TI, cadastro de produtos no Protheus e relatórios gerenciais',
      'Duas migrações por limite de escala: Power Apps → PHP/HTML e, em seguida, o front para React e Styled Components',
      'PHP lê o SQL Server do TOTVS Protheus (ativos, matrícula, função e obra) e grava no MariaDB o que o ERP não tem',
      'Login com JWT em cookies httpOnly (access e refresh), PrivateRoute e permissão por módulo, submódulo e função',
      'Scripts em Python no cron do Linux (ex.: lançamento automático de folgas de campo)',
      'Dashboards gerenciais em Power BI sobre os módulos do P-SIG',
      'Migração MySQL → MariaDB após a descontinuação do MySQL na Azure',
    ],
    technologies: ['React', 'PHP', 'Python', 'MariaDB', 'SQL Server', 'Styled Components'],
    image: '/projects/psig.png',
    note: 'Código e ambiente não são públicos — projeto interno da Palmont.',
    links: [],
  },
  {
    id: 2,
    title: 'Bolão da Copa do Mundo 2026',
    badge: 'Uso interno',
    summary: 'React e PHP · em produção · front e API no GitHub',
    problem:
      'Colaboradores queriam palpitar nos jogos da Copa, somar pontos e acompanhar um ranking com regras claras — sem planilha.',
    description:
      'Bolão interno em produção na Palmont. O front é React (JavaScript); a API é PHP 8 e MySQL, com cadastro pela matrícula conferida no SQL Server do Protheus. Há palpites por jogo e especiais (campeão e artilheiro), ranking, termômetro, comparação entre participantes, chaveamento do mata-mata e painel admin para lançar placar e recalcular pontos.',
    role: 'Desenvolvimento full stack (front React, API PHP e banco).',
    highlights: [
      'Cadastro: matrícula validada no Protheus (SRA010); o nome oficial não vem do cliente; senha com password_hash',
      'Prazo de palpite: 20 minutos antes do kickoff (Brasília), com bloqueio também no horário de expediente',
      'Pontuação em transação: grupos 15 (placar exato) ou 5 (vencedor/empate); mata-mata soma placar (30) e quem classifica (20), inclusive pênaltis',
      'Admin na API: 401/403; matrículas autorizadas vêm do .env do servidor',
      'Ranking exige sessão; prepared statements no MySQL',
      'Sessão no front: token simples no localStorage (não é JWT). Front e API estão no GitHub',
    ],
    technologies: ['React', 'PHP', 'MySQL', 'SQL Server'],
    note: 'App no ar com login por matrícula Palmont. Front e API são públicos no GitHub.',
    links: [
      {
        label: 'Abrir o app',
        href: 'https://sistemaintegrado.palmont.com.br/world-cup-2026',
      },
      {
        label: 'Front no GitHub',
        href: 'https://github.com/MathSOliv/bolao-copa-2026',
      },
      {
        label: 'API no GitHub',
        href: 'https://github.com/MathSOliv/bolao-copa-2026-api',
      },
    ],
  },
]
