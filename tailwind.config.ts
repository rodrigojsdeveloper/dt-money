import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
      colors: {
        colorPrimary: {
          1: '#00875F',
          2: '#015F43',
          3: 'rgb(0, 135, 95, 0.06)',
          4: 'rgb(0, 135, 95, 0.16)',
        },
        grey: {
          1: '#121214',
          2: '#202024',
          3: '#29292E',
          4: '#323238',
          5: '#7C7C8A',
          6: '#8D8D99',
          7: '#C4C4CC',
          8: '#E1E1E6',
        },
        white: '#FFFFFF',
        red: {
          1: '#F75A68',
          2: 'rgb(247, 90, 104, 0.16)',
        },
        shadow: '#00000064',
      },
      borderRadius: {
        def: '0.375rem',
      },
      fontSize: {
        32: '2rem',
      },
      boxShadow: {
        default: '0 0.25rem 2rem 0 #00000080',
      },
      keyframes: {
        form: {
          from: { opacity: '0', transform: 'translatey(-3.125rem)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        form: 'form 1s',
      },
    },
  },
  plugins: [],
}

export default config
