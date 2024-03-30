import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { ArticlesSearch } from "./fragments/articles-search";

export const generateMetadata = async () => {
  const navbarTranslations = await getTranslations("navigation-bar");
  return { title: `${navbarTranslations("articles")}` };
};

export default async function SoftwareDevelopmentPage() {
  const [ messages, locale] =
    await Promise.all([
      getMessages(),
      getLocale(),
    ]);

  return (
    <div className="flex flex-col gap-8 items-center w-full p-4 sm:px-12">
      <NextIntlClientProvider messages={messages} locale={locale}>
        <ArticlesSearch />
      </NextIntlClientProvider>
    </div>
  );
}

