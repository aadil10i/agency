import Balancer from "react-wrap-balancer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@saasfly/ui/accordion";

export function PricingFaq() {
  return (
    <section className="container max-w-3xl py-2">
      <div className="mb-14 space-y-6 text-center">
        <h1 className="text-center font-heading text-3xl md:text-5xl">
          <Balancer>Frequently Asked Questions</Balancer>
        </h1>
        <p className="text-md text-muted-foreground">
          <Balancer>
            Explore our comprehensive FAQ to find quick answers to common
            inquiries. If you need further assistance, don&apost hesitate to
            contact us for personalized help.
          </Balancer>
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        {/* {pricingFaqData?.map((faqItem) => ( */}
        <AccordionItem value="item1">
          <AccordionTrigger>
            What is the cost of the free plan?
          </AccordionTrigger>
          <AccordionContent>
            Our free plan is completely free, with no monthly or annual charges.
            Its a great way to get started and explore our basic features.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item2">
          <AccordionTrigger>
            How much does the Pro Monthly plan cost?
          </AccordionTrigger>
          <AccordionContent>
            The Pro Monthly plan is priced at $30 per month. It provides access
            to our core features and is billed on a monthly basis.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item3">
          <AccordionTrigger>
            What is the cost of the free plan?
          </AccordionTrigger>
          <AccordionContent>
            Our free plan is completely free, with no monthly or annual charges.
            Its a great way to get started and explore our basic features.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item4">
          <AccordionTrigger>
            What is the cost of the free plan?
          </AccordionTrigger>
          <AccordionContent>
            Our free plan is completely free, with no monthly or annual charges.
            Its a great way to get started and explore our basic features.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item5">
          <AccordionTrigger>
            What is the cost of the free plan?
          </AccordionTrigger>
          <AccordionContent>
            Our free plan is completely free, with no monthly or annual charges.
            Its a great way to get started and explore our basic features.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
