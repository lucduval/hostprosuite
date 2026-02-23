import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { CTAButton } from "@/components/cta-button";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { FadeUp, Stagger, StaggerItem } from "@/components/motion-wrapper";
import { features } from "@/lib/data";
import { Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore HostProSuite features: commission-free booking pages, global payments, smart booking management, and more.",
  alternates: {
    canonical: "https://hostprosuite.com/features",
  },
};

export default function FeaturesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://hostprosuite.com" },
          { name: "Features", url: "https://hostprosuite.com/features" },
        ]}
      />
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
        />
        <div className="absolute inset-0 bg-white/75" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              title="Features"
              subtitle="Accept direct bookings, manage guest interactions, and collect payments, all from an easy-to-use dashboard."
            />
          </FadeUp>

          <Stagger className="mt-16 divide-y divide-border/60">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;

              return (
                <StaggerItem key={feature.title}>
                  <div
                    className={`group relative rounded-2xl px-6 py-10 transition-colors duration-300 sm:px-10 sm:py-12 ${
                      isEven ? "bg-transparent" : "bg-muted/40"
                    }`}
                  >
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-orange/10 transition-colors duration-300 group-hover:bg-accent-orange/20">
                        <Icon className="h-6 w-6 text-accent-orange" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-navy sm:text-2xl">
                          {feature.title}
                        </h3>
                        <p className="mt-2 text-base text-muted-foreground sm:text-lg">
                          {feature.description}
                        </p>
                        <ul className="mt-5 space-y-2.5">
                          {feature.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-start gap-3 text-sm sm:text-base"
                            >
                              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-orange" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="bg-navy py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Ready to take control?
            </h2>
            <p className="mt-4 text-base text-white/80 sm:text-lg">
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
