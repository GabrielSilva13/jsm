'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Input } from './ui/input'
import { formUrlQuery } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'

export const SearchForm = () => {
  const [search, setSearch] = useState('')
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const delayDebounceFunction = setTimeout(() => {
      let newUrl = ''
      if (search) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: search,
        })
      } else {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ['query'],
        })
      }

      router.push(newUrl, { scroll: false })
    }, 300)

    return () => clearTimeout(delayDebounceFunction)
  }, [search])

  return (
    <form className="flex-center mx-auto mt-10 w-full sm:-mt-10 sm:px-5">
      <label className="flex-center relative w-full max-w-3xl">
        <Image
          className="absolute left-8"
          src="/magnifying-glass.svg"
          alt="magnifying-glass icon"
          width={32}
          height={32}
        />

        <Input
          placeholder="Procurar"
          type="text"
          className="base-regular h-fit border-0 bg-black-400 py-6 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  )
}
