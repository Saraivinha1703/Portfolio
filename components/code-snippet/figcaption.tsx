'use client'
import { cn } from "@/lib/utils"
import { useCodeSnippetContextActions } from "./context";
import { useEffect } from "react";

export function CodeSnippetFigcaption({className, ...props }: React.HTMLAttributes<HTMLElement>) {
    const {setTitle} = useCodeSnippetContextActions()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setTitle(props.children as string), [])

    return <figcaption className={cn("hidden", className)} {...props} />;
}