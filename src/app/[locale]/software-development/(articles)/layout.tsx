import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import { ArticlesSideNavigation } from "./fragments/articles-side-navigation";

export default function ArticlesLayout({children}: {children: React.ReactNode}) {
  const messages = useMessages()
  const locale = useLocale()

    return (
      <div className="relative flex flex-col md:flex-row">
        <div className="flex z-50 items-center sticky p-4 top-16 h-10 border-b-2 border-input bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/50 md:hidden">
          <span>mobile navigation</span>
        </div>

          <NextIntlClientProvider messages={messages} locale={locale}>
            <ArticlesSideNavigation />
          </NextIntlClientProvider>

        <main className="w-full overflow-hidden">{children}</main>

        {/* <div className="hidden sticky top-16 right-0 w-1/5 h-fit text-right border-l-2 border-input text-sm lg:inline md:w-1/2 lg:text-base xl:w-2/5">
          <span>article inner links</span>
        </div> */}
      </div>
    );
} 