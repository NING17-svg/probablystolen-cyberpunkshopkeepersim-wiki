import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <PageShell locale={site.primaryLocale}>
      <section className="not-found-page">
        <p className="eyebrow">404</p>
        <h1>Page Not Found</h1>
        <p>
          That address is not one of the guides on this site. Start from the home
          page to find the guide for the task in front of you.
        </p>
        <Link className="btn" href="/">
          Back to Home
        </Link>
      </section>
    </PageShell>
  );
}