'use client'
import { cn } from "@/lib/utils"
import { useCodeSnippetContextActions } from "./context";
import { useEffect } from "react";

export function CodeSnippetFigcaption({className, ...props }: React.HTMLAttributes<HTMLElement>) {
    const {setTitle} = useCodeSnippetContextActions()

    useEffect(() => {
      setTitle(props.children as string);
    }, [props.children, setTitle]);

    return <figcaption className={cn("hidden", className)} {...props} />;
}