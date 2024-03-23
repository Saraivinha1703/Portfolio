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
            <Button variant="outline">
                {useLocationLanguageName()}
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => switchLanguage('en')}>
            English
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => switchLanguage('pt-pt')}>
            Português (Portugal)
          </DropdownMenuItem>
          {/* <DropdownMenuSeparator />
          <DropdownMenuItem>
            Português (Brasil)
          </DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
    )
}