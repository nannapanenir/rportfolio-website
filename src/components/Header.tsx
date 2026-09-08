import { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menuOpen) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenuOpen(false); menuRef.current?.focus(); }
    };
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [menuOpen]);
  return (
<header>
<a aria-label="Ramgopal, home" className="brand" href="#home">r<span>.</span>
</a>
<nav aria-label="Main navigation" id="nav" className={menuOpen ? 'open' : ''} onClick={(event) => { if ((event.target as HTMLElement).closest('a')) setMenuOpen(false); }}>
<a href="#projects">Selected work</a>
<a href="#about">About</a>
<a href="#experience">Experience</a>
<a href="#contact">Contact</a>
</nav>
<div className="header-actions">
<ThemeToggle />
<a className="nav-contact" href="mailto:nannapaneniramgopal@gmail.com">Let’s talk ↗</a>
<button ref={menuRef} aria-controls="nav" aria-expanded={menuOpen} id="menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
</div>
</header>
  );
}
