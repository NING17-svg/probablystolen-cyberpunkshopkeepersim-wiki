import Link from "next/link";
import { AdSlot } from "@/components/ads/AdSlot";
import { PageContents } from "@/components/content/PageContents";
import { KeyFacts } from "@/components/content/KeyFacts";
import { getRelatedPages } from "@/lib/content";
import { getLocaleUiLabels } from "@/lib/localization";
import type { PageContent } from "@/types/content";

export function RightRail({ page }: { page: PageContent }) {
  const related = getRelatedPages(page);
  const isChinese = page.locale === "zh-CN";
  const relatedLabel = getLocaleUiLabels(page.locale).relatedPages ?? "Related pages";

  return (
    <aside className="right-rail" aria-label={isChinese ? "页面摘要" : "Page summary"}>
      <PageContents page={page} />
      {page.keyFacts.length ? (
        <section>
          <h2>{isChinese ? "要点" : "Key Facts"}</h2>
          <KeyFacts facts={page.keyFacts} />
        </section>
      ) : null}
      {related.length ? (
        <section>
          <h2>{isChinese ? "继续阅读" : "Next Pages"}</h2>
          <nav className="rail-links" aria-label={relatedLabel}>
            {related.map((relatedPage) => (
              <Link key={relatedPage.id} href={relatedPage.url}>
                {relatedPage.h1}
              </Link>
            ))}
          </nav>
        </section>
      ) : null}
      <AdSlot slot="guide-rail" />
    </aside>
  );
}
