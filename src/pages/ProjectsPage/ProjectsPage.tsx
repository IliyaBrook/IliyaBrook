import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ArrowIcon, ForkIcon, StarIcon } from '@/components/Icon';
import { PageHead } from '@/components/PageHead';
import type { LayoutContext } from '@/pages/AboutPage';
import styles from './ProjectsPage.module.scss';

type GhStats = { stars: number; forks: number };

const GH_OWNER = 'IliyaBrook';

export function ProjectsPage() {
  const { t } = useOutletContext<LayoutContext>();
  const p = t.projectsPage;
  const [ghData, setGhData] = useState<Record<string, GhStats>>({});

  useEffect(() => {
    const repos = p.list
      .filter((it): it is typeof it & { stats: true } => it.stats)
      .map((it) => it.repo);

    let cancelled = false;
    Promise.all(
      repos.map((repo) =>
        fetch(`https://api.github.com/repos/${GH_OWNER}/${repo}`)
          .then((r) => (r.ok ? r.json() : null))
          .then((d) =>
            d
              ? ([repo, { stars: d.stargazers_count, forks: d.forks_count }] as const)
              : null,
          )
          .catch(() => null),
      ),
    ).then((entries) => {
      if (cancelled) return;
      const next: Record<string, GhStats> = {};
      for (const e of entries) if (e) next[e[0]] = e[1];
      setGhData(next);
    });

    return () => {
      cancelled = true;
    };
  }, [p.list]);

  return (
    <div className="page-body">
      <section className="section">
        <div className="shell narrow">
          <PageHead title={p.heading} sub={p.sub} />
          <div className={styles.list}>
            {p.list.map((item) => {
              const stats = item.stats ? ghData[item.repo] : null;
              return (
                <a
                  key={item.repo}
                  className={styles.card}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
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
                      stats ? (
                        <div className={`${styles.stats} num`}>
                          <span dir="ltr"><StarIcon /> {stats.stars.toLocaleString('en-US')}</span>
                          <span dir="ltr"><ForkIcon /> {stats.forks.toLocaleString('en-US')}</span>
                        </div>
                      ) : null
                    ) : (
                      <span className={styles.live} dir="ltr">{item.live} ↗</span>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
