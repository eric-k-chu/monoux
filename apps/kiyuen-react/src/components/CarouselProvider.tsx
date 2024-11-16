import { CARDS } from '@/config'
import { useKeyboard } from '@/lib'
import { CarouselProviderContext } from '@/lib/use-carousel'
import { type PropsWithChildren, type ReactElement, useState } from 'react'

type CarouselProviderProps = PropsWithChildren

export function CarouselProvider({ children }: CarouselProviderProps): ReactElement {
  const [current, setCurrent] = useState(0)

  const next = (): void => {
    setCurrent((p) => (p + 1) % CARDS.length)
  }
  const prev = (): void => {
    setCurrent((p) => (p - 1 + CARDS.length) % CARDS.length)
  }

  useKeyboard((k) => {
    switch (k) {
      case 'l':
      case 'ArrowRight':
        next()
        break
      case 'h':
      case 'ArrowLeft':
        prev()
        break
      default:
        break
    }
  })

  return (
    <CarouselProviderContext.Provider value={{ current, next, prev }}>
      {children}
    </CarouselProviderContext.Provider>
  )
}
