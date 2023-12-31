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
      maxWidth: {
        40: '40px',
        54: '54px',
        92: '92px',
        110: '110px',
        130: '130px',
        147: '147px',
        152: '152px',
        200: '200px',
        211: '211.5px',
        240: '240px',
        332: '332px',
        352: '352px',
        439: '439px',
        500: '500px',
        535: '535px',
        957: '957px',
        1119: '1119.8px',
      },
      minWidth: {
        100: '100px',
        200: '200px',
        280: '280px',
      },
      height: {
        38: '38px',
        49: '49px',
        50: '50px',
        54: '54px',
        58: '58px',
        66: '66px',
        137: '137px',
        140: '140px',
        150: '150px',
        186: '186px',
        194: '194px',
        200: '200px',
        212: '212px',
        478: '478px',
        528: '528px',
      },
      borderRadius: {
        def: '6px',
        20: '20px',
      },
      fontSize: {
        32: '32px',
      },
      boxShadow: {
        default: '0 4px 32px 0 #00000080',
      },
      keyframes: {
        form: {
          from: { opacity: '0', transform: 'translatey(-50px)' },
          to: { opacity: '1', transform: 'translateX(0px)' },
        },
        formMobile: {
          from: { opacity: '0', transform: 'translateY(25px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        form: 'form 1s',
        formMobile: 'formMobile 1s',
      },
    },
  },
  plugins: [],
}
export default config
