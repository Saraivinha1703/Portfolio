'use client'

import { allSoftwareDevelopments } from "@/.contentlayer/generated";
import { CollapsableArticleCard } from "@/components/collapsable-article-card";
import { Accordion } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { searchSoftwareDevelopmentArticles } from "@/lib/search-software-development-articles";
import { useTranslations } from "next-intl";
import { ChangeEvent, useEffect, useState } from "react";
import { PiMagnifyingGlass } from "react-icons/pi";
import { useDebouncedCallback } from "use-debounce";

export type ArticlesNavigationProps = {
  customTitle?: React.ReactElement;
  title: string;
  description: string;
  date: string;
  flattenedPath: string;
  tags?: string[];
};

export function ArticlesSideNavigation() {
  //TODO: load navigation files from server
  const [articlesNav, setArticlesNav] = useState<ArticlesNavigationProps[]>([]);
  const articlesTranslations = useTranslations('articles')

    useEffect(() => {
      let tempArr: ArticlesNavigationProps[] = []
      allSoftwareDevelopments.map(doc => {
      tempArr.push({
          title: doc.title, 
          flattenedPath: doc._raw.flattenedPath,
          description: doc.description,
          date: doc.date,
          tags: doc.tags
      })
      })
    setArticlesNav(tempArr)
  }, [])

  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const a = setArticlesNav(searchSoftwareDevelopmentArticles(e));
    },
    450
  );

    return (
      <div className="hidden px-2 py-4 sticky top-16 w-1/4 border-r-2 overflow-hidden max-h-screen border-input text-sm md:inline md:w-1/3 lg:text-base xl:w-1/4">
        <div className="flex flex-col gap-6">
          <div className="relative flex items-center">
            <PiMagnifyingGlass
              size={20}
              className="absolute left-3 text-foreground/70"
            />
            <Input
              type="search"
              onChange={handleSearch}
              placeholder={articlesTranslations("search")}
              className="pl-10"
            />
          </div>
          <div className="h-fit overflow-y-auto">
            <Accordion
              type="single"
              collapsible
              className="flex flex-col w-full h-full gap-4"
            >
              {articlesNav.map((article, idx) => (
                <CollapsableArticleCard
                  value={`item-${idx}`}
                  link={`/${article.flattenedPath}`}
                  date={article.date}
                  description={article.description}
                  title={article.title}
                  customTitle={article.customTitle}
                  key={article.title}
                />
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    );
}