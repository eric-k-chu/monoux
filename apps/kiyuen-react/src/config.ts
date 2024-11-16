import { formatDateRange } from './lib'

export const GITHUB = 'https://github.com/eric-k-chu'
export const LINKEDIN = 'https://www.linkedin.com/in/eric-k-chu'
export const EXPERIENCE = [
  {
    start: '2024-04-08',
    title: 'Software Engineer',
    company: 'Terros',
    stack: ['SST', 'TypeScript', 'AWS', 'Elasticsearch', 'React Native'],
  },
  {
    start: '2024-02-21',
    end: '2024-03-23',
    title: 'Freelance Web Developer',
    company: 'Randy Mark Auctioneer',
    stack: ['Next.js', 'TypeScript', 'Github Api'],
  },
  {
    start: '2024-01-05',
    end: '2024-04-05',
    title: 'Teaching Assistant',
    company: 'LearningFuze',
    stack: ['React', 'TypeScript', 'Express'],
  },
]
export const EDUCATION = [
  {
    start: '2024-08-28',
    end: '2024-12-08',
    cert: 'Web Dev Bootcamp',
    school: 'LearningFuze',
    projects: [
      {
        name: 'Video Hosting App',
        link: `${GITHUB}/Artus`,
      },
      {
        name: 'Chess.com API App',
        link: `${GITHUB}/Castle-v2`,
      },
    ],
  },
  {
    start: '2018-08-05',
    end: '2022-08-05',
    cert: 'B.S in Comp Sci',
    school: 'CSU Fullerton',
    projects: [
      {
        name: '2D Platformer',
        link: 'https://github.com/ecorona9/Midnight-Metal-Madness---Unity',
      },
      {
        name: 'Endless Runner',
        link: `${GITHUB}/Geo-Run`,
      },
      {
        name: '2.5D Platformer',
        link: `${GITHUB}/Project-S`,
      },
    ],
  },
]

export type CardData = {
  header?: {
    title: string
    subtitle: string
    dateRange: string
  }
  content?:
    | {
        type: 'cover'
        title: string
      }
    | {
        type: 'text'
        items: string[]
      }
    | {
        type: 'link'
        items: {
          name: string
          link: string
        }[]
      }
}

export const CARDS: CardData[] = [
  {
    content: {
      type: 'cover',
      title: 'Full Stack\nDeveloper',
    },
  },
  ...EXPERIENCE.map<CardData>((e) => ({
    header: {
      title: e.title,
      subtitle: e.company,
      dateRange: formatDateRange(e.start, e.end),
    },
    content: {
      type: 'text',
      items: e.stack,
    },
  })),
  ...EDUCATION.map<CardData>((e) => ({
    header: {
      title: e.cert,
      subtitle: e.school,
      dateRange: formatDateRange(e.start, e.end),
    },
    content: {
      type: 'link',
      items: e.projects,
    },
  })),
]
