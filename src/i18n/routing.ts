import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pt-pt", "pt-br"],
  defaultLocale: "en",
});
