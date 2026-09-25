import { useEffect, useRef, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

export default function Navbar() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  const chosenThisSessionRef = useRef(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-color-scheme: dark)');
    const followSystem = (event) => {
      if (chosenThisSessionRef.current) return;
      try {
        const saved = localStorage.getItem('portfolio-theme');
        if (saved === 'light' || saved === 'dark') return;
      } catch { /* System preference still works when storage is unavailable. */ }
      const next = event.matches ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      setTheme(next);
    };
    preference.addEventListener('change', followSystem);
    return () => preference.removeEventListener('change', followSystem);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    chosenThisSessionRef.current = true;
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try { localStorage.setItem('portfolio-theme', next); }
    catch { /* Keep the toggle functional even if saving is blocked. */ }
  };

  const toggleLabel = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;

  return (
    <nav aria-label="Main navigation" className="site-nav">
      <div className="nav-inner">
        <a href="#home" className="nav-name" aria-label="Ahmed Rizwan home">Ahmed R.</a>
        <div className="nav-actions">
          <div className="nav-links">
            <a href="#home">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </div>
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={toggleLabel} title={toggleLabel}>
            {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
