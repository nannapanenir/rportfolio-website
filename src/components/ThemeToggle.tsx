import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';
export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const saved = localStorage.getItem('ram-portfolio-theme') ?? localStorage.getItem('theme');
      return saved === 'light' ? 'light' : 'dark';
    } catch { return 'dark'; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#101111' : '#f6f7f4');
    try { localStorage.setItem('ram-portfolio-theme', theme); } catch { /* Storage may be unavailable. */ }
  }, [theme]);
  return <button id="theme" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>◐</button>;
}
