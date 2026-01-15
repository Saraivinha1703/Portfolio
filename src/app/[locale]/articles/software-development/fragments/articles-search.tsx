'use client'

import { useTranslations } from "next-intl";
import { ChangeEvent, useEffect, useState } from "react";
import { ArticlesNavigationProps } from "../../../software-development/(articles)/fragments/articles-side-navigation";
import { compareDesc, format, parseISO } from "date-fns";
import { allSoftwareDevelopments } from "@/.contentlayer/generated";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";
import { Link } from "@/src/i18n/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PiInfo, PiMagnifyingGlass, PiMaskSadThin, PiWarning } from "react-icons/pi";
import { searchSoftwareDevelopmentArticles } from "@/lib/search-software-development-articles";
import { ArticleSearchSkeleton } from "./article-search-skeleton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function ArticlesSearch() {
  //TODO: load navigation files from server
  const [notFoundText, setNotFoundText] = useState<string>("");
  const [articlesNav, setArticlesNav] = useState<ArticlesNavigationProps[] | undefined>(undefined);
  const articlesTranslations = useTranslations('articles');
  const genericTranslations = useTranslations();

  useEffect(() => {
    let tempArr: ArticlesNavigationProps[] = [];
    const docs = allSoftwareDevelopments.sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date))
    );

    docs.map((doc) => {
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
      setArticlesNav(() => { 
        const arr = searchSoftwareDevelopmentArticles(e) 
        if(arr?.length === 0) {
          setNotFoundText(e.target.value)
        }
        return arr
      });
    },
    450
  );

  return (
    <div className="flex flex-col w-full items-center gap-6 lg:gap-14">
      <div className="relative group flex items-center w-full sm:w-3/4 lg:w-1/2">
        <PiMagnifyingGlass
          size={20}
          className="absolute left-3 text-foreground/70"
        />
        <Input
          type="search"
          onChange={handleSearch}
          placeholder={articlesTranslations("search")}
          className="pl-10 w-full"
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="ml-2 border-0 ring-0 bg-transparent text-amber-400 hover:text-amber-300 group-hover:animate-pulse hover:bg-transparent"
            >
              <PiInfo size={23} />
            </Button>
          </DialogTrigger>
          <DialogContent 
          onOpenAutoFocus={(e) => e.preventDefault()} 
          className="w-4/5 text-amber-400 border-amber-400 bg-background backdrop-blur-sm rounded-md supports-[backdrop-filter]:bg-background/40 sm:w-full">
              <DialogHeader>
                <DialogTitle className="flex gap-2 items-center">
                  <PiWarning size={30} />
                  {genericTranslations("warning")}
                </DialogTitle>
                <DialogDescription className="text-amber-400">
                  {articlesTranslations("software-development.warning")}
                </DialogDescription>
              </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-col w-full justify-center items-center gap-4 sm:flex-row sm:flex-wrap sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16">
        {articlesNav?.length === 0 && (
          <div className="flex flex-col w-full gap-4 items-center">
            <h1 className="text-lg sm:text-xl lg:text-2xl">
              {articlesTranslations("not-found")}
              <i className="text-secondary font-extralight">
                &quot;{notFoundText}&quot;
              </i>
            </h1>
            <PiMaskSadThin className="w-14 h-14 md:w-20 md:h-20" />
          </div>
        )}
        {articlesNav === undefined ? (
          <>
            <ArticleSearchSkeleton />
            <ArticleSearchSkeleton />
            <ArticleSearchSkeleton />
            <ArticleSearchSkeleton />
            <ArticleSearchSkeleton />
            <ArticleSearchSkeleton />
            <ArticleSearchSkeleton />
            <ArticleSearchSkeleton />
          </>
        ) : (
          articlesNav.map((post, idx) => <PostCard key={idx} {...post} />)
        )}
      </div>
    </div>
  );
}

function PostCard(post: ArticlesNavigationProps) {
  return (
    <Link
      className="h-fit w-full sm:w-2/5 lg:w-1/4 xl:w-1/6"
      href={`/${post.flattenedPath}`}
    >
      <Card className="max-h-72 overflow-hidden transition-colors duration-500 hover:border-primary hover:bg-primary/10 hover:text-primary">
        <CardHeader>
          <CardTitle>
            <div className="py-1 max-h-16 font-semibold text-transparent bg-clip-text bg-gradient-to-b from-80% from-foreground to-transparent">
              {post.customTitle ?? post.title}
            </div>
          </CardTitle>
          <CardDescription>
            {format(parseISO(post.date), "dd/MM/yyyy")}
          </CardDescription>
        </CardHeader>
        <CardContent className="h-20 sm:h-36 md:h-52 text-ellipsis font-semibold text-transparent bg-clip-text bg-gradient-to-b from-50% from-foreground to-transparent">
          {post.description}
        </CardContent>
      </Card>
    </Link>
  );
}
