# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline for probablystolen-cyberpunkshopkeepersim.wiki (English / US, guide-v4). The primary locale stays on root paths; no secondary locale is configured in this build.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Probably Stolen - Cyberpunk Shopkeeper Sim guide | Find the right task entry for a storefront run | Start your first week / Check a lot for fakes | Hub | Hero carries the approved H1 verbatim from the manuscript; first module exposes the two `Start your run` entries before the basics paragraph. |
| `/guides/getting-started` | `src/data/pages/guide-pages.ts` (start) | Guide | Probably Stolen getting started | What to do in the first week and in what order | Display Case / Money and rent / Spot fakes | Topic | Four tutorial beats + first-week priorities. Material: `collector/materials/getting-started.json`. |
| `/guides/starting-professions` | `src/data/pages/guide-pages.ts` (start) | Guide | Probably Stolen starting professions / tier list | Which starting profession to pick and how the tiers rank | Water merchant / Crafting machines | Topic | Seven-row tier table + four ruin types. Material: `collector/materials/getting-started.json`. |
| `/guides/money-and-rent` | `src/data/pages/guide-pages.ts` (start) | Guide | Probably Stolen money and rent guide | How the weekly rent cycle works and how to avoid the spiral | Production chains / Buy out the shop | Topic | Week-opening order + safe vs risky stock. Material: `collector/materials/money-and-rent.json`. |
| `/guides/buy-out-the-shop` | `src/data/pages/guide-pages.ts` (start) | Guide | Probably Stolen buy out the shop | What the buyout costs and what to fund first | Money and rent / Shop inventory | Topic | Funding priority list + stop-expanding checklist. Material: `collector/materials/money-and-rent.json`. |
| `/guides/display-case` | `src/data/pages/guide-pages.ts` (trade) | Guide | Probably Stolen display case guide | What to stage in the case and when it takes effect | Shop inventory / Underground market | Topic | Bait-to-customer table + staging order. Hero uses `probably-stolen-shop-interior.jpg`. Material: `collector/materials/inventory-and-display.json`. |
| `/guides/shop-inventory` | `src/data/pages/guide-pages.ts` (trade) | Guide | Probably Stolen shop inventory management | Where stock lives and how to stop it being lost | Display case / Spot fakes | Topic | Three-place storage table + theft-prevention checklist. Material: `collector/materials/inventory-and-display.json`. |
| `/guides/spot-fakes` | `src/data/pages/guide-pages.ts` (trade) | Guide | Probably Stolen how to spot fakes | How to authenticate a lot and what to do when it fails | Display case / Underground market | Topic | Three-check sequence + per-category tell list. Hero uses `probably-stolen-counterfeit-check.jpg`. Material: `collector/materials/trade-and-goods.json`. |
| `/guides/underground-market` | `src/data/pages/guide-pages.ts` (trade) | Guide | Probably Stolen underground market | How to get in and what contraband costs you | Fence / Shop inventory | Topic | Access checklist + pre-purchase test. Hero uses `probably-stolen-wilds-network.jpg`. Material: `collector/materials/trade-and-goods.json`. |
| `/guides/radioactive-waste` | `src/data/pages/guide-pages.ts` (trade) | Guide | probably stolen game radioactive waste | How to get rid of a radioactive waste item | Night scavenging | Topic | Numbered disposal route + fallback route. Material: `collector/materials/trade-and-goods.json`. |
| `/guides/weapons-dealer` | `src/data/pages/guide-pages.ts` (lines) | Guide | Probably Stolen weapons dealer guide | How to run the weapons line without an inspection loss | Crafting machines / Display case | Topic | Pre-sale paperwork + bait/exposure comparison. Material: `collector/materials/product-lines.json`. |
| `/guides/chemist` | `src/data/pages/guide-pages.ts` (lines) | Guide | Probably Stolen chemist guide | Is the chemistry line worth the addiction risk | Crafting machines / Production chains | Topic | Ruin-type comparison + machine-to-job table. Material: `collector/materials/product-lines.json`. |
| `/guides/water-merchant` | `src/data/pages/guide-pages.ts` (lines) | Guide | Probably Stolen water merchant guide | The full test-to-label order for water | Production chains / Crafting machines | Topic | Numbered counter order + grade-and-risk table. Material: `collector/materials/product-lines.json`. |
| `/guides/fence` | `src/data/pages/guide-pages.ts` (lines) | Guide | Probably Stolen fence guide | Whether the Fence start is survivable | Underground market | Topic | Ruin-type comparison + survival checklist. Material: `collector/materials/product-lines.json`. |
| `/guides/hydroponic-farmer` | `src/data/pages/guide-pages.ts` (lines) | Guide | Probably Stolen hydroponic farmer guide | Why food is the low-risk line | Production chains | Topic | Food vs ruin + feeding the shop. Material: `collector/materials/product-lines.json`. |
| `/guides/crafting-machines` | `src/data/pages/guide-pages.ts` (production) | Guide | Probably Stolen crafting machines | Which machines to buy, what slots they have | Production chains | Topic | Shopping list + slot/power comparison. Material: `collector/materials/production-and-crafting.json`. |
| `/guides/production-chains` | `src/data/pages/guide-pages.ts` (production) | Guide | Probably Stolen crafting production chains | What each overnight chain turns into | Crafting machines / Water merchant | Topic | Recipe comparisons + which chain to run tonight. Material: `collector/materials/production-and-crafting.json`. |
| `/guides/night-scavenging` | `src/data/pages/guide-pages.ts` (production) | Guide | Probably Stolen night scavenging | Whether a dumping-grounds trip is worth the wound risk | Radioactive waste | Topic | Trip sequence + wound odds + haul list. Hero uses `probably-stolen-night-scavenging.jpg`. Material: `collector/materials/night-activities.json`. |
| `/guides/station-factions` | `src/data/pages/guide-pages.ts` (production) | Guide | Probably Stolen station factions | What each faction wants and how standing moves | Spot augs | Topic | Faction reference table. Material: `collector/materials/factions-and-story.json`. |
| `/guides/spot-augs` | `src/data/pages/guide-pages.ts` (production) | Guide | Probably Stolen how to spot augs | How to identify a host before you pull the trigger | Customer reactions | Topic | Visual and non-visual tell lists. Hero uses `probably-stolen-aug-identification-guide.jpg`. Material: `collector/materials/customers-and-augs.json`. |
| `/guides/customer-reactions` | `src/data/pages/guide-pages.ts` (production) | Guide | Probably Stolen customer reactions guide | How to handle each customer type and each of the four answers | Spot augs | Topic | Customer-by-customer table + four-response matrix. Material: `collector/materials/customers-and-augs.json`. |

