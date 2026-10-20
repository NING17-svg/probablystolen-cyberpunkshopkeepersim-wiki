# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-10-21 - Achievement-milestone pacing bridged to the buyout run

- Task `2026-10-21-probablystolen-cyberpunkshopkeepersim-wiki-buyout-milestone-pacing`. Four existing guide routes updated; no new routes, no change to `route-manifest.json`, the ad placement manifest or `src/data/ads.ts`.
- `/guides/buy-out-the-shop` gained an `achievement-milestones` data-table listing the seven public milestones players hit on the existing loop (Keys to the Kingdom, Prodigious, Comfortably Afloat, Swimming in Credits, Shiny, Diplomatic, From Nothing) with the threshold and where it sits against the insurance-first funding order. Its meta description now names the milestone pacing, and `relatedPageIds` gained `station-factions`.
- `/guides/money-and-rent` gained `the-same-credits-are-also-milestones`, tying the 10K / 100K estimated-total-wealth milestones to the rent-safe week and linking to the buyout table.
- `/guides/station-factions` names Diplomatic (highest possible reputation with any one faction) in the standing section and now links to the buyout table.
- `/guides/starting-professions` records that Rock Bottom has its own finish line: From Nothing, plus From Nothing, the Hard Way on hard mode.
- Thresholds come from the public achievement listing; each page's `lastReviewed` moved to 2026-10-21, which also updates those four sitemap entries.
- Verification: local `npm run verify` (typecheck + lint + build) plus the Guide V4 update screenshot gate over all four changed paths.

### 2026-10-20 - Adsterra ad codes bound to the approved placement inventory

- `adsterra-integrator` filled all 15 `adsterra-placement-inventory-v1` unit keys in `src/data/ads.ts` with real Adsterra codes. Positions, components, keys and the manifest are unchanged; only the previously empty placeholder values were replaced.
- Platform applications were deduplicated by format and size: 15 page keys map to 7 platform placements — Banner 728x90, Banner 468x60, Banner 320x50, Banner 300x250 (mobile home topic gap only), Banner 160x300 (guide rail), Native Banner, and one Smartlink for the footer sponsorship slot. Page keys sharing a format/size share one platform placement and code.
- Popunder and Social Bar were not selected by the page inventory, so no such code was applied or written to this site.
- All bound units were Active at collection time, so no RESUBMIT was needed.
- Verification: local `npm run verify` (typecheck + lint + build). Only `src/data/ads.ts` and this log changed.

### 2026-10-20 - V4 first launch: Probably Stolen - Cyberpunk Shopkeeper Sim

- Domain: `https://probablystolen-cyberpunkshopkeepersim.wiki`. Launch pipeline: `guide-v4`. Platform: Steam. Language: English / US.
- Page plan delivered 21 routes: `/` + 20 guide pages under `/guides/<slug>` (getting-started, starting-professions, money-and-rent, buy-out-the-shop, display-case, shop-inventory, spot-fakes, underground-market, radioactive-waste, weapons-dealer, chemist, water-merchant, fence, hydroponic-farmer, crafting-machines, production-chains, night-scavenging, station-factions, spot-augs, customer-reactions). `/wiki`, `/guides` index, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms` and `/release-date` were intentionally not emitted: `page-plan.md` did not assign them any original Searcher keyword or answerable material.
- Hero media is the five local 1920×1080 Collector JPGs: shop-interior (home + display-case reference), counterfeit-check (spot-fakes), aug-identification-guide (spot-augs), night-scavenging (night-scavenging), wilds-network (underground-market).
- Ad placements are the `adsterra-placement-inventory-v1` semantic layout (15 empty unit keys, no Adsterra requests yet — only `adsterra-integrator` will fill them after launch).
- Fixed AdSense trio (template default `ca-pub-4194035852162505`) is wired: `public/ads.txt`, `google-adsense-account` meta, and the root-layout AdSense script.
- Static deployment contract: `next.config.ts` `output: "export"`, `trailingSlash: false`; `wrangler.jsonc` `assets.directory = "./out"`, `html_handling: "drop-trailing-slash"`, no `main` Worker script. Static security headers live in `public/_headers` (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`).
- IndexNow key file committed under `public/indexnow-*.txt`; first submission is handled by the launch Builder.
- No automatic source-tier or review-date footer; no disclaimer in the rendered HTML; provenance remains internal in `src/data/site.ts.disclaimer`.
- Verification: local `npm run verify` (typecheck + lint + build), central `validate_guide_v4_stage.py page-builder` (21 routes, 1 hero image). Subsequent content updates follow the content-updater contract; ad-code fills follow the adsterra-integrator contract.