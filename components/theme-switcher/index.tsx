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

export function ThemeSwitcher() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center" asChild>
        <Button variant="ghost" size="icon">
          {(theme === "light" || resolvedTheme === "light") && (
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
          )}

          {(theme === "dark" || resolvedTheme === "dark") && (
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100" />
          )}

          {theme === "halloween" && (
            <PumpkinMaskIcon className="w-4 h-4 fill-foreground" />
          )}

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("halloween")}>
          Halloween
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
