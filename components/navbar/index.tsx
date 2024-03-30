import { AbstractIntlMessages, useLocale, useMessages, useTranslations} from "next-intl"
import { DesktopNavbar } from "./desktop";
import { MobileNavbar } from "./mobile";

export type NavbarProps = {
  messages: AbstractIntlMessages;
  locale: string;
  translations: {
      me: string;
      about: string;
      articles: string;
      goals: string;
      myArts: string;
      cv: string;
  }
}

export function Navbar() {
  const navBarTranslations = useTranslations('navigation-bar');
  const messages = useMessages()
  const locale = useLocale()

  const translations = {
    me: navBarTranslations('me'),
    about: navBarTranslations('about'),
    articles: navBarTranslations('articles'),
    goals: navBarTranslations('goals'),
    myArts: navBarTranslations('my-arts'),
    cv: navBarTranslations('cv'),
  }

  return (
    <nav className="flex top-0 sticky justify-between items-center p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-30 w-full h-16 bg-background/95 border-b border-input">
        <DesktopNavbar locale={locale} messages={messages} translations={translations} />
        <MobileNavbar locale={locale} messages={messages} translations={translations} />
    </nav>
  );
}
