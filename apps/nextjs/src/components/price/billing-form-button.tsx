"use client";

import { useTransition } from "react";

import { Button } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

import { trpc } from "~/trpc/client";
import type { SubscriptionPlan, UserSubscriptionPlan } from "~/types";

interface BillingFormButtonProps {
  offer: SubscriptionPlan;
  subscriptionPlan: UserSubscriptionPlan;
  year: boolean;
}

export function BillingFormButton({
  year,
  offer,
  subscriptionPlan,
}: BillingFormButtonProps) {
  const [isPending, startTransition] = useTransition();

  async function createSession(planId: string) {
    const res = await trpc.stripe.createSession.mutate({ planId: planId });
    if (res?.url) window.location.href = res?.url;
  }

  const stripePlanId = year
    ? offer?.stripeIds?.yearly
    : offer?.stripeIds?.monthly;

  const stripeSessionAction = () =>
    startTransition(async () => await createSession(stripePlanId!));

  return (
    <Button
      variant="default"
      className="w-full"
      disabled={isPending}
      onClick={stripeSessionAction}
    >
      {isPending ? (
        <>
          <Icons.Spinner className="mr-2 h-4 w-4 animate-spin" /> Loading...
        </>
      ) : (
        <>
          {subscriptionPlan.stripePriceId ? "Manage Subscription" : "upgrade"}
        </>
      )}
    </Button>
  );
}
