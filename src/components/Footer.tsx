import type { SiteCopy } from '../i18n/types';
import { GithubIcon, LinkedinIcon } from './Icon';

export function Footer({ t }: { t: SiteCopy }) {
  return (
    <footer className="site-footer">
      <div className="shell footer-shell">
        <span className="footer-cr" dir="ltr">{t.footer.copyright}</span>
        <div className="footer-links">
          <a href="https://github.com/IliyaBrook" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/iliya-brook" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
