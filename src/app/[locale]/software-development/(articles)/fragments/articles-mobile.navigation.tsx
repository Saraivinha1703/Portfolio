"use client";

import { allSoftwareDevelopments } from "@/.contentlayer/generated";
import { CollapsableArticleCard } from "@/components/collapsable-article-card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

export function ArticlesMobileNavigation() {
  //TODO: load navigation files from server
  const [visible, setVisible] = useState<boolean>(false);
  const [articlesNav, setArticlesNav] = useState<ArticlesNavigationProps[]>([]);
  const genericTranslations = useTranslations();

  useEffect(() => {
    let tempArr: ArticlesNavigationProps[] = [];
    allSoftwareDevelopments.map((doc) => {
      tempArr.push({
        title: doc.title,
        flattenedPath: doc._raw.flattenedPath,
        description: doc.description,
        date: doc.date,
        tags: doc.tags,
      });
    });
    setArticlesNav(tempArr);
  }, []);

  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);

      let tempArr: ArticlesNavigationProps[] = [];
      const value = e.target.value.trim();

      allSoftwareDevelopments.map(
        ({ title, tags, _raw, description, date }) => {
          let customTitle: React.ReactElement | undefined = undefined;
          if (value !== "") {
            if (title.includes(value)) {
              const parts = title.split(value);
              customTitle = (
                <span>
                  {parts.map((part, idx) => (
                    <span key={idx}>
                      {part}
                      {idx !== parts.length - 1 ? (
                        <span className="text-primary">{value}</span>
                      ) : (
                        <></>
                      )}
                    </span>
                  ))}
                </span>
              );

              tempArr.push({
                customTitle: customTitle,
                title: title,
                flattenedPath: _raw.flattenedPath,
                description: description,
                date: date,
                tags: tags,
              });
            }
          } else {
            tempArr.push({
              customTitle: customTitle,
              title: title,
              flattenedPath: _raw.flattenedPath,
              description: description,
              date: date,
              tags: tags,
            });
          }
        }
      );
      setArticlesNav(tempArr);
    },
    450
  );

  return (
    <div className="z-50 sticky top-16 h-12 border-b-2 border-input bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/50 md:hidden">
      <div className="relative w-full">
        <div
          className="absolute top-0 flex-1 border-none w-full"
        >
          <Button variant="ghost" onClick={() => setVisible(!visible)} className="bg-transparent w-full justify-start px-4">Menu</Button>
          {visible && <div className="p-4 h-screen bg-background">
            <div className="flex flex-col gap-6">
              <div className="relative flex items-center">
                <PiMagnifyingGlass
                  size={20}
                  className="absolute left-3 text-foreground/70"
                />
                <Input
                  type="search"
                  onChange={handleSearch}
                  placeholder={genericTranslations("search-article")}
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
          </div>}
        </div>
      </div>
    </div>
  );
}
