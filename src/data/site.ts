import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Probably Stolen Wiki",
  brandMark: "PS",
  gameName: "Probably Stolen - Cyberpunk Shopkeeper Sim",
  domain: "probablystolen-cyberpunkshopkeepersim.wiki",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://probablystolen-cyberpunkshopkeepersim.wiki").replace(/\/$/, ""),
  description:
    "Task guides for Probably Stolen - Cyberpunk Shopkeeper Sim: rent and the shop buyout, product lines, machines, counterfeit checks, Augs and station factions.",
  tagline: "Task guides for running a loan-funded storefront on a cyberpunk space station.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        wikiNavigation: "All guides",
        homeDetails: "About this site and recently reviewed guides",
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search these guides",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching guides found.",
        recentUpdates: "Recently reviewed",
        lastReviewed: "Last reviewed",
        onThisPage: "On this page",
        answerContext: "More context",
      },
    },
    {
      code: "zh-CN",
      label: "简体中文",
      pathPrefix: "zh-CN",
      htmlLang: "zh-CN",
      openGraphLocale: "zh_CN",
      ui: {
        wikiNavigation: "全部攻略",
        homeDetails: "关于本站与近期更新",
        searchOpen: "搜索",
        searchClose: "关闭搜索",
        searchPlaceholder: "搜索攻略",
        searchSubmit: "搜索",
        searchLoading: "正在搜索…",
        searchError: "暂时无法搜索。",
        searchNoResults: "没有找到相关攻略。",
        recentUpdates: "最近更新",
        lastReviewed: "最近核对",
        onThisPage: "本页目录",
        answerContext: "更多说明",
        relatedPages: "相关攻略",
      },
    },
  ],
  author: "Probably Stolen Wiki",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Probably Stolen - Cyberpunk Shopkeeper Sim on Steam",
      href: "https://store.steampowered.com/app/4348910/Probably_Stolen__Cyberpunk_Shopkeeper_Sim/",
      description: "The official store page for the game.",
    },
  ],
  disclaimer:
    "Unofficial fan guide. Not affiliated with Questing Goose Studio or tinyBuild.",
};
