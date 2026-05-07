import { NavLink } from 'react-router-dom';
import logoDark from '../../assets/logos/logo-dark.svg';
import logoLight from '../../assets/logos/logo-light.svg';
import type { Theme } from '../../hooks/useTheme';
import type { Lang, SiteCopy } from '../../i18n/types';
import { MoonIcon, SunIcon } from '../Icon';
import styles from './Header.module.scss';

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
    <header className={styles.header}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand} aria-label="Iliya Brook — home">
          <img className={styles.brandDark} src={logoDark} alt="ib." />
          <img className={styles.brandLight} src={logoLight} alt="ib." />
        </NavLink>
        <nav className={styles.nav} aria-label="Primary">
          {items.map((it) => (
            <NavLink
              key={it.to}
              to={it.to}
              end={it.end}
              className={({ isActive }) =>
                styles.link + (isActive ? ' ' + styles.active : '')
              }
            >
              {it.label}
            </NavLink>
          ))}
        </nav>
        <div className={styles.tools}>
          <button
            className={styles.iconBtn}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <div className={styles.lang} role="group" aria-label="Language">
            {LANGS.map((L) => (
              <button
                key={L}
                className={lang === L ? styles.active : ''}
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
