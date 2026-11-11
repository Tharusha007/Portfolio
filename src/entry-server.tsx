import { renderToString } from 'react-dom/server';
import { App } from './App';
import { projects } from './data/projects';
import { profile } from './data/portfolio';
export const pages = [
  { path: '/', title: `${profile.name} | Business Analyst & IT Professional`, description: 'Business analysis, system design, and Agile project work by Tharusha Pasan Hanwella. Information Systems undergraduate and Intern Business Analyst at Softwatch InfoSys.' },
  ...projects.map(p => ({ path: `/projects/${p.slug}/`, title: `${p.title} | Tharusha Hanwella`, description: p.summary })),
  { path: '/404.html', title: 'Page not found | Tharusha Hanwella', description: 'Return to the portfolio of Tharusha Pasan Hanwella.' }
];
export function render(path: string) { return renderToString(<App path={path}/>); }
export { profile, projects };