## Generated Route Families

- Home: `src/data/pages/home.ts`.
- Guide families: `src/data/pages/guides/{start,trade,lines,production}.ts` (one manuscript per page, in the order page-plan.md groups them).
- Final route inventory: `npm run routes:manifest` (already 21 routes: 1 home + 20 guides).
- Primary-locale routes use the root path; no secondary locale is configured in `src/data/site.ts` for this build.

## Content Clusters

- Start your run: `/guides/getting-started`, `/guides/starting-professions`
- Money, rent and the shop buyout: `/guides/money-and-rent`, `/guides/buy-out-the-shop`
- Stock, display and trade: `/guides/display-case`, `/guides/shop-inventory`, `/guides/spot-fakes`, `/guides/underground-market`, `/guides/radioactive-waste`
- Product lines: `/guides/weapons-dealer`, `/guides/chemist`, `/guides/water-merchant`, `/guides/fence`, `/guides/hydroponic-farmer`
- Production and overnight work: `/guides/crafting-machines`, `/guides/production-chains`, `/guides/night-scavenging`
- Trouble at the counter: `/guides/station-factions`, `/guides/spot-augs`, `/guides/customer-reactions`

## Internal Linking Map

- Homepage links to the two `Start your run` entries inside the first screen and to the six guide-index groups in the directory.
- Getting started points to display-case, money-and-rent and spot-fakes from the steps.
- Display case, shop inventory and spot fakes inter-link to each other.
- Underground market links to fence (start built for the market) and back to shop inventory (where contraband physically lives).
- Product line pages link to crafting machines and the relevant production chain.
- Night activities links to radioactive-waste and back to production chains.

## Open Questions

- `/wiki`, `/guides` index, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`, `/release-date` are intentionally absent from this launch: page-plan.md does not assign them any original Searcher keyword or answerable material, so they are not in the route manifest.
- Probably Stolen organ dealer guide and Probably Stolen multiple endings are dropped from the launch per `page-plan.md` (no established prerequisite or answerable material).