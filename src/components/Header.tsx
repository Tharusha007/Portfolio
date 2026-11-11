import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { navigation, profile } from '../data/portfolio';

export function Header({ home, isProject = false }: { home: boolean; isProject?: boolean }) {
  const [active, setActive] = useState(home ? 'home' : isProject ? 'projects' : '');
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!home) return;
    const update = () => {
      let current = 'home';
      for (const [id] of navigation) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 160) current = id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 10) current = 'contact';
      setActive(current);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, [home]);
  useEffect(() => {
    if (!open) return;
    const prior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    mobileNav.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const close = () => { setOpen(false); trigger.current?.focus(); };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'Tab') {
        const links = mobileNav.current?.querySelectorAll<HTMLAnchorElement>('a');
        const last = links?.[links.length - 1];
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); trigger.current?.focus(); }
        if (event.shiftKey && document.activeElement === trigger.current) { event.preventDefault(); last?.focus(); }
      }
    };
    const onResize = () => { if (window.innerWidth >= 1100) close(); };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => { document.body.style.overflow = prior; document.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, [open]);
  const href = (id: string) => `${home ? '' : '/'}#${id}`;
  const goToSection = (id: string) => {
    setOpen(false);
    if (home) requestAnimationFrame(() => document.getElementById(id)?.focus({ preventScroll: true }));
  };
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="header-inner shell">
      <a className="brand" href={href('home')} aria-label={`${profile.name}, home`}>
        <img src="/images/tharusha-header-photo.webp" alt="" className="brand-photo" width={56} height={56} />
        <span className="brand-name">Tharusha<span>Hanwella.</span></span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([id, label]) => <a key={id} href={href(id)} onClick={() => goToSection(id)} aria-current={active === id ? 'location' : undefined}>{label}</a>)}</nav>
      <a className="header-connect" href={href('contact')}>Let’s talk <ArrowUpRight size={15}/></a>
      <button className="menu-trigger" ref={trigger} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div><nav ref={mobileNav} id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
      {navigation.map(([id, label], index) => <a key={id} href={href(id)} onClick={() => goToSection(id)} aria-current={active === id ? 'location' : undefined}><span>0{index + 1}</span>{label}<ArrowUpRight size={21}/></a>)}
      <p>Business thinking. Practical technology.</p>
    </nav></header>
  </>;
}
