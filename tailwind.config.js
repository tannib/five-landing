/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const { colors, opacity, fontSize, minHeight, minWidth, corePlugins } = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    minHeight: {
      ...minHeight,
      75: '75vh',
      80: '80vh',
      90: '90vh'
    },
    minWidth: {
      ...minWidth,
      25: '25%'
    },
    opacity: {
      ...opacity,
      0: '0',
      95: '0.95',
      100: '1'
    },
    fontFamily: {
      sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif']
    },
    fontSize: {
      ...fontSize,
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      base: '1.3125rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    colors: {
      ...colors,
      green: '#3aeaaa',
      'green-light': '#7ed56f',
      'green-600': '#34D699',
      'yellow-600': '#dcc515',
      'dark-blue': '#242840',
      blue: '#021b79',
      facebook: '#4267B2'
    }
  },
  corePlugins: {
    ...corePlugins,
    outline: false
  }
}
