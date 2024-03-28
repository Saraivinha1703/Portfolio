import { compareDesc, format, parseISO } from "date-fns";
import { allDocuments, SoftwareDevelopment } from "contentlayer/generated";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/src/navigation";
import { useTranslations } from "next-intl";
import { ClosableWarning } from "@/components/closable-card-warning";
import { cn, scrollbarStyle } from "@/lib/utils";

export default function SoftwareDevelopmentPage() {
  const genericTranslations = useTranslations()
  const warningTranslation = useTranslations('documentation.software-development')
  
  const posts = allDocuments.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

    return (
      <div className="flex flex-col gap-8 w-full p-4 sm:px-12 sm:py-8">
        <div className="flex justify-center p-0">
          <ClosableWarning
            content={warningTranslation("warning")}
            title={genericTranslations("warning")}
          />
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-4 sm:flex-row sm:flex-wrap sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </div>
      </div>
    );
}

function PostCard(post: SoftwareDevelopment) {
    return (
      <Link
        className="h-fit w-full sm:w-2/5 lg:w-1/4 xl:w-1/6"
        href={`/${post.url}`}
      >
        <Card className="max-h-72 overflow-hidden transition-colors duration-500 hover:border-primary hover:bg-primary/10 hover:text-primary">
          <CardHeader>
            <CardTitle>
              <div className={cn("overflow-x-auto overflow-y-hidden [&::-webkit-scrollbar]:h-[0.2rem] sm:[&::-webkit-scrollbar]:h-[0.3rem]", scrollbarStyle)}>
                {post.title}
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