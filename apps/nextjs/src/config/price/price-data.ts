import { env } from "~/env.mjs";

interface SubscriptionPlanTranslation {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  limitations: string[];
  prices: {
    from?: number;
    monthly: number;
    yearly: number;
  };
  stripeIds: {
    monthly: string | null;
    yearly: string | null;
  };
}

export const priceDataMap: Record<string, SubscriptionPlanTranslation[]> = {
  en: [
    {
      id: "starter",
      title: "Fresh Start",
      description: "For Beginners",
      benefits: [
        "A customized tailored design",
        "Contact Form / Basic Functionality",
        "1 round of revisions",
        "Built-in SEO",
        "Up to 4 Themes",
        "15 days post launch support",
        "Integrated Ad Campaigns",
      ],
      limitations: [
        "No keyword research",
        "No social media integration",
        "No off-page SEO",
        "No Priority",
        "Limited themes",
        "Copy writing",
        "Competitive Analysis",
      ],
      prices: {
        from: 1599,
        monthly: 1599,
        yearly: 1299,
      },
      stripeIds: {
        monthly: null,
        yearly: null,
      },
    },
    {
      id: "All in One",
      title: "All in One",
      description: "Unlock Advanced Features",
      benefits: [
        "Everything included in Fresh Start package",
        "Copy writing",
        "Priority customer support",
        "Keyword Research",
        "Social Media integration",
        "3 rounds of revisions",
        "60 days of post launch support",
        "Competitive Analysis",
        "Up to 8 themes",
      ],
      limitations: [
        "No custom branding",
        "Limited access to business resources",
        "Only 8 themes",
      ],
      prices: {
        from: 2199,
        monthly: 30,
        yearly: 1899,
      },
      stripeIds: {
        monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PRICE_ID,
        yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PRICE_ID,
      },
    },
    {
      id: "Top of the Line",
      title: "Top of the Line",
      description: "For Power Users",
      benefits: [
        "Everything included in the All in One package",
        "Interactive video integration",
        "Workflow Automation",
        "4 Rounds of revisions",
        "100 days of post launch support ",
        "Live dashboard of with overview of traffic and conversions.",
        "Up to 20 themes",
      ],
      limitations: [],
      prices: {
        from: 2999,
        monthly: 60,
        yearly: 2499,
      },
      stripeIds: {
        monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PRICE_ID,
        yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PRICE_ID,
      },
    },
  ],
};
