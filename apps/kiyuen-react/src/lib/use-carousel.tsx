import { createContext, useContext } from 'react'

type CarouselProviderState = {
  current: number
  next: () => void
  prev: () => void
}

export const CarouselProviderContext = createContext<CarouselProviderState>({
  current: 0,
  next: () => undefined,
  prev: () => undefined,
})

export function useCarousel(): CarouselProviderState {
  const context = useContext(CarouselProviderContext)
  if (context === undefined) throw new Error('useCarousel must be used within a CarouselProvider')
  return context
}
