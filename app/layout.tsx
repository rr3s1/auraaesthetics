import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans as FontSans , Merienda , Racing_Sans_One as RacingSansOne , Cinzel_Decorative as CinzelDecorative , Cormorant_Garamond as CormorantGaramond } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"

import { Footer } from "@/components/ui/footer/footer";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const fontMerienda = Merienda({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-merienda",
});

const fontRacingSansOne = RacingSansOne({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-racing-sans-one",
});

const fontCinzelDecorative = CinzelDecorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
});

const fontCormorantGaramond = CormorantGaramond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
});

export const metadata: Metadata = {
  title: "AURA Aesthetics",
  description:
    "A beauty clinic system designed to streamline patient registration, appointment scheduling, and medical records management for healthcare providers.",
  icons: {
    icon: "/assets/icons/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/icons/favicon.ico" sizes="any" />
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-site-bg",
          fontSans.variable,
          fontMerienda.variable,
          fontRacingSansOne.variable,
          fontCinzelDecorative.variable,
          fontCormorantGaramond.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
