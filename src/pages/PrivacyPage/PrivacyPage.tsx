import { useOutletContext } from 'react-router-dom';
import { PageHead } from '@/components/PageHead';
import type { LayoutContext } from '@/pages/AboutPage/AboutPage';
import styles from './PrivacyPage.module.scss';

export function PrivacyPage() {
  const { t } = useOutletContext<LayoutContext>();
  const p = t.privacy;

  return (
    <div className="page-body">
      <title>{`${p.title} — Iliya Brook`}</title>
      <section className="section">
        <article className={`shell narrow ${styles.policy}`}>
          <PageHead title={p.title} sub={p.updated} />
          <p>{p.intro}</p>
          {p.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <p><a href="https://myaccount.google.com/connections">{p.revoke}</a></p>
          <p><a href="https://developers.google.com/terms/api-services-user-data-policy">{p.limitedUse}</a></p>
          <p>{p.contact} <a href="mailto:iliyabrook1987@gmail.com" dir="ltr">iliyabrook1987@gmail.com</a></p>
        </article>
      </section>
    </div>
  );
}
