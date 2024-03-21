type TimelineListItemProps = {
    children?: React.ReactNode;
    title?: string;
}

export function TimelineListItem({children, title}: TimelineListItemProps) {
    return (
        <li>
            {title && <h2 className="text-base sm:text-xl md:text-2xl font-extrabold">{title}</h2>}
            <span>{children}</span>
        </li>
    )
}