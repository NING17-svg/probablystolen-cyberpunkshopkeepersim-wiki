import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageRenderer } from "@/components/pages/PageRenderer";
import { getPageByUrl } from "@/lib/content";
import { metadataForPage } from "@/lib/seo";

const page = getPageByUrl("/zh-CN");

if (!page) throw new Error("Chinese homepage is missing");

export const metadata = metadataForPage(page);

export default function Page() {
  if (!page) notFound();
  return <PageShell locale={page.locale} currentUrl={page.url}><PageRenderer page={page} /></PageShell>;
}
