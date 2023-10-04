'use client'

import { formUrlQuery } from '@/lib/utils'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'

const links = [
  'todos',
  'Next 13',
  'front-end',
  'back-end',
  'fullstack',
  'outros',
]

export const Filters = () => {
  const [active, setActive] = useState('')
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleFilter = (link: string) => {
    let newUrl = ''

    if (active === link) {
      setActive('')
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ['category'],
      })
    } else {
      setActive(link)
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: link.toLowerCase(),
      })
    }

    router.push(newUrl, { scroll: false })
  }

  return (
    <ul className="body-text flex w-full max-w-full gap-2 overflow-auto py-12 text-white-800 sm:max-w-2xl">
      {links.map((link) => (
        <button
          className={`whitespace-nowrap rounded-lg px-8 py-2.5 capitalize ${
            active === link ? 'gradient_blue-purple' : ''
          }`}
          key={link}
          onClick={() => handleFilter(link)}
        >
          {link}
        </button>
      ))}
    </ul>
  )
}
