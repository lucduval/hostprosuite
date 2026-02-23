import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChatWidget } from "@/components/chat-widget";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
  SoftwareApplicationJsonLd,
} from "@/components/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "HostProSuite | The smart way to manage short-term rentals",
    template: "%s | HostProSuite",
  },
  description:
    "Take control of your bookings with HostProSuite, the direct booking and payment system built for South African hosts. Zero commissions. Global payments.",
  metadataBase: new URL("https://hostprosuite.com"),
  alternates: {
    canonical: "https://hostprosuite.com",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://hostprosuite.com",
    siteName: "HostProSuite",
    title: "HostProSuite | Direct bookings. Total freedom. Zero commissions.",
    description:
      "Take control of your bookings with HostProSuite. The direct booking and payment system built for South African hosts.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "HostProSuite – Direct bookings. Total freedom. Zero commissions.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HostProSuite | Direct bookings. Total freedom. Zero commissions.",
    description:
      "Take control of your bookings with HostProSuite. The direct booking and payment system built for South African hosts.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <SoftwareApplicationJsonLd />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
