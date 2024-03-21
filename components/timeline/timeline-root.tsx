export function TimelineRoot({children}: {children: React.ReactNode}) {
    return (
        <div className="flex w-full p-4 pl-8 sm:p-8 sm:justify-center">
            <div className="border-l-2 sm:border-l-4 sm:border-dashed border-primary/50 w-full md:w-3/4 lg:w-7/12">
                {children}
            </div>
        </div>
    )
}