import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
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

  const toggleTheme = (event) => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    chosenThisSessionRef.current = true;
    try { localStorage.setItem('portfolio-theme', next); }
    catch { /* Keep the toggle functional even if saving is blocked. */ }

    const applyTheme = () => {
      // The view transition snapshots the page as soon as this returns, so React must render now.
      // eslint-disable-next-line @eslint-react/dom-no-flush-sync
      flushSync(() => setTheme(next));
      root.dataset.theme = next;
    };

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!document.startViewTransition || reduceMotion) {
      applyTheme();
      return;
    }

    // The new palette rises out of (or sets back into) the toggle like the sun.
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const reach = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    root.style.setProperty('--theme-origin-x', `${x}px`);
    root.style.setProperty('--theme-origin-y', `${y}px`);
    root.style.setProperty('--theme-reach', `${Math.ceil(reach)}px`);
    root.dataset.themeTransition = next === 'light' ? 'sunrise' : 'sunset';

    const horizon = document.createElement('div');
    horizon.className = 'theme-horizon';
    horizon.setAttribute('aria-hidden', 'true');
    const transition = document.startViewTransition(() => {
      applyTheme();
      document.body.append(horizon);
    });
    transition.finished.finally(() => {
      horizon.remove();
      delete root.dataset.themeTransition;
    });
  };

  const toggleLabel = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;

  return (
    <nav aria-label="Main navigation" className="site-nav">
      <div className="nav-inner">
        <a href="#home" className="nav-name" aria-label="Ahmed Rizwan home">
          <img src="/assets/ar-monogram.png" alt="" className="nav-logo" width="56" height="56" />
        </a>
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
