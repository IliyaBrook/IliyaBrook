import { useOutletContext } from 'react-router-dom';
import { PageHead } from '../components/PageHead';
import type { LayoutContext } from './AboutPage';

export function ResumePage() {
  const { t } = useOutletContext<LayoutContext>();
  const r = t.resume;

  return (
    <div className="page-body">
      <section className="section">
        <div className="shell narrow">
          <PageHead title={r.heading} sub={r.sub} />

          <div className="resume-contact">
            <span dir="ltr">{r.contact.phone}</span>
            <span className="dot-sep">·</span>
            <a href={'mailto:' + r.contact.email} dir="ltr">{r.contact.email}</a>
            <span className="dot-sep">·</span>
            <a
              href={'https://' + r.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              dir="ltr"
            >
              {r.contact.linkedin}
            </a>
          </div>

          <div className="resume-section">
            <h3 className="rs-h">{r.sections.experience}</h3>
            <div className="rs-list">
              {r.experience.map((j, i) => (
                <div key={i} className="rs-job">
                  <div className="rs-job-head">
                    <div>
                      <div className="rs-role">{j.role}</div>
                      <div className="rs-company">
                        <span dir="ltr">{j.company}</span>{' '}
                        <span className="rs-loc">· {j.loc}</span>
                      </div>
                    </div>
                    <div className="rs-period num" dir="ltr">{j.period}</div>
                  </div>
                  <ul className="rs-bullets">
                    {j.bullets.map((b, k) => (
                      <li key={k}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h3 className="rs-h">{r.sections.education}</h3>
            <div className="rs-edu">
              {r.education.map((e, i) => (
                <div key={i} className="rs-edu-row">
                  <div className="rs-edu-school" dir="ltr">{e.school}</div>
                  <div className="rs-edu-degree">{e.degree}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="resume-section">
            <h3 className="rs-h">{r.sections.skills}</h3>
            <div className="rs-skills">
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
