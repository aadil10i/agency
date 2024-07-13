// @ts-expect-error
// @ts-nocheck
"use client";

// import Link from "next/link";
import Balancer from "react-wrap-balancer";

// import { Button, buttonVariants } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

// import { BillingFormButton } from "~/components/price/billing-form-button";
import { env } from "~/env.mjs";
// import { priceDataMap } from "~/config/price/price-data";
import type { UserSubscriptionPlan } from "~/types";

interface PricingCardsProps {
  subscriptionPlan?: UserSubscriptionPlan;
  // dict: Record<string, string>;
}

export function PricingCards({ subscriptionPlan }: PricingCardsProps) {
  const pricingData = [
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
        "Contact Form",
        "Bookings",
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
  ];

  return (
    <>
      <section className="container flex flex-col items-center text-center">
        <div className="mx-auto mb-10 flex w-full flex-col gap-5">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Pricing
          </p>
          <h2 className="font-heading text-3xl leading-[1.1] md:text-5xl">
            Start at full speed !
          </h2>
        </div>

        <div className="mx-auto grid max-w-screen-lg gap-5 bg-inherit py-4 md:grid-cols-3 lg:grid-cols-3">
          {pricingData.map(
            (offer: {
              title: string;
              prices: {
                yearly: number;
              };
              benefits: string[];
              limitations: string[];
              id: string;
            }) => (
              <div
                className="relative flex flex-col overflow-hidden rounded-xl border"
                key={offer?.id}
              >
                <div className="min-h-[150px] items-start space-y-4 bg-secondary/70 p-6">
                  <p className="font-urban text-md flex justify-center text-center font-bold uppercase tracking-wider text-muted-foreground">
                    {offer?.title}
                  </p>

                  <div className="flex flex-row">
                    <div className="flex items-end">
                      <div className="flex text-left text-3xl font-semibold leading-6">
                        <span className="mr-2 text-muted-foreground line-through">
                          AED{offer?.prices?.from}
                        </span>
                        <span> AED{offer?.prices?.yearly}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-left text-sm text-muted-foreground">
                    Will be charged as a one time payment
                  </div>
                </div>

                <div className="flex h-full flex-col justify-between gap-16 p-6">
                  <ul className="space-y-2 text-left text-sm font-medium leading-normal">
                    {offer?.benefits.map((feature) => (
                      <li className="flex items-start" key={feature}>
                        <Icons.Check className="mr-3 h-5 w-5 shrink-0" />
                        <p>{feature}</p>
                      </li>
                    ))}

                    {offer?.limitations?.length > 0 &&
                      offer.limitations.map((feature) => (
                        <li
                          className="flex items-start text-muted-foreground"
                          key={feature}
                        >
                          <Icons.Close className="mr-3 h-5 w-5 shrink-0" />
                          <p>{feature}</p>
                        </li>
                      ))}
                  </ul>

                  {/* Display the BillingFormButton for purchasing */}
                  {/* <BillingFormButton
                    year={true}
                    offer={offer}
                    subscriptionPlan={subscriptionPlan}
                  /> */}
                </div>
              </div>
            ),
          )}
        </div>
{/* 
        <p className="mt-3 text-center text-base text-muted-foreground">
          <Balancer>
            Email{" "}
            <a
              className="font-medium text-primary hover:underline"
              href="mailto:support@saasfly.io"
            >
              support@saasfly.io
            </a>{" "}
            for to contact our support team.
            <br />
            <strong>
              You can test the subscriptions and will not be charged.
            </strong>
          </Balancer>
        </p> */}
      </section>
    </>
  );
}
