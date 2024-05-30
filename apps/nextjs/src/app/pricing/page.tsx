import { PricingCards } from "~/components/price/pricing-cards";
import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Pricing",
};

export default async function PricingPage({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}) {
  const dict = await getDictionary(lang);
  let subscriptionPlan;

  // if (user) {
  //   subscriptionPlan = await trpc.stripe.userPlans.query();
  // }
  return (
    <div className="flex w-full flex-col gap-16 py-8 md:py-8">
      <PricingCards
        subscriptionPlan={subscriptionPlan}
        dict={dict.price}
        params={{ lang }}
      />
    </div>
  );
}