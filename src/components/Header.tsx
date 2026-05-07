import { NavLink } from 'react-router-dom';
import logoDark from '../assets/logos/logo-dark.svg';
import logoLight from '../assets/logos/logo-light.svg';
import type { Lang, SiteCopy } from '../i18n/types';
import type { Theme } from '../hooks/useTheme';
import { MoonIcon, SunIcon } from './Icon';

type HeaderProps = {
  t: SiteCopy;
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
};

const LANGS: Lang[] = ['en', 'ru', 'he'];

export function Header({ t, lang, setLang, theme, setTheme }: HeaderProps) {
  const items = [
    { to: '/', label: t.nav.about, end: true },
    { to: '/projects', label: t.nav.projects, end: false },
    { to: '/driving', label: t.nav.driving, end: false },
    { to: '/resume', label: t.nav.resume, end: false },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="brand" aria-label="Iliya Brook — home">
          <img className="brand-dark" src={logoDark} alt="ib." />
          <img className="brand-light" src={logoLight} alt="ib." />
        </NavLink>
        <nav className="site-nav" aria-label="Primary">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.end}
              className={({ isActive }) => 'navlink' + (isActive ? ' active' : '')}
            >
              {it.label}
            </NavLink>
          ))}
        </nav>
        <div className="tools">
          <button
            className="icon-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <div className="lang" role="group" aria-label="Language">
            {LANGS.map((L) => (
              <button
                key={L}
                className={lang === L ? 'active' : ''}
                onClick={() => setLang(L)}
                dir="ltr"
              >
                {L.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
