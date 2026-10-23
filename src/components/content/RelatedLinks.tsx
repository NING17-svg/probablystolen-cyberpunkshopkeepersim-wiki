import Link from "next/link";
import type { PageContent } from "@/types/content";
import { getLocaleUiLabels } from "@/lib/localization";

export function RelatedLinks({ pages, locale }: { pages: PageContent[]; locale: string }) {
  if (!pages.length) {
    return null;
  }

  return (
    <section className="related-links" aria-labelledby="related-heading">
      <h2 id="related-heading">{getLocaleUiLabels(locale).relatedPages ?? "Related Pages"}</h2>
      <div className="related-grid">
        {pages.map((page) => (
          <Link key={page.id} href={page.url} className="related-card">
            <strong>{page.h1}</strong>
            <span>{page.summary}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

