import { RootDocument, siteMetadata } from "@/components/layout/RootDocument";
import "../globals.css";

export const metadata = siteMetadata;

export default function ChineseLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="zh-CN">{children}</RootDocument>;
}
