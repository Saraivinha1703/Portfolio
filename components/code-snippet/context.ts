'use client'
import { createContext, useContext } from "react";

type CodeSnippetContextValuesProps = {
    title: string | undefined;
}

export const CodeSnippetContextValues = createContext<CodeSnippetContextValuesProps>({} as CodeSnippetContextValuesProps)
export function useCodeSnippetContextValues() {
    return useContext(CodeSnippetContextValues)
}

type CodeSnippetContextActionsProps = {
  setTitle(title: string | undefined): void;
};

export const CodeSnippetContextActions =
  createContext<CodeSnippetContextActionsProps>(
    {} as CodeSnippetContextActionsProps
  );
export function useCodeSnippetContextActions() {
  return useContext(CodeSnippetContextActions);
}