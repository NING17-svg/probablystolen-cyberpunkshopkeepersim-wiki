import type { PageContent } from "@/types/content";

const LOCALE = "en-US";
const PRESENTATION = {
  shell: "content",
  variant: "reading-right-rail",
} as const;

export const weaponsDealerPage: PageContent = {
  id: "weapons-dealer",
  translationKey: "weapons-dealer",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "weapons-dealer",
  url: "/guides/weapons-dealer",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Weapons Dealer Guide: Permits And Inspections",
  seoTitle: "Probably Stolen Weapons Dealer Guide: Paperwork And Risk",
  metaDescription:
    "Weapons bring inspections, so the paperwork comes before the sale. Probably Stolen weapons dealer guide: permits, modifications, custom orders and bait.",
  summary:
    "Weapons bring inspections, so the paperwork comes before the sale. Probably Stolen weapons dealer guide: permits, modifications, custom orders and bait.",
  hero: {
    eyebrow: "Product lines",
    subtitle: "",
    ctas: [{ label: "Crafting machines", href: "/guides/crafting-machines" }],
  },
  quickAnswer:
    "Weapons are the trade that brings Security to your door, and they need a permit and modifications before they can be sold legitimately. Get the paperwork right first: even licensed weapons attract inspections, and displaying unlicensed ones is especially dangerous.",
  keyFacts: [],
  modules: [
    {
      id: "permits-first",
      type: "steps",
      heading: "Probably Stolen weapons dealer guide: permits first",
      intro: "Before you sell a weapon:",
      items: [
        {
          title: "Hold the class-one permit.",
          body: "That is the permit seen in playtest.",
        },
        {
          title: "Apply the modifications.",
          body: "They are required before the sale is legitimate.",
        },
        {
          title: "Match what you display to your paperwork.",
          body: "So an inspector cannot find an unlicensed item on open display.",
        },
        {
          title: "Keep a bribe budget separate from rent.",
          body: "Inspections are expensive whether or not you are carrying contraband.",
        },
      ],
      outro: `The upside is steady income from arming the residents of the station. The line runs from handmade sidearms up through machine guns, and custom orders add a documented income source as long as the shop stays legal enough to withstand scrutiny.`,
    },
    {
      id: "why-an-a-tier-start",
      type: "data-table",
      heading: "Why it is an A-tier start",
      intro: `The income is the most reliable in the game and the exposure is constant, which is exactly what an A-tier start means: better money than the safe lines, with one ruin type attached. Unlike the Chemist or Fence, the Gunsmith's problem arrives as an inspection rather than as a difficult customer.`,
      columns: [
        { key: "aspect", label: "Aspect" },
        { key: "means", label: "What it means" },
      ],
      rows: [
        { aspect: "Ruin type", means: "Inspections" },
        { aspect: "Permit", means: "Class one, seen in playtest" },
        { aspect: "Income", means: "Steady, from arming residents" },
        { aspect: "Bonus line", means: "Custom orders, while the shop stays legal" },
        { aspect: "Weakness", means: "Hardware bait concentrates exposure" },
      ],
    },
    {
      id: "hardware-bait-concentrates-exposure",
      type: "prose",
      heading: "Hardware bait concentrates exposure",
      body: `Displaying hardware in the case biases arrivals toward people seeking arming or repair goods. That is useful bait, but it pulls the exact clientele an inspection is looking for, so it concentrates your exposure on the days you stage it.

The [display case guide](/guides/display-case) covers the rest of the bait table, and staging order matters because the case is committed when the shutter goes up.`,
    },
    {
      id: "the-furnace-still-matters",
      type: "prose",
      heading: "The furnace still matters",
      body: `A Gunsmith still smelts, so the furnace stays relevant even though the trade is not a production chain in its own right. Metal feeds both the modifications side and the general scrap-to-ingot loop, which makes furnace capacity the real bottleneck on this line — see the [crafting machines page](/guides/crafting-machines) for what the smelter needs and what power costs.`,
    },
  ],
  adAnchors: [{ after: "why-an-a-tier-start", slot: "guide-section-break" }],
  faqIds: [],
  relatedPageIds: ["crafting-machines", "display-case"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-20",
};

export const chemistPage: PageContent = {
  id: "chemist",
  translationKey: "chemist",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "chemist",
  url: "/guides/chemist",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Chemist Guide: Recipes, Machines And Risk",
  seoTitle: "Probably Stolen Chemist Guide: Recipes, Machines And Risk",
  metaDescription:
    "Chemicals bring addiction rather than raids. This Probably Stolen chemist guide covers the guarded recipes, the four machines and the risk they carry.",
  summary:
    "Chemicals bring addiction rather than raids. This Probably Stolen chemist guide covers the guarded recipes, the four machines and the risk they carry.",
  hero: {
    eyebrow: "Product lines",
    subtitle: "",
    ctas: [{ label: "Crafting machines", href: "/guides/crafting-machines" }],
  },
  quickAnswer:
    "Chemicals bring addiction, not raids, which means a chemist's problem arrives as a customer. Recipes are closely guarded and margins are strong, and that is the whole trade: better money than the safer lines, with a higher chance of problematic regulars.",
  keyFacts: [],
  modules: [
    {
      id: "the-addiction-trade-off",
      type: "entity-grid",
      heading: "Probably Stolen chemist guide: the addiction trade-off",
      intro: `Addicted regulars create reputation problems and bring Security trouble. That is why the Chemist sits in B tier rather than A: the exposure is social, not a raid you can bribe your way out of on the night.`,
      items: [
        {
          title: "Machinery and permits, not concealment",
          summary:
            "Chemical goods need protected recipes to be produced or sold, which ties the line to machinery and permits rather than to concealment.",
        },
        {
          title: "Customer risk instead of raid risk",
          summary: "Compared with the Fence, you avoid raid risk and inherit customer risk instead.",
        },
        {
          title: "The ruin type outright",
          summary:
            "Compared with the Farmer or Water Merchant, you gain margin and inherit the ruin type outright.",
        },
      ],
    },
    {
      id: "four-machines-behind-the-line",
      type: "data-table",
      heading: "The four machines behind the line",
      columns: [
        { key: "machine", label: "Machine" },
        { key: "slots", label: "Slots and controls" },
      ],
      rows: [
        {
          machine: "Chem Finisher",
          slots: "Chem Module, Container and Output slots, plus a Control Panel with a Set Recipe control",
        },
        {
          machine: "Evaporator",
          slots: "Battery, Module, Container, Distillate and Note slots",
        },
        {
          machine: "Heating Plate",
          slots: "A Chem Module and a Target Temp setting running Off, Low or High",
        },
        {
          machine: "Cryptographic Desecrasser",
          slots: "Power Source, Modules, Chip Slot, Input and Output slots",
        },
      ],
      outro: `These run overnight on an energy cell and need power, so the chemical line competes with scavenging and your other overnight jobs for the same hours. A status reading like No Target or No Recipe Selected means a machine with nothing queued. The [crafting machines page](/guides/crafting-machines) covers what power costs and how the machine panel is laid out.`,
    },
    {
      id: "run-one-chain-you-can-feed",
      type: "prose",
      heading: "Run one chain you can feed",
      body: `An unfed bank of machines is wasted capacity, and every overnight job wants the same hours. Decide which one job the chemical line's power is actually funding before you add a second machine, and the [production chains page](/guides/production-chains) shows what each chain yields for the same overnight slot.

Scavenging competes with this line for hours as well, so a Chemist run is often a choice between feeding the machines and restocking scrap.`,
    },
  ],
  adAnchors: [{ after: "four-machines-behind-the-line", slot: "guide-section-break" }],
  faqIds: [],
  relatedPageIds: ["crafting-machines", "production-chains"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-20",
};

export const waterMerchantPage: PageContent = {
  id: "water-merchant",
  translationKey: "water-merchant",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "water-merchant",
  url: "/guides/water-merchant",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Water Merchant Guide: Test, Filter And Sell",
  seoTitle: "Probably Stolen Water Merchant Guide: Test, Filter And Sell",
  metaDescription:
    "Grade before you label. This Probably Stolen water merchant guide gives the counter order — identify, test, filter, label, store — and the grade risks.",
  summary:
    "Grade before you label. This Probably Stolen water merchant guide gives the counter order — identify, test, filter, label, store — and the grade risks.",
  hero: {
    eyebrow: "Product lines",
    subtitle: "",
    ctas: [{ label: "Crafting production chains", href: "/guides/production-chains" }],
  },
  quickAnswer:
    "Water is the gentlest line to start because the demo's Water Merchant scenario ships with testing and purification from day one, but it carries its own ruin type: liability. The Probably Stolen water merchant guide counter order runs identify, test, filter or purify, label what you measured, and store the jugs away from the outside counter overnight.",
  keyFacts: [],
  modules: [
    {
      id: "the-counter-order",
      type: "steps",
      heading: "Probably Stolen water merchant guide: the counter order",
      items: [
        { title: "Identify the container.", body: "An empty jug is not itself a product." },
        { title: "Test the jug with your kit.", body: "Use a strip on the bottle." },
        {
          title: "Filter or purify it if the reading is wrong.",
          body: "Rather than running a bad jug through a purifier repeatedly hoping it reads high.",
        },
        {
          title: "Label only what you actually measured.",
          body: "Using the blue and red labelers.",
        },
        { title: "Store finished jugs.", body: "Keep them away from the outside counter overnight." },
      ],
      outro: `Lying about quality brings mob justice, and even cheap untested jugs still hurt the people who drink them. That is the entire ruin type: the failure mode is a lawsuit, not an inspection.`,
    },
    {
      id: "grades-and-their-risks",
      type: "data-table",
      heading: "Grades and what each one risks",
      columns: [
        { key: "grade", label: "Grade in play" },
        { key: "means", label: "What it means for you" },
      ],
      rows: [
        { grade: "Base water", means: "The safe default to sell untested readings as" },
        { grade: "High-quality water", means: "Needs the reading to back the label" },
        { grade: "Mystery sludge", means: "A reading you do not want to put a grade on at all" },
      ],
      outro: `Read the labels in your own build rather than trusting a fixed price or purity table, because playtest numbers move.`,
    },
    {
      id: "equipment-on-the-line",
      type: "prose",
      heading: "Equipment on the line",
      body: `The testing kit, the purifier, the blue and red labelers, the Bottle Printer and Dr. Jackson's Toolbox are the tools this line runs on. A tap such as Gutterflow on Tap or Rustwater on Tap, bought through the Wild Network, produces cheap water but still needs testing if you intend to sell it as anything better.

The Water Trading Guide is a later unlock from Dr. Jackson added in Patch 48.3.10, and the Wild Network water unlocks — Retired Water Merchant, Gutterflow on Tap and Rustwater on Tap — are later purchases rather than the starting scenario. The [crafting machines page](/guides/crafting-machines) covers what the toolbox holds and when it becomes purchasable.`,
    },
    {
      id: "demand-moves-the-price",
      type: "prose",
      heading: "Demand moves the price",
      body: `Drought rumours spike demand for tested jugs, while untested jugs sold into the same rumour are a lawsuit. Tested jugs sell without needing a wanted poster, so park the surplus toward the lease buyout rather than gambling it on a single lot.

Bottles come from the bottle printer and better grades come from the purifiers and the Moisture Farm, so the [production chains page](/guides/production-chains) is the next thing to read when a jug is waiting on an upgrade rather than on a label.`,
    },
  ],
  adAnchors: [{ after: "grades-and-their-risks", slot: "guide-section-break" }],
  faqIds: [],
  relatedPageIds: ["production-chains", "crafting-machines"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-20",
};

export const fencePage: PageContent = {
  id: "fence",
  translationKey: "fence",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "fence",
  url: "/guides/fence",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Fence Guide: Contraband, Licenses And Raids",
  seoTitle: "Probably Stolen Fence Guide: Contraband, Licenses And Raids",
  metaDescription:
    "The Fence trades margin and enforcement pressure together. This Probably Stolen fence guide covers the ruin type, the hiding spot and the bribe budget.",
  summary:
    "The Fence trades margin and enforcement pressure together. This Probably Stolen fence guide covers the ruin type, the hiding spot and the bribe budget.",
  hero: {
    eyebrow: "Product lines",
    subtitle: "",
    ctas: [{ label: "Underground market", href: "/guides/underground-market" }],
  },
  quickAnswer:
    "The Probably Stolen fence guide verdict is short: the Fence is the contraband start, it needs a good hiding spot and a straight face, and the margin and the enforcement pressure arrive together. That pairing is exactly why it ranks in B tier rather than higher.",
  keyFacts: [],
  modules: [
    {
      id: "contraband-and-raids",
      type: "data-table",
      heading: "Probably Stolen fence guide: contraband and raids",
      intro: `The Fence's ruin type is contraband and raids. You can hide stolen goods, bribe your way out when you are caught, and unlock advanced licences for the underground market — but each of those is a resource you have to budget.`,
      columns: [
        { key: "requirement", label: "Requirement" },
        { key: "why", label: "Why it is on the list" },
      ],
      rows: [
        { requirement: "A good hiding spot", why: "Contraband cannot sit on an open display" },
        { requirement: "A straight face", why: "Bribery is an explicit mechanic" },
        {
          requirement: "A bribe budget separate from rent",
          why: "Failing to afford one ends in confiscation",
        },
        { requirement: "Advanced licences", why: "They open the underground market and its deals" },
      ],
    },
    {
      id: "the-working-procedure",
      type: "steps",
      heading: "The working procedure",
      items: [
        { title: "Put legal merchandise in the display case before opening.", body: "" },
        {
          title: "Move contraband into the smuggler bay before opening.",
          body: "Do it if Security could inspect.",
        },
        { title: "Authenticate lots before hiding them.", body: "" },
        { title: "Keep hot merchandise off the exterior counter overnight.", body: "" },
      ],
      outro: `The [underground market page](/guides/underground-market) covers how the licences are bought and what the five-point test is before a gray-market purchase, and the [shop inventory page](/guides/shop-inventory) maps the smuggler bay against the other surfaces.`,
    },
    {
      id: "what-changed-in-48-3-12",
      type: "prose",
      heading: "What changed in Patch 48.3.12",
      body: `The old exploit is gone: you can no longer briefly display illegal goods, transfer them into the smuggler bay just before an inspection, and bank the Security reputation that came with it. Concealment is now a requirement rather than a scoring trick.`,
    },
    {
      id: "what-insurance-does-not-cover",
      type: "prose",
      heading: "What insurance does not cover",
      body: `Joe Wild's insurance covers burglary but not a contraband raid, so the two risks are not interchangeable. Plan for a raid out of the licence budget rather than out of the insurance line, and treat underground income as a reserve accelerator for the buyout rather than as rent-paying inventory.

Black Market reputation moves with your choices and is documented as handling differently at −40. Higher standing opens exclusive opportunities and raises danger at the same time.`,
    },
  ],
  adAnchors: [
    { after: "the-working-procedure", slot: "guide-section-break" },
    { after: "what-changed-in-48-3-12", slot: "guide-section-break-2" },
  ],
  faqIds: [],
  relatedPageIds: ["underground-market", "shop-inventory"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-20",
};

export const hydroponicFarmerPage: PageContent = {
  id: "hydroponic-farmer",
  translationKey: "hydroponic-farmer",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "hydroponic-farmer",
  url: "/guides/hydroponic-farmer",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Hydroponic Farmer Guide: Food Production",
  seoTitle: "Probably Stolen Hydroponic Farmer Guide: Food Production",
  metaDescription:
    "Food is the one line outside the four ruin types. This Probably Stolen hydroponic farmer guide covers the overnight bays and where the crop has to end up.",
  summary:
    "Food is the one line outside the four ruin types. This Probably Stolen hydroponic farmer guide covers the overnight bays and where the crop has to end up.",
  hero: {
    eyebrow: "Product lines",
    subtitle: "",
    ctas: [{ label: "Crafting production chains", href: "/guides/production-chains" }],
  },
  quickAnswer:
    "Food is the only product line that is not named among the four ruin types — weapons bring inspections, chemicals bring addiction, water brings liability and contraband brings raids. That is the whole reason the Farmer ranks in S tier: the safety comes from the product line, not from the station.",
  keyFacts: [],
  modules: [
    {
      id: "why-food-is-safe",
      type: "entity-grid",
      heading: "Probably Stolen hydroponic farmer guide: why food is safe",
      intro: `Hydroponics is a food production chain designed to be learned rather than a high-risk grey-market play. You are still exposed to rent, thieves and Augs; the difference is that none of those is caused by what you sell.`,
      items: [
        { title: "Outside the four ruin types", summary: "The Farmer is not among the four ruin types." },
        {
          title: "Supplies the rest of the economy",
          summary: "Food production feeds the parts of the economy the other professions depend on.",
        },
        {
          title: "Protects attractiveness",
          summary: "Food keeps attractiveness from being wounded by empty shelves.",
        },
      ],
    },
    {
      id: "where-the-food-has-to-end-up",
      type: "steps",
      heading: "Where the food has to end up",
      intro: "Once production is running, the crop feeds three places at once:",
      items: [
        {
          title: "The display case.",
          body: "Food or berries draw food buyers and the restocking sellers who keep you supplied.",
        },
        {
          title: "The grocery shelf.",
          body: "It still needs food even when the case carries something else.",
        },
        {
          title: "The restocking sellers.",
          body: "That is the mechanism that makes food a repeatable rather than a one-off margin.",
        },
      ],
      outro: `That is why the [display case guide](/guides/display-case) pairs bait with food shelves: an empty shelf still costs attractiveness even when the case is perfectly staged.`,
    },
    {
      id: "running-it-overnight",
      type: "prose",
      heading: "Running it overnight",
      body: `Mechanically the Farmer feeds hydroponics bays overnight, which means the same power and energy-cell constraint as every other overnight chain. The rule is the same everywhere in this game: run one chain you can actually feed rather than three you cannot.

The [production chains page](/guides/production-chains) shows what the farming chain yields and how it sits beside the furnace, the fermenter and the purifiers.`,
    },
    {
      id: "when-to-stop-expanding",
      type: "prose",
      heading: "When to stop expanding",
      body: `A late-game hydroponic bay is an expansion you should decline once you are close to the buyout. Banked cash beats a larger crop when the shop is weeks from being yours.`,
    },
  ],
  adAnchors: [{ after: "where-the-food-has-to-end-up", slot: "guide-section-break" }],
  faqIds: [],
  relatedPageIds: ["production-chains", "display-case"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-20",
};