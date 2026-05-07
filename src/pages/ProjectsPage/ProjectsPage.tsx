import { useOutletContext } from 'react-router-dom';
import { ArrowIcon, ForkIcon, StarIcon } from '../../components/Icon';
import { PageHead } from '../../components/PageHead';
import type { LayoutContext } from '../AboutPage';
import styles from './ProjectsPage.module.scss';

export function ProjectsPage() {
  const { t } = useOutletContext<LayoutContext>();
  const p = t.projectsPage;

  return (
    <div className="page-body">
      <section className="section">
        <div className="shell narrow">
          <PageHead title={p.heading} sub={p.sub} />
          <div className={styles.list}>
            {p.list.map((item) => (
              <a
                key={item.repo}
                className={styles.card}
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <div className={styles.head}>
                  <div className={styles.name} dir="ltr">{item.repo}</div>
                  <span className={styles.arrow}><ArrowIcon /></span>
                </div>
                <div className={styles.desc}>{item.desc}</div>
                <div className={styles.foot}>
                  <div className={styles.tags}>
                    {item.tags.map((tg) => (
                      <span key={tg} className="pill" dir="ltr">{tg}</span>
                    ))}
                  </div>
                  {item.stats ? (
                    <div className={`${styles.stats} num`}>
                      <span dir="ltr"><StarIcon /> {item.stars.toLocaleString('en-US')}</span>
                      <span dir="ltr"><ForkIcon /> {item.forks.toLocaleString('en-US')}</span>
                    </div>
                  ) : (
                    <span className={styles.live} dir="ltr">{item.live} ↗</span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
