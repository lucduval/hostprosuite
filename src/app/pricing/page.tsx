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
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/pricing-bg.webp')" }}
        />
        <div className="absolute inset-0 bg-navy/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-navy [&_p]:text-navy/70">
              <SectionHeading
                title="Pricing"
                subtitle="Ready to level up your rental game? Stop losing control and income."
              />
            </div>
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
