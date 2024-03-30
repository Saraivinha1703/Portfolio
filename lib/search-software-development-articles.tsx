import { allSoftwareDevelopments } from "@/.contentlayer/generated";
import { ArticlesNavigationProps } from "@/src/app/[locale]/software-development/(articles)/fragments/articles-side-navigation";
import { ChangeEvent } from "react";

export const searchSoftwareDevelopmentArticles = (e: ChangeEvent<HTMLInputElement>) => {
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
    return tempArr
  }