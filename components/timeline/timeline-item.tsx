import { cn } from "@/lib/utils";

type TimelineItemProps = {
  children: React.ReactNode;
  icon: React.ReactElement;
  title: string;
  itemClassName?: string;
  subtitle?: string;
  date?: string;
  className?: string;
};

export function TimelineItem({
  children,
  icon,
  className,
  itemClassName,
  title,
  date,
  subtitle,
}: TimelineItemProps) {
  return (
    <div className="flex py-1 w-full sm:py-4 md:py-6">
      <div
        className={cn(
          "bg-background bg-linear-to-br from-background to-foreground/20 h-fit rounded-full border-2 border-primary -translate-x-5.5 sm:-translate-x-7 md:-translate-x-9",
          className,
        )}
      >
        <div className="relative w-10 h-10 overflow-hidden rounded-full p-1 sm:w-12 sm:h-12 md:w-16 md:h-16">
          {icon}
        </div>
      </div>
      <div
        className={cn(
          "flex flex-col gap-2 transition duration-500 border-2 border-primary h-fit w-full shadow-md shadow-black/5 rounded-lg p-4 sm:gap-4 sm:shadow-black/10 sm:border-0 sm:bg-popover sm:px-12 hover:bg-transparent sm:hover:ring-2 sm:hover:ring-secondary",
          itemClassName,
        )}
      >
        <div className="flex flex-col gap-1 justify-between">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold font-jet-brains-mono">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-lg sm:text-xl md:text-2xl font-light text-muted">
              {subtitle}
            </h2>
          )}
          <span className="text-muted text-xs sm:text-sm md:text-base">
            {date}
          </span>
        </div>
        <div className="text-sm sm:text-base xl:text-lg">{children}</div>
      </div>
    </div>
  );
}
