"use client";

import { PiList } from "react-icons/pi";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Link, useRouter } from "@/src/i18n/navigation";
import { useEffect, useState } from "react";

type MobileNavigationProps = {
    about: string;
    articles: string;
    goals: string;
}

export function MobileNavigation({about, articles, goals}: MobileNavigationProps) {
    const router = useRouter();

	const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center" asChild>
          <Button variant="outline" size="icon">
            <PiList size={20} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
		{/*<DropdownMenuItem onClick={() => router.push("/about")}>
              {about}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => router.push("/articles")}>
            {articles}
          </DropdownMenuItem>*/}
          <DropdownMenuItem onClick={() => router.push("/goals")}>
            {goals}
          </DropdownMenuItem>
        <DropdownMenuItem className="p-0 hover:bg-linear-to-br hover:from-background/30 hover:to-primary/30 from-40%">
          <a className="w-full h-full p-1.5 text-primary" href="/files/PUBLIC_CV_CARLOS_SARAIVA_NT_EN_2026.pdf" target="_blank">
            CV
          </a>
        </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
}
