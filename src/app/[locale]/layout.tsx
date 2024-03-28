import "../globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { LayoutProps } from "@/types/layout-props";
import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";

const inter = Quicksand({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Carlos Neto",
};

type LocaleLayoutProps = LayoutProps & {
  params: {locale: string}
}

export default function RootLocaleLayout({ children, params: { locale } }: LocaleLayoutProps) {
  const ScrollbarStyle =
    "[&::-webkit-scrollbar]:w-[0.4rem] [&::-webkit-scrollbar-track]:bg-accent [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb:hover]:bg-primary/70";

  return (
    <html lang={locale}>
      <body className={cn(ScrollbarStyle, inter.className)}>
        <ThemeProvider
          attribute="class"
          themes={["light", "dark", "halloween", "ocean"]}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
