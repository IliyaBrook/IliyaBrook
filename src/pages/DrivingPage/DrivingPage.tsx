import { useOutletContext } from 'react-router-dom';
import { ArrowIcon } from '@/components/Icon';
import { PageHead } from '@/components/PageHead';
import type { LayoutContext } from '@/pages/AboutPage';
import styles from './DrivingPage.module.scss';

export function DrivingPage() {
  const { t, lang } = useOutletContext<LayoutContext>();
  const d = t.driving;

  return (
    <div className="page-body">
      <section className="section">
        <div className="shell narrow">
          <PageHead title={d.heading} sub={d.sub} />
          <div className={styles.list}>
            {d.list.map((a, i) => (
              <a
                key={i}
                className={styles.card}
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <div className={`${styles.num} num`} dir="ltr">{String(i + 1).padStart(2, '0')}</div>
                <div className={styles.body}>
                  <div className={styles.name} dir={lang === 'he' ? 'rtl' : 'ltr'}>{a.name}</div>
                  <div className={styles.desc}>{a.desc}</div>
                </div>
                <span className={styles.arrow}><ArrowIcon /></span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
