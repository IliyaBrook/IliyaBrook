import { Link, useOutletContext } from "react-router-dom";
import { Hero } from "@/components/Hero";
import type { Lang, SiteCopy } from "@/i18n/types";
import styles from "./AboutPage.module.scss";

export type LayoutContext = { t: SiteCopy; lang: Lang };

export function AboutPage() {
  const { t } = useOutletContext<LayoutContext>();
  return (
    <div className="page-body">
      <Hero t={t} />
      <section className={styles.integration} aria-labelledby="personal-projects">
        <div className="shell">
          <h2 id="personal-projects">{t.integrations.heading}</h2>
          <p>{t.integrations.description}</p>
          <Link to="/privacy">{t.integrations.privacyLink}</Link>
        </div>
      </section>
    </div>
  );
}
