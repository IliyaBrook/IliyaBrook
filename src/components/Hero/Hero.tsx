import type { SiteCopy } from '../../i18n/types';
import styles from './Hero.module.scss';

export function Hero({ t }: { t: SiteCopy }) {
  return (
    <section className={styles.hero}>
      <div className="shell">
        <div className={styles.eyebrow}><bdi dir="ltr">{t.hero.eyebrow}</bdi></div>
        <h1>{t.hero.name}</h1>
        <p className={styles.tagline}>{t.hero.tagline}</p>
        <div className={styles.meta}>
          <span className={styles.item}><span className={styles.lbl}>·</span>{t.hero.location}</span>
          <span className={styles.item}><span className={styles.lbl}>·</span>{t.hero.role}</span>
        </div>
      </div>
    </section>
  );
}
