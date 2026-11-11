import { Component, type ErrorInfo, type ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Shared';
import { Home } from './pages/Home';
import { CaseStudy } from './pages/CaseStudy';
import { projects } from './data/projects';
import { profile } from './data/portfolio';
export function normalisePath(path: string) { return path.replace(/\/+$/, '') || '/'; }
export function App({ path }: { path: string }) {
  const route = normalisePath(path);
  const project = projects.find(p => `/projects/${p.slug}` === route);
  const home = route === '/';
  return <><Header home={home} isProject={Boolean(project)}/>{home ? <Home/> : project ? <CaseStudy project={project}/> : <main id="main" tabIndex={-1} className="shell not-found"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>This page took<br/>a <em>different path.</em></h1><p>The address may have changed. You can return to my portfolio and explore the work from there.</p><a href="/" className="button button-primary"><ArrowLeft size={18}/> Back to the portfolio</a></main>}<Footer/></>;
}
export class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error: Error, info: ErrorInfo) { console.error('Portfolio rendering error', error, info.componentStack); }
  render() {
    if (this.state.failed) return <main className="shell not-found"><h1>Something didn’t load.</h1><p>Please reload the page or contact me directly.</p><a className="button button-primary" href="/">Reload portfolio</a><p><a href={`mailto:${profile.email}`}>{profile.email}</a></p></main>;
    return this.props.children;
  }
}
