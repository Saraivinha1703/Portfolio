"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PumpkinMaskIcon } from "../icons/pumpkin-mask";
import { GiWaveCrest } from "react-icons/gi";
import { useTranslations } from "next-intl";
import { Skeleton } from "../ui/skeleton";

export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const themeTranslations = useTranslations('navigation-bar.themes');

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Skeleton className="p-1.5 w-8 h-8">
        <Skeleton className="rounded-sm w-full h-full" />
      </Skeleton>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center" asChild>
        <Button variant="ghost" size="icon">
          {resolvedTheme === "light" && (
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
          )}

          {resolvedTheme === "dark" && (
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
          )}

          {resolvedTheme === "halloween" && (
            <PumpkinMaskIcon className="w-4 h-4 fill-foreground" />
          )}

          {resolvedTheme === "ocean" && <GiWaveCrest size={20} />}

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {themeTranslations("light")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {themeTranslations("dark")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("halloween")}>
          {themeTranslations("halloween")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("ocean")}>
          {themeTranslations("ocean")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {themeTranslations("system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
