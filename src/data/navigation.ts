import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  children?: LocalizedNavigationItem[];
}

/**
 * The six task groups are the same six groups the home page and the Guide
 * Editor's manuscripts use, so the header dropdowns, the desktop sidebar and the
 * home directory never disagree about where a guide belongs.
 */
export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/", labels: { "en-US": "Home", "zh-CN": "首页" } },
  {
    href: "/guides/getting-started",
    labels: { "en-US": "Start your run", "zh-CN": "开始经营" },
    children: [
      { href: "/guides/getting-started", labels: { "en-US": "Getting started", "zh-CN": "新手入门" } },
      { href: "/guides/starting-professions", labels: { "en-US": "Starting professions", "zh-CN": "初始职业" } },
    ],
  },
  {
    href: "/guides/money-and-rent",
    labels: { "en-US": "Money, rent and the shop buyout", "zh-CN": "资金、租金与买下店铺" },
    children: [
      { href: "/guides/money-and-rent", labels: { "en-US": "Money and rent", "zh-CN": "资金与租金" } },
      { href: "/guides/buy-out-the-shop", labels: { "en-US": "Buying out the shop", "zh-CN": "买下店铺" } },
    ],
  },
  {
    href: "/guides/display-case",
    labels: { "en-US": "Stock, display and trade", "zh-CN": "库存、陈列与交易" },
    children: [
      { href: "/guides/display-case", labels: { "en-US": "Display case", "zh-CN": "展示柜" } },
      { href: "/guides/shop-inventory", labels: { "en-US": "Shop inventory", "zh-CN": "店铺库存" } },
      { href: "/guides/spot-fakes", labels: { "en-US": "How to spot fakes", "zh-CN": "识别假货" } },
      { href: "/guides/underground-market", labels: { "en-US": "Underground market", "zh-CN": "地下市场" } },
      { href: "/guides/radioactive-waste", labels: { "en-US": "Radioactive waste", "zh-CN": "放射性废物" } },
    ],
  },
  {
    href: "/guides/weapons-dealer",
    labels: { "en-US": "Product lines", "zh-CN": "经营路线" },
    children: [
      { href: "/guides/weapons-dealer", labels: { "en-US": "Weapons dealer", "zh-CN": "武器商" } },
      { href: "/guides/chemist", labels: { "en-US": "Chemist", "zh-CN": "化学商" } },
      { href: "/guides/water-merchant", labels: { "en-US": "Water merchant", "zh-CN": "水商" } },
      { href: "/guides/fence", labels: { "en-US": "Fence", "zh-CN": "销赃商" } },
      { href: "/guides/hydroponic-farmer", labels: { "en-US": "Hydroponic farmer", "zh-CN": "水培农夫" } },
    ],
  },
  {
    href: "/guides/crafting-machines",
    labels: { "en-US": "Production and overnight work", "zh-CN": "生产与夜间活动" },
    children: [
      { href: "/guides/crafting-machines", labels: { "en-US": "Crafting machines", "zh-CN": "生产设备" } },
      { href: "/guides/production-chains", labels: { "en-US": "Production chains", "zh-CN": "生产链" } },
      { href: "/guides/night-scavenging", labels: { "en-US": "Night scavenging", "zh-CN": "夜间拾荒" } },
    ],
  },
  {
    href: "/guides/station-factions",
    labels: { "en-US": "Trouble at the counter", "zh-CN": "柜台上的麻烦" },
    children: [
      { href: "/guides/station-factions", labels: { "en-US": "Station factions", "zh-CN": "空间站派系" } },
      { href: "/guides/spot-augs", labels: { "en-US": "How to spot augs", "zh-CN": "识别 Aug" } },
      { href: "/guides/customer-reactions", labels: { "en-US": "Customer reactions", "zh-CN": "顾客应对" } },
    ],
  },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  {
    href: "/guides/getting-started",
    labels: { "en-US": "Start with the first week", "zh-CN": "从第一周开始" },
  },
  { href: "/guides/station-factions", labels: { "en-US": "Factions and reputation", "zh-CN": "派系与声望" } },
  { href: "/guides/spot-augs", labels: { "en-US": "Identify an Aug host", "zh-CN": "识别 Aug 宿主" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
