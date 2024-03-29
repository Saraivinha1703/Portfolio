'use client'

import { useTranslations } from "next-intl";
import { ChangeEvent, useEffect, useState } from "react";
import { ArticlesNavigationProps } from "../../../software-development/(articles)/fragments/articles-side-navigation";
import { compareDesc, format, parseISO } from "date-fns";
import { allSoftwareDevelopments } from "@/.contentlayer/generated";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/ui/input";
import { Link } from "@/src/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PiMagnifyingGlass } from "react-icons/pi";

export function ArticlesSearch() {
  //TODO: load navigation files from server
  const [articlesNav, setArticlesNav] = useState<ArticlesNavigationProps[]>([]);
  const genericTranslations = useTranslations();

  useEffect(() => {
    let tempArr: ArticlesNavigationProps[] = [];
    const posts = allSoftwareDevelopments.sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date))
    );

    posts.map((doc) => {
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

     allSoftwareDevelopments.map(({ title, tags, _raw, description, date }) => {
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
     });
     setArticlesNav(tempArr);
   },
   450
 );

  return (
    <div className="flex flex-col items-center gap-6 lg:gap-14">
      <div className="relative flex items-center w-full sm:w-3/4 lg:w-1/2">
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
      <div className="flex flex-col w-full justify-center items-center gap-4 sm:flex-row sm:flex-wrap sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16">
        {articlesNav.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
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