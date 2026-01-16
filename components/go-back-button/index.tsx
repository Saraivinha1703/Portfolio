'use client'

import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import {MdArrowBack} from "react-icons/md"
import { useRouter } from 'next/navigation'
import { cn } from "@/lib/utils";

export function GoBackButton({className, ...props}: React.ComponentProps<typeof Button>) {
    const genericTranslations = useTranslations()
    const router = useRouter()

    return (
      <>
        <Button
          onClick={() => router.back()}
          variant="outline"
          size="icon"
          className={cn("w-6 h-6 sm:hidden", className)}
          {...props}
        >
          <MdArrowBack className="w-4 h-4" />
        </Button>
        <Button
          onClick={() => router.back()}
          size="sm"
          variant="outline"
          className={cn("hidden sm:flex sm:gap-1 p-2", className)}
          {...props}
        >
          <MdArrowBack className="sm:w-4 sm:h-4" />
          <span>{genericTranslations("go-back")}</span>
        </Button>
      </>
    );
}
