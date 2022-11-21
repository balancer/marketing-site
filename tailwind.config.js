module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      body: [
        'Inter var',
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
        'Times New Roman',
        'serif',
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
        accent: '#0000ff',
        greyDark: '#607985',
        defaultRed: '#F12954',
        defaultBlue: '#0055FF',
        defaultPurple: '#8000FF',
        defaultPink: '#FF00FF',


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
        purple: {
          50: '#faf5ff',
          100: '#faf5ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        yellow: {
          50: '#FFFBEA',
          100: '#FFF6D5',
          200: '#FFEEAD',
          300: '#FEE684',
          400: '#FEDD5C',
          500: '#FED533',
          600: '#F8C601',
          700: '#C09901',
          800: '#886D01',
          900: '#504000',
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
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }], // 12 / 16px
        sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14 / 20px
        base: ['0.9375rem', { lineHeight: '1.3125rem' }], // 15 / 21px
        lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18 / 28px
        xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20 / 28px
        '2xl': ['1.5rem', { lineHeight: '1.75rem' }], // 24 / 28px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30 / 36px        
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36 / 40px      
        '5xl': ['3rem', { lineHeight: '1' }], // 48 / 40px
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },      
    },
  },
  plugins: [],
}
