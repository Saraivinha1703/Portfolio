import { Button } from "../ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { NextIntlClientProvider } from "next-intl";
import { ThemeSwitcher } from "../theme-switcher";
import { Link } from "@/src/navigation";
import { NavbarProps } from ".";

export function DesktopNavbar({ messages, locale, translations }: NavbarProps) {
  return (
    <div className="justify-between hidden sm:flex sm:w-full">
      <Link href="/" className="relative group">
        <div className="transition-all duration-300 bg-gradient-to-tr from-secondary/70 to-primary/70 p-[0.1rem] rounded-md opacity-0 group-hover:opacity-100">
          <div className="bg-background p-1 rounded-md">
            <h1 className="text-2xl select-none font-light text-transparent bg-clip-text bg-gradient-to-tr from-secondary to-primary">
              {translations.me}
            </h1>
          </div>
        </div>

        <div className="absolute transition-all duration-300 top-0 p-[0.1rem] opacity-100 group-hover:opacity-0">
          <div className="bg-transparent p-1 rounded-md">
            <h1 className="text-2xl font-light select-none">
              {translations.me}
            </h1>
          </div>
        </div>
      </Link>

      <div className="flex justify-between items-center gap-6 md:gap-20">
        <div className="flex gap-4">
          <Link href="/about" className="select-none hover:underline">
            {translations.about}
          </Link>
          <Link href="/articles" className="select-none hover:underline">
            {translations.articles}
          </Link>
          <Link href="/goals" className="select-none hover:underline">
            {translations.goals}
          </Link>
          {/* TODO: show paintings, guitar stuff and frames 
            <Link href="/my-arts" className="select-none hover:underline">
          {translations.myArts}
          </Link>
          */}
          <a
            href="/files/PUBLIC_CV_CARLOS_SARAIVA_NT_EN_2024.pdf"
            target="_blank"
            type="pdf"
            className="select-none text-primary hover:underline"
          >
            CV
          </a>
        </div>

        <div className="flex items-center">
          <Link
            className="border-r border-input px-1"
            href="https://www.linkedin.com/in/carlos-saraiva-neto/"
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <LinkedInLogoIcon className="h-4 w-4" />
            </Button>
          </Link>

          <Link
            className="border-r border-input px-1"
            href="https://github.com/Saraivinha1703"
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <GitHubLogoIcon className="h-4 w-4" />
            </Button>
          </Link>

          <div className="px-1">
            <NextIntlClientProvider messages={messages} locale={locale}>
              <ThemeSwitcher />
            </NextIntlClientProvider>
          </div>
        </div>
      </div>
    </div>
  );
}
