// @ts-expect-error
// @ts-nocheck
"use client";

import {
  type JSXElementConstructor,
  type Key,
  type PromiseLikeOfReactNode,
  type ReactElement,
  type ReactNode,
} from "react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { Button, buttonVariants } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

import { BillingFormButton } from "~/components/price/billing-form-button";
import { priceDataMap } from "~/config/price/price-data";
import { useSigninModal } from "~/hooks/use-signin-modal";
import type { UserSubscriptionPlan } from "~/types";
import { SignInModal } from "../sign-in-modal";

interface PricingCardsProps {
  userId?: string;
  subscriptionPlan?: UserSubscriptionPlan;
  dict: Record<string, string>;
  params: {
    lang: string;
  };
}

export function PricingCards({
  userId,
  subscriptionPlan,
  dict,
  params: { lang },
}: PricingCardsProps) {
  const pricingData = priceDataMap[lang];
  return (
    <section className="container flex flex-col items-center text-center">
      <div className="mx-auto mb-10 flex w-full flex-col gap-5">
        <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {dict.pricing}
        </p>
        <h2 className="font-heading text-3xl leading-[1.1] md:text-5xl">
          {dict.slogan}
        </h2>
      </div>

      <div className="mx-auto grid max-w-screen-lg gap-5 bg-inherit py-4 md:grid-cols-3 lg:grid-cols-3">
        {pricingData.map(
          (offer: {
            title:
              | boolean
              | Key
              | ReactElement<any, string | JSXElementConstructor<any>>
              | Iterable<ReactNode>
              | PromiseLikeOfReactNode
              | null
              | undefined;
            prices: {
              yearly: number;
            };
            benefits: any[];
            limitations: any[];
            id: string;
          }) => (
            <div
              className="relative flex flex-col overflow-hidden rounded-xl border"
              key={offer?.title}
            >
              <div className="min-h-[150px] items-start space-y-4 bg-secondary/70 p-6">
                <p className="font-urban flex text-sm font-bold uppercase tracking-wider text-muted-foreground">
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
                  {`${dict.annual_info}`}
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

                {userId && subscriptionPlan ? (
                  offer?.id === "starter" ? (
                    <Link
                      href="/dashboard"
                      className={buttonVariants({
                        className: "w-full",
                        variant: "default",
                      })}
                    >
                      {dict.go_to_dashboard}
                    </Link>
                  ) : (
                    <BillingFormButton
                      year={true}
                      offer={offer}
                      subscriptionPlan={subscriptionPlan}
                      dict={dict}
                    />
                  )
                ) : (
                  <Button onClick={SignInModal.onOpen}>{dict.signup}</Button>
                )}
              </div>
            </div>
          ),
        )}
      </div>

      <p className="mt-3 text-center text-base text-muted-foreground">
        <Balancer>
          Email{" "}
          <a
            className="font-medium text-primary hover:underline"
            href="mailto:support@saasfly.io"
          >
            support@saasfly.io
          </a>{" "}
          {dict.contact}
          <br />
          <strong>{dict.contact_2}</strong>
        </Balancer>
      </p>
    </section>
  );
}
