import type { PageContent } from "@/types/content";

const LOCALE = "en-US";
const PRESENTATION = {
  shell: "content",
  variant: "reading-right-rail",
} as const;

/**
 * A reference page for the cast that keeps returning to the counter. Every
 * name here already appears somewhere else on the site; this page only says
 * who each one is, what they supply and what unlocks them, so the product
 * lines stay owned by their own guides.
 */
export const recurringNpcsPage: PageContent = {
  id: "recurring-npcs",
  translationKey: "recurring-npcs",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "recurring-npcs",
  url: "/guides/recurring-npcs",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Recurring NPCs And Vendors: Who They Are",
  seoTitle: "Probably Stolen Recurring NPCs And Vendors: Who They Are",
  metaDescription:
    "The Mentor, Dr. Jackson and Joe Wild keep coming back to your counter. This Probably Stolen recurring NPCs guide says who each one is, what they supply and when each unlocks.",
  summary:
    "The Mentor, Dr. Jackson and Joe Wild keep coming back to your counter. This Probably Stolen recurring NPCs guide says who each one is, what they supply and when each unlocks.",
  hero: {
    eyebrow: "Start your run",
    subtitle: "",
    ctas: [{ label: "Getting started", href: "/guides/getting-started" }],
  },
  quickAnswer:
    "Three people keep coming back to your counter. The Mentor is the lender behind the startup loan and the voice that scripts your tutorial beats. Dr. Jackson sells every machine, the Toolbox and the Water Trading Guide from the lobby, and his stock opens by day count and by the unique items you already own. Joe Wild represents the Wild Network, and his theft insurance is not a standing purchase — it is toggled on the night screen before you sleep, every night.",
  keyFacts: [],
  modules: [
    {
      id: "who-keeps-coming-back",
      type: "data-table",
      heading: "Who keeps coming back to the counter",
      intro:
        "Every one of these names already appears somewhere on this site. This page collects them so you can find out who they are and what they unlock, without hunting through four different guides.",
      columns: [
        { key: "who", label: "Who" },
        { key: "what", label: "What they are" },
        { key: "supplies", label: "What they supply" },
        { key: "unlocks", label: "How it opens" },
      ],
      rows: [
        {
          who: "The Mentor",
          what: "The lender and the tutorial voice; the first NPC to enter your shop",
          supplies: "The startup loan, and the beats that repeat on every run",
          unlocks: "Present from day one",
        },
        {
          who: "Dr. Jackson",
          what: "The machine vendor, selling from the lobby",
          supplies:
            "Machines and power, the Toolbox after day 14, the Water Trading Guide, the Aug scanner",
          unlocks:
            "Day count plus the unique items you already own; the scanner follows Security's threat state",
        },
        {
          who: "Joe Wild",
          what: "The Wild Network's representative",
          supplies:
            "Theft insurance, Wild Network purchases, and water taps such as Gutterflow on Tap and Rustwater on Tap",
          unlocks:
            "Insurance is a per-night toggle on the night screen; the taps are later purchases",
        },
        {
          who: "Sawyer",
          what: "A named underground element on the Black Market side",
          supplies: "No supply list is recorded for him",
          unlocks: "The Black Market issues the licences, so there is nothing for Sawyer to unlock",
        },
        {
          who: "The butcher",
          what: "Named in the community NPC reference",
          supplies: "No role or supply list is recorded",
          unlocks: "Nothing recorded to unlock",
        },
      ],
      outro:
        "The four powers that act on the station are a different list, and the [station factions page](/guides/station-factions) owns those.",
    },
    {
      id: "the-mentor",
      type: "steps",
      heading: "The Mentor: what he asks of you every run",
      intro:
        "Four of these are the tutorial beats that repeat on every run — food stock, the overnight counter, the display case and the dock shipment. The startup loan and the scavenging trip bracket them.",
      items: [
        {
          title: "Take the startup loan.",
          body: "He is the lender behind the money that funds the shop.",
        },
        {
          title: "Keep food in stock.",
          body: "Empty shelves mean fewer walk-ins, because attractiveness acts as foot traffic rather than as a decorative rating.",
        },
        {
          title: "Empty the outside counter before you sleep.",
          body: "Anything left out is gone by morning unless Joe Wild's insurance covers it.",
        },
        {
          title: "Use the display case as a filter.",
          body: "It sits on your left and biases which buyers walk in, rather than decorating the room.",
        },
        {
          title: "Take the scavenging trip.",
          body: "He sends you to the dumping grounds for materials; the [night scavenging guide](/guides/night-scavenging) covers the trip order and the wound odds.",
        },
        {
          title: "Inspect the dock shipment.",
          body: "A container of counterfeit Hemingway cigarettes arrives, and he hands you the magnifying glass and the handbook to test them with.",
        },
      ],
      outro:
        "The full opening-week order is on the [getting started page](/guides/getting-started).",
    },
    {
      id: "dr-jackson",
      type: "steps",
      heading: "Dr. Jackson: what he sells and when it opens",
      items: [
        {
          title: "Buy from the lobby.",
          body: "Jackson is the machine vendor and he sells there; his machines run overnight on electricity, so power is a separate nightly cost.",
        },
        {
          title: "Watch the day count and your unique items.",
          body: "His stock is gated by how long you have played and by the unique items you already own, and he refuses duplicate unique purchases — plan the order before you spend.",
        },
        {
          title: "Take the Toolbox after day 14.",
          body: "It stores tools including the blue and red labelers, and keys one to nine equip the matching tool. The [crafting machines page](/guides/crafting-machines) owns the full purchase order.",
        },
        {
          title: "Buy the Water Trading Guide for the water line.",
          body: "Added in Patch 48.3.10, it is what certifies water grades for purity, heavy metals and chemical contaminants.",
        },
        {
          title: "Take the Aug scanner only while the threat is live.",
          body: "Its stock follows Security's threat state, so it is not always on the shelf.",
        },
      ],
      outro:
        "Jackson sold to this shop's previous tenant before that tenant was arrested, which is why a shop can start with machines nobody in this run bought.",
    },
    {
      id: "joe-wild",
      type: "steps",
      heading: "Joe Wild: the night-screen toggle",
      items: [
        {
          title: "Toggle the insurance before you sleep, every night.",
          body: "The theft insurance is a daily subscription on the night screen rather than a standing purchase, so you decide each night whether to pay for it.",
        },
        {
          title: "Pay it when there is vulnerable stock outside.",
          body: "It can claw stolen items back, but it cannot restore the customers who did not walk in.",
        },
        {
          title: "Skip it when nothing is exposed.",
          body: "Refusing is viable when no vulnerable stock is left outside overnight.",
        },
        {
          title: "Take the water taps as later purchases.",
          body: "Gutterflow on Tap and Rustwater on Tap are Wild Network unlocks rather than the starting scenario, and cheap tap water still needs testing before you sell it as anything better.",
        },
      ],
      outro:
        "The [underground market page](/guides/underground-market) covers the Wild Network side of the ledger, and the [water merchant page](/guides/water-merchant) covers the test-to-label order for jugs.",
    },
    {
      id: "where-each-line-is-owned",
      type: "data-table",
      heading: "Which page owns each line",
      intro:
        "This page is a reference, not a second answer. Each product line stays on the page that owns it:",
      columns: [
        { key: "line", label: "Line" },
        { key: "page", label: "The page that owns it" },
      ],
      rows: [
        {
          line: "Cigarettes, counterfeits and the inspection tools",
          page: "[How to spot fakes](/guides/spot-fakes)",
        },
        {
          line: "Water testing, grading and labelling",
          page: "[Water merchant](/guides/water-merchant)",
        },
        {
          line: "Machines, slots and power",
          page: "[Crafting machines](/guides/crafting-machines)",
        },
        {
          line: "What each overnight chain produces",
          page: "[Production chains](/guides/production-chains)",
        },
        {
          line: "Night trips and the wound odds",
          page: "[Night scavenging](/guides/night-scavenging)",
        },
        {
          line: "Licences, contraband and raids",
          page: "[Underground market](/guides/underground-market)",
        },
        {
          line: "Where stock lives and what gets stolen",
          page: "[Shop inventory](/guides/shop-inventory)",
        },
      ],
      outro:
        "If a page names a person, this is where to find out who that person is and what they unlock.",
    },
  ],
  adAnchors: [{ after: "who-keeps-coming-back", slot: "guide-section-break" }],
  faqIds: [],
  relatedPageIds: ["getting-started", "crafting-machines", "water-merchant", "underground-market"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-27",
};
