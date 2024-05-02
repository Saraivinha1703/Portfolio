import { cn } from "@/lib/utils";
import { useMDXComponent } from "next-contentlayer/hooks";
import { CodeSnippet } from "../code-snippet";
import { CodeSnippetFigure } from "../code-snippet/figure";
import { CodeSnippetFigcaption } from "../code-snippet/figcaption";
import Image from "next/image";

const plainTextStyle =
  "text-sm xl:text-lg text-justify tracking-tighter indent-2 sm:indent-4 sm:text-base sm:tracking-normal md:tracking-wide";

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "py-2 text-2xl sm:text-3xl md:py-4 md:text-4xl lg:text-5xl xl:text-6xl font-bold",
        className
      )}
      {...props}
    />
  ),

  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "py-1 text-lg sm:text-xl md:py-2 md:text-2xl lg:text-3xl xl:text-4xl font-semibold",
        className
      )}
      {...props}
    />
  ),

  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "py-1 text-base md:py-2 md:text-lg lg:text-xl xl:text-2xl font-semibold",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("px-4 list-disc")} {...props} />
  ),

  ol: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ol className={cn("px-4 list-decimal")} {...props} />
  ),

  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn(plainTextStyle)} {...props} />
  ),

  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        plainTextStyle,
        "text-primary underline [&>code]:text-primary sm:decoration-transparent hover:decoration-primary hover:underline",
        className
      )}
      target="_blank"
      {...props}
    />
  ),

  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={plainTextStyle} {...props} />
  ),

  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <CodeSnippet data-language={undefined} {...props} />
  ),

  code: ({ ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="bg-accent px-0.5 py-[0.05rem] text-secondary rounded-md sm:px-2 sm:py-[0.1rem]"
      {...props}
    />
  ),

  figure: ({ ...props }: React.HTMLAttributes<HTMLElement>) => (
    <CodeSnippetFigure {...props} />
  ),

  figcaption: ({ ...props }: React.HTMLAttributes<HTMLElement>) => (
    <CodeSnippetFigcaption {...props} />
  ),

  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-2 border-2 border-secondary/20 relative overflow-auto w-full rounded-lg sm:my-4">
      <table
        className={cn("border-collapse table-fixed w-full", className)}
        {...props}
      />
    </div>
  ),

  th: ({
    className,
    ...props
  }: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className={cn(
        "text-lg text-left sm:text-xl p-2 border-r-2 sm:p-4 border-b-2 last:border-r-0 border-secondary/40 bg-accent/70"
      )}
      {...props}
    />
  ),

  td: ({
    className,
    ...props
  }: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      className={cn(
        "text-xs text-left sm:text-base p-1 border-r-2 sm:p-2 border-b last:border-r-0 border-secondary/40"
      )}
      {...props}
    />
  ),

  blockquote: ({
    className,
    ...props
  }: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={cn("mt-4 border-l-2 pl-6 italic", className)}
      {...props}
    />
  ),

  img: ({
    src,
    alt,
    width,
    height,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <span className="flex w-full p-4 justify-center">
      <Image
        className="transition-all duration-300 rounded-lg ring-2 ring-primary shadow-md shadow-black/20 sm:hover:shadow-lg sm:hover:ring-0"
        src={src ?? ""}
        alt={alt ?? "error on image"}
        width={width ? parseFloat(width as string) : 420}
        height={height ? parseFloat(height as string) : 420}
      />
    </span>
  ),
};

export function MDX({ code }: {code: string}) {
    const Component = useMDXComponent(code)
    return (
      <div>
        <Component components={components} />
      </div>
    )
}