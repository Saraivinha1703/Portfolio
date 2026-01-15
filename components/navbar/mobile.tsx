"use client";

import { Link } from "@/src/i18n/navigation";
import { NextIntlClientProvider } from "next-intl";
import { ThemeSwitcher } from "../theme-switcher";
import { NavbarProps } from ".";
import { MobileNavigation } from "./mobile-navigation";

export function MobileNavbar({translations, messages, locale}: NavbarProps) {
    return (
      <div className="flex w-full justify-between items-center sm:hidden">
        <Link href="/">
          <div className="bg-gradient-to-tr from-secondary/70 to-primary/70 p-[0.1rem] rounded-md">
            <div className="bg-background p-1 rounded-md">
              <h1 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-tr from-secondary to-primary">
                {translations.me}
              </h1>
            </div>
          </div>
        </Link>

        <div className="flex gap-2">
          <div className="border-r border-input px-1">
            <NextIntlClientProvider messages={messages} locale={locale}>
              <ThemeSwitcher />
            </NextIntlClientProvider>
          </div>
          <div className="px-1">
		  <MobileNavigation about={translations.about} articles={translations.articles} goals={translations.goals} />
          </div>
        </div>
      </div>
    );
}
