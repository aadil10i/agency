import type { MarketingConfig } from "~/types";

// Since you don't need translations, directly define your navigation items
const mainNavItems = [
  {
    title: "Features", // Replace with your actual English title
    href: `/#features`,
  },
  {
    title: "Pricing", // Replace with your actual English title
    href: `/pricing`,
  },
  {
    title: "Faq", // Replace with your actual English title
    href: `/faq`,
  },
];

export const getMarketingConfig = async (): Promise<MarketingConfig> => {
  // You no longer need to fetch a dictionary
  return {
    mainNav: mainNavItems,
  };
};
