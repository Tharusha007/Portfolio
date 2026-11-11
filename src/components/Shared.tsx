import { ArrowDown, ArrowUpRight, Check, Copy, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useState, type ReactNode } from 'react';
import { profile } from '../data/portfolio';
export function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return <p className="section-label"><span>{number}</span>{children}</p>;
}
export function SocialLinks({ text = true }: { text?: boolean }) {
  return <div className="social-links"><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"><Linkedin size={17}/>{text && 'LinkedIn'}<ArrowUpRight size={13}/></a><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"><Github size={17}/>{text && 'GitHub'}<ArrowUpRight size={13}/></a></div>;
}
export function ResumeLink({ className = 'button button-outline' }: { className?: string }) {
  return <a className={className} href={profile.resume} download="Tharusha-Hanwella-Resume.pdf">Download CV <Download size={17}/></a>;
}
export function Contact({ standalone = false }: { standalone?: boolean }) {
  const [copy, setCopy] = useState<'idle' | 'copying' | 'copied' | 'error'>('idle');
  async function copyEmail() {
    setCopy('copying');
    try { await navigator.clipboard.writeText(profile.email); setCopy('copied'); } catch { setCopy('error'); }
  }
  return <section className={`contact-section ${standalone ? 'contact-standalone' : ''}`} id="contact" tabIndex={-1} aria-labelledby="contact-title"><div className="shell contact-layout">
    <div><SectionLabel number="06">Let’s connect</SectionLabel><h2 id="contact-title">Good work starts<br/>with a <em>conversation.</em></h2><p>I welcome conversations about Business Analysis, quality assurance, and IT project coordination opportunities.</p></div>
    <div className="contact-actions"><span className="eyebrow">HAVE AN OPPORTUNITY IN MIND?</span><a className="email-link" href={`mailto:${profile.email}?subject=Professional%20opportunity`}>{profile.email}<ArrowUpRight size={24}/></a><div className="contact-buttons"><a className="button button-light" href={`mailto:${profile.email}?subject=Professional%20opportunity`}>Write an email <Mail size={17}/></a><button className="copy-button" onClick={copyEmail} disabled={copy === 'copying'}>{copy === 'copied' ? <Check size={16}/> : <Copy size={16}/>} {copy === 'copied' ? 'Copied' : copy === 'copying' ? 'Copying…' : 'Copy email'}</button></div><p className="contact-help" role="status" aria-live="polite">{copy === 'error' ? 'Copy was unavailable. Select and copy the email address above.' : copy === 'copied' ? 'Email address copied to your clipboard.' : 'Opens your email app. You review and send the message there.'}</p><SocialLinks/></div>
  </div></section>;
}
export function Footer() {
  return <footer className="site-footer"><div className="shell footer-inner"><a href="/#home" className="footer-name">Tharusha Hanwella<span>.</span></a><p>Business thinking. Practical technology.</p><a href="#main" className="back-top">Back to top <ArrowDown size={15} className="rotate-180"/></a></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Tharusha Pasan Hanwella</span><span>Sri Lanka · Built with purpose.</span></div></footer>;
}
