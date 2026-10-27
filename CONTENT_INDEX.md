# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline for probablystolen-cyberpunkshopkeepersim.wiki (English / US, guide-v4). The primary locale stays on root paths. Simplified Chinese mirrors all 22 indexable pages under `/zh-CN`.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Probably Stolen - Cyberpunk Shopkeeper Sim guide | Find the right task entry for a storefront run | Start your first week / Check a lot for fakes | Hub | Hero carries the approved H1 verbatim from the manuscript; first module exposes the two `Start your run` entries before the basics paragraph. |
| `/guides/getting-started` | `src/data/pages/guide-pages.ts` (start) | Guide | Probably Stolen getting started | What to do in the first week and in what order | Display Case / Money and rent / Spot fakes | Topic | Four tutorial beats + first-week priorities. Material: `collector/materials/getting-started.json`. |
| `/guides/starting-professions` | `src/data/pages/guide-pages.ts` (start) | Guide | Probably Stolen starting professions / tier list | Which starting profession to pick and how the tiers rank | Water merchant / Crafting machines | Topic | Seven-row tier table + four ruin types; Rock Bottom row carries the From Nothing finish-line achievements. Material: `collector/materials/getting-started.json`. |
| `/guides/recurring-npcs` | `src/data/pages/guide-pages.ts` (cast) | Guide | Probably Stolen recurring NPCs and vendors | Who keeps coming back to the counter and what each one unlocks | Getting started / Crafting machines | Reference | Who/what/supplies/unlock table plus per-person beat lists for the Mentor, Dr. Jackson and Joe Wild; the closing table only points back to the page that owns each product line. |
| `/guides/money-and-rent` | `src/data/pages/guide-pages.ts` (start) | Guide | Probably Stolen money and rent guide | How the weekly rent cycle works and how to avoid the spiral | Production chains / Buy out the shop | Topic | Week-opening order + safe vs risky stock; credits section cross-links the 10K/100K wealth milestones. Material: `collector/materials/money-and-rent.json`. |
| `/guides/buy-out-the-shop` | `src/data/pages/guide-pages.ts` (start) | Guide | Probably Stolen buy out the shop | What the buyout costs and what to fund first | Money and rent / Shop inventory / Station factions | Topic | Funding priority list + stop-expanding checklist + achievement-milestone pacing table. Material: `collector/materials/money-and-rent.json`. |
| `/guides/display-case` | `src/data/pages/guide-pages.ts` (trade) | Guide | Probably Stolen display case guide | What to stage in the case and when it takes effect | Shop inventory / Underground market | Topic | Bait-to-customer table + staging order. Hero uses `probably-stolen-shop-interior.jpg`. Material: `collector/materials/inventory-and-display.json`. |
| `/guides/shop-inventory` | `src/data/pages/guide-pages.ts` (trade) | Guide | Probably Stolen shop inventory management | Where stock lives and how to stop it being lost | Display case / Spot fakes | Topic | Three-place storage table + theft-prevention checklist. Material: `collector/materials/inventory-and-display.json`. |
| `/guides/spot-fakes` | `src/data/pages/guide-pages.ts` (trade) | Guide | Probably Stolen how to spot fakes | How to authenticate a lot and what to do when it fails | Display case / Underground market | Topic | Three-check sequence + per-category tool-routing table + the dated UV-filter change + the day-14 Toolbox batch workflow. Hero uses `probably-stolen-counterfeit-check.jpg`. Material: `collector/materials/trade-and-goods.json`. |
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
| `/guides/station-factions` | `src/data/pages/guide-pages.ts` (production) | Guide | Probably Stolen station factions | What each faction wants and how standing moves | Spot augs / Buy out the shop | Topic | Faction reference table; standing section names the Diplomatic reputation milestone. Material: `collector/materials/factions-and-story.json`. |
| `/guides/spot-augs` | `src/data/pages/guide-pages.ts` (production) | Guide | Probably Stolen how to spot augs | How to identify a host before you pull the trigger | Customer reactions | Topic | Visual and non-visual tell lists. Hero uses `probably-stolen-aug-identification-guide.jpg`. Material: `collector/materials/customers-and-augs.json`. |
| `/guides/customer-reactions` | `src/data/pages/guide-pages.ts` (production) | Guide | Probably Stolen customer reactions guide | How to handle each customer type and each of the four answers | Spot augs | Topic | Customer-by-customer table + four-response matrix + the wanted-poster reporting procedure. Material: `collector/materials/customers-and-augs.json`. |

## Generated Route Families

