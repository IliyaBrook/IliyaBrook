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
      <section className={styles.integration} aria-labelledby="google-integration">
        <div className="shell">
          <h2 id="google-integration">{t.googleIntegration.heading}</h2>
          <p>{t.googleIntegration.description}</p>
          <Link to="/privacy">{t.googleIntegration.privacyLink}</Link>
        </div>
      </section>
    </div>
  );
}
