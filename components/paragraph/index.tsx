import { cn } from "@/lib/utils"

export type ParagraphProps = {children: React.ReactNode, className?: string}

export function Paragraph({ children, className }: ParagraphProps) {
  return (
    <div
      className={cn(
        "text-sm xl:text-lg text-justify indent-2 tracking-tighter sm:indent-4 sm:text-base sm:tracking-normal md:indent-8 md:tracking-wide",
        className
      )}
    >
      {children}
    </div>
  );
}