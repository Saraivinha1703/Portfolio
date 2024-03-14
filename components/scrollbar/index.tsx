import { cn } from "@/lib/utils"

type DirectionVariant = 'both' | 'vertical' | 'horizontal'

type ScrollbarProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
{
    direction?: DirectionVariant
}

export function Scrollbar({
    children,
    direction = 'vertical',
    className,
    ...props
}: ScrollbarProps)
{
    const directionVariantStyle = {
        both: 'overflow-auto [&::-webkit-scrollbar]:w-[0.4rem] [&::-webkit-scrollbar-track]:bg-accent [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb:hover]:bg-primary/70',
        vertical: 'overflow-y-auto [&::-webkit-scrollbar]:w-[0.4rem] [&::-webkit-scrollbar-track]:bg-accent [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb:hover]:bg-primary/70',
        horizontal: 'overflow-x-auto [&::-webkit-scrollbar]:w-[0.4rem] [&::-webkit-scrollbar-track]:bg-accent [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb:hover]:bg-primary/70'
    }

    return (
        <div className={cn(directionVariantStyle[direction], className)} {...props}>
            {children}
        </div>
    )
}