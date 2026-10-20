import inventory from "../../ad-placement-manifest.json";
import type { AdConfig } from "@/types/ads";

// Every key matches ad-placement-manifest.json. Codes stay empty until the
// Adsterra Integrator binds real units against this site's final list.
export const ads: AdConfig = {
  units: {
    "page-top-desktop": "",
    "page-top-mobile": "",
    "home-topic-break-desktop": "",
    "home-topic-break-mobile": "",
    "home-directory-end-desktop": "",
    "home-directory-end-mobile": "",
    "guide-native-mobile": "",
    "guide-section-break-desktop": "",
    "guide-section-break-mobile": "",
    "guide-section-break-2-desktop": "",
    "guide-section-break-2-mobile": "",
    "guide-before-faq-desktop": "",
    "guide-before-faq-mobile": "",
    "guide-rail-desktop": "",
    "footer-sponsored-smartlink": "",
  },
};

export const adInventory = inventory;