import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { FAQAccordion } from "@/components/faq-accordion";
import { FAQPageJsonLd } from "@/components/json-ld";
import { FadeUp } from "@/components/motion-wrapper";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Frequently asked questions about HostProSuite: how it works, pricing, OTA compatibility, and more.",
};

export default function FAQsPage() {
  return (
    <>
      <FAQPageJsonLd faqs={faqs} />
      <section className="bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading title="Frequently Asked Questions" />
          </FadeUp>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <FAQAccordion items={faqs} />
          </FadeUp>
        </div>
      </section>
    </>
  );
}
