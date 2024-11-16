import { GITHUB, LINKEDIN } from '@/config'
import { GitHubLogoIcon, LinkedInLogoIcon, QuestionMarkCircledIcon } from '@radix-ui/react-icons'
import type { ReactElement } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'

export function Socials(): ReactElement {
  return (
    <div className='flex flex-col items-center gap-y-3'>
      <Button asChild className='size-6 p-1' variant='ghost'>
        <a href={GITHUB} target='_blank' rel='noopener noreferrer'>
          <GitHubLogoIcon />
        </a>
      </Button>
      <Button asChild className='size-6 p-1' variant='ghost'>
        <a href={LINKEDIN} target='_blank' rel='noopener noreferrer'>
          <LinkedInLogoIcon />
        </a>
      </Button>
      <Help />
      <ThemeToggle />
    </div>
  )
}

function Help(): ReactElement {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' className='size-6 p-1'>
          <QuestionMarkCircledIcon />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <p className='text-xs'>Clicking on the cards will navigate through the sections.</p>
        <p className='text-xs'>
          Alternatively, the <CSpan t='←' /> or <CSpan t='h' /> and <CSpan t='→' /> or{' '}
          <CSpan t='l' /> keys can be used for navigation.
        </p>
      </DialogContent>
    </Dialog>
  )
}

function CSpan({ t }: { t: string }): ReactElement {
  return <span className='font-bold text-flamingo text-sm'>{t}</span>
}
