import { Scene } from "@/components/WebGL/scene";
import { Introduction } from "./fragments/Introduction";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

//https://vercel.com/blog/building-an-interactive-webgl-experience-in-next-js

export default function Home() {
  const presentationTranslations = useTranslations('landing-page.presentation')
  return (
    <main className="flex flex-col items-center flex-1">
      <Scene />
      <Introduction />

      <div className="flex flex-col w-full bg-primary gap-2 text-primary-foreground py-4 px-2 sm:py-8 sm:px-4">
        <h1 className="text-3xl font-bold sm:text-5xl">{presentationTranslations('hello')}</h1>
        <div className="text-xl px-4 sm:text-2xl">
          <p>{presentationTranslations('preview')}</p>
        </div>
      </div>
    </main>
  );
}
