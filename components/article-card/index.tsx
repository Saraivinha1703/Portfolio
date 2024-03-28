import { format, parseISO } from "date-fns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";

type ArticleCardProps = React.HTMLAttributes<HTMLDivElement> & {
    title: string;
    date: string;
    description: string;
    link: string;
}

export function ArticleCard({title, date, description, className, ...props}: ArticleCardProps) {
    return (
      <Card className={cn("transition-colors duration-500 hover:border-primary hover:bg-primary/10 hover:text-primary", className)} {...props}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {format(parseISO(date), "dd/MM/yyyy")}
          </CardDescription>
        </CardHeader>
        <CardContent className="h-20 sm:h-36 md:h-52 text-ellipsis overflow-hidden font-semibold text-transparent bg-clip-text bg-gradient-to-b from-50% from-foreground to-transparent">
          {description}
        </CardContent>
      </Card>
    );
}