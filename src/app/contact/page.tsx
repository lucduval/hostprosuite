import type { Metadata } from "next";
import { Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { FadeUp } from "@/components/motion-wrapper";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with HostProSuite. Call, email, or send us a message.",
  alternates: {
    canonical: "https://hostprosuite.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://hostprosuite.com" },
          { name: "Contact", url: "https://hostprosuite.com/contact" },
        ]}
      />
      <section className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              title="Contact Us"
              subtitle="Have questions? We'd love to hear from you."
            />
          </FadeUp>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <FadeUp delay={0.1}>
              <h3 className="text-xl font-semibold">Send us a message</h3>
              <p className="mt-2 mb-6 text-sm text-muted-foreground">
                Fill out the form and we&apos;ll get back to you as soon as
                possible.
              </p>
              <ContactForm />
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold">Get in touch</h3>
                  <div className="mt-4 space-y-4">
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent-orange"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-orange/10">
                        <Phone className="h-5 w-5 text-accent-orange" />
                      </div>
                      {siteConfig.phone}
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-accent-orange"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-orange/10">
                        <Mail className="h-5 w-5 text-accent-orange" />
                      </div>
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold">Follow us</h3>
                  <div className="mt-4 flex gap-3">
                    <a
                      href={siteConfig.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-accent-orange/10 hover:text-accent-orange"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href={siteConfig.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-accent-orange/10 hover:text-accent-orange"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={siteConfig.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors hover:bg-accent-orange/10 hover:text-accent-orange"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                <div className="rounded-2xl border bg-muted/50 p-6">
                  <h4 className="font-semibold">About HostProSuite</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    HostProSuite&trade; is proudly powered by Booksure&trade;, a
                    South African company with its roots in the financial
                    industry, and over 30 years of experience in the independent
                    accommodation market.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
