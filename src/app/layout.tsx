import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/global/SmoothScroll";
import CustomCursor from "@/components/global/CustomCursor";
import CursorTrail from "@/components/global/CursorTrail";
import Background3D from "@/components/global/Background3D";
import FloatingDock from "@/components/global/FloatingDock";
import ScrollProgressBar from "@/components/global/ScrollProgressBar";
import ServiceWorkerRegistrar from "@/components/global/ServiceWorkerRegistrar";
import ThemeToggle from "@/components/global/ThemeToggle";
import SoundToggle from "@/components/global/SoundToggle";
import KonamiCode from "@/components/global/KonamiCode";
import JsonLd from "@/components/global/JsonLd";
import NoiseTexture from "@/components/global/NoiseTexture";
import ClientExtras from "@/components/global/ClientExtras";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const BASE_URL = "https://ashwinjauhary.vercel.app";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ashwin Jauhary — Portfolio",
    template: "%s | Ashwin Jauhary",
  },
  description:
    "BCA Student, Web Developer & Tech Enthusiast exploring technology, building projects, and aiming for a future in business & investments.",
  keywords: [
    "Ashwin Jauhary", "React Developer", "Next.js", "Portfolio",
    "BCA Student", "Web Developer", "Three.js", "Full Stack Developer",
    "UI/UX", "India", "Kanpur",
  ],
  authors: [{ name: "Ashwin Jauhary", url: BASE_URL }],
  creator: "Ashwin Jauhary",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Ashwin Jauhary Portfolio",
    title: "Ashwin Jauhary — Portfolio",
    description: "BCA Student, Web Developer & Tech Enthusiast building innovative web experiences.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Ashwin Jauhary" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwin Jauhary — Portfolio",
    description: "BCA Student, Web Developer & Tech Enthusiast.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/icons/icon.png", type: "image/png" }],
    apple: [{ url: "/icons/icon.png" }],
    shortcut: "/icons/icon.png",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head suppressHydrationWarning>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Ashwin" />
        <JsonLd />
      </head>
      <body className={`${inter.className} min-h-screen bg-transparent antialiased`}>
        <ScrollProgressBar />
        <ServiceWorkerRegistrar />
        <KonamiCode />
        <NoiseTexture />
        <SmoothScroll>
          <CustomCursor />
          <CursorTrail />
          <Background3D />
          <FloatingDock />
          <ThemeToggle />
          <SoundToggle />
          <ClientExtras />
          <main className="w-full flex flex-col items-center">
            {children}
          </main>
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  );
}
