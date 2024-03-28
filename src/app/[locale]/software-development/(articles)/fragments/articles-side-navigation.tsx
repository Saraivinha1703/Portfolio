'use client'

import { allSoftwareDevelopments } from "@/.contentlayer/generated";
import { CollapsableArticleCard } from "@/components/collapsable-article-card";
import { Accordion } from "@/components/ui/accordion";
import { useEffect, useState } from "react";

type ArticlesNavigationProps = {
  title: string;
  description: string;
  date: string;
  flattenedPath: string;
  tags?: string[];
};

export function ArticlesSideNavigation() {
    
  //TODO: load navigation files from server
  const [articlesNav, setArticlesNav] = useState<ArticlesNavigationProps[]>([]);

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
  
  useEffect(() => {
    console.log(articlesNav)
  }, [articlesNav])

    return (
      <div className="hidden sticky top-16 w-1/4 border-r-2 overflow-hidden max-h-screen border-input text-sm md:inline md:w-1/3 lg:text-base xl:w-1/4">
        <div className="h-fit overflow-y-auto">
          <Accordion
            type="single"
            collapsible
            className="flex flex-col w-full h-full p-2 gap-4"
          >
            {articlesNav.map((article, idx) => (
              <CollapsableArticleCard
                value={`item-${idx}`}
                link={`/${article.flattenedPath}`}
                date={article.date}
                description={article.description}
                title={article.title}
                key={article.title}
              />
            ))}
          </Accordion>
        </div>
      </div>
    );
}