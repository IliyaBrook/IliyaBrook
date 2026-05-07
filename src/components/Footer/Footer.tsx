import type { SiteCopy } from '../../i18n/types';
import { GithubIcon, LinkedinIcon } from '../Icon';
import styles from './Footer.module.scss';

export function Footer({ t }: { t: SiteCopy }) {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.footerShell}`}>
        <span className={styles.copy} dir="ltr">{t.footer.copyright}</span>
        <div className={styles.links}>
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
