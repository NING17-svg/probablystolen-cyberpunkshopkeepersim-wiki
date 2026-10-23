import Link from "next/link";
import { SearchDialog } from "@/components/layout/SearchDialog";
import { navigationLabel, primaryNavigation } from "@/data/navigation";
import { site } from "@/data/site";
import { getLanguageAlternates, getPageByUrl } from "@/lib/content";
import { getLocaleUiLabels, localizePath } from "@/lib/localization";
import { getSearchIndexUrl } from "@/lib/search";

export function Header({ locale, currentUrl }: { locale: string; currentUrl: string }) {
  const currentPage = getPageByUrl(currentUrl);
  const alternates = currentPage ? getLanguageAlternates(currentPage) : {};
  return (
    <header className="site-header">
      <Link href={localizePath("/", locale)} className="brand">
        {site.brandMark ? (
          <span className="brand-mark" aria-hidden="true">
            {site.brandMark}
          </span>
        ) : null}
        <span>{locale === "zh-CN" ? "Probably Stolen 攻略站" : site.name}</span>
      </Link>
      <nav className="primary-nav" aria-label={locale === "zh-CN" ? "主导航" : "Primary navigation"}>
        {primaryNavigation.map((item) => {
          const href = localizePath(item.href, locale);
          if (item.children?.length) {
            return (
              <details key={href} className="nav-group">
                <summary>{navigationLabel(item, locale)}</summary>
                <div className="nav-group-links">
                  <Link href={href}>{navigationLabel(item, locale)}</Link>
                  {item.children.map((child) => <Link key={child.href} href={localizePath(child.href, locale)}>{navigationLabel(child, locale)}</Link>)}
                </div>
              </details>
            );
          }
          return (
            <Link key={href} href={href}>
              {navigationLabel(item, locale)}
            </Link>
          );
        })}
      </nav>
      <nav className="language-switch" aria-label={locale === "zh-CN" ? "切换语言" : "Choose language"}>
        {site.locales.map((language) => alternates[language.code] ? (
          <Link key={language.code} href={alternates[language.code]}
            hrefLang={language.code} lang={language.htmlLang}
            aria-current={language.code === locale ? "page" : undefined}>
            {language.label}
          </Link>
        ) : null)}
      </nav>
      <SearchDialog
        locale={locale}
        indexUrl={getSearchIndexUrl(locale)}
        labels={getLocaleUiLabels(locale)}
      />
    </header>
  );
}
