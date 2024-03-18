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

export function getRandomNumberInRange(min: number, max: number) {
  return Math.random()  * (max - min) + min;
}

export function getGradientStop(ratio: number, leftColor: string, rightColor: string) {
  ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio

  const c0 = leftColor.match(/.{1,2}/g)?.map((oct) => parseInt(oct, 16) * (1 - ratio))
  const c1 = rightColor.match(/.{1,2}/g)?.map((oct) => parseInt(oct, 16) * ratio)
  
  if(c1 === undefined || c0 === undefined) return;

  const ci = [0, 1, 2].map((i) => Math.min(Math.round(c0[i] + c1[i]), 255))

  const color = ci.reduce((a, v) => (a << 8) + v, 0)
  .toString(16)
  .padStart(6, "0")
  
  return `#${color}`
}