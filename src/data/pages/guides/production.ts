import type { PageContent } from "@/types/content";

const LOCALE = "en-US";
const PRESENTATION = {
  shell: "content",
  variant: "reading-right-rail",
} as const;

export const craftingMachinesPage: PageContent = {
  id: "crafting-machines",
  translationKey: "crafting-machines",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "crafting-machines",
  url: "/guides/crafting-machines",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Crafting Machines And Power Setup Guide",
  seoTitle: "Probably Stolen Crafting Machines And Power Setup Guide",
  metaDescription:
    "Every overnight machine comes from Jackson. This Probably Stolen crafting machines guide compares slots, the buy order and what power costs each night.",
  summary:
    "Every overnight machine comes from Jackson. This Probably Stolen crafting machines guide compares slots, the buy order and what power costs each night.",
  hero: {
    eyebrow: "Production and overnight work",
    subtitle: "",
    ctas: [{ label: "Crafting production chains", href: "/guides/production-chains" }],
  },
  quickAnswer:
    "Every overnight production machine is sold by Dr. Jackson, whose previous tenant was arrested, and his stock is gated by day count and by the unique items you already own. He refuses duplicate unique purchases, so plan what you want from him before you spend.",
  keyFacts: [],
  modules: [
    {
      id: "slots-power-and-jacksons-stock",
      type: "data-table",
      heading: "Probably Stolen crafting machines: slots, power and Jackson's stock",
      columns: [
        { key: "machine", label: "Machine" },
        { key: "slots", label: "Slots and controls" },
      ],
      rows: [
        {
          machine: "Chem Finisher",
          slots: "Chem Module, Container and Output slots, plus a Control Panel and a Set Recipe button",
        },
        { machine: "Evaporator", slots: "Battery, Module, Container, Distillate and Note slots" },
        {
          machine: "Heating Plate",
          slots: "A Chem Module and a Target Temp setting running Off, Low or High",
        },
        {
          machine: "Moisture Farm",
          slots: "Power Source, Modules and Water Container slots",
        },
        {
          machine: "Water Purifier",
          slots: "Power Source, Modules, Water Container and Output slots",
        },
        {
          machine: "Vacuum Robot",
          slots: "A night worker that collects waste and has a manual function",
        },
        {
          machine: "Machine bays and storage bays",
          slots: "Bays sit alongside storage rather than replacing it",
        },
      ],
      outro: `Two machines can be busy at once in the panel layouts, and a status like No Target or No Recipe Selected means a machine with nothing queued. UPDATE 049 added a preview so you can check a container or machine's contents before buying it, and fixed a bug where leaving too fast wiped your inventory.`,
    },
    {
      id: "purchase-order-from-jackson",
      type: "steps",
      heading: "Purchase order from Jackson",
      items: [
        {
          title: "Toolbox first.",
          body: "It is purchasable from Jackson after day 14, stores tools including the blue and red labelers, and keys 1 through 9 equip the corresponding tool. Equip mode makes the selected tool run across many objects at once, which is what makes inspecting a stack of goods fast.",
        },
        {
          title: "One machine you can feed.",
          body: "Buy the machine that matches the line you are actually running rather than the one with the best slot list — the [production chains page](/guides/production-chains) shows what each one is supposed to turn into.",
        },
        {
          title: "Power.",
          body: "Every machine needs power and most need a dedicated energy cell.",
        },
      ],
      outro: `Jackson's machines run overnight on electricity, unpaid power gets cut, and the cheap power toggle on the night sheet is where you manage it.`,
    },
    {
      id: "what-the-late-updates-added",
      type: "entity-grid",
      heading: "What the late updates added",
      items: [
        {
          title: "Bottle Printer",
          summary:
            "Added in UPDATE 049, unlocks with electronic parts and comes in a normal and a large variant. A printer with no power is just furniture.",
        },
        {
          title: "Vacuum Robot incinerator upgrade",
          summary:
            "Costs a Common Electronic, draws double power and destroys the waste the robot collects after a cleanup.",
        },
        {
          title: "Junk Processing Module",
          summary:
            "For the furnace, plus a fix in Patch 48.3.12 for a bug where it drew double power.",
        },
      ],
      outro: `Note that the double power on the incinerator upgrade is the intended cost, while the double draw on the Junk Processing Module was a bug that was fixed — the two are not the same thing.`,
    },
    {
      id: "power-is-a-running-cost",
      type: "prose",
      heading: "Power is a running cost",
      body: `Every machine needs power and most need a dedicated energy cell, so the nightly bill is a budget line like rent. Wild Network grid hooks skip the nightly bill but create a faction debt instead, which is a trade rather than a saving.

The [money and rent cycle](/guides/money-and-rent) covers the other costs that drain the till, and the [production chains page](/guides/production-chains) shows what each machine is supposed to turn into once it is fed.`,
    },
  ],
  adAnchors: [{ after: "purchase-order-from-jackson", slot: "guide-section-break" }],
  faqIds: [],
  relatedPageIds: ["production-chains", "money-and-rent"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-20",
};

export const productionChainsPage: PageContent = {
  id: "production-chains",
  translationKey: "production-chains",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "production-chains",
  url: "/guides/production-chains",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Crafting Production Chains: What Each Makes",
  seoTitle: "Probably Stolen Crafting Production Chains: What Each Makes",
  metaDescription:
    "Furnace, fermenter, purifiers and hydroponics want the same hours. This Probably Stolen crafting production chains guide compares every input and yield.",
  summary:
    "Furnace, fermenter, purifiers and hydroponics want the same hours. This Probably Stolen crafting production chains guide compares every input and yield.",
  hero: {
    eyebrow: "Production and overnight work",
    subtitle: "",
    ctas: [{ label: "Crafting machines", href: "/guides/crafting-machines" }],
  },
  quickAnswer:
    "All chains are overnight jobs competing for the same hours, so the rule is short: run one chain you can actually feed rather than three you cannot. Each chain below takes different inputs and returns different goods, and only some of them match the line you chose.",
  keyFacts: [],
  modules: [
    {
      id: "what-each-one-makes",
      type: "data-table",
      heading: "Probably Stolen crafting production chains: what each one makes",
      columns: [
        { key: "chain", label: "Chain" },
        { key: "input", label: "Input" },
        { key: "output", label: "Output" },
        { key: "notes", label: "Notes" },
      ],
      rows: [
        {
          chain: "Furnace / smelter",
          input: "2 pieces of scrap metal or metal ore",
          output: "Ingots",
          notes:
            "Scrap yields lower purity, ore yields higher; a flux agent improves purity and is consumed",
        },
        { chain: "Wine", input: "Grapes", output: "Bottles", notes: "The fermenter runs while you sleep" },
        {
          chain: "Water",
          input: "Purifiers and the Moisture Farm",
          output: "Better water grades",
          notes: "Needs a testing kit or the Water Trading Guide to certify a grade",
        },
        {
          chain: "Farming",
          input: "Hydroponics bays",
          output: "Food",
          notes: "Feeds the display case, the grocery shelves and the restocking sellers",
        },
      ],
      outro: `The furnace is the default sink for almost every profession, including the Gunsmith, and it requires power and smelts overnight only. The Bottle Printer turns the wine line's output into sealed product; water traders need bottles for jugs and wine keepers need them for merlot.

Bad input still teaches you something but wastes the night: bad grapes still teach the recipe, and pouring high-purity water into a batch you already know is moldy is a night lost.`,
    },
    {
      id: "the-nightly-decision-order",
      type: "steps",
      heading: "The nightly decision order",
      items: [
        { title: "Count rent.", body: "" },
        { title: "Run one overnight job only.", body: "" },
        { title: "Toggle the vacuum or insurance before you sleep.", body: "" },
        {
          title: "Take a dump trip only if scrap is genuinely your bottleneck.",
          body: "The [night scavenging guide](/guides/night-scavenging) covers what that trip costs in wounds and in the morning's opening.",
        },
        {
          title: "Save in this order.",
          body: "Toward the buyout, then the trading permit, then Dr. Jackson's next unique.",
        },
      ],
      outro: `Scavenging belongs in that list too, because the trip to the dumping grounds is what supplies the scrap the furnace consumes. Which machine each chain needs is on the [crafting machines page](/guides/crafting-machines).`,
    },
    {
      id: "power-and-inputs-are-the-constraint",
      type: "prose",
      heading: "Power and inputs are the real constraint",
      body: `Machines run overnight on electricity and most need a dedicated energy cell, so a second chain means a second energy cell before it means a second recipe. Wild Network grid hooks skip the nightly bill but create a faction debt.

The [night scavenging guide](/guides/night-scavenging) covers the trips that keep the furnace fed, since scrap that is not in the bay cannot be smelted.`,
    },
  ],
  adAnchors: [{ after: "the-nightly-decision-order", slot: "guide-section-break" }],
  faqIds: [],
  relatedPageIds: ["crafting-machines", "night-scavenging"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-20",
};

export const nightScavengingPage: PageContent = {
  id: "night-scavenging",
  translationKey: "night-scavenging",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "night-scavenging",
  url: "/guides/night-scavenging",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Night Scavenging: Trips, Risk And Timing",
  seoTitle: "Probably Stolen Night Scavenging: Trips, Risk And Timing",
  metaDescription:
    "A dumps trip buys scrap with a wound risk and a late open. This Probably Stolen night scavenging guide gives the trip order, the odds and the haul list.",
  summary:
    "A dumps trip buys scrap with a wound risk and a late open. This Probably Stolen night scavenging guide gives the trip order, the odds and the haul list.",
  hero: {
    eyebrow: "Production and overnight work",
    subtitle: "",
    assetId: "night-scavenging",
    ctas: [{ label: "Crafting production chains", href: "/guides/production-chains" }],
  },
  quickAnswer:
    "Scavenging happens after you close the shop, when you choose the dumping grounds instead of going to sleep, and your scavenger background is what makes those trips possible. Each trip costs wound risk and the next morning's opening traffic, so it is worth taking only when the haul beats both.",
  keyFacts: [],
  modules: [
    {
      id: "what-a-trip-looks-like",
      type: "steps",
      heading: "Probably Stolen night scavenging: what a trip looks like",
      items: [
        { title: "Close the shop and pick the grounds.", body: "Choose the grounds rather than sleeping." },
        {
          title: "Equip a pack, a bandage and a tool.",
          body: "Add — if you own one — a plasma cutter or a scanner.",
        },
        { title: "Make your limited number of digs.", body: "" },
        {
          title: "Cancel out of a tile you cannot read.",
          body: "Rather than spending an attempt blindly.",
        },
        {
          title: "Decide what fits in the pack.",
          body: "A pack with limited slots forces real choices between tools and modules.",
        },
        { title: "Get back before the morning opening.", body: "" },
      ],
      outro: `You get only a handful of attempts per trip, around five in early playtests. A scanner upgrade changes how often good tiles appear rather than giving you extra attempts.`,
    },
    {
      id: "the-wound-odds",
      type: "prose",
      heading: "The wound odds",
      body: `The in-game SCAVENGE panel shows a Minor Wound Chance of 10.00% and a Major Wound Chance of 2.25% per attempt, and scavenging is unavailable entirely while you are wounded — the panel reads "Can't scavenge while wounded!".

Bandages exist specifically to treat these wounds, so treat bandages as an operating cost of the trip and think twice when the trip would consume your last one.`,
    },
    {
      id: "what-you-can-bring-back",
      type: "data-table",
      heading: "What you can bring back",
      columns: [
        { key: "haul", label: "Haul" },
        { key: "use", label: "Use" },
      ],
      rows: [
        { haul: "Junk and good sets", use: "Sort and sell" },
        {
          haul: "Ruined modules",
          use: "Still worth credits; an early example sold for 30 credits",
        },
        { haul: "Tools such as wire cutters, plasma cutters and scanners", use: "Equipment" },
        { haul: "Scratch tickets", use: "The junk drawer" },
        { haul: "Scrap metal from broken machines", use: "Furnace input" },
      ],
      outro: `Leave the labelers and the Hemingway handbook at the shop; they are no use on the grounds.`,
    },
    {
      id: "scrap-feeds-the-furnace",
      type: "prose",
      heading: "Scrap feeds the furnace",
      body: `Scrap goes in the furnace bay to be smelted into ingots, modules and tools go into storage or the display case to attract buyers, and tickets go in a junk drawer. The [production chains page](/guides/production-chains) covers what the furnace does with two pieces of scrap or ore.`,
    },
    {
      id: "the-trip-costs-you-the-morning",
      type: "prose",
      heading: "The trip costs you the morning",
      body: `Scavenging trades the next day's opening traffic for materials, so a late opening can trigger a missed-customer penalty and repeated misses weaken the shop's attractiveness.

Only go when you urgently need furnace inputs or sellable stock, when you are ahead on rent, when you are not injured, and when you can still open on time. Do not leave loot outside overnight, since theft is still possible afterwards.

If the reason for the trip is not digging at all, the [radioactive waste page](/guides/radioactive-waste) covers the hand-off route for an item you are carrying out. The vacuum robot is a shop night worker: it neither scavenges nor buys back a late opening.`,
    },
  ],
  adAnchors: [
    { after: "the-wound-odds", slot: "guide-section-break" },
    { after: "what-you-can-bring-back", slot: "guide-section-break-2" },
  ],
  faqIds: [],
  relatedPageIds: ["production-chains", "radioactive-waste"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-20",
};

export const stationFactionsPage: PageContent = {
  id: "station-factions",
  translationKey: "station-factions",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "station-factions",
  url: "/guides/station-factions",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Station Factions And How Standing Moves",
  seoTitle: "Probably Stolen Station Factions And How Standing Moves",
  metaDescription:
    "Security, the Black Market, Revolution and the Upper Level. This Probably Stolen station factions guide says what each one wants and how standing moves.",
  summary:
    "Security, the Black Market, Revolution and the Upper Level. This Probably Stolen station factions guide says what each one wants and how standing moves.",
  hero: {
    eyebrow: "Trouble at the counter",
    subtitle: "",
    ctas: [{ label: "Customer reactions guide", href: "/guides/customer-reactions" }],
  },
  quickAnswer:
    "Four powers act on the station and none of them has a named leader: Security enforces the law, the Black Market expands illicit trade, Revolution is an insurgent network seeking leverage, and the Upper Level are former elites testing whether you stay useful. Joe Wild's Wild Network sits outside all of them as a vendor and community network.",
  keyFacts: [],
  modules: [
    {
      id: "what-each-one-wants",
      type: "data-table",
      heading: "Probably Stolen station factions: what each one wants",
      columns: [
        { key: "faction", label: "Faction" },
        { key: "wants", label: "What it wants" },
        { key: "move", label: "How you move it" },
      ],
      rows: [
        {
          faction: "Security",
          wants: "Law and order on the station",
          move: "Report wanted faces and cooperate with inspections",
        },
        {
          faction: "Black Market",
          wants: "Wider illicit trade and punished cooperation with law enforcement",
          move: "Move illicit goods; reporting an unlisted criminal sharply reduces it",
        },
        {
          faction: "Revolution",
          wants: "Leverage against the station",
          move: "Reporting someone important to the movement raises Security and lowers Revolution",
        },
        {
          faction: "Upper Level",
          wants: "Premium or counterfeit goods that preserve their privilege",
          move: "Haggle hard; they pay high margins for convincing fakes",
        },
        {
          faction: "Wild Network",
          wants: "Your custom as a customer, not a faction",
          move: "Daily insurance choice and network purchases",
        },
      ],
      outro: `Security catches smugglers, inspects the shop and pays for reports. A poster match has been observed paying 100 credits. Patch 48.3.12 removed an exploit in which a cleared inspection that still had visible contraband on display granted reputation.

Revolution retaliation is not always immediate: a threat can be raised after the customer has already left, and very low Revolution standing can task a hit squad against you.

The Upper Level want premium or counterfeit products while preserving their privilege. Premium Spring Water is the concrete example — its Water tag is rejected by tourists and non-Upper-Level customers. Security still investigates whether their goods are genuine, and no separate meter is documented for them.`,
    },
    {
      id: "standing-buys-access",
      type: "prose",
      heading: "Standing buys access and paints a target",
      body: `Reputation determines access to customers, licences, exclusive deals and protection — and it creates enemies at the same time. Black Market reputation is a real meter that opens exclusive opportunities while raising danger, with documented extra handling at −40.

Joe Wild's Wild Network is not a government but a vendor and community network acting as neighbourhood insurance and water infrastructure, with Joe Wild as its one named figure. You choose daily whether to pay his theft insurance before sleeping; paying can carry a Rock Bottom run through a stolen crate, and refusing is viable when no vulnerable stock is left outside. It has no faction meter of its own.

One public milestone pays for that work directly: Diplomatic unlocks at the highest possible reputation with any one faction. Because it asks for a single faction rather than all four, the cheap route is whichever meter you already move — Security through poster reports, the Black Market through moving illicit goods — instead of spreading thin across the whole table above. The [buyout milestone table](/guides/buy-out-the-shop) sits it next to the credit and deed milestones.`,
    },
    {
      id: "four-ways-to-answer",
      type: "data-table",
      heading: "Four ways to answer any transaction",
      columns: [
        { key: "choice", label: "Choice" },
        { key: "get", label: "What you get" },
        { key: "costs", label: "What it costs" },
      ],
      rows: [
        { choice: "Approve", get: "Credits", costs: "The heat and standing consequences" },
        {
          choice: "Refuse",
          get: "A clean shop",
          costs: "The margin, and possibly the relationship",
        },
        {
          choice: "Report",
          get: "Security favour on a poster match",
          costs: "Black Market consequences for an unlisted criminal, and Revolution retaliation",
        },
        { choice: "Look away", get: "No involvement", costs: "The faction still watches" },
      ],
      outro: `Those four choices are the whole reputation economy, applied one customer at a time — the [customer reactions page](/guides/customer-reactions) works through who walks in and how each type should be handled.`,
    },
    {
      id: "the-aug-policy-cuts-across-all-of-them",
      type: "prose",
      heading: "The Aug policy cuts across all of them",
      body: `Rogue sentient AI chips have taken human hosts with them, every faction's answer is shoot on sight, and a confirmed Aug is hostile regardless of which faction the host nominally belongs to. Dr. Jackson's Aug scanner assists identification.

Human customers — regulars, revolutionaries or rude elites — must not be mistaken for Augs. Shooting a regular is not a faction strategy and it damages standing, while shooting a confirmed Aug is broadly supported by both Security and the street factions. The [Aug identification guide](/guides/spot-augs) covers how to tell the two apart before you act.`,
    },
  ],
  adAnchors: [
    { after: "standing-buys-access", slot: "guide-section-break" },
    { after: "the-aug-policy-cuts-across-all-of-them", slot: "guide-section-break-2" },
  ],
  faqIds: [],
  relatedPageIds: ["customer-reactions", "spot-augs", "buy-out-the-shop"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-21",
};

export const spotAugsPage: PageContent = {
  id: "spot-augs",
  translationKey: "spot-augs",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "spot-augs",
  url: "/guides/spot-augs",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen How To Spot Augs: Tells, Rules And Outcomes",
  seoTitle: "Probably Stolen How To Spot Augs: Tells, Rules And Outcomes",
  metaDescription:
    "Augs are rogue AI hosts and the answer is shoot on sight. This Probably Stolen how to spot augs guide gives the two tells lists and the counter order.",
  summary:
    "Augs are rogue AI hosts and the answer is shoot on sight. This Probably Stolen how to spot augs guide gives the two tells lists and the counter order.",
  hero: {
    eyebrow: "Trouble at the counter",
    subtitle: "",
    assetId: "aug-identification-guide",
    ctas: [{ label: "Customer reactions guide", href: "/guides/customer-reactions" }],
  },
  quickAnswer:
    "Augs are rogue AI hosts whose bodies are controlled by a dangerous chip, and the station-wide response is shoot on sight. That policy is not a rumour, but it applies only to a confirmed host — an uncertain customer should be completed or refused, not shot.",
  keyFacts: [],
  modules: [
    {
      id: "the-two-lists",
      type: "data-table",
      heading: "Probably Stolen how to spot augs: the two lists",
      intro: `The in-game reference is the Security Department Augmented Identification Guide, split into two lists:`,
      columns: [
        { key: "list", label: "List" },
        { key: "tells", label: "Tells" },
      ],
      rows: [
        {
          list: "Visual features",
          tells: "Visible aug chip, unusual pupils, uncanny expression",
        },
        {
          list: "Non-visual features",
          tells:
            "Unnatural stillness, twitching, outfit not matching their faction, robotic vocabulary, overly formal phrasing",
        },
      ],
      outro: `Identification is a visual and behavioural judgement made during the customer interaction rather than a separate minigame, and the guide's standing advice is to trust the cues your build actually surfaces — a changed sprite, a prompt or a specific animation — rather than inventing clues that are not there.

Dr. Jackson sells an Aug scanner that assists with identification, though its stock is tied to Security's threat state, since a patch allowed Security to declare the Aug threat over.`,
    },
    {
      id: "order-to-work-in",
      type: "steps",
      heading: "The order to work in at the counter",
      items: [
        {
          title: "Check protected NPCs first.",
          body: "The Mentor, Dr. Jackson, Joe Wild and other essential customers are non-shootable and were made protected in Patch 48.3.10.",
        },
        {
          title: "Compare the face against wanted posters.",
          body: "Because a match is a bounty-reporting decision and not an automatic execution.",
        },
        { title: "Look for the tells your build highlights.", body: "" },
        {
          title: "When you are genuinely uncertain, complete or refuse.",
          body: "Do not fire — uncertainty is not a kill prompt.",
        },
        {
          title: "After firing, reassess the shop.",
          body: "Check rent, attractiveness and whether the next customer is still human.",
        },
      ],
    },
    {
      id: "what-each-outcome-costs",
      type: "data-table",
      heading: "What each outcome costs",
      columns: [
        { key: "outcome", label: "Outcome" },
        { key: "result", label: "Result" },
      ],
      rows: [
        {
          outcome: "Confirmed Aug executed",
          result:
            "Policy is satisfied and the kidnapping pipeline cannot continue through that host",
        },
        {
          outcome: "Wanted human reported",
          result:
            "A bounty with 100 credits an observed payout, an incident slip, and possible retaliatory threats",
        },
        {
          outcome: "Wrong person shot",
          result:
            "A paying customer, faction contact or regular is dead: income is lost and attractiveness drops",
        },
        {
          outcome: "Wrong Aug accusation",
          result: "The same cost as a wrong shot, without the bounty",
        },
        { outcome: "Aug missed", result: "The kidnapping threat stays active" },
      ],
      outro: `Shooting the wrong person kills a paying customer, a faction contact or a regular, which costs income and lowers attractiveness — and a wrong Aug accusation carries the same cost without the bounty. A wanted human should be reported rather than shot, and the [customer reactions page](/guides/customer-reactions) covers how that report is made.`,
    },
    {
      id: "who-answers-for-a-body",
      type: "prose",
      heading: "Who answers for a body",
      body: `Both Security and the street factions broadly support shooting a confirmed Aug, while every faction's answer to a confirmed host is shoot on sight regardless of which faction the host nominally belongs to. Retaliation after a wrong call tends to arrive later rather than immediately, sometimes as a threat raised after the customer has already left — the [station factions page](/guides/station-factions) covers who moves against you and why.`,
    },
  ],
  adAnchors: [{ after: "order-to-work-in", slot: "guide-section-break" }],
  faqIds: [],
  relatedPageIds: ["customer-reactions", "station-factions"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-20",
};

export const customerReactionsPage: PageContent = {
  id: "customer-reactions",
  translationKey: "customer-reactions",
  locale: LOCALE,
  routeKind: "fixed",
  slug: "customer-reactions",
  url: "/guides/customer-reactions",
  pageType: "guides",
  presentation: PRESENTATION,
  h1: "Probably Stolen Customer Reactions Guide: The Four Choices",
  seoTitle: "Probably Stolen Customer Reactions Guide: The Four Choices",
  metaDescription:
    "Every customer interaction resolves as one of four choices. This Probably Stolen customer reactions guide covers who walks in and what each answer costs.",
  summary:
    "Every customer interaction resolves as one of four choices. This Probably Stolen customer reactions guide covers who walks in and what each answer costs.",
  hero: {
    eyebrow: "Trouble at the counter",
    subtitle: "",
    ctas: [{ label: "How to spot augs", href: "/guides/spot-augs" }],
  },
  quickAnswer:
    "Probably Stolen customer reactions guide in short: customers arrive labelled by type, every interaction resolves as one of four choices, and a good margin and a clean shop are usually different answers rather than the same one.",
  keyFacts: [],
  modules: [
    {
      id: "who-walks-in",
      type: "data-table",
      heading: "Probably Stolen customer reactions guide: who walks in",
      columns: [
        { key: "type", label: "Customer type" },
        { key: "answer", label: "The right answer" },
      ],
      rows: [
        {
          type: "Essential NPC such as the Mentor, Dr. Jackson or Joe Wild",
          answer: "Protected and non-shootable; deal with them normally",
        },
        { type: "Aug host", answer: "Shot once confirmed" },
        { type: "Wanted criminal", answer: "Reported rather than executed" },
        {
          type: "Security investigator",
          answer: "Cooperation you can refuse or play ignorant about",
        },
        { type: "Revolutionary", answer: "Handled through faction politics" },
        { type: "Fallen elite", answer: "Haggle with, or reject" },
        {
          type: "Nervous scavenger with suspicious goods",
          answer: "Inspect the crate rather than assume",
        },
        {
          type: "Counterfeit seller or stolen-lot carrier",
          answer: "Authenticate first, then judge the customer",
        },
      ],
      outro: `Recurring customers such as Dr. Jackson and Joe Wild also sell you things you need, so a mistaken call costs more than the shot: it can remove a vendor, a supplier or a regular income stream, and it damages attractiveness, which feeds back into the rent spiral.

If a customer's status is the question in front of you, the [Aug identification guide](/guides/spot-augs) covers the host case, where the answer is different from every other row in this table.`,
    },
    {
      id: "the-four-choices",
      type: "data-table",
      heading: "The four choices",
      columns: [
        { key: "choice", label: "Choice" },
        { key: "get", label: "What you get" },
        { key: "costs", label: "What it costs" },
      ],
      rows: [
        { choice: "Approve", get: "Credits", costs: "The heat and standing consequences attach to you" },
        { choice: "Refuse", get: "A clean shop", costs: "The margin, and possibly the relationship" },
        {
          choice: "Report",
          get: "Security favour when the person is on a poster",
          costs: "Black Market standing when they are not, plus Revolution retaliation",
        },
        {
          choice: "Look away",
          get: "No immediate involvement",
          costs: "The faction still observes you",
        },
      ],
      outro: `Approving something questionable is also how heat attaches to you later. Reporting a wanted face pays a bounty and raises your standing with Security, and can earn you a threat from the person you snitched on.`,
    },
    {
      id: "who-shows-up-is-partly-your-choice",
      type: "prose",
      heading: "Who shows up is partly your choice",
      body: `Merchandise pulls buyers and neon-style props pull sellers, and because the display case is committed when you raise the shutter, changes to the stock only take effect the next day. The customers you get are a function of what you staged before opening, which is why restaging the case each morning matters — the [display case guide](/guides/display-case) has the bait table.`,
    },
    {
      id: "judge-the-goods-first",
      type: "prose",
      heading: "Judge the goods before you judge the customer",
      body: `A counterfeit seller or a stolen-lot carrier needs the inspection and fake-detection tools first, and only then a judgement about the customer themselves. Do not treat a nervous scavenger as a criminal before their crate has been checked, and do not accuse a seller of counterfeiting before the lot has been authenticated with the glass and handbook — the [fake detection page](/guides/spot-fakes) has the three-check order.`,
    },
  ],
  adAnchors: [
    { after: "who-walks-in", slot: "guide-section-break" },
    { after: "who-shows-up-is-partly-your-choice", slot: "guide-section-break-2" },
  ],
  faqIds: [],
  relatedPageIds: ["spot-augs", "display-case", "spot-fakes"],
  schemaTypes: ["Article"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-20",
};