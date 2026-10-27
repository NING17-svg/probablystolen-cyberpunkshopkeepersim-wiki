import type { PageContent } from "@/types/content";

const LOCALE = "en-US";
const PRESENTATION = {
  shell: "content",
  variant: "reading-right-rail",
} as const;

export const displayCasePage: PageContent = {
  id: "display-case",
  translationKey: "display-case",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "display-case",
  url: "/guides/display-case",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Display Case Guide: Stock It Before Open",
  seoTitle: "Probably Stolen Display Case Guide: Stock It Before Open",
  metaDescription:
    "Match the bait to what you can inspect. This Probably Stolen display case guide covers buyer bait, seller bait and when a restock actually takes effect.",
  summary:
    "Match the bait to what you can inspect. This Probably Stolen display case guide covers buyer bait, seller bait and when a restock actually takes effect.",
  hero: {
    eyebrow: "Stock, display and trade",
    subtitle: "",
    ctas: [{ label: "Shop inventory management", href: "/guides/shop-inventory" }],
  },
  quickAnswer:
    "The display case is a customer filter, not decoration: what you put in it decides the type of customer who walks in that day. Stage it before you raise the shutter, because stock is committed at that moment and any change you make afterwards only takes effect tomorrow.",
  keyFacts: [],
  modules: [
    {
      id: "buyer-bait-vs-seller-bait",
      type: "data-table",
      heading: "Probably Stolen display case guide: buyer bait vs seller bait",
      intro: `Merchandise in the case acts as buyer bait and steers the clientele. Neon-style props instead act as seller bait, drawing vendors who can supply the shop.`,
      columns: [
        { key: "staged", label: "What you stage" },
        { key: "pulls", label: "Who it pulls in" },
      ],
      rows: [
        { staged: "Food or berries", pulls: "Food buyers, plus restocking sellers" },
        { staged: "Household goods", pulls: "Household traffic" },
        { staged: "Water-related goods such as jugs", pulls: "Customers looking for water" },
        { staged: "Hardware", pulls: "People seeking arming or repair goods" },
        { staged: "Cigarettes", pulls: "Cigarette sellers, including chances to meet dock fakes" },
        {
          staged: "Wine, verified water, ingots",
          pulls: "Buyers for turning existing inventory into cash",
        },
        { staged: "Neon signs and similar props", pulls: "Sellers bringing grapes, jugs or junk" },
      ],
      outro: `The point is to choose a clientele the shop can actually serve. Match the bait to your inspection capability: cigarette bait produces fakes, rare goods may cause you to overpay without the right handbook, and unverified water creates liability.`,
    },
    {
      id: "the-case-is-a-filter",
      type: "prose",
      heading: "The case is a filter, not your only shelf",
      body: `Keep food on the grocery shelf even when the case carries something else, because empty food shelves still wound attractiveness. The case filters traffic while the shelves maintain overall appeal — one without the other leaves you either busy or popular but not solvent.

Raising the shutter and calling the next customer are two separate controls, and the display case is on your left. Every morning: stage, open, then serve.

The rest of your stock is not in the case. The [shop inventory page](/guides/shop-inventory) covers the surfaces it does live on and which of them are vulnerable overnight.`,
    },
    {
      id: "keep-stolen-goods-concealed",
      type: "prose",
      heading: "Keep stolen goods concealed",
      body: `Stolen and contraband goods should stay hidden, because displaying them invites Security scrutiny and weapons are particularly likely to trigger inspections. Patch 48.3.12 closed the old tactic of briefly displaying contraband, transferring it into a smuggler bay before an inspection and banking the Security reputation that came with it — so concealment no longer buys standing.

Move contraband into the smuggler bay before you open if Security could inspect. The [underground market guide](/guides/underground-market) covers licences, the hiding rules and what a raid actually costs.`,
    },
    {
      id: "two-patch-changes",
      type: "prose",
      heading: "Two patch changes worth knowing",
      body: `Patch 48.3.10 disabled the case on day one when the tutorial is enabled, so that it cannot desync the Mentor sequence; normal use begins on day two. Patch 48.3.12 is the contraband change above. Treat any capacity, slot count or expansion cost you meet as build-specific and read it off your own HUD.`,
    },
  ],
  adAnchors: [{ after: "the-case-is-a-filter", slot: "guide-section-break" }],
  faqIds: [],
  relatedPageIds: ["shop-inventory", "underground-market"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-20",
};

export const shopInventoryPage: PageContent = {
  id: "shop-inventory",
  translationKey: "shop-inventory",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "shop-inventory",
  url: "/guides/shop-inventory",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Shop Inventory Management And Safe Storage",
  seoTitle: "Probably Stolen Shop Inventory Management And Safe Storage",
  metaDescription:
    "Stock lives in three places that are not interchangeable. This Probably Stolen shop inventory management guide shows which surface sells and which gets robbed.",
  summary:
    "Stock lives in three places that are not interchangeable. This Probably Stolen shop inventory management guide shows which surface sells and which gets robbed.",
  hero: {
    eyebrow: "Stock, display and trade",
    subtitle: "",
    ctas: [{ label: "Display case guide", href: "/guides/display-case" }],
  },
  quickAnswer:
    "Probably Stolen shop inventory management starts with one fact: there are three separate places stock lives, and they are not interchangeable. The display case is an indoor public sales surface, the outside counter is a separate surface that becomes vulnerable to overnight theft, and loose stock still needs putting away.",
  keyFacts: [],
  modules: [
    {
      id: "three-places-stock-lives",
      type: "data-table",
      heading: "Probably Stolen shop inventory management: three places stock lives",
      columns: [
        { key: "surface", label: "Surface" },
        { key: "does", label: "What it does" },
        { key: "risk", label: "Overnight risk" },
      ],
      rows: [
        {
          surface: "Display case",
          does: "Decides the day's customer mix and sells to whoever walks in",
          risk: "Low — it is indoors and in use",
        },
        {
          surface: "Outside counter",
          does: "An extra selling surface",
          risk: "High — clear it before sleeping",
        },
        {
          surface: "Loose stock",
          does: "Anything not on a surface",
          risk: "Real — theft can still occur overnight",
        },
        {
          surface: "Smuggler storage",
          does: "Concealment for stolen goods",
          risk: "Low — the game labels these windows \"Smuggler's\"",
        },
      ],
      outro: `The display case is only one of these. The [display case guide](/guides/display-case) covers what each kind of bait pulls in and when a restock actually takes effect.`,
    },
    {
      id: "clear-the-outside-counter",
      type: "steps",
      heading: "Clear the outside counter every night",
      items: [
        {
          title: "Sell or move it first.",
          body: "Sell or move anything sitting on the outside counter before you sleep.",
        },
        {
          title: "Put loose stock away.",
          body: "Rather than leaving it where it can be carried off.",
        },
        {
          title: "Conceal stolen goods.",
          body: "Move them into the concealed smuggler storage rather than onto an open display.",
        },
        {
          title: "Take Joe Wild on.",
          body: "If a burglary would end your run, take Joe Wild on as added protection.",
        },
      ],
      outro: `Remember the limit of that protection: his insurance can claw stolen items back, but it cannot restore the customers who did not walk in.`,
    },
    {
      id: "concealment-is-a-requirement",
      type: "prose",
      heading: "Keep stolen goods concealed",
      body: `Concealment is now a requirement rather than an exploit. Patch 48.3.12 closed the trick of displaying contraband and hiding it in a smuggler bay just before an inspection to convert the inspection into Security reputation, so hiding goods no longer earns you standing.

Machine bays are handled separately as production — you feed them purchased grapes, scrap or jugs and let them run overnight rather than using them as general storage.`,
    },
    {
      id: "price-against-the-estimated-value",
      type: "prose",
      heading: "Price against the estimated value",
      body: `There is no markup dial or restocking rule to lean on, so the safe approach is to price against the estimated value the game shows you on the item. Genuine goods estimate high and counterfeits estimate consistently low, which makes the estimate itself the first screening tool you have — anything that estimates low deserves the three-check order on the [fake detection page](/guides/spot-fakes) before you pay.

Any capacity number you meet is build-specific — read your own HUD rather than planning around a figure you have heard somewhere else.`,
    },
  ],
  adAnchors: [{ after: "clear-the-outside-counter", slot: "guide-section-break" }],
  faqIds: [],
  relatedPageIds: ["display-case", "spot-fakes"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-20",
};

export const spotFakesPage: PageContent = {
  id: "spot-fakes",
  translationKey: "spot-fakes",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "spot-fakes",
  url: "/guides/spot-fakes",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen How To Spot Fakes: Inspection Checklist",
  seoTitle: "Probably Stolen How To Spot Fakes: Inspection Checklist",
  metaDescription:
    "Equip the glass, open the handbook and check logos, seals and colour plates. This Probably Stolen how to spot fakes guide gives the order, the four replies and the day-14 Toolbox.",
  summary:
    "Equip the glass, open the handbook and check logos, seals and colour plates. This Probably Stolen how to spot fakes guide gives the order, the four replies and the day-14 Toolbox.",
  hero: {
    eyebrow: "Stock, display and trade",
    subtitle: "",
    assetId: "counterfeit-check",
    ctas: [{ label: "Underground market", href: "/guides/underground-market" }],
  },
  quickAnswer:
    "The glass and the handbook catch the physical tells — logo geometry, a broken seal, a colour that does not match the checker — and the UV filter catches relabelled goods and chemical composition, though since the 2026-09-20 update report you can no longer UV-test an item you do not own. Buy the Toolbox from Dr. Jackson after day 14, keep the tools in slots one to nine, and use equip mode with a multi-item selection to authenticate a whole lot in one pass.",
  keyFacts: [],
  modules: [
    {
      id: "the-three-checks",
      type: "steps",
      heading: "Probably Stolen how to spot fakes: the three checks",
      intro: `The Mentor gives you two tools early, and they are the basis of the inspection economy: a magnifying glass and a handbook. The handbook carries the Hemingway identification guide for cigarettes plus a colour checker. Water Merchants begin with a tester kit; other professions buy the Water Trading Manual from Dr. Jackson.`,
      items: [
        { title: "Equip the magnifying glass.", body: "On the pack or rare good." },
        { title: "Open the handbook.", body: "For reference." },
        { title: "Check all three columns.", body: "The logos, the seal and the colour plates." },
        {
          title: "Stop at the first confirmed discrepancy.",
          body: "Confront the seller.",
        },
        {
          title: "Refuse the lot if nothing fails.",
          body: "If nothing fails but the price still stinks, refuse the lot.",
        },
      ],
      outro: `Hemingway cigarettes are never sold without a security seal, so a missing or broken seal makes the pack a counterfeit on its own. Counterfeits also estimate consistently lower in value than genuine goods, while a fake weapon or permit is a raid risk rather than a discount opportunity.

Keep two problems apart: stolen goods can be real and still hot, while counterfeit goods can be cold and still worthless.`,
    },
    {
      id: "which-tool-catches-which-fake",
      type: "data-table",
      heading: "Which tool catches which fake",
      intro:
        "Route the category to the tool that actually answers it, instead of trusting the glass on everything:",
      columns: [
        { key: "category", label: "Category" },
        { key: "tell", label: "What gives it away" },
        { key: "tool", label: "The tool that answers it" },
      ],
      rows: [
        {
          category: "Hemingway cigarettes",
          tell:
            "Closed-end logo geometry against an open one, an already-broken seal, or a colour that does not match the checker",
          tool:
            "The magnifying glass, with the Hemingway guide and the colour checker in the handbook",
        },
        {
          category: "Water jugs",
          tell: "Readings for purity, heavy metals and chemical contaminants",
          tool:
            "The testing or filtering kit, plus the Water Trading Manual to certify the grade",
        },
        {
          category: "Weapons",
          tell: "Serial numbers and paperwork that does not line up",
          tool: "The serial number check and the pen",
        },
        {
          category: "Rare goods",
          tell: "Dock junk you would overpay for without an appraisal",
          tool:
            "Their own appraisal check — rare goods are appraised on their own terms, not by a physical tell",
        },
      ],
      outro:
        "The glass cannot read a purity figure and the UV filter cannot tell you a logo is the wrong shape. Jug grades have their own order on the [water merchant page](/guides/water-merchant).",
    },
    {
      id: "the-uv-filter",
      type: "prose",
      heading: "The UV filter, and the free test you no longer get",
      body: `The UV filter is the second inspection tool, and it answers what the glass cannot: relabelled goods and chemical composition. The detail comes from a 2026-09-20 demo write-up, so treat it as reported rather than as confirmed.

The same write-up records a change that removes a tactic the older pages relied on: an update now prevents UV testing on items you do not own. As of 2026-09-20 that means the free supplier test is gone — you cannot run the UV filter over a seller's stock before you buy it, so you either pay first and check afterwards, or you authenticate from the physical tells alone.

That moves the order at the counter: the glass, the handbook and the colour checker have to do the work before you commit, and the UV filter becomes a check on what you have already bought. Treat that as a dated observation, not an evergreen rule, and re-read the controls screen after each update.`,
    },
    {
      id: "the-toolbox-batch-workflow",
      type: "steps",
      heading: "Run one tool across a whole lot",
      intro:
        "UPDATE 049 added a tool layer, and that layer is what makes bulk authentication viable:",
      items: [
        {
          title: "Buy the Toolbox from Dr. Jackson after day 14.",
          body: "It holds the tools you own, including the blue and red labelers. The [crafting machines page](/guides/crafting-machines) owns the purchase order.",
        },
        {
          title: "Keep the tools in slots one to nine.",
          body: "Keys 1 through 9 equip the matching tool, so the check you need is one keystroke away.",
        },
        {
          title: "Select the whole lot before you equip.",
          body: "Multi-item drag selection is what makes a batch worth running as one.",
        },
        {
          title: "Switch on equip mode.",
          body: "The selected tool then applies to every object in the selection at once.",
        },
        {
          title: "Check every result against the routing table.",
          body: "The glass answers logos, seals and colours, the UV filter answers relabelling and chemical composition, and the serial check answers weapons paperwork.",
        },
      ],
      outro:
        "That is the batch form of the three checks: one pass per lot, and every item in the selection comes back either clean or flagged.",
    },
    {
      id: "four-ways-to-answer-a-fake",
      type: "data-table",
      heading: "Four ways to answer a fake",
      columns: [
        { key: "response", label: "Response" },
        { key: "costs", label: "What it costs you" },
        { key: "when", label: "When it makes sense" },
      ],
      rows: [
        {
          response: "Confront for a discount",
          costs: "A wrong accusation costs reputation",
          when: "The default, and it keeps the relationship",
        },
        {
          response: "Refuse the lot",
          costs: "Nothing, if you never accused",
          when: "Nothing failed but the price is wrong",
        },
        {
          response: "Buy it anyway",
          costs: "The risk, which is bad when rent is due",
          when: "Only when the estimate holds up",
        },
        {
          response: "Relabel with the blue and red labelers",
          costs: "A chosen crime needing a hiding spot and a bribe budget",
          when: "When you have both already",
        },
      ],
      outro: `A correct accusation makes the seller drop the price. A wrong one costs reputation, and reputation both buys access and paints a target on you — so the [underground market page](/guides/underground-market) covers what you would need before choosing relabelling.`,
    },
    {
      id: "why-fakes-show-up-at-all",
      type: "prose",
      heading: "Why fakes show up at all",
      body: `You do not need to seek them out. Cigarette bait in the display case draws cigarette sellers, including chances to meet dock fakes, which is why the [display case guide](/guides/display-case) pairs bait choice with inspection capability. Counterfeits arrive from the docks whether you asked for them or not, and reselling one you failed to catch still hurts your name.

Reporting wanted faces is a separate exercise from authentication: the poster check applies to the customer in front of you rather than to their lot, and a match can net a bounty. Do not confuse "this pack is fake" with "this face is on a poster" — the [customer reactions page](/guides/customer-reactions) has the reporting procedure.`,
    },
  ],
  adAnchors: [{ after: "four-ways-to-answer-a-fake", slot: "guide-section-break" }],
  faqIds: [],
  relatedPageIds: ["display-case", "underground-market", "customer-reactions", "recurring-npcs"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-27",
};

export const undergroundMarketPage: PageContent = {
  id: "underground-market",
  translationKey: "underground-market",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "underground-market",
  url: "/guides/underground-market",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Underground Market: Licenses And Contraband",
  seoTitle: "Probably Stolen Underground Market: Licenses And Contraband",
  metaDescription:
    "Access runs on licences bought out of surplus. This Probably Stolen underground market guide gives the five-point test and the hiding rules a raid checks.",
  summary:
    "Access runs on licences bought out of surplus. This Probably Stolen underground market guide gives the five-point test and the hiding rules a raid checks.",
  hero: {
    eyebrow: "Stock, display and trade",
    subtitle: "",
    assetId: "wilds-network",
    ctas: [{ label: "Fence guide", href: "/guides/fence" }],
  },
  quickAnswer:
    "Access to the underground market runs on advanced licences, and a trading permit has typically cost around 1,500 credits in playtest-era observations. Buy those licences only out of money beyond your rent reserve, and put a gray-market lot through a five-point affordability test before you pay for it.",
  keyFacts: [],
  modules: [
    {
      id: "how-access-works",
      type: "prose",
      heading: "Probably Stolen underground market: how access works",
      body: `The Black Market hands out the underground licences that grant access to the market and its exclusive deals. Named underground elements include Sawyer and the Underground Exchange Directive; the [recurring NPC reference](/guides/recurring-npcs) lists Sawyer with the other regulars and what each of them unlocks. The live licence menu is the authority on what exists and what it costs — buy from surplus only, and postpone anything that would put rent at risk.

The Fence is the starting profession explicitly tied to contraband, and other occupations such as organ dealing unlock later through licences and machinery.`,
    },
    {
      id: "licences-are-bought-from-surplus",
      type: "steps",
      heading: "Licences are bought from surplus",
      items: [
        { title: "Pay rent first.", body: "And keep the reserve intact." },
        { title: "Buy the permit from money beyond that reserve.", body: "Never from the rent money." },
        {
          title: "Remember the inspection risk.",
          body: "Weapons attract inspections even when the seller is licensed, and displaying unlicensed weapons is especially dangerous.",
        },
        {
          title: "Treat underground income as a reserve accelerator.",
          body: "It is never a substitute for rent-paying inventory.",
        },
      ],
      outro: `The [Fence guide](/guides/fence) covers whether the contraband start survives its own ruin type, and what a raid actually costs.`,
    },
    {
      id: "five-point-test",
      type: "steps",
      heading: "The five-point test before a gray purchase",
      intro: "A gray-market purchase is only sound when all five hold:",
      items: [
        { title: "Rent survives a worst-case confiscation.", body: "" },
        { title: "The lot can be inspected before it is paid for.", body: "" },
        { title: "Secure storage exists for it.", body: "" },
        { title: "A Security bribe is affordable.", body: "" },
        { title: "No prior raid condition is still active.", body: "" },
      ],
      outro: `Bribery is an explicit mechanic, so budget it the way you budget machine power — failing to afford one ends in confiscation.`,
    },
    {
      id: "keep-stolen-goods-concealed",
      type: "steps",
      heading: "Keep stolen goods concealed",
      items: [
        { title: "Put legal merchandise in the display case before opening.", body: "" },
        {
          title: "Move contraband into the smuggler bay before opening.",
          body: "Do it if Security could inspect.",
        },
        { title: "Authenticate lots before hiding them.", body: "" },
        { title: "Keep hot merchandise off the exterior counter overnight.", body: "" },
      ],
      outro: `The smuggler bay is the documented hiding place, and the [shop inventory page](/guides/shop-inventory) maps it against the other surfaces. Joe Wild's insurance covers burglary but not a contraband raid, so do not treat the two risks as interchangeable.`,
    },
    {
      id: "reputation-cuts-both-ways",
      type: "prose",
      heading: "Reputation cuts both ways",
      body: `Black Market reputation is a real meter that opens exclusive opportunities and raises danger at the same time, with documented extra handling at −40. Security responds positively to snitches and inspections, and your standing shifts with every approve, reject, report or ignore choice.

Keep the two populations distinct: Augs are not contraband. A confirmed hostile host is under a shoot-on-sight policy, but an uncertain one should be completed or refused rather than shot, because that damages customer relationships.

Scavenged modules should not be assumed to be legitimate underground stock.`,
    },
  ],
  adAnchors: [
    { after: "licences-are-bought-from-surplus", slot: "guide-section-break" },
    { after: "keep-stolen-goods-concealed", slot: "guide-section-break-2" },
  ],
  faqIds: [],
  relatedPageIds: ["fence", "shop-inventory", "recurring-npcs"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-27",
};

export const radioactiveWastePage: PageContent = {
  id: "radioactive-waste",
  translationKey: "radioactive-waste",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "radioactive-waste",
  url: "/guides/radioactive-waste",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Game Radioactive Waste: Disposal And Storage",
  seoTitle: "Probably Stolen Game Radioactive Waste: Disposal And Storage",
  metaDescription:
    "Radioactive waste is an inventory item that blocks storage space. This probably stolen game radioactive waste guide gives the dumps hand-off and a backup route.",
  summary:
    "Radioactive waste is an inventory item that blocks storage space. This probably stolen game radioactive waste guide gives the dumps hand-off and a backup route.",
  hero: {
    eyebrow: "Stock, display and trade",
    subtitle: "",
    ctas: [{ label: "Night scavenging", href: "/guides/night-scavenging" }],
  },
  quickAnswer:
    "A probably stolen game radioactive waste item is inventory rather than a fixed location or an event, and it takes up storage space until you get rid of it. The normal route is the same trip you already make for scavenging: carry it to the dumping grounds in a backpack and use the hand-off.",
  keyFacts: [],
  modules: [
    {
      id: "the-normal-route",
      type: "steps",
      heading: "Probably Stolen game radioactive waste: the normal route",
      items: [
        { title: "Put the waste in a backpack.", body: "A light or a heavy pack both work." },
        { title: "Travel to the dumping grounds.", body: "" },
        { title: "Use the hand-off or drop-off interaction.", body: "" },
        {
          title: "Keep spare inventory capacity.",
          body: "The item can come back and the trigger is not something you control.",
        },
        {
          title: "Recheck your inventory afterwards.",
          body: "Rather than assuming the disposal took.",
        },
      ],
      outro: `The same trip is where you pick up scrap for the furnace, and it costs you the morning you open — the [night scavenging guide](/guides/night-scavenging) covers the trip order, the wound odds and what you can bring back.`,
    },
    {
      id: "the-container-fallback",
      type: "steps",
      heading: "The container fallback",
      intro: "For later in a run, or when you cannot make the trip:",
      items: [
        {
          title: "Select a storage container you can afford to lose.",
          body: "An empty Security Crate is the reported example.",
        },
        { title: "Put the radioactive waste inside it.", body: "" },
        { title: "Put the entire container in the trash.", body: "" },
      ],
      outro: `That disposes of the waste and the container in one action, which makes it an expensive alternative rather than a free one.`,
    },
    {
      id: "what-does-not-clear-it",
      type: "prose",
      heading: "What does not clear it",
      body: `Handing the item to Security is not a dependable disposal route — players have reported Security becoming angry rather than accepting it. A machine that would store the waste and convert it to energy is not part of the build.

Selling the item is a gamble rather than a plan. Treat it as storage you want back, not as stock you want to move.`,
    },
  ],
  adAnchors: [{ after: "the-container-fallback", slot: "guide-section-break" }],
  faqIds: [],
  relatedPageIds: ["night-scavenging"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-20",
};