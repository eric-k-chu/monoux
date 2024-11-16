import type { ReactElement } from 'react'
import { CarouselProvider } from './components/CarouselProvider'
import { Profile } from './components/Profile'
import { Resume } from './components/Resume'
import { ResumeProgress } from './components/ResumeProgress'
import { Socials } from './components/Socials'
import { ThemeProvider } from './components/ThemeProvider'

export function App(): ReactElement {
  return (
    <ThemeProvider defaultTheme='dark'>
      <CarouselProvider>
        <div className='flex min-h-screen items-center justify-center'>
          <section className='flex h-96 justify-center gap-x-3'>
            <Profile />
            <div className='h-full w-56 space-y-4'>
              <Resume />
              <ResumeProgress />
            </div>
            <Socials />
          </section>
        </div>
      </CarouselProvider>
    </ThemeProvider>
  )
}
