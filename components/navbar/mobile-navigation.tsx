"use client";

import { PiList } from "react-icons/pi";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useRouter } from "@/src/navigation";

type MobileNavigationProps = {
    about: string;
    articles: string;
    goals: string;
}

export function MobileNavigation({about, articles, goals}: MobileNavigationProps) {
    const router = useRouter();

    return (
        <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center" asChild>
          <Button variant="outline" size="icon">
            <PiList size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => router.push("/about")}>
              {about}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/articles")}>
            {articles}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/goals")}>
            {goals}
          </DropdownMenuItem>
          {/* <DropdownMenuItem>
          <Link href="/my-arts">
            {translations.myArts}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/cv">
            {translations.cv}
          </Link>
        </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    )
}