import "../globals.css";

import type { Metadata } from "next";
import { JetBrains_Mono, Quicksand } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { locales } from "@/types/locales";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";

const inter = Quicksand({
  subsets: ["latin"],
  weight: "400",
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--jet-brains-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Carlos Neto",
    template: "Carlos Neto | %s",
  },
  description: "My Portfolio",
  authors: [
    {
      name: "Carlos Alberto Saraiva Neto",
      url: "https://github.com/Saraivinha1703/Portfolio",
    },
  ],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  const ScrollbarStyle =
    "[&::-webkit-scrollbar]:w-[0.4rem] [&::-webkit-scrollbar-track]:bg-accent [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb:hover]:bg-primary/70";

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/me.jpg" type="image/jpg" sizes="any" />
      </head>
      <body
        className={cn(ScrollbarStyle, inter.className, jetBrainsMono.variable)}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            themes={["light", "dark", "halloween", "ocean"]}
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
