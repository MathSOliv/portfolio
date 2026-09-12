export const ABOUT = {
  title: 'Sobre mim',
  paragraphs: [
    'Sou desenvolvedor full stack na Palmont Engenharia. Entrei em setembro de 2021 como assistente de desenvolvimento e, desde então, construí o P-SIG — sistema interno que hoje usa cerca de 150 a 200 pessoas por dia. Comecei sozinho; hoje reviso e integro o código de outras duas pessoas. Formado em Gestão de TI pela UNIP e estudante de Engenharia de Software na FIAP.',
    'O P-SIG nasceu na QSSMA, em Power Apps. Quando o volume passou do limite da ferramenta, propus a migração para web em PHP e MySQL e, depois, o front para React. O RH pediu o mesmo para o que estava em Excel — colaboradores, benefícios, folha e alojamento — e o PHP passou a ler o SQL Server do TOTVS Protheus (ativos, matrícula, função e obra), gravando no banco da aplicação o que o ERP não tem. O sistema cresceu para compras, contabilidade, frota, inventário de TI, cadastro de produtos e relatórios. Com a descontinuação do MySQL na Azure, o banco da aplicação foi para MariaDB. A sessão usa JWT em cookies httpOnly, com refresh token e permissão por módulo. Há scripts em Python no cron do Linux — por exemplo, o lançamento automático de folgas de campo — e dashboards em Power BI para o negócio acompanhar os módulos.',
    'Antes da área de tecnologia, fui professor de inglês. Isso aparece no trabalho como comunicação com usuários de negócio, documentação objetiva e facilidade para atuar em times que usam o idioma.',
  ],
}
