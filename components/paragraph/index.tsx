export function Paragraph({children}: {children: React.ReactNode})
{
    return (
        <p className="text-justify indent-2 sm:indent-4 md:indent-8 tracking-tighter sm:tracking-normal md:tracking-wide">{children}</p>
    )
}