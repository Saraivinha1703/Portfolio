import { Paragraph } from "@/components/paragraph";
import { getTranslations } from "next-intl/server";
import { RiGitRepositoryLine } from "react-icons/ri";

export const generateMetadata = async () => {
  const goalsTranslations = await getTranslations("goals");
  return { title: `${goalsTranslations("title")}` };
};

export default async function GoalsPage() {
  const genericTranslation = await getTranslations();
  const goalsTranslations = await getTranslations("goals");
  const portfolioKeys = [0, 1, 2, 3, 4];
  const myGoalsKeys = [0, 1, 2, 3, 4, 5, 6];

  return (
    <main className="flex flex-col w-full justify-between items-center gap-10 p-2 sm:p-4">
      <div className="w-full p-2 rounded-lg transition duration-700 sm:shadow-md sm:shadow-black/5 sm:px-12 sm:py-6 sm:w-11/12 md:px-20 md:py-8 lg:w-3/4 hover:bg-transparent sm:hover:ring sm:hover:ring-secondary">
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
                {goalsTranslations.rich(`me.description.${key}`,
                { 
                  done: (chuncks) => (
                      <span className="line-through">{chuncks}</span>
                    ),
                    link: (chuncks) => (
                      <a
                      className="text-secondary font-light text-xs sm:text-sm hover:underline"
                      href={chuncks as string}
                      target="_blank"
                      >
                      <RiGitRepositoryLine
                        className="inline sm:hidden"
                        size={20}
                        />

                      <div className="w-fit hidden sm:inline-flex sm:gap-2 sm:align-middle">
                        <RiGitRepositoryLine
                          className="hidden md:inline"
                          size={20}
                          />
                        {genericTranslation("view-repo")}
                      </div>
                    </a>
                  ),
                })}
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </div>
    </main>
  );
}
