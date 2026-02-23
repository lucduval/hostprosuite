import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { CTAButton } from "@/components/cta-button";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import {
  FadeUp,
  SlideFromLeft,
  SlideFromRight,
  ScaleIn,
  Stagger,
  StaggerItem,
} from "@/components/motion-wrapper";
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
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              title="Features"
              subtitle="Accept direct bookings, manage guest interactions, and collect payments, all from an easy-to-use dashboard."
            />
          </FadeUp>
          <div className="mt-16 space-y-28">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isReversed = index % 2 !== 0;
              const TextWrapper = isReversed ? SlideFromRight : SlideFromLeft;
              const ImageWrapper = isReversed ? SlideFromLeft : SlideFromRight;

              return (
                <div
                  key={feature.title}
                  className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
                    isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <TextWrapper className="flex-1">
                    <ScaleIn>
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent-orange/10">
                        <Icon className="h-7 w-7 text-accent-orange" />
                      </div>
                    </ScaleIn>
                    <h3 className="text-xl font-bold sm:text-2xl">{feature.title}</h3>
                    <p className="mt-3 text-lg text-muted-foreground">
                      {feature.description}
                    </p>
                    <Stagger className="mt-6 space-y-3">
                      {feature.bullets.map((bullet) => (
                        <StaggerItem key={bullet}>
                          <li className="flex items-start gap-3">
                            <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-orange" />
                            <span>{bullet}</span>
                          </li>
                        </StaggerItem>
                      ))}
                    </Stagger>
                  </TextWrapper>
                  <ImageWrapper className="flex flex-1 items-center justify-center">
                    <div className="group relative flex aspect-[4/3] w-full max-w-xs items-center justify-center overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-accent-orange/5 to-navy/5 transition-shadow duration-500 hover:shadow-xl sm:aspect-square sm:max-w-sm">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/10 via-transparent to-navy/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <Icon className="relative h-16 w-16 text-accent-orange/20 transition-all duration-500 group-hover:scale-110 group-hover:text-accent-orange/40 sm:h-24 sm:w-24" />
                    </div>
                  </ImageWrapper>
                </div>
              );
            })}
          </div>
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
