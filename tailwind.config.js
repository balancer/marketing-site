module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: [
        'Inter-Variable',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Helvetica',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"'
      ],
      display: [
        'Tiempos Headline Medium',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Helvetica',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"'
      ]
    },
    boxShadow: {
      sm: '0 2px 4px 0 rgba(0,0,0,0.05)',
      DEFAULT: '0 2px 4px 0 rgba(0,0,0,0.03), 0 10px 20px 0 rgba(0,0,0,0.02)',
      lg: '0 2px 4px 0 rgba(0,0,0,0.03), 0 10px 40px 0 rgba(0,0,0,0.05)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      none: 'none'
    },
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.100', 'currentColor')
    }),
    extend: {
      colors: {
        gray: {
          50: '#F8FAFC',
          100: '#EAF0F6',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A'
        },
        blue: {
          50: '#3232ff',
          100: '#2828ff',
          200: '#1e1eff',
          300: '#1414ff',
          400: '#0a0aff',
          500: '#0000ff',
          600: '#0000f5',
          700: '#0000eb',
          800: '#0000e1',
          900: '#0000d7'
        },
        pink: {
          50: '#ff32ff',
          100: '#ff28ff',
          200: '#ff1eff',
          300: '#ff14ff',
          400: '#ff0aff',
          500: '#ff00ff',
          600: '#f500f5',
          700: '#eb00eb',
          800: '#e100e1',
          900: '#d700d7'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
