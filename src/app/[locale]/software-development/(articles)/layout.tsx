import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, unstable_setRequestLocale } from "next-intl/server";
import { ArticlesSideNavigation } from "./fragments/articles-side-navigation";
import { ArticlesMobileNavigation } from "./fragments/articles-mobile.navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Article",
    template: "%s"
  }
} 

export default async function ArticlesLayout({children, params: {locale}}: {children: React.ReactNode, params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  const [messages, currLocale] = await Promise.all([getMessages(), getLocale()]);

    return (
      <div className="relative flex flex-col md:flex-row">
        <NextIntlClientProvider messages={messages} locale={currLocale}>
          <ArticlesMobileNavigation />
          <ArticlesSideNavigation />
        </NextIntlClientProvider>

        <main className="w-full overflow-hidden">{children}</main>

        {/* <div className="hidden sticky top-16 right-0 w-1/5 h-fit text-right border-l-2 border-input text-sm lg:inline md:w-1/2 lg:text-base xl:w-2/5">
          <span>article inner links</span>
        </div> */}
      </div>
    );
} 