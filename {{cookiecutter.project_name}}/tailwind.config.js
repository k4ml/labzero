module.exports = {
  purge: {
    content: [
      './src/{{cookiecutter.project_name}}/templates/**/*.html',
      './src/{{cookiecutter.project_name}}/fe/**/*.js',
      './src/{{cookiecutter.project_name}}/fe/**/*.vue',
    ],
    layers: ["base", "utilities"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    themeVariants: ['dark'],
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      none: 'none',
      'primary': '0 4px 6px -1px rgba(30, 85, 160, 0.2)',
    },
    extend: {
      colors: {
        'cool-gray': {
          '50': '#EDF2F8',
          '100': '#D7DFE7',
          '300': '#8895A1',
          '500': '#5A6775',
          '700': '#38434E',
          '900': '#1A1F25',
        },
        'primary': {
          '50': '#EBFCFF',
          '100': '#C5F6FA',
          '300': '#01b9db',
          '500': '#008CCC',
          '700': '#0B507B',
          '900': '#162950',
        },
      }
    },
  },
  variants: {
    backgroundColor: [
      'hover',
      'focus',
      'active',
      'disabled',
      'odd',
      'dark',
      'dark:hover',
      'dark:focus',
      'dark:active',
      'dark:odd',
      'group-hover',
      'group-focus',
    ],
    display: ['responsive', 'dark'],
    textColor: [
      'focus',
      'hover',
      'active',
      'disabled',
      'dark',
      'dark:focus-within',
      'dark:hover',
      'dark:active',
      'group-hover',
      'group-focus',
    ],
    placeholderColor: ['focus', 'dark', 'dark:focus'],
    borderColor: ['focus', 'hover', 'dark', 'group-hover', 'group-focus', 'dark:focus', 'dark:hover', 'disabled',],
    divideColor: ['dark'],
    boxShadow: ['focus', 'dark:focus', 'hover', 'dark:hover', 'group-hover', 'group-focus', 'disabled',],
    cursor: ['hover', 'dark:hover', 'group-hover', 'disabled',],
    ringColor: ['hover', 'active', 'focus'],
  },
  plugins: [
    require('tailwindcss-multi-theme'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-tables')(),
    require("windstrap")
  ],
}
