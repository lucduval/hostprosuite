import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { PricingCard } from "@/components/pricing-card";
import { FadeUp } from "@/components/motion-wrapper";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "HostProSuite pricing: R200/month flat fee, no commissions. Accept Visa, Mastercard, Amex, and Diners Club.",
};

export default function PricingPage() {
  return (
    <>
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              title="Pricing"
              subtitle="Ready to level up your rental game? Stop losing control and income."
            />
          </FadeUp>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <PricingCard />
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
