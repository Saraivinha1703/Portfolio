'use client'

import { useState } from "react"
import { CodeSnippetContextActions, CodeSnippetContextValues } from "./context"

export function CodeSnippetFigure({...props}: React.HTMLAttributes<HTMLElement>) {
    const [title, setTitle] = useState<string | undefined>()

    return (
        <figure {...props}>
        <CodeSnippetContextActions.Provider value={{setTitle}}>
            <CodeSnippetContextValues.Provider value={{title}}>
            {props.children}
            </CodeSnippetContextValues.Provider>
        </CodeSnippetContextActions.Provider>
        </figure>
    )
}