'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { Button } from '@/shared/ui'

export const SwitchView = ({}) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = (tableType: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (tableType === 'table') {
      params.set('view', 'table')
    } else {
      params.set('view', 'kanban')
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <>
      <Button mode="ghost" onClick={() => handleClick('table')}>
        Задачи
      </Button>
      <Button mode="ghost" onClick={() => handleClick('kanban')}>
        Канбан
      </Button>
    </>
  )
}
