import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { NameTypeAnimation } from "./introduction-anim";

export async function Introduction() {
  const introductionTranslations = await getTranslations(
    "landing-page.introduction"
  );

  return (
    <div className="flex min-h-[calc(100vh-4rem)] justify-center items-center z-10">
      <div className="flex flex-col gap-4 items-center">
        <div className="relative rounded-full w-40 h-40 border-4 border-primary/70 overflow-hidden">
          <Image
            fill
            priority
            sizes="(max-width: 20rem) 100vw"
            alt="me"
            src="/images/me.jpg"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-extralight text-center sm:text-6xl">
            <NameTypeAnimation />
          </h1>
          <h2 className="text-xl text-center font-normal sm:text-3xl font-jet-brains-mono">
            {introductionTranslations("title-description")}
          </h2>
        </div>
      </div>
    </div>
  );
}
