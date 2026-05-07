import { useOutletContext } from 'react-router-dom';
import { ArrowIcon, ForkIcon, StarIcon } from '../components/Icon';
import { PageHead } from '../components/PageHead';
import type { LayoutContext } from './AboutPage';

export function ProjectsPage() {
  const { t } = useOutletContext<LayoutContext>();
  const p = t.projectsPage;

  return (
    <div className="page-body">
      <section className="section">
        <div className="shell narrow">
          <PageHead title={p.heading} sub={p.sub} />
          <div className="proj-list">
            {p.list.map((item) => (
              <a
                key={item.repo}
                className="proj-card"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <div className="proj-head">
                  <div className="proj-name" dir="ltr">{item.repo}</div>
                  <span className="proj-arrow"><ArrowIcon /></span>
                </div>
                <div className="proj-desc">{item.desc}</div>
                <div className="proj-foot">
                  <div className="proj-tags">
                    {item.tags.map((tg) => (
                      <span key={tg} className="pill" dir="ltr">{tg}</span>
                    ))}
                  </div>
                  {item.stats ? (
                    <div className="proj-stats num">
                      <span dir="ltr"><StarIcon /> {item.stars.toLocaleString('en-US')}</span>
                      <span dir="ltr"><ForkIcon /> {item.forks.toLocaleString('en-US')}</span>
                    </div>
                  ) : (
                    <span className="proj-live" dir="ltr">{item.live} ↗</span>
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
