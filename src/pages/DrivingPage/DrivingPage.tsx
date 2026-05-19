import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ArrowIcon } from '@/components/Icon';
import { Modal } from '@/components/Modal';
import { PageHead } from '@/components/PageHead';
import type { LayoutContext } from '@/pages/AboutPage';
import styles from './DrivingPage.module.scss';

const COURSE_URLS: (string | null)[] = [
  'https://correct-driving-test.vercel.app/',
  'https://loading-and-unloading.vercel.app/',
  'https://road-accidents-kappa.vercel.app',
  'https://theory-exam-truck-c.vercel.app',
];

export function DrivingPage() {
  const { t, lang } = useOutletContext<LayoutContext>();
  const d = t.driving;
  const [isInDevOpen, setInDevOpen] = useState(false);

  return (
    <div className="page-body">
      <section className="section">
        <div className="shell narrow">
          <PageHead title={d.heading} sub={d.sub} />
          <div className={styles.list}>
            {d.list.map((a, i) => {
              const url = COURSE_URLS[i] ?? null;
              const commonInner = (
                <>
                  <div className={`${styles.num} num`} dir="ltr">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className={styles.body}>
                    <div
                      className={styles.name}
                      dir={lang === 'he' ? 'rtl' : 'ltr'}
                    >
                      {a.name}
                    </div>
                    <div className={styles.desc}>{a.desc}</div>
                  </div>
                  <span className={styles.arrow}>
                    <ArrowIcon />
                  </span>
                </>
              );

              if (url) {
                return (
                  <a key={i} className={styles.card} href={url}>
                    {commonInner}
                  </a>
                );
              }

              return (
                <button
                  key={i}
                  type="button"
                  className={styles.card}
                  onClick={() => setInDevOpen(true)}
                >
                  {commonInner}
                </button>
              );
            })}
          </div>
        </div>
      </section>
      <Modal
        isOpen={isInDevOpen}
        onClose={() => setInDevOpen(false)}
        title={t.modal.inDev.title}
        closeLabel={t.modal.close}
      >
        <p>{t.modal.inDev.message}</p>
      </Modal>
    </div>
  );
}
