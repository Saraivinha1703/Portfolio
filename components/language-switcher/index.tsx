"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useLocationLanguageName } from "@/lib/utils";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "@/src/i18n/navigation";

export const LanguageSwitcher = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pathname = usePathname();
  const router = useRouter();
  const locationName = useLocationLanguageName();

  if (!mounted) {
    return null;
  }
  function switchLanguage(locale: string) {
	  router.replace(pathname, { scroll: false, locale });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <Button variant="outline" className="hidden sm:inline">
            {locationName}
          </Button>
          <Button variant="outline" size="sm" className="p-2 sm:hidden">
            {locationName}
          </Button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => switchLanguage("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => switchLanguage("pt-pt")}>
          Português (Portugal)
        </DropdownMenuItem>
        {/* <DropdownMenuSeparator />
          <DropdownMenuItem>
            Português (Brasil)
          </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

