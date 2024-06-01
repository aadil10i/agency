import { PricingCards } from "~/components/price/pricing-cards";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Pricing",
};

export default function PricingPage() {
  let subscriptionPlan;

  // if (user) {
  //   subscriptionPlan = await trpc.stripe.userPlans.query();
  // }
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <PricingCards subscriptionPlan={subscriptionPlan} />
    </div>
  );
}
