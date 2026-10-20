import type { PageContent } from "@/types/content";

/**
 * Home maps one manuscript H2 to one module, in the manuscript's own order, so
 * no sentence is dropped or repeated. The first module is the primary task
 * entry: HomePage renders it directly under the hero, inside the first screen.
 */
export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "visual-cover" },
  h1: "Probably Stolen - Cyberpunk Shopkeeper Sim",
  seoTitle: "Probably Stolen - Cyberpunk Shopkeeper Sim Complete Guide",
  metaDescription:
    "Task guides on a cyberpunk storefront run: rent, the buyout, product lines, machines, fakes, Augs and factions for Probably Stolen - Cyberpunk Shopkeeper Sim.",
  summary:
    "Task guides for a storefront run: rent, the buyout, product lines, machines, fakes, Augs and factions.",
  hero: {
    eyebrow: "Unofficial guide site",
    subtitle:
      "Probably Stolen - Cyberpunk Shopkeeper Sim puts you behind the counter of a loan-funded storefront on a cyberpunk space station, where rising rent, inspectors who go through your stock and a population hiding rogue AI chips all land on the same shift. These guides follow the loop as it plays: pay the rent, pick a product line, stage the display case before you open, run one overnight machine chain, and decide what to do about the customer standing in front of you.",
    ctas: [
      { label: "Start your first week", href: "/guides/getting-started" },
      { label: "Check a lot for fakes", href: "/guides/spot-fakes" },
    ],
    assetId: "shop-interior",
  },
  quickAnswer: "",
  keyFacts: [],
  modules: [
    {
      id: "start-your-run",
      type: "guide-index",
      heading: "Start your run",
      columns: 1,
      groups: [
        {
          title: "First week and first choice",
          items: [
            {
              label: "Probably Stolen getting started guide",
              href: "/guides/getting-started",
              description: "the first week in order: what to stage, what to clear, and the first counterfeit pack.",
            },
            {
              label: "Starting professions and tier ranking",
              href: "/guides/starting-professions",
              description: "which profession to start on, what ruins it, and the order to move up in.",
            },
          ],
        },
      ],
    },
    {
      id: "sim-basics",
      type: "prose",
      heading: "Probably Stolen - Cyberpunk Shopkeeper Sim basics",
      body: `You took a loan to secure a small storefront and the central goal is to earn enough to buy the shop out before the rent squeeze forces you into deals you cannot cover. The rent cycle is short and it rises whether or not you did well, so the first habit that matters is keeping dependable stock on the shelf. Attractiveness functions as foot traffic, not as a decorative score: empty food shelves mean fewer walk-ins, and fewer walk-ins means the next rent is harder.

Everything else hangs off that. Reputation opens licences, underground deals and political cover, and it also paints a target on you. The station's four ruin types — inspections for weapons, addiction for chemicals, liability for water, raids for contraband — are the reason your choice of starting profession decides which kind of trouble your shop attracts.`,
    },
    {
      id: "money-rent-buyout",
      type: "guide-index",
      heading: "Money, rent and the shop buyout",
      columns: 1,
      groups: [
        {
          title: "Keeping the shop open, then taking it over",
          items: [
            {
              label: "Money and rent weekly cycle",
              href: "/guides/money-and-rent",
              description: "when rent lands, why a missed week spirals, and the order to run the till.",
            },
            {
              label: "Buying out the shop",
              href: "/guides/buy-out-the-shop",
              description: "the win condition, what to fund first, and when to stop expanding.",
            },
          ],
        },
      ],
    },
    {
      id: "stock-display-trade",
      type: "guide-index",
      heading: "Stock, display and trade",
      columns: 1,
      groups: [
        {
          title: "Display, storage and fakes",
          items: [
            {
              label: "Display case guide",
              href: "/guides/display-case",
              description: "what to put in the case so the right customers walk in, and when the change takes effect.",
            },
            {
              label: "Shop inventory management",
              href: "/guides/shop-inventory",
              description: "where stock lives, what gets stolen overnight, and what to conceal.",
            },
            {
              label: "How to spot fakes",
              href: "/guides/spot-fakes",
              description: "the three checks on a lot, and the four ways to answer a counterfeit.",
            },
            {
              label: "Underground market",
              href: "/guides/underground-market",
              description: "licences, the smuggler bay, bribes and the raid maths.",
            },
            {
              label: "Radioactive waste disposal",
              href: "/guides/radioactive-waste",
              description: "the dumping-grounds route and the container fallback.",
            },
          ],
        },
      ],
    },
    {
      id: "product-lines",
      type: "guide-index",
      heading: "Product lines",
      columns: 1,
      groups: [
        {
          title: "Five product lines",
          items: [
            {
              label: "Weapons dealer guide",
              href: "/guides/weapons-dealer",
              description: "permits, modifications and why hardware in the case concentrates inspection risk.",
            },
            {
              label: "Chemist guide",
              href: "/guides/chemist",
              description: "strong margins against addiction trouble, and the four machines behind them.",
            },
            {
              label: "Water merchant guide",
              href: "/guides/water-merchant",
              description: "the full test, filter, label and store order for jugs.",
            },
            {
              label: "Fence guide",
              href: "/guides/fence",
              description: "whether the contraband start is survivable and what it costs to survive.",
            },
            {
              label: "Hydroponic farmer guide",
              href: "/guides/hydroponic-farmer",
              description: "why food is the one line outside the four ruin types.",
            },
          ],
        },
      ],
    },
    {
      id: "production-overnight",
      type: "guide-index",
      heading: "Production and overnight work",
      columns: 1,
      groups: [
        {
          title: "Machines, chains and trips",
          items: [
            {
              label: "Crafting machines",
              href: "/guides/crafting-machines",
              description: "what Dr. Jackson sells, what slots each machine has, and what power costs.",
            },
            {
              label: "Crafting production chains",
              href: "/guides/production-chains",
              description: "what the furnace, fermenter, purifiers and hydroponics turn into.",
            },
            {
              label: "Night scavenging",
              href: "/guides/night-scavenging",
              description: "the dumps trip, the wound odds, and the morning it costs you.",
            },
          ],
        },
      ],
    },
    {
      id: "trouble-counter",
      type: "guide-index",
      heading: "Trouble at the counter",
      columns: 1,
      groups: [
        {
          title: "Factions, Augs and customers",
          items: [
            {
              label: "Station factions",
              href: "/guides/station-factions",
              description: "what Security, the Black Market, Revolution and the Upper Level want from you.",
            },
            {
              label: "How to spot augs",
              href: "/guides/spot-augs",
              description: "the two lists in the identification guide and the order to check them in.",
            },
            {
              label: "Customer reactions guide",
              href: "/guides/customer-reactions",
              description: "who walks in, and how approve, refuse, report and look away differ.",
            },
          ],
        },
      ],
    },
  ],
  adAnchors: [
    { after: "stock-display-trade", slot: "home-topic-break" },
    { after: "trouble-counter", slot: "home-directory-end" },
  ],
  faqIds: [],
  relatedPageIds: [],
  schemaTypes: ["WebSite", "CollectionPage"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-20",
};