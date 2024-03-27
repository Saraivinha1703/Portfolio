'use client'

import { cn, getFileExtensionName, scrollbarStyle } from "@/lib/utils";
import { Button } from "../ui/button";
import { PiCheck, PiClipboard } from "react-icons/pi";
import { useState } from "react";
import { useCodeSnippetContextValues } from "./context";

export type CodeSnippetProps = React.HTMLAttributes<HTMLPreElement> & {'data-language': string | undefined}

export function CodeSnippet({
  content,
  className,
  lang,
  children,
  ...props
}: CodeSnippetProps) {
  const {title} = useCodeSnippetContextValues()
  const [hasCopied, setHasCopied] = useState(false);

  const Icon = hasCopied ? PiCheck : PiClipboard;

  //code from : https://danielwoodward.dev/posts/nextjs/how-i-built-my-personal-blog-with-nextjs-13-vercel-and-contentlayer-post-3
  const getClipboardTextFromChildren = (
    element: React.ReactElement | string
  ): string => {
    if (typeof element === "string") return element;
    if (typeof element.props.children === "string")
      return element.props.children;

    if (Array.isArray(element.props.children)) {
      return element.props.children
        .map((child: React.ReactElement | string) =>
          getClipboardTextFromChildren(child)
        )
        .join("");
    }

    if (typeof element.props.children === "object") {
      return getClipboardTextFromChildren(element.props.children);
    }

    return "";
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(
      getClipboardTextFromChildren(children as React.ReactElement)
    );

    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 3000);
  };

  return (
    <div className="flex w-full justify-center">
      <pre
        className={cn(
          "relative w-full transition duration-500 my-2 border-2 shadow-sm shadow-black/40 border-[#FF79C6]/40 rounded-md [&>div>code]:bg-transparent sm:shadow-md sm:shadow-black/40 sm:my-4 sm:rounded-lg md:w-3/4 lg:w-2/3 xl:w-1/2 hover:shadow-lg hover:shadow-black/50",
          className
        )}
        {...props}
      >
        <div className="sticky top-0 h-10 w-full flex justify-between items-center border-b border-[#FF79C6] p-2 sm:p-4 sm:h-14">
          <span className="text-xs px-1 bg-[#3a3d4d] rounded-md sm:text-base sm:px-2">
            {title}
          </span>

          <div className="flex items-center gap-8 sm:gap-12">
            {props["data-language"] && (
              <span className="text-base font-extralight sm:text-lg text-[#8e93af]">
                {getFileExtensionName(props["data-language"])}
              </span>
            )}

            <Button
              onClick={handleCopy}
              variant="outline"
              className="hidden bg-[#282A36] border-[#FF79C6] sm:p-2 hover:bg-[#3d3f52] hover:text-white sm:flex sm:gap-2"
            >
              <Icon className="mx-0.5 h-4 w-4 sm:m-0 sm:h-6 sm:w-6" />
              <span className="hidden sm:inline">
                {hasCopied ? "Copied!" : "Copy"}
              </span>
            </Button>

            <Button
              onClick={handleCopy}
              size="icon"
              className="h-6 w-6 flex items-center justify-center border-[#FF79C6] sm:hidden"
              variant="outline"
            >
              <Icon className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div
          className={cn(
            "p-2 overflow-auto text-xs sm:text-sm md:text-base sm:p-4",
            "[&::-webkit-scrollbar]:h-[0.2rem] sm:[&::-webkit-scrollbar]:h-[0.4rem]",
            scrollbarStyle
          )}
        >
          {children}
        </div>
      </pre>
    </div>
  );
}