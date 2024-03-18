import { locales } from "@/types/locales"
import { type ClassValue, clsx } from "clsx"
import { useLocale } from "next-intl"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useLocationLanguageName() : string {
  const locale = useLocale()
  switch(locale)
  {
    case 'en':
      return 'English'
    case 'pt-pt':
      return 'Português (Portugal)'
    case 'pt-br':
      return 'Português (Brasil)'
    default:
      return 'unknown'
  }
}