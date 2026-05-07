import { useOutletContext } from "react-router-dom";
import { Hero } from "../../components/Hero";
import type { Lang, SiteCopy } from "../../i18n/types";

export type LayoutContext = { t: SiteCopy; lang: Lang };

export function AboutPage() {
  const { t } = useOutletContext<LayoutContext>();
  return (
    <div className="page-body">
      <Hero t={t} />
    </div>
  );
}
