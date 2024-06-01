import { PricingFaq } from "~/components/price/pricing-faq";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Faq",
};

export default function FaqPage() {
  return (
    <div className="h-34 min-h-screen md:py-8">
      <PricingFaq />
    </div>
  );
}
