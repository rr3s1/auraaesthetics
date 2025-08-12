import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans , Merienda , Racing_Sans_One as RacingSansOne , Cinzel_Decorative as CinzelDecorative , Cormorant_Garamond as CormorantGaramond , Playfair_Display as PlayfairDisplay , Montserrat } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";

import { Footer } from "@/components/ui/footer/footer";
import { cn } from "@/lib/utils";

// Optimize font loading with display: swap and preload
const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
});

const fontMerienda = Merienda({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-merienda",
  display: "swap",
});

const fontRacingSansOne = RacingSansOne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-racing-sans-one",
  display: "swap",
});

// Critical fonts for hero section
const fontCinzelDecorative = CinzelDecorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
  display: "swap",
  preload: true,
});

const fontCormorantGaramond = CormorantGaramond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
  display: "swap",
  preload: true,
});

const fontPlayfairDisplay = PlayfairDisplay({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-playfair-display",
  display: "swap",
});

const fontMontserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AURA Aesthetics",
  description:
    "A beauty clinic system designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
  icons: {
    icon: "/assets/icons/logo-icon.svg",
  },
  // Performance optimizations
  other: {
    'theme-color': '#1a1a1a',
    'color-scheme': 'dark light',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-optimized">
       <head>
        {/* Resource hints for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Critical CSS inlined */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-gradient-mask{contain:layout style paint;will-change:transform,opacity}
            .cinzel-decorative-black{transform:translateZ(0);backface-visibility:hidden;perspective:1000px}
            .min-h-screen{min-height:100vh;min-height:100dvh}
            .transform-gpu{transform:translateZ(0);will-change:transform}
            .loading-skeleton{background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%);background-size:200% 100%;animation:loading 1.5s infinite}
            @keyframes loading{0%{background-position:200% 0}100%{background-position:-200% 0}}
          `
        }} />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/icons/favicon.ico" sizes="any" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/assets/icons/logo-icon.svg" as="image" type="image/svg+xml" />
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-site-bg text-rendering-optimized",
          fontSans.variable,
          fontMerienda.variable,
          fontRacingSansOne.variable,
          fontCinzelDecorative.variable,
          fontCormorantGaramond.variable,
          fontPlayfairDisplay.variable,
          fontMontserrat.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <Suspense fallback={null}>
            <SpeedInsights />
          </Suspense>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          <Suspense fallback={<div className="loading-skeleton h-32 w-full" />}>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
