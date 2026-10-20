import type { FAQItem } from "@/types/content";

/**
 * This site publishes only the pages page-plan.md planned, and no manuscript
 * carries an FAQ block, so the inventory is deliberately empty. The typed
 * empty array keeps `getFaqsForPage` narrowing correctly.
 */
export const faqItems: FAQItem[] = [];