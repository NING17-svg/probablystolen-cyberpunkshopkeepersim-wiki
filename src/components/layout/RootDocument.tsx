import type { Metadata } from "next";
import { site } from "@/data/site";
import { Analytics } from "@/lib/analytics";
import { getLocaleConfig } from "@/lib/localization";

export const siteMetadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  title: site.name,
  description: site.description,
  alternates: {
    canonical: site.baseUrl,
  },
};

export function RootDocument({
  children,
  locale,
}: Readonly<{
  children: React.ReactNode;
  locale: string;
}>) {
  return (
    <html lang={getLocaleConfig(locale).htmlLang}>
      {/* Shared ad and site-verification tags must be present in both locale documents. */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <meta
          name="google-adsense-account"
          content="ca-pub-4194035852162505"
        />
        {site.bingSiteAuthCode ? (
          <meta name="msvalidate.01" content={site.bingSiteAuthCode} />
        ) : null}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4194035852162505"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
