export function TimelineList({children}: {children: React.ReactNode}) {
    return (
        <ul className="flex flex-col px-2 gap-1 sm:p-0 sm:gap-3 list-disc">
            {children}
        </ul>
    )
}