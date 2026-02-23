import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { CTAButton } from "@/components/cta-button";
import { FadeUp } from "@/components/motion-wrapper";
import { features } from "@/lib/data";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore HostProSuite features: commission-free booking pages, global payments, smart booking management, and more.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              title="Features"
              subtitle="Accept direct bookings, manage guest interactions, and collect payments, all from an easy-to-use dashboard."
            />
          </FadeUp>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isReversed = index % 2 !== 0;

              return (
                <FadeUp key={feature.title}>
                  <div
                    className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
                      isReversed ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex-1">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-orange/10">
                        <Icon className="h-7 w-7 text-accent-orange" />
                      </div>
                      <h3 className="text-2xl font-bold">{feature.title}</h3>
                      <p className="mt-3 text-lg text-muted-foreground">
                        {feature.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {feature.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3"
                          >
                            <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-orange" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-1 items-center justify-center">
                      <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-2xl border border-border/50 bg-gradient-to-br from-accent-orange/5 to-navy/5">
                        <Icon className="h-24 w-24 text-accent-orange/20" />
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to take control?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Start accepting direct bookings today with HostProSuite.
            </p>
            <div className="mt-8">
              <CTAButton size="lg">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </CTAButton>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
