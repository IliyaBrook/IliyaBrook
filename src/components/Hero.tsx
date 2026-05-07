import type { SiteCopy } from '../i18n/types';

export function Hero({ t }: { t: SiteCopy }) {
  return (
    <section className="hero">
      <div className="shell">
        <div className="hero-eyebrow"><bdi dir="ltr">{t.hero.eyebrow}</bdi></div>
        <h1>{t.hero.name}</h1>
        <p className="tagline">{t.hero.tagline}</p>
        <div className="hero-meta">
          <span className="meta-item"><span className="lbl">·</span>{t.hero.location}</span>
          <span className="meta-item"><span className="lbl">·</span>{t.hero.role}</span>
        </div>
      </div>
    </section>
  );
}
