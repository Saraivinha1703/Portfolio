import { NextIntlClientProvider, useLocale, useMessages, useTranslations } from "next-intl";
import { ClosableWarning } from "@/components/closable-card-warning";
import { ArticlesSearch } from "./fragments/articles-search";

export default function SoftwareDevelopmentPage() {
  const genericTranslations = useTranslations();
  const warningTranslation = useTranslations(
    "articles.software-development"
  );

  const messages = useMessages()
  const locale = useLocale()

  return (
    <div className="flex flex-col gap-8 items-center w-full p-4 sm:px-12">
        <ClosableWarning
          content={warningTranslation("warning")}
          title={genericTranslations("warning")}
        />

      <NextIntlClientProvider messages={messages} locale={locale}>
        <ArticlesSearch />
      </NextIntlClientProvider>
    </div>
  );
}

