import { Paragraph } from "@/components/paragraph"
import { useTranslations } from "next-intl"
import { RiGitRepositoryLine } from "react-icons/ri";

export default function AboutPage()
{
    const genericTranslation = useTranslations()
    const aboutTranslations = useTranslations('about')
    const frontEndKeys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const
    const backEndKeys = [0, 1, 2, 3, 4] as const
    const genericKeys = [0, 1, 2] as const
    
    return (
        <main className="flex flex-col w-full justify-between items-center gap-10 p-2 sm:p-4">
            <div className="w-full p-2 rounded-lg transition duration-700 sm:shadow-md sm:shadow-black/5 sm:px-12 sm:py-6 sm:w-3/4 md:px-20 md:py-8 md:w-3/5 hover:bg-transparent hover:ring hover:ring-secondary">
                <h1 className="font-extralight text-xl sm:text-2xl md:text-4xl">{aboutTranslations('description-myself.title')}</h1>
                <Paragraph>{aboutTranslations('description-myself.description')}</Paragraph>

                <ul className="list-disc px-4 text-sm sm:text-base">
                    <div className="py-1 sm:py-2">
                        <li className="text-lg sm:text-xl md:text-2xl">Front-end:</li>
                        <ul className="flex w-full flex-col gap-1 list-disc list-inside">
                            {frontEndKeys.map(key => (
                                <li key={key}>{aboutTranslations.rich(`description-myself.knowladge.front-end.${key}`, {
                                    subtle: chunks => <span className="text-muted font-light text-xs sm:text-sm">{chunks}</span>,
                                    link: chuncks => <a 
                                    className="text-secondary font-light text-xs sm:text-sm hover:underline"
                                    href={chuncks as string}
                                    target="_blank">
                                            <RiGitRepositoryLine className="inline sm:hidden" size={20} />
                                            <div className="w-fit hidden sm:inline">
                                                {genericTranslation('view-repo')}
                                            </div>
                                        </a>
                                    })}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="py-1 sm:py-2">
                        <li className="text-lg sm:text-xl md:text-2xl">Back-end:</li>
                        <ul className="flex flex-col gap-1 list-disc list-inside">
                            {backEndKeys.map(key => (
                                <li key={key}>{aboutTranslations.rich(`description-myself.knowladge.back-end.${key}`, {
                                    subtle: chunks => <span className="text-muted font-light text-xs sm:text-sm">{chunks}</span>
                                })}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {genericKeys.map(key => (
                        <li key={key}>{aboutTranslations.rich(`description-myself.knowladge.generic.${key}`, {
                            subtle: chunks => <span className="text-muted font-light text-xs sm:text-sm">{chunks}</span>
                        })}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex w-full justify-center">
                <span className="text-muted font-extralight text-xs sm:text-sm">{genericTranslation('about.description-myself.knowladge-levels')}</span>
            </div>
        </main>
    )
}