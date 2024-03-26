'use client'

import { cn, scrollbarStyle } from "@/lib/utils";
import { Button } from "../ui/button";
import { PiCheck, PiClipboard } from "react-icons/pi";
import { useState } from "react";

export function CodeSnippet({
    content,
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLPreElement>) {
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
            "relative w-full transition duration-500 my-2 border-2 shadow-sm shadow-black/40 border-[#FF79C6]/40 rounded-md [&>div>code]:bg-transparent sm:shadow-md sm:shadow-black/40 sm:my-4 sm:rounded-lg md:w-3/4 lg:w-2/3 xl:w-1/ hover:shadow-lg hover:shadow-black/50",
            className
          )}
          {...props}
        >
          <Button
            onClick={handleCopy}
            variant="outline"
            className="p-1 absolute top-2 right-2 bg-[#282A36] border-[#FF79C6] sm:top-3 sm:right-3 sm:p-2 hover:bg-[#3d3f52] sm:flex sm:gap-2"
          >
            <Icon className="mx-0.5 h-4 w-4 sm:m-0 sm:h-6 sm:w-6" />
            <span className="hidden sm:inline">
              {hasCopied ? "Copied!" : "Copy"}
            </span>
          </Button>
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