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

const inter = Inter({ subsets: ["latin"], display: "swap" });

const BASE_URL = "https://vanshagnihotri.vercel.app";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Vansh Agnihotri — Portfolio",
    template: "%s | Vansh Agnihotri",
  },
  description:
    "BCA Student, React Developer & Digital Creator building next-level interactive web experiences with AI, 3D, and beautiful design.",
  keywords: [
    "Vansh Agnihotri", "React Developer", "Next.js", "Portfolio",
    "BCA Student", "Frontend Developer", "Three.js", "AI Developer",
  ],
  authors: [{ name: "Vansh Agnihotri", url: BASE_URL }],
  creator: "Vansh Agnihotri",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Vansh Agnihotri Portfolio",
    title: "Vansh Agnihotri — Next-Level Portfolio",
    description: "BCA Student, React Developer & Digital Creator.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Vansh Agnihotri" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Agnihotri — Portfolio",
    description: "BCA Student, React Developer & Digital Creator.",
    images: ["/og-image.png"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [{ url: "/icons/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icons/icon.svg" }],
    shortcut: "/icons/icon.svg",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Vansh" />
      </head>
      <body className={`${inter.className} min-h-screen bg-transparent antialiased`}>
        <ScrollProgressBar />
        <ServiceWorkerRegistrar />
        <SmoothScroll>
          <CustomCursor />
          <CursorTrail />
          <Background3D />
          <FloatingDock />
          <main className="relative z-10 w-full flex flex-col items-center">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
