import { PageHead } from '@/components/PageHead';
import { SITE_COPY } from '@/i18n/copy';
import styles from './ResumePage.module.scss';

export function ResumePage() {
  const r = SITE_COPY.en.resume;

  return (
    <div className="page-body" lang="en" dir="ltr">
      <section className="section">
        <div className="shell narrow">
          <PageHead title={r.heading} sub={r.sub} />

          <div className={styles.contact}>
            <span dir="ltr">{r.contact.phone}</span>
            <span className={styles.dot}>·</span>
            <a href={'mailto:' + r.contact.email} dir="ltr">{r.contact.email}</a>
            <span className={styles.dot}>·</span>
            <a
              href={'https://' + r.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              dir="ltr"
            >
              {r.contact.linkedin}
            </a>
          </div>

          <div className={styles.section}>
            <h3 className={styles.heading}>{r.sections.experience}</h3>
            <div className={styles.list}>
              {r.experience.map((j, i) => (
                <div key={i} className={styles.job}>
                  <div className={styles.jobHead}>
                    <div>
                      <div className={styles.role}>{j.role}</div>
                      <div className={styles.company}>
                        <span dir="ltr">{j.company}</span>{' '}
                        <span className={styles.loc}>· {j.loc}</span>
                      </div>
                    </div>
                    <div className={`${styles.period} num`} dir="ltr">{j.period}</div>
                  </div>
                  <ul className={styles.bullets}>
                    {j.bullets.map((b, k) => (
                      <li key={k}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.heading}>{r.sections.education}</h3>
            <div className={styles.edu}>
              {r.education.map((e, i) => (
                <div key={i} className={styles.eduRow}>
                  <div className={styles.school} dir="ltr">{e.school}</div>
                  <div className={styles.degree}>{e.degree}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.heading}>{r.sections.skills}</h3>
            <div className={styles.skills}>
              {r.skills.map((s) => (
                <span key={s} className="pill" dir="ltr">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
