import "./globals.css";
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


export default function RootLayout({children}: LayoutProps) {
  const ScrollbarStyle =
    "[&::-webkit-scrollbar]:w-[0.4rem] [&::-webkit-scrollbar-track]:bg-accent [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb:hover]:bg-primary/70";

  return (
    <html lang="en">
      <body
        className={cn(
          "relative flex flex-col",
          ScrollbarStyle,
          inter.className
        )}
      >
          <ThemeProvider
            attribute="class"
            themes={["light", "dark", "halloween"]}
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex flex-col flex-1 min-h-screen">
              <Navbar />
              <main className="flex flex-1 h-full">{children}</main>
            </div>

            <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
