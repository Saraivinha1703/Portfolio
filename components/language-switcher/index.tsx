'use client';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { useLocationLanguageName } from '@/lib/utils';
import { Button } from '../ui/button';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export const LanguageSwitcher = () => {
    const pathname = usePathname()
    const router = useRouter()
    const currentLocale = useLocale()

    function switchLanguage(locale: string)
    {
        const path = pathname.split(`/${currentLocale}`)[1]
        router.push(`/${locale}${path}`, {scroll: false})
    }

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <Button variant="outline" className="hidden sm:inline">
              {useLocationLanguageName()}
            </Button>
            <Button variant="outline" size="sm" className="p-2 sm:hidden">
              {useLocationLanguageName()}
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
}