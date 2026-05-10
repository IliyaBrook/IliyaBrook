import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ArrowIcon, ForkIcon, StarIcon } from '@/components/Icon';
import { PageHead } from '@/components/PageHead';
import type { LayoutContext } from '@/pages/AboutPage';
import styles from './ProjectsPage.module.scss';

type GhStats = { stars: number; forks: number };
type GhCacheEntry = { stars: number; forks: number; ts: number };

const GH_OWNER = 'IliyaBrook';
const CACHE_KEY = 'gh-stats:v1';
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

function readCache(): Record<string, GhCacheEntry> {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === 'object' && parsed ? parsed : {};
  } catch {
    return {};
  }
}

function writeCache(data: Record<string, GhCacheEntry>) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  } catch {
    // quota or disabled storage — fine to ignore
  }
}

export function ProjectsPage() {
  const { t } = useOutletContext<LayoutContext>();
  const p = t.projectsPage;
  const [ghData, setGhData] = useState<Record<string, GhStats>>(() => {
    const cache = readCache();
    const now = Date.now();
    const fresh: Record<string, GhStats> = {};
    for (const [repo, entry] of Object.entries(cache)) {
      if (now - entry.ts < CACHE_TTL_MS) {
        fresh[repo] = { stars: entry.stars, forks: entry.forks };
      }
    }
    return fresh;
  });

  useEffect(() => {
    const repos = p.list
      .filter((it): it is typeof it & { stats: true } => it.stats)
      .map((it) => it.repo);

    const cache = readCache();
    const now = Date.now();
    const stale = repos.filter(
      (repo) => !cache[repo] || now - cache[repo].ts >= CACHE_TTL_MS,
    );
    if (stale.length === 0) return;

    let cancelled = false;
    Promise.all(
      stale.map((repo) =>
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
      const fetched: Record<string, GhStats> = {};
      const nextCache = readCache();
      const ts = Date.now();
      for (const e of entries) {
        if (!e) continue;
        fetched[e[0]] = e[1];
        nextCache[e[0]] = { ...e[1], ts };
      }
      if (Object.keys(fetched).length === 0) return;
      writeCache(nextCache);
      setGhData((prev) => ({ ...prev, ...fetched }));
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
