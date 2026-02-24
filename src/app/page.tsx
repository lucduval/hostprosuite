import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { FeatureCard } from "@/components/feature-card";
import { ExpandableValueCard } from "@/components/expandable-value-card";
import { PricingCard } from "@/components/pricing-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { HowItWorksStep } from "@/components/how-it-works-step";
import {
  FadeUp,
  SlideFromLeft,
  SlideFromRight,
  ScaleIn,
  Stagger,
  StaggerItem,
} from "@/components/motion-wrapper";
import {
  heroContent,
  valueProps,
  howItWorksSteps,
  features,
  faqs,
  aboutText,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "HostProSuite | Direct bookings. Total freedom. Zero commissions.",
  description:
    "HostProSuite is a direct booking and payment system built for South African short-term rental hosts. No commissions, global payments, and full control over your bookings.",
  alternates: {
    canonical: "https://hostprosuite.com",
  },
};

const badgeStyles = [
  "bg-navy text-white shadow-md",
  "bg-white/90 text-navy shadow-md",
  "bg-accent-orange text-white shadow-md",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-[center_right] bg-cover bg-no-repeat opacity-40 sm:opacity-100"
          style={{ backgroundImage: "url('/images/hero-bg.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <FadeUp>
            <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              {heroContent.headline}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 drop-shadow-md sm:mt-6 sm:text-xl">
              {heroContent.subheadline}
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              {heroContent.badges.map((badge, i) => (
                <span
                  key={badge}
                  className={`inline-block rounded-full px-5 py-2.5 text-center text-xs font-semibold leading-snug whitespace-pre-line sm:px-6 sm:py-3 sm:text-sm ${badgeStyles[i]}`}
                >
                  {badge}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent-orange/30 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              title="Take back control of your bookings and income"
              subtitle="Do you own an apartment, beachside cottage or vacation villa? Are you looking to maximise profits, minimise commissions, and take charge of your direct bookings? HostProSuite was built for you."
            />
          </FadeUp>
          <Stagger className="grid gap-8 md:grid-cols-3">
            {valueProps.map((prop, i) => (
              <StaggerItem key={prop.title}>
                <ExpandableValueCard prop={prop} index={i} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-navy py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading title="How it works" />
          </FadeUp>
          <div className="grid gap-12 md:grid-cols-3">
            {howItWorksSteps.map((step, i) => (
              <HowItWorksStep
                key={step.step}
                step={step}
                index={i}
                isLast={i === howItWorksSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              title="Features"
              subtitle="Accept direct bookings, manage guest interactions, and collect payments, all from an easy-to-use dashboard."
            />
          </FadeUp>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <FeatureCard feature={feature} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: "url('/images/signup-bg.webp')" }}
        />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="flex flex-col items-center justify-between gap-4 rounded-full bg-white/95 px-8 py-5 shadow-xl backdrop-blur-sm sm:flex-row sm:px-12">
              <p className="text-lg font-semibold text-navy">
                Ready to take control?
              </p>
              <CTAButton size="default" />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative overflow-hidden py-20 sm:py-28">
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
          <ScaleIn delay={0.15}>
            <PricingCard />
          </ScaleIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading title="Frequently Asked Questions" />
          </FadeUp>
          <FadeUp delay={0.1}>
            <FAQAccordion items={faqs} />
          </FadeUp>
        </div>
      </section>

      {/* About / Final CTA */}
      <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(244,168,93,0.1)_0%,_transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <SlideFromLeft>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                About us
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
                {aboutText}
              </p>
              <div className="mt-8">
                <CTAButton size="lg">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </CTAButton>
              </div>
            </SlideFromLeft>
            <SlideFromRight>
              <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/30">
                <Image
                  src="/images/lighthouse.png"
                  alt="South African coastal lighthouse at dusk"
                  width={640}
                  height={480}
                  className="h-auto w-full object-cover"
                  priority={false}
                />
              </div>
            </SlideFromRight>
          </div>
        </div>
      </section>
    </>
  );
}
