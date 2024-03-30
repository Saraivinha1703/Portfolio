import { format, parseISO } from "date-fns";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/src/navigation";
import { cn, scrollbarStyle } from "@/lib/utils";

type CollapsableArticleCardProps = {
  customTitle?: React.ReactElement;
  title: string;
  date: string;
  description: string;
  link: string;
  value: string
};

export function CollapsableArticleCard({title, date, description, link, value, customTitle}: CollapsableArticleCardProps) {
    const articlesTranslations = useTranslations('articles')
    
    return (
      <AccordionItem className="transition-all duration-300 border px-4 rounded-lg hover:border-primary" value={value}>
        <AccordionTrigger className="max-h-24 items-start overflow-hidden text-ellipsis font-semibold text-transparent bg-clip-text bg-gradient-to-b from-55% from-foreground to-transparent">
          <span
            className={cn(
              "max-w-40 lg:max-w-56 overflow-x-auto [&::-webkit-scrollbar]:h-[0.2rem] md:[&::-webkit-scrollbar]:h-[0.3rem]",
              scrollbarStyle
            )}
          >
            {customTitle ?? title}
          </span>
        </AccordionTrigger>
        <AccordionContent>
          <div className="">
            <time>{format(parseISO(date), "dd/MM/yyyy")}</time>
          </div>
          <div className="min-h-fit mb-4 pb-2 max-h-28 text-ellipsis overflow-hidden font-semibold text-transparent bg-clip-text bg-gradient-to-b from-70% from-foreground to-transparent">
            <span>{description}</span>
          </div>
          <Link href={link}>
            <Button>{articlesTranslations("see")}</Button>
          </Link>
        </AccordionContent>
      </AccordionItem>
    ); 
}