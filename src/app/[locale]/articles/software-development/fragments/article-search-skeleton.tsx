import { Skeleton } from "@/components/ui/skeleton";

export function ArticleSearchSkeleton() {
    return (
      <Skeleton className="flex flex-col gap-4 p-4 h-44 w-full sm:h-36 sm:w-2/5 md:h-52 lg:w-1/4 xl:w-1/6">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-8 w-4/5" />
          <Skeleton className="h-5 w-24" />
        </div>
        <Skeleton className="h-full w-full" />
      </Skeleton>
    );    
}