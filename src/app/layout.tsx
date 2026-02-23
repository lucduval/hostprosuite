import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChatWidget } from "@/components/chat-widget";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/json-ld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "HostProSuite | The smart way to manage short-term rentals",
    template: "%s | HostProSuite",
  },
  description:
    "Take control of your bookings with HostProSuite, the direct booking and payment system built for South African hosts. Zero commissions. Global payments.",
  metadataBase: new URL("https://hostprosuite.com"),
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://hostprosuite.com",
    siteName: "HostProSuite",
    title: "HostProSuite | Direct bookings. Total freedom. Zero commissions.",
    description:
      "Take control of your bookings with HostProSuite. The direct booking and payment system built for South African hosts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "HostProSuite | Direct bookings. Total freedom. Zero commissions.",
    description:
      "Take control of your bookings with HostProSuite. The direct booking and payment system built for South African hosts.",
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
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
