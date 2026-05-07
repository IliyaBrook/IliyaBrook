import { useOutletContext } from 'react-router-dom';
import { ArrowIcon } from '../components/Icon';
import { PageHead } from '../components/PageHead';
import type { LayoutContext } from './AboutPage';

export function DrivingPage() {
  const { t, lang } = useOutletContext<LayoutContext>();
  const d = t.driving;

  return (
    <div className="page-body">
      <section className="section">
        <div className="shell narrow">
          <PageHead title={d.heading} sub={d.sub} />
          <div className="driving-list">
            {d.list.map((a, i) => (
              <a
                key={i}
                className="driving-card"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                <div className="driving-num num" dir="ltr">{String(i + 1).padStart(2, '0')}</div>
                <div className="driving-body">
                  <div className="driving-name" dir={lang === 'he' ? 'rtl' : 'ltr'}>{a.name}</div>
                  <div className="driving-desc">{a.desc}</div>
                </div>
                <span className="driving-arrow"><ArrowIcon /></span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
