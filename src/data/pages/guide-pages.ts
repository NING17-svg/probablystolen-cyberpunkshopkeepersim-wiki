import type { PageContent } from "@/types/content";
import {
  buyOutTheShopPage,
  gettingStartedPage,
  moneyAndRentPage,
  startingProfessionsPage,
} from "@/data/pages/guides/start";
import {
  displayCasePage,
  radioactiveWastePage,
  shopInventoryPage,
  spotFakesPage,
  undergroundMarketPage,
} from "@/data/pages/guides/trade";
import {
  chemistPage,
  fencePage,
  hydroponicFarmerPage,
  waterMerchantPage,
  weaponsDealerPage,
} from "@/data/pages/guides/lines";
import { recurringNpcsPage } from "@/data/pages/guides/cast";
import {
  craftingMachinesPage,
  customerReactionsPage,
  nightScavengingPage,
  productionChainsPage,
  spotAugsPage,
  stationFactionsPage,
} from "@/data/pages/guides/production";

/**
 * One entry per Guide Editor manuscript, in the order page-plan.md groups them
 * for readers: start of run, stock and trade, product lines, production, then
 * trouble at the counter. The recurring-NPC reference closes the list because
 * it points back into every group rather than owning a product line.
 */
export const guidePages: PageContent[] = [
  gettingStartedPage,
  startingProfessionsPage,
  moneyAndRentPage,
  buyOutTheShopPage,
  displayCasePage,
  shopInventoryPage,
  spotFakesPage,
  undergroundMarketPage,
  radioactiveWastePage,
  weaponsDealerPage,
  chemistPage,
  waterMerchantPage,
  fencePage,
  hydroponicFarmerPage,
  craftingMachinesPage,
  productionChainsPage,
  nightScavengingPage,
  stationFactionsPage,
  spotAugsPage,
  customerReactionsPage,
  recurringNpcsPage,
];