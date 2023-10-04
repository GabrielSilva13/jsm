import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import qs from 'query-string'

interface UrlQueryParams {
  params: string
  key?: string
  value?: string | null
  keysToRemove?: string[]
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formUrlQuery({
  params,
  key,
  value,
  keysToRemove,
}: UrlQueryParams) {
  const currentUrl = qs.parse(params)

  if (keysToRemove) {
    keysToRemove.forEach(
      (keyToRemove: string) => delete currentUrl[keyToRemove],
    )
  } else if (key && value) {
    currentUrl[key] = value
  }

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    {
      skipNull: true,
    },
  )
}
