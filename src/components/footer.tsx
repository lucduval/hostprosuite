import Link from "next/link";
import { Facebook, Linkedin, Instagram, Phone, Mail } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <span className="text-xl font-bold tracking-tight">
              {siteConfig.name}
              <span className="text-accent-orange">&trade;</span>
            </span>
            <p className="mt-3 text-sm text-white/70">
              Powered by {siteConfig.poweredBy}&trade;
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Quick Links
            </h3>
            <nav className="mt-3 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-accent-orange"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Get in touch
            </h3>
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-accent-orange"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-accent-orange"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/50 transition-colors hover:text-accent-orange"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/50 transition-colors hover:text-accent-orange"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/50 transition-colors hover:text-accent-orange"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} {siteConfig.company}
          </p>
          <div className="flex gap-4 text-xs text-white/50">
            <a
              href={siteConfig.privacyUrl}
              className="transition-colors hover:text-accent-orange"
            >
              Privacy Policy
            </a>
            <a
              href={siteConfig.termsUrl}
              className="transition-colors hover:text-accent-orange"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
