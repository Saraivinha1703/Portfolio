type TimelineListItemProps = {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
};

export function TimelineListItem({
  children,
  title,
  subtitle,
}: TimelineListItemProps) {
  return (
    <li>
      {title && (
        <h2 className="text-base sm:text-xl md:text-2xl font-extrabold font-jet-brains-mono">
          {title}
        </h2>
      )}
      {subtitle && (
        <h3 className="text-sm sm:text-base md:text-lg font-light text-muted">
          {subtitle}
        </h3>
      )}
      <span>{children}</span>
    </li>
  );
}
