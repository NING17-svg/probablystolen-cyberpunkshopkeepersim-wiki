import type { PageContent } from "@/types/content";

const LOCALE = "en-US";
const PRESENTATION = {
  shell: "content",
  variant: "reading-right-rail",
} as const;

export const gettingStartedPage: PageContent = {
  id: "getting-started",
  translationKey: "getting-started",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "getting-started",
  url: "/guides/getting-started",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Getting Started: Your First Week In Shop",
  seoTitle: "Probably Stolen Getting Started: Your First Week In Shop",
  metaDescription:
    "Stage the case, keep food stocked and clear the counter. Probably Stolen getting started covers the tutorial beats, the opening order and the first fake.",
  summary:
    "Stage the case, keep food stocked and clear the counter. Probably Stolen getting started covers the tutorial beats, the opening order and the first fake.",
  hero: {
    eyebrow: "Start your run",
    subtitle: "",
    ctas: [{ label: "Money and rent weekly cycle", href: "/guides/money-and-rent" }],
  },
  quickAnswer:
    "Stage the display case before you raise the shutter, keep food on the grocery shelf, and clear the outside counter before you sleep — those three habits decide whether your first week survives the first rent invoice. Everything else in the opening week is a variation on them.",
  keyFacts: [],
  modules: [
    {
      id: "four-tutorial-beats",
      type: "steps",
      heading: "Probably Stolen getting started: the four tutorial beats",
      intro: "The Mentor scripts four beats that repeat on every run:",
      items: [
        {
          title: "Keep food in stock.",
          body: "Empty shelves mean fewer walk-ins, because attractiveness acts as foot traffic rather than as a decorative rating.",
        },
        {
          title: "Empty the outside counter before you sleep.",
          body: "Anything left there is gone by morning unless Joe Wild's insurance covers it.",
        },
        {
          title: "Use the display case as a filter.",
          body: "It sits on your left and biases which buyers walk in, rather than decorating the room.",
        },
        {
          title: "Inspect the dock shipment.",
          body: "A container of counterfeit Hemingway cigarettes arrives, and the Mentor hands you a magnifying glass and a handbook to test them with.",
        },
      ],
      outro:
        "Reread the controls screen if anything feels unfamiliar — equip mode and the toolbox added in UPDATE 049 both change how much you can do in one click.",
    },
    {
      id: "stage-the-display-case",
      type: "prose",
      heading: "Stage the display case before you open",
      body: `Stock the case first, then raise the shutter. What you put in it biases which buyers arrive that day: food pulls food sellers, household goods pull household traffic, and some items attract sellers instead of buyers, which is how you restock. Anything you add after opening does not count until the next day, so redo the arrangement every morning.

With the tutorial enabled the case is disabled on day one so it cannot desync the Mentor sequence. Normal use starts on day two, and the [display case guide](/guides/display-case) covers what each kind of bait pulls in and why contraband never belongs in the case.`,
    },
    {
      id: "catch-the-first-counterfeit-pack",
      type: "prose",
      heading: "Catch the first counterfeit pack",
      body: `Put the magnifying glass on the pack and check it against the handbook. For Hemingway packs the identifiers are colors, logos and security seals, and the tutorial tells are an opened seal, wrong logo geometry and a colour-checker mismatch. One real discrepancy is enough to confront the seller: a correct accusation drops the price, a wrong one costs you reputation.

Counterfeits arrive from the docks whether you asked for them or not, and reselling a fake you failed to catch still hurts your name. The [fake detection page](/guides/spot-fakes) has the full check order and what to do with a lot that fails it.`,
    },
    {
      id: "count-the-rent",
      type: "prose",
      heading: "Count the rent before you count the till",
      body: `Rent falls due on a short cycle — the opening-day dialogue frames it as six days out — and it rises over time even after perfect weeks. Falling behind starts a spiral: attractiveness drops, fewer people enter, and the hole gets wider. The [money and rent cycle](/guides/money-and-rent) covers the weekly order and why a single missed week costs more than the rent itself.

After the first rent clears, pick one growth project rather than three, and do not burn the cash reserve you need for the lease buyout. A trading permit, around 1,500 credits in some playtest builds, unlocks underground listings; a furnace, a water purifier and Joe Wild's insurance are the other early choices.`,
    },
    {
      id: "choose-what-the-night-is-for",
      type: "data-table",
      heading: "Choose what the night is for",
      intro:
        "When the day ends you pick one of three activities, and only one of them costs you tomorrow morning:",
      columns: [
        { key: "choice", label: "Night choice" },
        { key: "gives", label: "What it gives you" },
        { key: "costs", label: "What it costs" },
      ],
      rows: [
        { choice: "Sleep", gives: "Nothing, but you open on time", costs: "A day of income" },
        { choice: "Craft", gives: "Scrap and grapes converted to margin", costs: "Power, and nothing else" },
        {
          choice: "Scavenge at the dumping grounds",
          gives: "Modules, scrap and tools",
          costs: "Wounds and a late-open penalty",
        },
      ],
      outro:
        "Power bills drain quietly every night, and some Wilds upgrades hook illegal grid power that skips the bill but leaves a faction debt behind.",
    },
    {
      id: "first-week-priorities",
      type: "steps",
      heading: "First-week priorities",
      items: [
        {
          title: "Pay rent on time.",
          body: "Do it even if it means selling dependable stock rather than holding a lot you cannot hide.",
        },
        {
          title: "Prefer dependable flips.",
          body: "Wine, water and household flips beat a single contraband jackpot you have no way to cover.",
        },
        {
          title: "Inspect every claim.",
          body: "Check every cigarette, seal and \"genuine\" claim before it costs you.",
        },
        {
          title: "Run one overnight chain.",
          body: "One chain you can feed, rather than three you cannot.",
        },
        {
          title: "Park the surplus toward the buyout.",
          body: "The buyout first, then insurance, then a permit — in that order.",
        },
      ],
      outro: `Once the shutter is up you can approve, refuse, report or look away on each visitor. Reporting a wanted face pays a bounty and raises your standing with Security, and can also earn you a threat from the person you snitched on. Haggling is not free money: sellers overstate value, buyers push, and stolen lots carry heat.

The demo offers three scenarios plus a hardcore Rock Bottom run, with Water Merchant as the featured route and a testing and purification kit included.`,
    },
  ],
  adAnchors: [
    { after: "stage-the-display-case", slot: "guide-section-break" },
    { after: "count-the-rent", slot: "guide-section-break-2" },
  ],
  faqIds: [],
  relatedPageIds: ["display-case", "money-and-rent", "spot-fakes"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-20",
};

export const startingProfessionsPage: PageContent = {
  id: "starting-professions",
  translationKey: "starting-professions",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "starting-professions",
  url: "/guides/starting-professions",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Tier List: Best Starting Professions Ranked",
  seoTitle: "Probably Stolen Tier List: Best Starting Professions Ranked",
  metaDescription:
    "Farmer and Water Merchant lead the safe tier, Gunsmith sits in A, Chemist and Fence in B. This Probably Stolen tier list explains every start and its ruin.",
  summary:
    "Farmer and Water Merchant lead the safe tier, Gunsmith sits in A, Chemist and Fence in B. This Probably Stolen tier list explains every start and its ruin.",
  hero: {
    eyebrow: "Start your run",
    subtitle: "",
    ctas: [{ label: "Water merchant guide", href: "/guides/water-merchant" }],
  },
  quickAnswer:
    "Farmer and Water Merchant are the safest starts, Gunsmith is a tier below them, and Chemist and Fence trade margin for a specific kind of trouble. The ranking measures beginner safety against documented ruin types, not late-game profitability, so the best profession for a first run is not always the most profitable one.",
  keyFacts: [],
  modules: [
    {
      id: "every-starting-profession-ranked",
      type: "data-table",
      heading: "Probably Stolen tier list: every starting profession ranked",
      columns: [
        { key: "tier", label: "Tier" },
        { key: "profession", label: "Profession" },
        { key: "ruin", label: "Ruin type" },
        { key: "why", label: "Why it sits there" },
      ],
      rows: [
        {
          tier: "S",
          profession: "Farmer",
          ruin: "None of the four",
          why: "Hydroponics is a food chain designed to be learned, and food is not on the ruin list",
        },
        {
          tier: "S",
          profession: "Water Merchant",
          ruin: "Liability",
          why: "Bad water attracts mob justice, but the demo ships a testing and purification kit that works like a tutorial",
        },
        {
          tier: "A",
          profession: "Gunsmith",
          ruin: "Inspections",
          why: "Steady income from arming residents, at the cost of constant inspection exposure",
        },
        {
          tier: "B",
          profession: "Chemist",
          ruin: "Addiction",
          why: "Strong margins and guarded recipes, but addicted regulars bring Security trouble",
        },
        {
          tier: "B",
          profession: "Fence",
          ruin: "Contraband and raids",
          why: "Hides stolen goods and unlocks advanced licences, and needs a good hiding spot and a straight face",
        },
        {
          tier: "C",
          profession: "Rat Wrangler",
          ruin: "None of its own",
          why: "A specialty start rather than an introductory one, unhidden in Patch 48.3.12",
        },
        {
          tier: "Challenge",
          profession: "Rock Bottom",
          ruin: "Everything at once",
          why: "No stock, machines, licences or cash cushion, with the same win condition",
        },
      ],
      outro: `Apprentice, or no specialisation, is not ranked because it does not appear on the profession list. Gameplay marks it as recommended for newcomers: it offers extra starting credits and storage after training in operations. Rat Wrangler was unhidden by Patch 48.3.12 on 7 August 2026, and Rock Bottom was added in Playtest Patch 48.3.10 on 6 August 2026.

Rock Bottom also carries its own finish line: From Nothing unlocks for completing a run started from Rock Bottom, and From Nothing, the Hard Way for the same on hard mode. Finishing from any other profession does not count toward either.

The organ dealer is not a day-one path. It is a later job unlocked through machines and licences, alongside the underground market content.`,
    },
    {
      id: "four-ruin-types",
      type: "entity-grid",
      heading: "The four ruin types",
      intro:
        "Every trade in the game maps onto one of four documented ruin types, and knowing which one you signed up for tells you what will eventually go wrong:",
      items: [
        {
          title: "Weapons bring inspections.",
          summary:
            "You need a class-one permit and modifications before weapons can be sold legitimately.",
          href: "/guides/weapons-dealer",
        },
        {
          title: "Chemicals bring addiction.",
          summary:
            "Recipes are guarded, margins are strong, and the problem arrives as a customer rather than a raid.",
          href: "/guides/chemist",
        },
        {
          title: "Water brings liability.",
          summary:
            "Lying about quality brings mob justice, and even cheap untested jugs still hurt whoever drinks them.",
          href: "/guides/water-merchant",
        },
        {
          title: "Contraband brings raids.",
          summary:
            "You can hide stolen goods and bribe your way out, and both cost money and nerve.",
          href: "/guides/fence",
        },
      ],
      outro:
        "Some trades need heavy machinery and permits; others need a hiding spot and a straight face. That difference is what the tiers are measuring.",
    },
    {
      id: "the-progression-order",
      type: "steps",
      heading: "Probably Stolen starting professions: the progression order",
      items: [
        {
          title: "Start as Farmer or Water Merchant.",
          body: "Both teach the rent loop without adding a ruin type you cannot handle yet. The [water merchant line](/guides/water-merchant) is the gentlest because testing and purification ship with it.",
        },
        {
          title: "Move to Gunsmith.",
          body: "The inspection pressure is constant but the income is the steadiest in the game.",
        },
        {
          title: "Then pick Chemist or Fence.",
          body: "Both are B tier for opposite reasons — one bleeds reputation through customers, the other through inspections.",
        },
        {
          title: "Finish with Rat Wrangler or Rock Bottom.",
          body: "Both assume you already have the rent rhythm down.",
        },
      ],
      outro: `Whatever you start with, the first purchase that pays for itself is production hardware, so read the [crafting machines page](/guides/crafting-machines) before you commit the first week of surplus to anything else.`,
    },
  ],
  adAnchors: [{ after: "four-ruin-types", slot: "guide-section-break" }],
  faqIds: [],
  relatedPageIds: ["water-merchant", "crafting-machines"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-21",
};

export const moneyAndRentPage: PageContent = {
  id: "money-and-rent",
  translationKey: "money-and-rent",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "money-and-rent",
  url: "/guides/money-and-rent",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Money And Rent Guide: Beat The Rent Spiral",
  seoTitle: "Probably Stolen Money And Rent Guide: Beat The Rent Spiral",
  metaDescription:
    "Rent lands on a short weekly cycle and rises every time. This Probably Stolen money and rent guide shows the week-opening order and how to stop the spiral.",
  summary:
    "Rent lands on a short weekly cycle and rises every time. This Probably Stolen money and rent guide shows the week-opening order and how to stop the spiral.",
  hero: {
    eyebrow: "Money, rent and the shop buyout",
    subtitle: "",
    ctas: [{ label: "Buying out the shop", href: "/guides/buy-out-the-shop" }],
  },
  quickAnswer:
    "Probably Stolen money and rent guide in one line: rent is charged on a recurring weekly cycle and it rises on schedule whether or not you had a good week, because there is no clause that rewards a profitable one. Pay it from stock you are certain you can sell, and the spiral never starts.",
  keyFacts: [],
  modules: [
    {
      id: "the-weekly-cycle",
      type: "steps",
      heading: "Probably Stolen money and rent guide: the weekly cycle",
      intro: `The opening dialogue usually frames the first invoice as six days out, and the HUD carries a day counter with the weekday and a countdown — for example DAY 9 TUESDAY / RENT IN 5 DAYS, then DAY 29 SUNDAY / RENT DUE TODAY.

A missed payment starts a spiral rather than a single penalty:`,
      items: [
        { title: "Attractiveness drops.", body: "The shop looks unbankable." },
        { title: "Fewer customers walk in.", body: "Because attractiveness acts as foot traffic." },
        { title: "Revenue falls.", body: "Fewer walk-ins means fewer sales." },
        {
          title: "The hole gets wider.",
          body: "A failed run can end in eviction or reduced recovery prospects.",
        },
      ],
      outro: `One missed week can therefore cost you more than the rent itself. Hold guns, organs and underground lots back until the rent rhythm is routine.`,
    },
    {
      id: "count-the-rent-first",
      type: "steps",
      heading: "Count the rent before you count the till",
      intro: "A weekly opening order that holds together:",
      items: [
        {
          title: "Count rent first.",
          body: "If the till cannot pay it from current stock, sell dependable goods before anything else.",
        },
        {
          title: "Restock food and stage the case.",
          body: "Do it for the traffic you actually want.",
        },
        {
          title: "Inspect every claim.",
          body: "Check every cigarette, seal and \"genuine\" claim before it costs you.",
        },
        { title: "Run one overnight chain.", body: "One you can feed, rather than three." },
        {
          title: "Scavenge only when it pays.",
          body: "Only when the haul genuinely beats a missed morning customer.",
        },
        {
          title: "Park the surplus.",
          body: "Toward the buyout, insurance or a permit.",
        },
      ],
    },
    {
      id: "safe-staples-and-punishing-trades",
      type: "data-table",
      heading: "Safe staples and the trades that punish you",
      columns: [
        { key: "stock", label: "Stock" },
        { key: "profile", label: "Profile" },
        { key: "why", label: "Why" },
      ],
      rows: [
        {
          stock: "Food, household goods, inspected cigarettes",
          profile: "Safe",
          why: "They sell every week and carry no heat",
        },
        {
          stock: "Wine and tested water",
          profile: "Safe-ish",
          why: "Steady demand, small margin, no enforcement attached",
        },
        { stock: "Weapons", profile: "Risky", why: "Even licensed weapons attract inspections" },
        {
          stock: "Contraband and underground lots",
          profile: "Opposite profile",
          why: "The better the margin, the worse the consequences",
        },
      ],
      outro: `Contraband inverts the usual relationship: a failed inspection, a confiscation or a lot that simply does not sell leaves you short on exactly the week you needed the money.`,
    },
    {
      id: "run-one-overnight-chain",
      type: "prose",
      heading: "Run one overnight chain, not three",
      body: `Every overnight job competes for the same hours and the same power. Running one chain you can actually feed beats running three you cannot, and the [production chains page](/guides/production-chains) shows what the furnace, the fermenter, the purifiers and hydroponics each turn into.

Water production needs an AquaScan or the starter kit to certify grades, and winemaking runs on grapes, bottles and time. The vacuum robot is a night worker that adds to the power drain rather than saving you anything.`,
    },
    {
      id: "park-the-surplus-toward-the-buyout",
      type: "prose",
      heading: "Park the surplus toward the buyout",
      body: `Rent is the cost of staying open, and paying it does not move you toward the buyout. The buyout is a separate mortgage goal, so surplus has to be saved on top of rent until the till meets the requirement on your HUD — the [buying out the shop guide](/guides/buy-out-the-shop) covers the funding order and when to stop expanding.`,
    },
    {
      id: "the-same-credits-are-also-milestones",
      type: "prose",
      heading: "The same credits are also achievement milestones",
      body: `Two public milestones watch the number you are protecting, not just the rent invoice: Comfortably Afloat needs over 10,000 credits of estimated total wealth and Swimming in Credits needs more than 100,000. Both are measured at the start of a day, so a sale on day N does not register until the morning of day N+1.

That timing is the whole trick: land the sale early enough that you are over the line before you sleep, and clear rent first, because a shop that has missed a week is worth less at midnight than it was at dawn. The [buyout milestone table](/guides/buy-out-the-shop) puts both credits milestones next to the deed and attractiveness ones, so you can budget against all of them at once.`,
    },
    {
      id: "costs-that-are-not-rent",
      type: "entity-grid",
      heading: "The costs that are not rent",
      items: [
        {
          title: "Trading permit",
          summary: "Has typically cost around 1,500 credits to unlock underground listings.",
        },
        {
          title: "Nightly power bill",
          summary:
            "Drains quietly, and Wilds network upgrades that hook illegal grid power skip the bill but create a faction debt.",
        },
        {
          title: "Black-market reputation at −40",
          summary: "A documented line where you have made things measurably worse.",
        },
        {
          title: "Joe Wild's insurance",
          summary:
            "Can claw stolen items back, but it cannot restore the customers who did not walk in.",
        },
      ],
      outro: `The sensible order of learning is money and rent before you take raids for fun, and authentication before you price heirlooms.`,
    },
  ],
  adAnchors: [
    { after: "count-the-rent-first", slot: "guide-section-break" },
    { after: "safe-staples-and-punishing-trades", slot: "guide-section-break-2" },
  ],
  faqIds: [],
  relatedPageIds: ["production-chains", "buy-out-the-shop"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-21",
};

export const buyOutTheShopPage: PageContent = {
  id: "buy-out-the-shop",
  translationKey: "buy-out-the-shop",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "buy-out-the-shop",
  url: "/guides/buy-out-the-shop",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Buy Out The Shop: Save Up And Take Over",
  seoTitle: "Probably Stolen Buy Out The Shop: Save Up And Take Over",
  metaDescription:
    "The buyout is a separate mortgage goal with no fixed price. This Probably Stolen buy out the shop guide ranks what to fund first and which milestones a rent-safe run unlocks.",
  summary:
    "The buyout is a separate mortgage goal with no fixed price. This Probably Stolen buy out the shop guide ranks what to fund first and which milestones a rent-safe run unlocks.",
  hero: {
    eyebrow: "Money, rent and the shop buyout",
    subtitle: "",
    ctas: [{ label: "Money and rent weekly cycle", href: "/guides/money-and-rent" }],
  },
  quickAnswer:
    "Buying out the shop is the win condition, and it is a separate mortgage goal tied to the station's landlord rather than a kiosk side quest. The live figure is the one shown on your HUD, so treat early playtest totals as history rather than as a target.",
  keyFacts: [],
  modules: [
    {
      id: "how-the-mortgage-works",
      type: "prose",
      heading: "Probably Stolen buy out the shop: how the mortgage works",
      body: `Paying rent does not move you toward the buyout; rent is the recurring cost of staying open. You build a cash reserve *on top of* rent until the till meets the HUD requirement, then purchase the shop on the morning the till clears it. Early playtest players targeted a five-figure total, with 12,000 credits mentioned in one playtest opening week, but economy values get retuned by patches.

Once the purchase goes through, rent stops being the central objective — but the same reputation, inspection, faction and production systems stay in play, so the run does not become free of risk at the end.`,
    },
    {
      id: "keep-rent-paid-while-the-reserve-builds",
      type: "steps",
      heading: "Keep rent paid while the reserve builds",
      intro: `Keep rent fully paid the entire time you accumulate, because late rent cuts attractiveness, thins the customer flow, lowers revenue and turns into a worsening deficit. A failed run can end in eviction or with reduced recovery prospects, which means the reserve you failed to build can be taken away as well — the [money and rent cycle](/guides/money-and-rent) explains why a single late week costs more than the rent itself.

Two risks specifically threaten the reserve:`,
      items: [
        {
          title: "A wrong Aug confrontation",
          body: "It can destroy a regular customer and cut income permanently.",
        },
        {
          title: "Higher faction reputation",
          body: "It cuts both ways — Security favours inspections while black-market access attracts hostility.",
        },
      ],
    },
    {
      id: "fund-these-first",
      type: "steps",
      heading: "Fund these four things first",
      intro: "In priority order, before you buy:",
      items: [
        {
          title: "Insurance and protection.",
          body: "Particularly if a single burglary could eat the whole reserve.",
        },
        {
          title: "Traffic equipment.",
          body: "Display cases, food stock and attractiveness devices like the Mirage Projector.",
        },
        {
          title: "Offline production.",
          body: "The furnace and smelter, wine fermentation and water purification.",
        },
        {
          title: "Required licences.",
          body: "An underground trading permit ran around 1,500 credits during playtests.",
        },
        {
          title: "Scavenging capacity.",
          body: "Recovers scrap for production and avoids buying processed material at full retail — provided you account for the late opening it costs you.",
        },
      ],
    },
    {
      id: "stop-expanding-when-you-get-close",
      type: "steps",
      heading: "Stop expanding when you get close",
      intro: "When the till is within reach, stop buying things:",
      items: [
        {
          title: "Skip another purchase.",
          body: "Another hydroponic bay, labeler or contraband shipment.",
        },
        {
          title: "Sell inventory you do not need.",
          body: "Use the [shop inventory page](/guides/shop-inventory) to work out which stock is genuinely spare against the surfaces you actually store on.",
        },
        {
          title: "Keep food stocked.",
          body: "So attractiveness does not slide while you wait.",
        },
        {
          title: "Preserve enough cash.",
          body: "Cover the next rent alongside the remainder.",
        },
      ],
      outro: `Joe Wild's insurance is worth buying before the buyout rather than after, because the burglary it covers is exactly the event that would reset your reserve. It claws stolen items back, but it does not bring back the customers who did not walk in.`,
    },
    {
      id: "achievement-milestones",
      type: "data-table",
      heading: "Achievement milestones: what a rent-safe buyout unlocks",
      intro: `Seven public milestones sit on top of the ordinary loop. None of them changes how you fund the reserve — they tell you which day to spend and which day to stop:`,
      columns: [
        { key: "milestone", label: "Milestone" },
        { key: "needs", label: "What it needs" },
        { key: "pace", label: "How it fits the buyout" },
      ],
      rows: [
        {
          milestone: "Keys to the Kingdom",
          needs: "Own the deed to the store",
          pace: "The purchase itself — the same morning the till clears the HUD requirement",
        },
        {
          milestone: "Prodigious",
          needs: "Acquire the deed before day 50",
          pace: "The one that costs you pace: expansion bought early is expansion you cannot buy back later",
        },
        {
          milestone: "Comfortably Afloat",
          needs: "Begin a day holding over 10,000 credits of estimated total wealth",
          pace: "Checked at the start of a day, so a sale on day N only counts from day N+1",
        },
        {
          milestone: "Swimming in Credits",
          needs: "Begin a day with more than 100,000 credits of estimated total wealth",
          pace: "The same check at a higher bar, and it competes with the deposit you are saving",
        },
        {
          milestone: "Shiny",
          needs: "Start a day with 1,000 store attractiveness",
          pace: "Driven by the case, food stock and traffic equipment in the funding list above",
        },
        {
          milestone: "Diplomatic",
          needs: "Reach the highest possible reputation with any one faction",
          pace: "Whichever faction you already move best — the routes are compared on the [station factions page](/guides/station-factions)",
        },
        {
          milestone: "From Nothing",
          needs: "Finish the game after starting from Rock Bottom",
          pace: "A different opening, not a different buyout plan — see the [starting professions page](/guides/starting-professions)",
        },
      ],
      outro: `Insurance still sits first in the funding order: a burglary between one qualifying morning and the next wipes out the streak as well as the reserve, and that is the one loss no amount of patience brings back.`,
    },
  ],
  adAnchors: [
    { after: "keep-rent-paid-while-the-reserve-builds", slot: "guide-section-break" },
    { after: "fund-these-first", slot: "guide-section-break-2" },
  ],
  faqIds: [],
  relatedPageIds: ["money-and-rent", "shop-inventory", "station-factions"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-21",
};