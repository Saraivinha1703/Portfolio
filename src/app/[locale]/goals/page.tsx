import { Paragraph } from "@/components/paragraph";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const goalsTranslations = await getTranslations("goals");
  return { title: `${goalsTranslations("title")}` };
};

export default async function GoalsPage() {
    const goalsTranslations = await getTranslations("goals");
    const portfolioKeys = [0, 1, 2, 3, 4]
    const myGoalsKeys = [0, 1, 2, 3, 4, 5]

    return (
      <main className="flex flex-col w-full justify-between items-center gap-10 p-2 sm:p-4">
        <div className="w-full p-2 rounded-lg transition duration-700 sm:shadow-md sm:shadow-black/5 sm:px-12 sm:py-6 sm:w-11/12 md:px-20 md:py-8 lg:w-3/4 hover:bg-transparent hover:ring hover:ring-secondary">
          <h1 className="font-extralight text-xl sm:text-2xl md:text-4xl xl:text-5xl">
            {goalsTranslations("title")}
          </h1>
          <Paragraph>{goalsTranslations("description")}</Paragraph>

          <ul className="list-disc py-1 px-4 text-sm sm:py-2 sm:text-base xl:text-lg">
            <li className="text-lg sm:text-xl md:text-2xl xl:text-3xl">
              {goalsTranslations("portfolio.title")}
            </li>
            <div className="py-1">
              <ul className="list-disc px-2">
                {portfolioKeys.map((key) => (
                  <li key={key}>
                    {goalsTranslations(`portfolio.description.${key}`)}
                  </li>
                ))}
              </ul>
            </div>

            <li className="text-lg sm:text-xl md:text-2xl xl:text-3xl">
              {goalsTranslations("me.title")}
            </li>
            <div className="py-1">
              <ul className="list-disc px-2">
                {myGoalsKeys.map((key) => (
                  <li key={key}>
                    {goalsTranslations(`me.description.${key}`)}
                  </li>
                ))}
              </ul>
            </div>
          </ul>
        </div>
      </main>
    );
}
