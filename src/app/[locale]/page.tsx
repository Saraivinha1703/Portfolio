import { Scene } from "@/components/WebGL/scene";
import { Introduction } from "./fragments/introduction";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Experience } from "./fragments/experience";
import { Paragraph } from "@/components/paragraph";

//https://vercel.com/blog/building-an-interactive-webgl-experience-in-next-js

export default async function Home({params: {locale}}: {params: {locale: string}}) {
  unstable_setRequestLocale(locale);
  const presentationTranslations = await getTranslations("landing-page.presentation");

  return (
    <main className="flex flex-col items-center flex-1">
      <Scene />
      <Introduction />

      <div className="flex flex-col w-full bg-primary gap-2 text-primary-foreground py-4 px-2 sm:py-8 sm:px-4">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl">{presentationTranslations('hello')}</h1>
        <div className="px-4">
          <Paragraph className="text-lg sm:text-xl md:text-2xl">{presentationTranslations('preview')}</Paragraph>
        </div>
      </div>

       <Experience />
    </main>
  );
}
