import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { ThemeSwitcher } from "../theme-switcher";
import {NextIntlClientProvider, useLocale, useMessages, useTranslations} from "next-intl"
import { Link } from "@/src/navigation";

export function Navbar() {
  const navBarTranslations = useTranslations('navigation-bar');
  const messages = useMessages()
  const locale = useLocale()

  return (
    <nav className="flex top-0 sticky justify-between items-center p-4 backdrop-blur supports-[backdrop-filter]:bg-background/50 z-30 w-full h-16 bg-background border-b border-input">
      <Link href="/" className="relative group">
        <div className="transition-all duration-300 bg-gradient-to-tr from-30% from-purple-500/70 via-50% via-yellow-500/70 to-80% to-rose-600/70 p-[0.1rem] rounded-md opacity-0 group-hover:opacity-100">
          <div className="bg-background p-1 rounded-md">
            <h1 className="text-2xl font-light text-transparent bg-clip-text bg-gradient-to-tr from-30% from-purple-500 via-yellow-500 to-rose-600">
              {navBarTranslations('me')}
            </h1>
          </div>
        </div>

        <div className="absolute transition-all duration-300 top-0 p-[0.1rem] opacity-100 group-hover:opacity-0">
          <div className="bg-transparent p-1 rounded-md">
            <h1 className="text-2xl font-light">{navBarTranslations('me')}</h1>
          </div>
        </div>
      </Link>

      <div className="flex justify-between items-center gap-20">
        <div className="flex gap-4">
          <Link href="/about" className="hover:underline">
          {navBarTranslations('about')}
          </Link>
          <Link href="/docs" className="hover:underline">
          {navBarTranslations('documentation')}
          </Link>
          <Link href="/my-arts" className="hover:underline">
          {navBarTranslations('my-arts')}
          </Link>
          <Link href="https://google.com" target="_blank" className="hover:underline">
          {navBarTranslations('cv')}
          </Link>
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
    </nav>
  );
}
