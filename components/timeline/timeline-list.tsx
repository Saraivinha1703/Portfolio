import { cn } from "@/lib/utils";

export function TimelineList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul className={cn("flex flex-col px-2 gap-1 sm:p-0 sm:gap-3 list-disc", className)}>
      {children}
    </ul>
  );
}

