export interface ProjectResource { label: string; href: string; type: 'image' | 'document'; caption: string; alt?: string; }
export interface Project {
  slug: string; number: string; title: string; shortTitle: string; category: string;
  theme: 'auction' | 'jobs' | 'gas'; summary: string; emphasis: string; tags: string[];
  overview: string; problem: string; objectives: string[]; role: string; responsibilities: string[];
  requirements: string; methods: string[]; design: string; deliverables: string[];
  evidenceNote: string; resources: ProjectResource[]; outcome?: string; lessons?: string[];
}
// Unknown features, results and metrics are not invented. Add original artefacts to resources.
export const projects: Project[] = [
  {
    slug: 'flash-stock', number: '01', title: 'Flash Stock — Real-Time Auction Platform',
    shortTitle: 'Flash Stock', category: 'Higher Diploma Final Project', theme: 'auction',
    summary: 'Turning an auction platform idea into a defined scope, clear requirements, and visual system models.',
    emphasis: 'From an idea to a system everyone can understand.', tags: ['Feasibility analysis', 'Requirements', 'UML modeling'],
    overview: 'Flash Stock is a Higher Diploma final project centred on a localised real-time auction system. My documented contribution focused on feasibility, requirements elicitation, and UML models that explain business workflows and data structures.',
    problem: 'Before developing a localised auction system, the team needed a clear understanding of feasibility, scope, functional requirements, and how the business workflow would translate into a system. My analysis and modeling work addressed that need.',
    objectives: ['Assess feasibility and establish the project scope.', 'Elicit and define functional requirements.', 'Represent business workflows and data structures through UML.'],
    role: 'Business analysis and system modeling contributions within the final project.',
    responsibilities: ['Conducted feasibility studies and requirements elicitation.', 'Helped define scope and functional requirements.', 'Designed Use Case, Activity, and Class diagrams using Draw.io.'],
    requirements: 'Requirements elicitation supported the definition of scope and functional requirements. The résumé confirms this work, but does not provide a complete requirement catalogue or signed-off specifications; individual product features are therefore not presented as verified requirements here.',
    methods: ['Requirements elicitation', 'Feasibility analysis', 'Agile methodology', 'Business process mapping', 'UML modeling', 'Draw.io', 'Figma'],
    design: 'Use Case diagrams described system interactions, Activity diagrams represented workflows, and Class diagrams represented structure. These diagram types are documented in my résumé. The cover illustration is a conceptual map of those analysis perspectives, created for this portfolio.',
    deliverables: ['Feasibility analysis', 'Defined scope and functional requirements', 'Use Case diagrams', 'Activity diagrams', 'Class diagrams'],
    evidenceNote: 'This case study covers the analysis and modeling work recorded in my résumé. Original project diagrams and deployment or user-outcome evidence are not included.', resources: []
  },
  {
    slug: 'fake-job-detection', number: '02', title: 'Fake Job & Internship Detection Platform',
    shortTitle: 'Trust begins with clarity.', category: 'Agile Project', theme: 'jobs',
    summary: 'Translating business requirements into user stories, acceptance criteria, and coordinated Scrum delivery.',
    emphasis: 'Clear requirements. Shared expectations. Iterative delivery.', tags: ['User stories', 'Acceptance criteria', 'Scrum'],
    overview: 'An Agile academic project focused on a platform for fake job and internship detection. My documented contribution connected business requirements with delivery through actionable user stories, acceptance criteria, and Agile ceremonies.',
    problem: 'The project needed high-level business requirements to become clear, actionable work for a cross-functional team. My contribution focused on that translation and on maintaining team alignment through Scrum practices. Detection accuracy or a particular detection method is not claimed.',
    objectives: ['Translate high-level requirements into actionable user stories.', 'Define acceptance criteria to clarify expected behaviour.', 'Support alignment and iterative delivery through Agile ceremonies.'],
    role: 'Requirements translation and Agile coordination within the project team.',
    responsibilities: ['Translated high-level requirements into user stories with defined acceptance criteria.', 'Facilitated Sprint Planning, Daily Stand-ups, Sprint Reviews, and Retrospectives.', 'Supported team alignment and iterative product delivery.'],
    requirements: 'User stories expressed business needs as actionable work, with acceptance criteria clarifying what each story should achieve. User story mapping and backlog management are listed among the project methods. No original backlog export or specific acceptance-test results were supplied for this portfolio.',
    methods: ['Scrum framework', 'User story mapping', 'Acceptance criteria', 'Backlog management', 'Sprint planning', 'Agile ceremonies', 'Jira', 'CI/CD concepts'],
    design: 'The documented process connected requirements, user stories, acceptance criteria, and recurring Scrum ceremonies. The cover illustration shows that conceptual relationship. It is not an original Jira screenshot or a record of actual sprint contents.',
    deliverables: ['Actionable user stories', 'Defined acceptance criteria', 'Sprint Planning facilitation', 'Daily Stand-ups, Sprint Reviews, and Retrospectives'],
    evidenceNote: 'The résumé documents requirements translation and Agile facilitation. It does not establish deployment status, detection performance, or measured user outcomes.', resources: []
  },
  {
    slug: 'home-gas-delivery', number: '03', title: 'Home Gas Cylinder Delivery Mobile Application',
    shortTitle: 'Understanding delivery, before designing it.', category: 'Business Analysis Project', theme: 'gas',
    summary: 'Exploring the business environment and documenting requirements for a proposed home gas delivery application.',
    emphasis: 'Start with the business. Define what the solution needs.', tags: ['SWOT / PESTLE', 'Stakeholders', 'Requirements engineering'],
    overview: 'A Business Analysis project exploring a mobile application for home gas cylinder delivery. My documented contribution combined business environment analysis with the elicitation and documentation of functional and non-functional requirements.',
    problem: 'The project examined operational inefficiencies and the surrounding business environment to propose viable IT solutions. My résumé identifies the analysis frameworks, but does not specify a particular provider, baseline delivery performance, or validated market size.',
    objectives: ['Understand the business environment and operational inefficiencies.', 'Apply SWOT and PESTLE to inform proposed IT solutions.', 'Document functional and non-functional requirements for stakeholders and the technical team.'],
    role: 'Business environment analysis and requirements engineering.',
    responsibilities: ['Conducted business environment analysis using SWOT and PESTLE.', 'Identified operational inefficiencies and proposed viable IT solutions.', 'Elicited, analysed, and documented functional and non-functional requirements.'],
    requirements: 'Functional and non-functional requirements were documented to improve communication between business stakeholders and the technical team. Stakeholder analysis is also listed in the project methods. Specific ordering, payment, tracking, or delivery features are not claimed without the original specification.',
    methods: ['Requirements engineering', 'SWOT analysis', 'PESTLE analysis', 'Stakeholder analysis', 'Draw.io', 'MS Office'],
    design: 'The analysis considered the business environment, stakeholders, and solution requirements together. The conceptual cover illustration explains those relationships; it does not reproduce an original project diagram or a validated business model.',
    deliverables: ['Business environment analysis', 'SWOT and PESTLE analysis', 'Documented functional requirements', 'Documented non-functional requirements', 'Proposed IT solutions'],
    evidenceNote: 'The confirmed work is analysis and requirements documentation. Original reports, implementation evidence, and measured operational results were not supplied.', resources: []
  }
];
