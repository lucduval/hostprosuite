import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { FAQAccordion } from "@/components/faq-accordion";
import { FAQPageJsonLd, BreadcrumbJsonLd } from "@/components/json-ld";
import { FadeUp } from "@/components/motion-wrapper";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about HostProSuite: how it works, pricing, OTA compatibility, and more.",
  alternates: {
    canonical: "https://hostprosuite.com/faqs",
  },
};

export default function FAQsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://hostprosuite.com" },
          { name: "FAQs", url: "https://hostprosuite.com/faqs" },
        ]}
      />
      <FAQPageJsonLd faqs={faqs} />
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading title="Frequently Asked Questions" />
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-12">
              <FAQAccordion items={faqs} />
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
