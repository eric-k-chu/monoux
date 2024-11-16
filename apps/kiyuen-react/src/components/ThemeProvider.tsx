import { type Theme, ThemeProviderContext } from '@/lib'
import { type ReactElement, useEffect, useState } from 'react'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'kiyuen-ui-theme',
  ...props
}: ThemeProviderProps): ReactElement {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
      root.classList.add(systemTheme)
      return
    }
    root.classList.add(theme)
  }, [theme])

  return (
    <ThemeProviderContext.Provider
      {...props}
      value={{
        theme,
        setTheme: (theme: Theme) => {
          localStorage.setItem(storageKey, theme)
          setTheme(theme)
        },
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  )
}
