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
  { href: "/", labels: { "en-US": "Home" } },
  {
    href: "/guides/getting-started",
    labels: { "en-US": "Start your run" },
    children: [
      { href: "/guides/getting-started", labels: { "en-US": "Getting started" } },
      { href: "/guides/starting-professions", labels: { "en-US": "Starting professions" } },
    ],
  },
  {
    href: "/guides/money-and-rent",
    labels: { "en-US": "Money, rent and the shop buyout" },
    children: [
      { href: "/guides/money-and-rent", labels: { "en-US": "Money and rent" } },
      { href: "/guides/buy-out-the-shop", labels: { "en-US": "Buying out the shop" } },
    ],
  },
  {
    href: "/guides/display-case",
    labels: { "en-US": "Stock, display and trade" },
    children: [
      { href: "/guides/display-case", labels: { "en-US": "Display case" } },
      { href: "/guides/shop-inventory", labels: { "en-US": "Shop inventory" } },
      { href: "/guides/spot-fakes", labels: { "en-US": "How to spot fakes" } },
      { href: "/guides/underground-market", labels: { "en-US": "Underground market" } },
      { href: "/guides/radioactive-waste", labels: { "en-US": "Radioactive waste" } },
    ],
  },
  {
    href: "/guides/weapons-dealer",
    labels: { "en-US": "Product lines" },
    children: [
      { href: "/guides/weapons-dealer", labels: { "en-US": "Weapons dealer" } },
      { href: "/guides/chemist", labels: { "en-US": "Chemist" } },
      { href: "/guides/water-merchant", labels: { "en-US": "Water merchant" } },
      { href: "/guides/fence", labels: { "en-US": "Fence" } },
      { href: "/guides/hydroponic-farmer", labels: { "en-US": "Hydroponic farmer" } },
    ],
  },
  {
    href: "/guides/crafting-machines",
    labels: { "en-US": "Production and overnight work" },
    children: [
      { href: "/guides/crafting-machines", labels: { "en-US": "Crafting machines" } },
      { href: "/guides/production-chains", labels: { "en-US": "Production chains" } },
      { href: "/guides/night-scavenging", labels: { "en-US": "Night scavenging" } },
    ],
  },
  {
    href: "/guides/station-factions",
    labels: { "en-US": "Trouble at the counter" },
    children: [
      { href: "/guides/station-factions", labels: { "en-US": "Station factions" } },
      { href: "/guides/spot-augs", labels: { "en-US": "How to spot augs" } },
      { href: "/guides/customer-reactions", labels: { "en-US": "Customer reactions" } },
    ],
  },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  {
    href: "/guides/getting-started",
    labels: { "en-US": "Start with the first week" },
  },
  { href: "/guides/station-factions", labels: { "en-US": "Factions and reputation" } },
  { href: "/guides/spot-augs", labels: { "en-US": "Identify an Aug host" } },
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