import "../globals.css";
import type { Metadata } from "next";
import { JetBrains_Mono, Quicksand } from "next/font/google";
import { LayoutProps } from "@/types/layout-props";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { locales } from "@/types/locales";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Quicksand({
  subsets: ["latin"],
  weight: "400",
});
const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"], 
  weight: "400", 
  variable: "--jet-brains-mono"
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
type LocaleLayoutProps = LayoutProps & {
  params: {locale: string}
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  const ScrollbarStyle =
    "[&::-webkit-scrollbar]:w-[0.4rem] [&::-webkit-scrollbar-track]:bg-accent [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb:hover]:bg-primary/70";

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/images/me.jpg" type="image/jpg" sizes="any" />
      </head>
      <body className={cn(ScrollbarStyle, inter.className, jetBrainsMono.variable)}>
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

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
