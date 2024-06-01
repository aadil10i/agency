import { PricingFaq } from "~/components/price/pricing-faq";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Faq",
};

export default function FaqPage() {
  return (
    <div className="min-h-screen md:py-8">
      <PricingFaq />
    </div>
  );
}