- Home: `src/data/pages/home.ts`.
- Guide families: `src/data/pages/guides/{start,trade,lines,production,cast}.ts` (one manuscript per page, in the order page-plan.md groups them; `cast.ts` holds the recurring-NPC reference).
- Final route inventory: `npm run routes:manifest` (44 routes: each of the 22 English pages has a Chinese counterpart).
- Primary-locale routes use the root path; Chinese routes use `/zh-CN` and `/zh-CN/guides/<slug>`. All Chinese page content is in `src/data/pages/zh-CN.json`; route layouts live under `src/app/(en)` and `src/app/(zh)` so each document has its own HTML language.

## Simplified Chinese Counterparts

The Chinese pages keep the search intent, page type, related-guide role and ad slots of their English counterparts. The locale switch links corresponding pages in both directions; canonical and sitemap entries point to each locale's own URL, with reciprocal language alternates.

| English URL | Chinese URL | Chinese primary answer |
|---|---|---|
| `/` | `/zh-CN` | Find a task guide for the storefront run |
| `/guides/getting-started` | `/zh-CN/guides/getting-started` | First-week opening order |
| `/guides/starting-professions` | `/zh-CN/guides/starting-professions` | Which opening profession to choose |
| `/guides/recurring-npcs` | `/zh-CN/guides/recurring-npcs` | Who keeps coming back and what they unlock |
| `/guides/money-and-rent` | `/zh-CN/guides/money-and-rent` | Keep rent funded while earning |
| `/guides/buy-out-the-shop` | `/zh-CN/guides/buy-out-the-shop` | Fund the shop buyout after rent |
| `/guides/display-case` | `/zh-CN/guides/display-case` | What to display before opening |
| `/guides/shop-inventory` | `/zh-CN/guides/shop-inventory` | Store goods and prevent theft |
| `/guides/spot-fakes` | `/zh-CN/guides/spot-fakes` | Check counterfeit goods |
| `/guides/underground-market` | `/zh-CN/guides/underground-market` | Enter the market and manage contraband |
| `/guides/radioactive-waste` | `/zh-CN/guides/radioactive-waste` | Dispose of radioactive waste |
| `/guides/weapons-dealer` | `/zh-CN/guides/weapons-dealer` | Handle licensing and inspections |
| `/guides/chemist` | `/zh-CN/guides/chemist` | Weigh production against addiction risk |
| `/guides/water-merchant` | `/zh-CN/guides/water-merchant` | Test, purify and label water |
| `/guides/fence` | `/zh-CN/guides/fence` | Manage contraband and searches |
| `/guides/hydroponic-farmer` | `/zh-CN/guides/hydroponic-farmer` | Keep food production steady |
| `/guides/crafting-machines` | `/zh-CN/guides/crafting-machines` | Buy machines for the chosen chain |
| `/guides/production-chains` | `/zh-CN/guides/production-chains` | Compare nightly production chains |
| `/guides/night-scavenging` | `/zh-CN/guides/night-scavenging` | Judge whether a night trip pays off |
| `/guides/station-factions` | `/zh-CN/guides/station-factions` | Understand factions and standing |
| `/guides/spot-augs` | `/zh-CN/guides/spot-augs` | Check Aug clues before acting |
| `/guides/customer-reactions` | `/zh-CN/guides/customer-reactions` | Choose a response for each customer |

## Content Clusters

- Start your run: `/guides/getting-started`, `/guides/starting-professions`, `/guides/recurring-npcs`
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
- Buyout milestone pacing is the cross-page bridge: `/guides/buy-out-the-shop` owns the achievement-milestone table and links out to `/guides/station-factions` (Diplomatic) and `/guides/starting-professions` (From Nothing); `/guides/money-and-rent` links into that table for the 10K/100K wealth milestones.
- `/guides/recurring-npcs` is a reference hub for the people other pages name: `/guides/getting-started` (the Mentor), `/guides/crafting-machines` (Dr. Jackson), `/guides/water-merchant` (Joe Wild and the taps) and `/guides/underground-market` (Sawyer) all link into it, and it links back only to the page that owns each product line.
- `/guides/spot-fakes` and `/guides/customer-reactions` now separate two checks that used to blur together: authentication of the lot stays on the fake-detection page, and reporting the person against a wanted poster stays on the customer-reactions page, with cross-links in both directions.

## Open Questions

- `/wiki`, `/guides` index, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`, `/release-date` are intentionally absent from this launch: page-plan.md does not assign them any original Searcher keyword or answerable material, so they are not in the route manifest.
- Probably Stolen organ dealer guide and Probably Stolen multiple endings are dropped from the launch per `page-plan.md` (no established prerequisite or answerable material).
