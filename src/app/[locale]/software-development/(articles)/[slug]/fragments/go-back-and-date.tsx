import { GoBackButton } from "@/components/go-back-button";
import { format, parseISO } from "date-fns";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

type GoBackAndDateProps = {
  date: string;
  messages: AbstractIntlMessages;
  locale: string;
};

export function GoBackAndDate({ date, messages, locale }: GoBackAndDateProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <NextIntlClientProvider messages={messages} locale={locale}>
        <GoBackButton />
      </NextIntlClientProvider>
      <time dateTime={date} className="text-xs text-muted">
        {format(parseISO(date), "LLLL d, yyyy")}
      </time>
    </div>
  );
}