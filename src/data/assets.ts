import type { AssetManifest } from "@/types/assets";

/**
 * The five Collector display images, copied verbatim from
 * <project>/collector/images/ into public/images/. Each one is registered at
 * the page whose task it identifies; no image is used as an instruction
 * diagram and no page invents a screenshot it does not have.
 */
export const assetManifest = {
  "shop-interior": {
    id: "shop-interior",
    src: "/images/probably-stolen-shop-interior.jpg",
    alt: "The shop counter: a wall display case on the left, a customer standing at the till, a wanted board of faces and bounty prices, and product shelves behind the counter.",
    width: 1920,
    height: 1080,
    sourcePage: "/",
    usage: "Homepage hero media, right of the headline copy.",
    objectPosition: "center",
    fallback: "surface",
  },
  "counterfeit-check": {
    id: "counterfeit-check",
    src: "/images/probably-stolen-counterfeit-check.jpg",
    alt: "A magnifying glass held over a cigarette packet beside a Station Trade Commission authenticity handbook comparing genuine and incorrect lettering, logo, colour and security seal.",
    width: 1920,
    height: 1080,
    sourcePage: "/guides/spot-fakes",
    usage: "Spot fakes hero media, right of the headline copy.",
    objectPosition: "center",
    fallback: "surface",
  },
  "aug-identification-guide": {
    id: "aug-identification-guide",
    src: "/images/probably-stolen-aug-identification-guide.jpg",
    alt: "A Security Department augmented identification guide listing visual features and non-visual features, open next to a customer waiting at the counter.",
    width: 1920,
    height: 1080,
    sourcePage: "/guides/spot-augs",
    usage: "Spot augs hero media, right of the headline copy.",
    objectPosition: "center",
    fallback: "surface",
  },
  "night-scavenging": {
    id: "night-scavenging",
    src: "/images/probably-stolen-night-scavenging.jpg",
    alt: "A dark scrapyard at night with the in-game SCAVENGE panel showing remaining attempts and the minor and major wound chances.",
    width: 1920,
    height: 1080,
    sourcePage: "/guides/night-scavenging",
    usage: "Night scavenging hero media, right of the headline copy.",
    objectPosition: "center",
    fallback: "surface",
  },
  "wilds-network": {
    id: "wilds-network",
    src: "/images/probably-stolen-wilds-network.jpg",
    alt: "The Wild's Network vendor menu showing Joe Wild's Fixers, available credits, favour and rows of referral, favour, informant, supplier, service and gunsmith goods with prices.",
    width: 1920,
    height: 1080,
    sourcePage: "/guides/underground-market",
    usage: "Underground market hero media, right of the headline copy.",
    objectPosition: "center",
    fallback: "surface",
  },
} satisfies AssetManifest;