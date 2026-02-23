import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { PricingCard } from "@/components/pricing-card";
import { BreadcrumbJsonLd, OfferJsonLd } from "@/components/json-ld";
import { FadeUp } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "HostProSuite pricing: R200/month flat fee, no commissions. Accept Visa, Mastercard, Amex, and Diners Club.",
  alternates: {
    canonical: "https://hostprosuite.com/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://hostprosuite.com" },
          { name: "Pricing", url: "https://hostprosuite.com/pricing" },
        ]}
      />
      <OfferJsonLd />
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              title="Pricing"
              subtitle="Ready to level up your rental game? Stop losing control and income."
            />
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-12">
              <PricingCard />
            </div>
          </FadeUp>
          <FadeUp delay={0.15} className="mx-auto mt-12 max-w-md text-center">
            <p className="text-sm text-muted-foreground">
              Plus a small 4% transaction fee for secure payments. By
              comparison, OTAs typically take 15&ndash;30% of every booking.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
