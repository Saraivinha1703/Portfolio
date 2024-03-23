import { cn } from "@/lib/utils"

export function Paragraph({children, className}: {children: React.ReactNode, className?: string})
{
    return (
        <p className={cn("text-sm text-justify indent-2 tracking-tighter sm:indent-4 sm:text-base sm:tracking-normal md:indent-8 md:tracking-wide", className)}>
            {children}
        </p>
    )
}