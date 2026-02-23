import {
  CreditCard,
  Globe,
  LayoutDashboard,
  Sparkles,
  BarChart3,
  Users,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "HostProSuite",
  tagline: "The smart way to manage short-term rentals",
  url: "https://hostprosuite.com",
  signUpUrl: "https://booksure.com/signup?package=hostpro",
  signInUrl: "https://booksure.com/signin",
  privacyUrl: "https://booksure.com/privacy",
  termsUrl: "https://booksure.com/terms",
  phone: "+27 72 747 5517",
  email: "info@booksure.com",
  socials: {
    facebook: "https://www.facebook.com/HostProSuite",
    linkedin: "https://www.linkedin.com/company/hostprosuite",
    instagram: "https://www.instagram.com/hostprosuite/",
  },
  company: "Magus Ventures (Pty) Ltd",
  poweredBy: "Booksure",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export const heroContent = {
  headline: "Direct bookings. Total freedom. Zero commissions.",
  subheadline:
    "Take control of your bookings with HostProSuite\u2122, the new direct booking and payment system built for South African hosts.",
  cta: "Sign Up",
  badges: [
    "Stop paying commissions.\nStart owning your bookings.",
    "Direct bookings. Global payments.\nZero middlemen.",
    "MORE money. MORE control.\nOne smart booking system.",
  ],
};

export interface ValueProp {
  title: string;
  description: string;
  bullets: string[];
}

export const valueProps: ValueProp[] = [
  {
    title: "OTAs take 15\u201330% of your money. Not anymore.",
    description:
      "Take control of your bookings. With HostProSuite, your earnings stay where they belong \u2013 with you. Maximise commission free bookings and earn direct.",
    bullets: [
      "No website needed",
      "Accept global payments",
      "Say goodbye to commission fees",
    ],
  },
  {
    title: "Book direct. Get paid fast.",
    description:
      "Why hand over your profits to Airbnb and Booking.com? With HostProSuite, you get a professional booking page, automated guest messages, and secure payments.",
    bullets: ["Keep your booking income", "Unlock your independence today"],
  },
  {
    title: "Tired of algorithm games & high fees?",
    description:
      "Get off the OTA hamster wheel. Stop letting online travel agents eat your income. HostProSuite gives you the tools to run your rental your way. Your property. Your rules. Your revenue.",
    bullets: ["Instant bookings", "Flat fee, no commissions"],
  },
];

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    title: "Sign up & register your property",
    description:
      "Create your account in minutes. Add your property details, upload photos, and set your pricing \u2014 no technical skills needed.",
  },
  {
    step: 2,
    title: "Set up your booking page",
    description:
      "Add your booking terms, customise your branding, and start accepting payments directly from your page. Your booking site is ready to share instantly.",
  },
  {
    step: 3,
    title: "Start accepting direct bookings",
    description:
      "You now have your own professional booking page where guests can book directly with you. Market it to your past guests, share it on social media, and keep more of your income.",
  },
];

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
}

export const features: Feature[] = [
  {
    icon: CreditCard,
    title: "Commission-Free Direct Booking Page",
    description: "Professional booking page \u2013 no website required",
    bullets: [
      "Real-time availability calendar, enquiry and booking forms",
      "Fully customisable with your property name, colours, and images",
      "Shareable on Facebook, Instagram, WhatsApp, and Google",
    ],
  },
  {
    icon: Globe,
    title: "Global Payment Gateway",
    description:
      "Accept local and international credit and debit card payments",
    bullets: [
      "No merchant account or minimum monthly volumes required",
      "Competitive payment transaction fees",
      "Secure and fully managed by Booksure",
      "Payout within 2\u20134 business days",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Smart Booking Management",
    description:
      "Centralised dashboard for enquiries, bookings, guest details and payments",
    bullets: [
      "Flexible pricing tools: long-stay discounts, seasonal rates, and last-minute deals",
      'Toggle between "Instant Book" and "Request to Book" for full control',
    ],
  },
  {
    icon: Sparkles,
    title: "Customisable Guest Experience",
    description:
      "Add optional add-ons: airport pickup, housekeeping, late check-out",
    bullets: [
      "Personalise your Terms & Conditions, cancellation policy, and house rules",
      "Automated guest confirmations, reminders and receipts",
    ],
  },
  {
    icon: BarChart3,
    title: "Reports & Record Keeping",
    description:
      "Download income reports and outstanding payments for performance tracking",
    bullets: [
      "Manage invoices, outstanding balances, and security deposits",
      "Export guest lists for email or WhatsApp marketing",
    ],
  },
  {
    icon: Users,
    title: "Co-Host & Multi-Properties",
    description: "Assign co-hosts to manage bookings on your behalf",
    bullets: [
      "Easily scale to additional units without having to switch platforms",
    ],
  },
];

export const pricing = {
  planName: "Host Pro Suite",
  currency: "R",
  amount: 200,
  period: "monthly",
  features: [
    "2 User accounts",
    "Booking page",
    "Statistical reporting",
    "Guest invoicing",
    "Secure payment gateway",
    "Up to 10 Properties",
  ],
  paymentMethods: ["Visa", "Mastercard", "American Express", "Diners Club"],
  payoutPeriod: "2\u20134 day payout period",
};

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question:
      "Can HostProSuite work alongside OTAs like Airbnb and Booking.com?",
    answer:
      "Yes, we have a Booking.com integration. Many hosts list on OTAs to attract new guests but encourage repeat visitors to book directly. That way you get visibility while saving commissions on return bookings.",
  },
  {
    question: "Can I use it for repeat guests?",
    answer:
      "Yes! If you get the same guests coming back each year, you can send them your HostProSuite booking link directly. That way, they book with you, avoid OTA fees, and you save on commissions.",
  },
  {
    question: "How is HostProSuite different from Airbnb or Booking.com?",
    answer:
      "Unlike the big OTAs, there are no commission charges. You keep your income, set your own rules, and get paid directly, without relying on algorithms or middlemen.",
  },
  {
    question: "How much does it cost compared to OTAs?",
    answer:
      "It\u2019s R200/month with a small 4% transaction fee for secure payments. By comparison, OTAs typically take 15\u201330% of every booking, so the savings add up quickly, especially with regulars.",
  },
  {
    question: "Do I need a website to use HostProSuite?",
    answer:
      "No. You\u2019ll get a ready-to-use booking page that can be shared on Facebook, Instagram, WhatsApp, and Google. Making it easy for guests to book directly with you.",
  },
];

export const aboutText =
  "HostProSuite\u2122 is proudly powered by Booksure\u2122, a South African company with its roots in the financial industry, and over 30 years of experience in the independent accommodation market.";
