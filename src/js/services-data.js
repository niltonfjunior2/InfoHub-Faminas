/**
 * Catálogo Declarativo dos 15 Setores Institucionais
 * Projeto de Extensão: ADS / Engenharia de Software - FAMINAS
 * 
 * Regra Arquitetural: Para alterar links ou status de qualquer setor,
 * edite exclusivamente este arquivo.
 * 
 * Ordenação: Disposto em ordem alfabética pelos títulos para máxima usabilidade.
 */
export const SERVICES_DATA = [
  {
    id: 'acesso-institucional',
    order: 1,
    title: 'Acesso Institucional Perdido',
    description: 'Recuperação de credenciais do Portal Acadêmico, AVA/Moodle, Wi-Fi institucional e e-mail institucional.',
    icon: 'lock_reset',
    url: 'https://davifigrd.github.io/InfoHub-Faminas-Template/',
    status: 'active',
    sectorGroup: 'Grupo 01'
  },
  {
    id: 'achados-e-perdidos',
    order: 2,
    title: 'Achados e Perdidos',
    description: 'Fluxo oficial de entrega, triagem, catalogação, prazos regulamentares de custódia e regras de devolução.',
    icon: 'search',
    url: 'https://luisfelipeb3008.github.io/InfoHub-Faminas-Template/',
    status: 'active',
    sectorGroup: 'Grupo 02'
  },
  {
    id: 'carteirinha-estudantil',
    order: 3,
    title: 'Carteirinha Estudantil (1ª e 2ª via)',
    description: 'Padrão de fotografia aceito, procedimentos de solicitação, prazos de confecção, taxas e carteirinha digital.',
    icon: 'badge',
    url: 'https://berrielx.github.io/Infohub-grupo-10-Carteirinha-estudantil/',
    status: 'active',
    sectorGroup: 'Grupo 13'
  },
  {
    id: 'clinicas-escola',
    order: 4,
    title: 'Consultas nas Clínicas-Escola',
    description: 'Especialidades atendidas, fluxo de agendamento, critérios de triagem, gratuidades e valores para comunidade.',
    icon: 'medical_services',
    url: 'https://caioloredocontato-afk.github.io/InfoHub-Faminas-Template/',
    status: 'active',
    sectorGroup: 'Grupo 07'
  },
  {
    id: 'cpa-avaliacao',
    order: 5,
    title: 'CPA (Comissão Própria de Avaliação)',
    description: 'O que é a CPA, calendários das autoavaliações acadêmicas, impacto dos formulários e devolutivas discentes.',
    icon: 'fact_check',
    url: '',
    status: 'coming_soon',
    sectorGroup: 'Grupo 03'
  },
  {
    id: 'estagios',
    order: 6,
    title: 'Estágios',
    description: 'Convênios aceitos, prazos de envio do Termo de Compromisso (TCE), relatórios e estágios não obrigatórios.',
    icon: 'work',
    url: 'https://arthurtorresdev.github.io/InfoHub-Faminas-Estagios/',
    status: 'active',
    sectorGroup: 'Grupo 04'
  },
  {
    id: 'evento-experimente-seu-futuro',
    order: 7,
    title: 'Evento Experimente seu Futuro',
    description: 'Guia de visitação ao campus, fluxo dos cursos superiores, mapas de laboratórios e testes interativos de afinidade para estudantes e visitantes.',
    icon: 'explore',
    url: 'https://viniciuscesarvenancio-collab.github.io/PROJETO_FAMINAS/',
    status: 'active',
    sectorGroup: 'Grupo 12'
  },
  {
    id: 'formatura-colacao',
    order: 8,
    title: 'Formatura e Colação de Grau',
    description: 'Requisitos para colação, taxas, prazos de integralização, colação solene vs. colação especial em gabinete.',
    icon: 'school',
    url: 'https://arthursteinerr.github.io/InfoHub-Faminas-Template/',
    status: 'active',
    sectorGroup: 'Grupo 05'
  },
  {
    id: 'dependencias-dp',
    order: 9,
    title: 'Funcionamento das Dependências',
    description: 'Regras pedagógicas de DP, choques de grade horária, limites de créditos por semestre, matrícula e custos.',
    icon: 'sync_problem',
    url: 'https://emanuelpadua.github.io/infohub-funcionamento-dependencias/',
    status: 'active',
    sectorGroup: 'Grupo 06'
  },
  {
    id: 'horas-complementares',
    order: 10,
    title: 'Horas Complementares',
    description: 'Tabela de pontuação, categorias de atividades aceitas, limites semestrais e procedimentos de submissão.',
    icon: 'hourglass_bottom',
    url: 'https://murilonevesdasilva.github.io/InfoHub-Faminas-Template/',
    status: 'active',
    sectorGroup: 'Grupo 08'
  },
  {
    id: 'iniciacao-cientifica',
    order: 11,
    title: 'Iniciação Científica na FAMINAS',
    description: 'Editais vigentes, bolsas PIBIC/PIBITI, cronograma de submissão de projetos, requisitos do orientador e relatórios.',
    icon: 'science',
    url: 'https://sumemring.github.io/InfoHub-Faminas-Iniciacao-Cientifica/',
    status: 'active',
    sectorGroup: 'Grupo 09'
  },
  {
    id: 'matricula-rematricula',
    order: 12,
    title: 'Matrícula e Renovação de Matrícula',
    description: 'Calendário de rematrícula, ajuste de grade, aditamento de financiamentos (FIES/PROUNI), trancamento e débitos.',
    icon: 'how_to_reg',
    url: 'https://trabalho-engenharia-software.vercel.app/',
    status: 'active',
    sectorGroup: 'Grupo 10'
  },
  {
    id: 'revista-cientifica',
    order: 13,
    title: 'Revista Científica da FAMINAS',
    description: 'Linhas editoriais, fluxo de submissão de artigos científicos, normas de formatação e prazos de avaliação por pares.',
    icon: 'menu_book',
    url: 'https://kvr01-stack.github.io/InfoHub-Faminas-Template/',
    status: 'active',
    sectorGroup: 'Grupo 11'
  },
  {
    id: 'tcc-conclusao',
    order: 14,
    title: 'Trabalho de Conclusão de Curso (TCC)',
    description: 'Manual oficial de TCC, calendário de entregas, agendamento de bancas avaliadoras e depósito no repositório.',
    icon: 'assignment',
    url: 'https://kauaamorimamorim-cell.github.io/infohub-tcc-sem-links/',
    status: 'active',
    sectorGroup: 'Grupo 14'
  },
  {
    id: 'complexo-esportivo',
    order: 15,
    title: 'Uso do Complexo Esportivo',
    description: 'Horários livres para estudantes, regras de reserva de quadras, eventos internos e normas de conduta/vestimenta.',
    icon: 'fitness_center',
    url: 'https://arthurramos-dev.github.io/InfoHub-QuadrasEAgendamento/',
    status: 'active',
    sectorGroup: 'Grupo 15'
  }
];
