import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageRenderer } from "@/components/pages/PageRenderer";
import { getIndexablePages, getPageByUrl } from "@/lib/content";
import { metadataForPage } from "@/lib/seo";

export const dynamicParams = false;

interface PageProps { params: Promise<{ segments: string[] }> }

export function generateStaticParams() {
  return getIndexablePages()
    .filter((page) => page.locale === "zh-CN" && page.url !== "/zh-CN")
    .map((page) => ({ segments: page.url.split("/").filter(Boolean).slice(1) }));
}

export async function generateMetadata({ params }: PageProps) {
  const { segments } = await params;
  const page = getPageByUrl(`/zh-CN/${segments.join("/")}`);
  return page ? metadataForPage(page) : {};
}

export default async function Page({ params }: PageProps) {
  const { segments } = await params;
  const page = getPageByUrl(`/zh-CN/${segments.join("/")}`);
  if (!page) notFound();
  return <PageShell locale={page.locale} currentUrl={page.url}><PageRenderer page={page} /></PageShell>;
}
