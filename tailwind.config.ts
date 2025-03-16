import type {Config} from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        'guildhall': ["var(--font-guildhall)"],
        'fira-sans': ["var(--font-fira-sans)"],
        'jost': ["var(--font-jost)"],
      },
    },
  }
}

export default config