/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const colors = {
  primary: '#FF6600',
  secondary: 9
}

module.exports = {
  theme: {
    minWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%'
    },
    borderColor: {
      primary: '#FF6600',
      secondary: '#FFB764',
      greywhite: '#BDBDBDBD'
    },
    colors: {
      primary: '#204566',
      secondary: '#FFB764',
      secondaryLight: 'rgba(255, 183, 100, 0.5)',
      white: '#FFFFFF',
      lightwhite: '#F3F3F3',
      xblack: 'rgba(0, 0, 0, 0.1)'
    }
  },
  variants: {}
}
