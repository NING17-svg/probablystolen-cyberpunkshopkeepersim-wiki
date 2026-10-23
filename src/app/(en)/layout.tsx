import { RootDocument, siteMetadata } from "@/components/layout/RootDocument";
import "../globals.css";

export const metadata = siteMetadata;

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="en-US">{children}</RootDocument>;
}
